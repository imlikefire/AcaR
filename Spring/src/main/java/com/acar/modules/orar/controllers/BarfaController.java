package com.acar.modules.orar.controllers;

import com.acar.modules.orar.DTOs.BarfaDTO;
import com.acar.modules.orar.models.Barfa;
import com.acar.modules.orar.services.BarfaService;
import com.acar.modules.orar.services.ProfesoriServiceImpl;
import com.acar.transformers.Transformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by eduar on 6/20/2017.
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/v1/orar/barfe")
public class BarfaController {

    @Autowired
    private BarfaService service;
    @Autowired
    private ProfesoriServiceImpl profesoriService;

    @RequestMapping(value="/getAll",method = RequestMethod.GET)
    public ResponseEntity<List<Barfa>> get() {
        List<Barfa> barfe = this.service.getAll();
        if (barfe.isEmpty()) {
            return new ResponseEntity<List<Barfa>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Barfa>>(barfe, HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3100")
    @RequestMapping(value="/createEntry",method = RequestMethod.POST)
    public ResponseEntity<Barfa> addEntry(@RequestBody BarfaDTO object) {

        Barfa barfa=new Barfa();
        barfa.setBarfa(object.getBarfa());
        barfa.setIdProf(profesoriService.getIdByName(object.getNumeProf()));
        Barfa savedBarfa = this.service.save(barfa);
        return new ResponseEntity<Barfa>(savedBarfa, HttpStatus.CREATED);
    }

    @RequestMapping(value="/getAllByProfesor/{numeProf}",method = RequestMethod.GET)
    public ResponseEntity<List<Barfa>> getAllByProfesor(@PathVariable("numeProf") String numeProf){
        List<Barfa> barfe=this.service.getAll();
        List<Barfa> goodBarfa= new ArrayList<>();
        long profId=profesoriService.getIdByName(numeProf);
        for(Barfa barfa:barfe)
            if(barfa.getIdProf()==profId)
                goodBarfa.add(barfa);
        if(goodBarfa.isEmpty())
            return new ResponseEntity<List<Barfa>>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<Barfa>>(goodBarfa,HttpStatus.OK);

    }
}
