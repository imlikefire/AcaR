package com.acar.modules.orar.controllers;


import com.acar.modules.orar.DTOs.ProfesoriDTO;
import com.acar.modules.orar.models.Orar;
import com.acar.modules.orar.models.Profesori;
import com.acar.modules.orar.services.*;
import com.acar.transformers.ProfesoriTransformer;
import com.acar.transformers.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/v1/orar/profesori")
public class ProfesoriController {

    @Autowired
    private ProfesoriServiceImpl service;
    @Autowired
    private OrarServiceImpl orarService;
    @Autowired
    private DisciplineServiceImpl disciplineService;
    private Transformer<Profesori, ProfesoriDTO> transformer = new ProfesoriTransformer();
    private int count=1;

    @RequestMapping(value="/getAll",method = RequestMethod.GET)
    public ResponseEntity<List<Profesori>> get() {
        List<Profesori> profesori = this.service.getAll();
        if (profesori.isEmpty()) {
            return new ResponseEntity<List<Profesori>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Profesori>>(profesori, HttpStatus.OK);
    }


    @RequestMapping(value="/createEntry",method = RequestMethod.POST)
    public ResponseEntity<Profesori> addEntry(@RequestBody ProfesoriDTO prof) {

        Profesori savedProf = transformer.toModel(prof);
        savedProf.setCount(1);
        savedProf=this.service.save(savedProf);

        return new ResponseEntity<Profesori>(savedProf, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/deleteById/{deleteId}",method = RequestMethod.DELETE)
    public ResponseEntity<List<Profesori>> deleteById(@PathVariable("deleteId") Long deleteId){

        Profesori prof = this.service.getById(deleteId);
        if (prof == null) {
            return new ResponseEntity<List<Profesori>>(HttpStatus.NO_CONTENT);
        }

        this.service.delete(deleteId);
        List<Profesori> delProf = this.service.getAll();
        return new ResponseEntity<List<Profesori>>(delProf, HttpStatus.OK);
    }


    @RequestMapping(value="/updateById/{updateId}", method=RequestMethod.PUT)
    public ResponseEntity<Profesori> updateById(@PathVariable("updateId") Long updateId, @RequestBody ProfesoriDTO update) {
        Profesori prof = this.service.getById(updateId);
        if (prof == null) {
            return new ResponseEntity<Profesori>(HttpStatus.NO_CONTENT);
        }
        Profesori profUpdate=transformer.toModel(update);

        prof.setNume(profUpdate.getNume());
        prof.setGrad_didactic(profUpdate.getGrad_didactic());
        Profesori profSaved=this.service.save(prof);
        return new ResponseEntity<Profesori>(profSaved, HttpStatus.OK);
    }

    @RequestMapping(value="/getById/{id}",method = RequestMethod.GET)
    public ResponseEntity<List<Profesori>> getById(@PathVariable("id")  Long id) {
        List<Profesori> profs = this.service.getAll();
        List<Profesori> bun = new ArrayList<>();
        for(Profesori prof : profs)
            if(prof.getId_prof()==id)
                bun.add(prof);
        if (bun.isEmpty()) {
            return new ResponseEntity<List<Profesori>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Profesori>>(bun, HttpStatus.OK);
    }

    @RequestMapping(value="/addNota/{nume}/{nota}",method = RequestMethod.PUT)
    public ResponseEntity<Profesori> addEntry(@PathVariable("nume") String nume, @PathVariable("nota") int nota) {

        Profesori savedProf=this.service.getById(this.service.getIdByName(nume));
        if (savedProf == null) {
            return new ResponseEntity<Profesori>(HttpStatus.NO_CONTENT);
        }
        if(nota<1||nota>10)
            return new ResponseEntity<Profesori>(HttpStatus.BAD_REQUEST);
        else {
            savedProf.setNota(BigDecimal.valueOf(((savedProf.getNota() * savedProf.getCount()) + nota) / (savedProf.getCount() + 1))
                    .setScale(2, RoundingMode.HALF_UP).doubleValue());
            savedProf.setCount(savedProf.getCount()+1);
            savedProf=this.service.save(savedProf);
            return new ResponseEntity<Profesori>(savedProf,HttpStatus.OK);
            }

    }

    @RequestMapping(value="/getBestByNota/{disciplina}",method = RequestMethod.GET)
    public ResponseEntity<List<Profesori>> getBestByNota(@PathVariable("disciplina")  String disciplina) {
        long idDisciplina=this.disciplineService.getIdByName(disciplina);
        List<Orar> orar=this.orarService.getAll();
        List<Profesori> profs=new ArrayList<>();
        List<Profesori> bestProfs=new ArrayList<>();
        for(Orar ora:orar)
            if(ora.getIdDisciplina()==idDisciplina)
            {
                Profesori prof = this.service.getById(ora.getIdProf());
                if(!profs.contains(prof))
                    profs.add(prof);
            }
        if(profs.isEmpty())
            return new ResponseEntity<List<Profesori>>(HttpStatus.NO_CONTENT);

        double notaMaxima=0;
        for(Profesori prof:profs)
            if(prof.getNota()>notaMaxima)
                notaMaxima=prof.getNota();

        for(Profesori prof:profs)
            if(prof.getNota()==notaMaxima)
                bestProfs.add(prof);

        return new ResponseEntity<List<Profesori>>(bestProfs, HttpStatus.OK);
    }

    @RequestMapping(value="/getBestByProcentaj/{disciplina}",method = RequestMethod.GET)
    public ResponseEntity<List<Profesori>> getBestByProcentaj(@PathVariable("disciplina")  String disciplina) {
        long idDisciplina=this.disciplineService.getIdByName(disciplina);
        List<Orar> orar=this.orarService.getAll();
        List<Profesori> profs=new ArrayList<>();
        List<Profesori> bestProfs=new ArrayList<>();
        for(Orar ora:orar)
            if(ora.getIdDisciplina()==idDisciplina)
            {
                Profesori prof = this.service.getById(ora.getIdProf());
                if(!profs.contains(prof))
                    profs.add(prof);
            }
        if(profs.isEmpty())
            return new ResponseEntity<List<Profesori>>(HttpStatus.NO_CONTENT);

        long procentajMaxim=0;
        for(Profesori prof:profs)
            if(prof.getProcentaj()>procentajMaxim)
                procentajMaxim=prof.getProcentaj();

        for(Profesori prof:profs)
            if(prof.getProcentaj()==procentajMaxim)
                bestProfs.add(prof);

        return new ResponseEntity<List<Profesori>>(bestProfs, HttpStatus.OK);
    }
}
