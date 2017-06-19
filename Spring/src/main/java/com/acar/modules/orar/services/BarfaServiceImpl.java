package com.acar.modules.orar.services;

import com.acar.modules.orar.models.Barfa;
import com.acar.modules.orar.repositories.BarfaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by eduar on 6/20/2017.
 */
@Service
public class BarfaServiceImpl implements BarfaService{

    @Autowired
    private BarfaRepository repository;

    @Override
    public Barfa save(Barfa entity) {
        return this.repository.save(entity);
    }


    @Override
    public List<Barfa> getAll() {
        return this.repository.findAll();
    }

    @Override
    public Barfa getById(Long id) {return this.repository.findOne(id);}

    @Override
    public void delete(Long id) {
        this.repository.delete(id);
    }
}
