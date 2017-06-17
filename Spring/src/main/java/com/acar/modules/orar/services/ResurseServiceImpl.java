package com.acar.modules.orar.services;

import com.acar.modules.orar.models.Resurse;
import com.acar.modules.orar.repositories.ResurseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by eduar on 6/17/2017.
 */
@Service
public class ResurseServiceImpl implements ResurseService{

    @Autowired
    private ResurseRepository repository;

    @Override
    public Resurse save(Resurse entity) {
        return this.repository.save(entity);
    }


    @Override
    public List<Resurse> getAll() {
        return this.repository.findAll();
    }

    @Override
    public Resurse getById(Long id) {
        return this.repository.findOne(id);
    }

    @Override
    public void delete(Long id) {
        this.repository.delete(id);
    }
}
