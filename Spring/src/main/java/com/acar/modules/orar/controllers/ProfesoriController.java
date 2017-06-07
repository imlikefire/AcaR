package com.acar.modules.orar.controllers;


import com.acar.modules.orar.DTOs.ProfesoriDTO;
import com.acar.modules.orar.models.Profesori;
import com.acar.modules.orar.services.ProfesoriService;
import com.acar.transformers.ProfesoriTransformer;
import com.acar.transformers.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/orar/profesori")
public class ProfesoriController {

    @Autowired
    private ProfesoriService service;
    private Transformer<Profesori, ProfesoriDTO> transformer = new ProfesoriTransformer();

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

        Profesori savedProf = this.service.save(transformer.toModel(prof));
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
        Profesori orarUntouched=prof;
        if (prof == null) {
            return new ResponseEntity<Profesori>(HttpStatus.NO_CONTENT);
        }
        Profesori profUpdate=transformer.toModel(update);

        prof.setNume(profUpdate.getNume());
        prof.setPrenume(profUpdate.getPrenume());
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
}
