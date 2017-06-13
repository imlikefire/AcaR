package com.acar.modules.orar.controllers;

import com.acar.modules.orar.DTOs.OrarDTO;
import com.acar.modules.orar.models.Discipline;
import com.acar.modules.orar.models.Profesori;
import com.acar.modules.orar.models.Schedule;
import com.acar.modules.orar.repositories.DisciplineRepository;
import com.acar.modules.orar.repositories.OrarRepository;
import com.acar.modules.orar.repositories.ProfesoriRepository;
import com.acar.modules.orar.services.*;
import com.acar.transformers.Transformer;
import com.acar.transformers.OrarTransformer;
import com.acar.modules.orar.models.Orar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.UniqueConstraint;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;


@RestController
@RequestMapping("/v1/orar")
public class ScheduleController {

    @Autowired
    private OrarServiceImpl service;
    @Autowired
    private ProfesoriServiceImpl profService;
    @Autowired
    private DisciplineServiceImpl disciplineService;
    @Autowired
    private Transformer<Orar, OrarDTO> transformer = new OrarTransformer();

    public Schedule getDisplaySchedule(Orar ora)
    {
        StringBuilder str=new StringBuilder();
        str.append(this.profService.getById(ora.getIdProf()).getGrad_didactic());
        str.append(' ');
        str.append(this.profService.getById(ora.getIdProf()).getNume());
        return new Schedule(ora.getZi(),ora.getOraInceput(),ora.getOraSfarsit(),
                                this.disciplineService.getById(ora.getIdDisciplina()).getTitlu_disciplina(),
                                str.toString(),ora.getSala(),ora.getTip(),ora.getGrupa());
    }

