package com.acar.modules.orar.controllers;

import com.acar.modules.orar.DTOs.ResurseDTO;
import com.acar.modules.orar.auxiliary.ResurseDiscipline;
import com.acar.modules.orar.auxiliary.ResurseDisciplineServiceImpl;
import com.acar.modules.orar.models.Resurse;
import com.acar.modules.orar.services.DisciplineServiceImpl;
import com.acar.modules.orar.services.ResurseService;
import com.acar.transformers.ResurseTransformer;
import com.acar.transformers.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by eduar on 6/17/2017.
 */
@CrossOrigin
@RestController
@RequestMapping("/resurse")
public class ResurseController {


    @Autowired
    private ResurseService service;
    @Autowired
    private DisciplineServiceImpl disciplineService;
    @Autowired
    private ResurseDisciplineServiceImpl resurseDisciplineService;
    private Transformer<Resurse, ResurseDTO> transformer = new ResurseTransformer();


    @RequestMapping(value="/getAll",method = RequestMethod.GET)
    public ResponseEntity<List<Resurse>> get() {
        List<Resurse> resurse = this.service.getAll();
        if (resurse.isEmpty()) {
            return new ResponseEntity<List<Resurse>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Resurse>>(resurse, HttpStatus.OK);
    }

    @RequestMapping(value="/getGeneralResources/",method = RequestMethod.GET)
    public ResponseEntity<List<Resurse>> getCommonResources(){
        List<Resurse> resurse=new ArrayList<>();
        List<ResurseDiscipline> resurseDiscipline = this.resurseDisciplineService.getAll();
                for(ResurseDiscipline rd:resurseDiscipline)
                    if (rd.getIdDisciplina()==0)
                        resurse.add(this.service.getById(rd.getIdResursa()));
        if(resurse.isEmpty())
            return new ResponseEntity<List<Resurse>>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<List<Resurse>>(resurse,HttpStatus.OK);

    }

    @RequestMapping(value="/createEntry/{disciplina}",method = RequestMethod.POST)
    public ResponseEntity<Resurse> addEntry(@PathVariable("disciplina") String disciplina,@RequestBody ResurseDTO resursa) {
        Resurse savedResursa = this.service.save(transformer.toModel(resursa));
        ResurseDiscipline resurseDiscipline=new ResurseDiscipline();

        if(disciplina.toLowerCase().equals("general"))
            resurseDiscipline.setIdDisciplina(0);
        else
            resurseDiscipline.setIdDisciplina(this.disciplineService.getIdByName(disciplina));

        resurseDiscipline.setIdResursa(savedResursa.getId());
        resurseDiscipline=this.resurseDisciplineService.save(resurseDiscipline);
        return new ResponseEntity<Resurse>(savedResursa, HttpStatus.CREATED);
    }


    @RequestMapping(value = "/deleteById/{deleteId}",method = RequestMethod.DELETE)
    public ResponseEntity<List<Resurse>> deleteById(@PathVariable("deleteId") Long deleteId){

        Resurse resursa = this.service.getById(deleteId);
        if (resursa == null) {
            return new ResponseEntity<List<Resurse>>(HttpStatus.NO_CONTENT);
        }

        this.service.delete(deleteId);
        List<ResurseDiscipline> resurseDiscipline= this.resurseDisciplineService.getAll();
        for(ResurseDiscipline rd: resurseDiscipline)
            if(rd.getIdResursa()==deleteId)
                this.resurseDisciplineService.delete(rd.getId());
        List<Resurse> delResursa = this.service.getAll();
        return new ResponseEntity<List<Resurse>>(delResursa, HttpStatus.OK);
    }

    @RequestMapping(value="/updateById/{updateId}", method=RequestMethod.PUT)
    public ResponseEntity<Resurse> updateById(@PathVariable("updateId") Long updateId, @RequestBody ResurseDTO update) {
        Resurse resursa = this.service.getById(updateId);
        if (resursa == null) {
            return new ResponseEntity<Resurse>(HttpStatus.NO_CONTENT);
        }
        Resurse resursaUpdate=transformer.toModel(update);

        resursa.setNume(resursaUpdate.getNume());
        resursa.setDificultate(resursaUpdate.getDificultate());
        resursa.setLink(resursaUpdate.getLink());
        resursa.setTip(resursaUpdate.getLink());

        Resurse resursaSaved=this.service.save(resursa);
        return new ResponseEntity<Resurse>(resursaSaved, HttpStatus.OK);
    }

    @RequestMapping(value="/getByDisciplina/{disciplina}",method=RequestMethod.GET)
    public ResponseEntity<List<Resurse>> getByDisciplina(@PathVariable("disciplina") String disciplina){
        long disciplinaId=disciplineService.getIdByName(disciplina);
        List<ResurseDiscipline> resurseDiscipline=this.resurseDisciplineService.getAll();
        List<Resurse> resurse=new ArrayList<>();
        for(ResurseDiscipline rd : resurseDiscipline)
            if(rd.getIdDisciplina()==disciplinaId)
                resurse.add(this.service.getById(rd.getIdResursa()));
        if (resurse == null)
            return new ResponseEntity<List<Resurse>>(HttpStatus.NO_CONTENT);
        else
            return new ResponseEntity<List<Resurse>>(resurse, HttpStatus.OK);

    }

}
