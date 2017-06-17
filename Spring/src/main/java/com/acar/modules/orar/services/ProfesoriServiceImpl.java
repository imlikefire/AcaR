package com.acar.modules.orar.services;


import com.acar.modules.orar.models.Profesori;
import com.acar.modules.orar.repositories.ProfesoriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesoriServiceImpl implements ProfesoriService {

    @Autowired
    private ProfesoriRepository repository;

    @Override
    public Profesori save(Profesori entity) {
        return this.repository.save(entity);
    }

    @Override
    public List<Profesori> getAll() {return this.repository.findAll();}

    @Override
    public Profesori getById(Long id) {
        return this.repository.findOne(id);
    }

    @Override
    public void delete(Long id) {
        this.repository.delete(id);
    }


    public long getIdByName(String nume){
        List<Profesori> profs=this.repository.findAll();
        for(Profesori prof : profs)
            if(prof.getNume().toLowerCase().equals(nume.toLowerCase()))
                return prof.getId_prof();
        return 0;
    }

}