    @RequestMapping(value="/getAll",method = RequestMethod.GET)
    public ResponseEntity<List<Schedule>> get() {
        List<Orar> orar = this.service.getAll();
        if (orar.isEmpty()) {
            return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);
        }
        List<Schedule> schedules=new ArrayList<>();
        for(Orar ora:orar)
        {
            schedules.add(getDisplaySchedule(ora));
        }
        return new ResponseEntity<List<Schedule>>(schedules, HttpStatus.OK);
    }


    @RequestMapping(value="/createEntry",method = RequestMethod.POST)
    public ResponseEntity<Orar> addEntry(@RequestBody OrarDTO orar) {

        Orar savedOrar = this.service.save(transformer.toModel(orar));
        return new ResponseEntity<Orar>(savedOrar, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/deleteById/{deleteId}",method = RequestMethod.DELETE)
    public ResponseEntity<List<Orar>> deleteById(@PathVariable("deleteId") Long deleteId){

        Orar orar = this.service.getById(deleteId);
        if (orar == null) {
            return new ResponseEntity<List<Orar>>(HttpStatus.NO_CONTENT);
        }

        this.service.delete(deleteId);
        List<Orar> del = this.service.getAll();
        return new ResponseEntity<List<Orar>>(del, HttpStatus.OK);
    }


    @RequestMapping(value="/updateById/{updateId}", method=RequestMethod.PUT)
    public ResponseEntity<Orar> updateById(@PathVariable("updateId") Long updateId, @RequestBody OrarDTO update) {
        Orar orar = this.service.getById(updateId);
        Orar orarUntouched=orar;
        if (orar == null) {
            return new ResponseEntity<Orar>(HttpStatus.NO_CONTENT);
        }
        Orar orarUpdate=transformer.toModel(update);

        orar.setZi(orarUpdate.getZi());
        orar.setOraInceput(orarUpdate.getOraInceput());
        orar.setOraSfarsit(orarUpdate.getOraSfarsit());
        orar.setIdDisciplina((int) orarUpdate.getIdDisciplina());
        orar.setIdProf((int) orarUpdate.getIdProf());
        orar.setSala(orarUpdate.getSala());
        orar.setTip(orarUpdate.getTip());
        orar.setGrupa(orarUpdate.getGrupa());
        Orar orarSaved=this.service.save(orar);
        return new ResponseEntity<Orar>(orarSaved, HttpStatus.OK);
    }


    @RequestMapping(value="/getByProfName/{profName}",method = RequestMethod.GET)
    public ResponseEntity<List<Schedule>> getByProfName(@PathVariable("profName")  String profName) {
        List<Orar> orar = this.service.getAll();
        List<Schedule> schedule = new ArrayList<>();
        long id=this.profService.getIdByName(profName);
        if(id==0)
            return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);
        else {
            for (Orar ora : orar)
                if (ora.getIdProf() == id)
                    schedule.add(getDisplaySchedule(ora));
            return new ResponseEntity<List<Schedule>>(schedule, HttpStatus.OK);
            }
    }


    @RequestMapping(value="/getByDisciplinaName/{disciplinaName}",method = RequestMethod.GET)
    public ResponseEntity<List<Schedule>> getByDisciplinaName(@PathVariable("disciplinaName")  String disciplinaName) {
        List<Orar> orar = this.service.getAll();
        List<Schedule> schedule = new ArrayList<>();
        long id=this.disciplineService.getIdByName(disciplinaName);
        if (id==0)
            return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);
        else {
            for (Orar ora : orar)
                if (ora.getIdDisciplina() == id)
                    schedule.add(getDisplaySchedule(ora));
            return new ResponseEntity<List<Schedule>>(schedule, HttpStatus.OK);
            }
    }


    @RequestMapping(value="/getByGrupa/{grupa}",method = RequestMethod.GET)
    public ResponseEntity<List<Schedule>> getByGrupa(@PathVariable("grupa") String grupa) {
        List<Orar> orar = this.service.getAll();
        List<Schedule> schedule = new ArrayList<>();
        for(Orar ora : orar)
            if(ora.getGrupa().toLowerCase().equals(grupa.toLowerCase()))
                schedule.add(getDisplaySchedule(ora));
        if (schedule.isEmpty()) {
            return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Schedule>>(schedule, HttpStatus.OK);
    }

    @RequestMapping(value="/getByProfAndDisciplina/{prof}/{disciplina}",method = RequestMethod.GET)
    public ResponseEntity<List<Schedule>> getByProfAndDisciplina(@PathVariable("prof") String prof,@PathVariable("disciplina") String disciplina ) {
        List<Orar> orar = this.service.getAll();
        List<Schedule> schedule = new ArrayList<>();
        long idDisciplina = this.disciplineService.getIdByName(disciplina);
        long idProf = this.profService.getIdByName(prof);
        if (idDisciplina == 0 || idProf == 0)
            return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);
        else {
            for (Orar ora : orar)
                if (ora.getIdProf() == idProf && ora.getIdDisciplina() == idDisciplina)
                    schedule.add(getDisplaySchedule(ora));
            if (schedule.isEmpty())
                return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);
            else
                return new ResponseEntity<List<Schedule>>(schedule, HttpStatus.OK);

        }
    }

    @RequestMapping(value="/recommend/{disciplina}",method = RequestMethod.GET)
    public ResponseEntity<List<Schedule>> recommend (@PathVariable("disciplina") String disciplina){
        List<Orar> orar=this.service.getAll();
        List<Schedule> schedule=new ArrayList<>();
        long idDisciplina=this.disciplineService.getIdByName(disciplina);
        List<Profesori> profs=new ArrayList<>();
        List<Profesori> goodProfs=new ArrayList<>();
        for(Orar ora:orar)
            if(ora.getIdDisciplina()==idDisciplina)
            {
                Profesori prof = profService.getById(ora.getIdProf());
                if(!profs.contains(prof))
                    profs.add(prof);
            }
        if(profs.isEmpty())
            return new ResponseEntity<List<Schedule>>(HttpStatus.NO_CONTENT);

        long notaMaxima=0;
        for(Profesori prof:profs)
            if(prof.getNota()>notaMaxima)
                notaMaxima=prof.getNota();

        for(Profesori prof:profs)
            if(prof.getNota()==notaMaxima)
                for(Orar ora :this.service.getByProfId(prof.getId_prof()))
                    schedule.add(getDisplaySchedule(ora));

        return new ResponseEntity<List<Schedule>>(schedule, HttpStatus.OK);

    }

}
