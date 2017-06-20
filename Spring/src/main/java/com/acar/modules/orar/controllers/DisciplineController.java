package com.acar.modules.orar.controllers;


import com.acar.modules.orar.DTOs.DisciplineDTO;
import com.acar.modules.orar.models.Discipline;
import com.acar.modules.orar.services.DisciplineService;
import com.acar.transformers.DisciplineTransformer;
import com.acar.transformers.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/v1/orar/discipline")
public class DisciplineController {

    @Autowired
    private DisciplineService service;
    private Transformer<Discipline, DisciplineDTO> transformer = new DisciplineTransformer();

    @RequestMapping(value="/getAll",method = RequestMethod.GET)
    public ResponseEntity<List<Discipline>> get() {
        List<Discipline> discipline = this.service.getAll();
        if (discipline.isEmpty()) {
            return new ResponseEntity<List<Discipline>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Discipline>>(discipline, HttpStatus.OK);
    }


    @RequestMapping(value="/createEntry",method = RequestMethod.POST)
    public ResponseEntity<Discipline> addEntry(@RequestBody DisciplineDTO disciplina) {

        Discipline savedDisciplina = this.service.save(transformer.toModel(disciplina));
        return new ResponseEntity<Discipline>(savedDisciplina, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/deleteById/{deleteId}",method = RequestMethod.DELETE)
    public ResponseEntity<List<Discipline>> deleteById(@PathVariable("deleteId") Long deleteId){

        Discipline disciplina = this.service.getById(deleteId);
        if (disciplina == null) {
            return new ResponseEntity<List<Discipline>>(HttpStatus.NO_CONTENT);
        }

        this.service.delete(deleteId);
        List<Discipline> delDisciplina = this.service.getAll();
        return new ResponseEntity<List<Discipline>>(delDisciplina, HttpStatus.OK);
    }


    @RequestMapping(value="/updateById/{updateId}", method=RequestMethod.PUT)
    public ResponseEntity<Discipline> updateById(@PathVariable("updateId") Long updateId, @RequestBody DisciplineDTO update) {
        Discipline disciplina = this.service.getById(updateId);
        Discipline disciplinaUntouched=disciplina;
        if (disciplina == null) {
            return new ResponseEntity<Discipline>(HttpStatus.NO_CONTENT);
        }
        Discipline disciplinaUpdate=transformer.toModel(update);

        disciplina.setTitlu_disciplina(disciplinaUpdate.getTitlu_disciplina());
        disciplina.setAn(disciplinaUpdate.getAn());
        disciplina.setSemestru(disciplinaUpdate.getSemestru());
        disciplina.setOptional(disciplinaUpdate.getOptional());

        Discipline disciplineSaved=this.service.save(disciplina);
        return new ResponseEntity<Discipline>(disciplineSaved, HttpStatus.OK);
    }

    @RequestMapping(value="/getById/{id}",method = RequestMethod.GET)
    public ResponseEntity<List<Discipline>> getById(@PathVariable("id")  Long id) {
        List<Discipline> discipline = this.service.getAll();
        List<Discipline> bun = new ArrayList<>();
        for(Discipline disciplina : discipline)
            if(disciplina.getId_disciplina()==id)
                bun.add(disciplina);
        if (bun.isEmpty()) {
            return new ResponseEntity<List<Discipline>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Discipline>>(bun, HttpStatus.OK);
    }

}

