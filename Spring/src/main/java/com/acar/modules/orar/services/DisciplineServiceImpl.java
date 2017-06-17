package com.acar.modules.orar.services;


import com.acar.modules.orar.models.Discipline;
import com.acar.modules.orar.repositories.DisciplineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisciplineServiceImpl implements DisciplineService {

    @Autowired
    private DisciplineRepository repository;

    @Override
    public Discipline save(Discipline entity) {
        return this.repository.save(entity);
    }


    @Override
    public List<Discipline> getAll() {
        return this.repository.findAll();
    }

    @Override
    public Discipline getById(Long id) {
        return this.repository.findOne(id);
    }

    @Override
    public void delete(Long id) {
        this.repository.delete(id);
    }

    public long getIdByName(String nume){
        List<Discipline> discipline=this.repository.findAll();
        for(Discipline disciplina : discipline)
            if(disciplina.getTitlu_disciplina().toLowerCase().equals(nume.toLowerCase()))
                return disciplina.getId_disciplina();
        return 0;
    }

}

