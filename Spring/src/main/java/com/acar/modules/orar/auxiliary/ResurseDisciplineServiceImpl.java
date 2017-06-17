package com.acar.modules.orar.auxiliary;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by eduar on 6/17/2017.
 */
@Service
public class ResurseDisciplineServiceImpl implements ResurseDisciplineService {

    @Autowired
    private ResurseDisciplineRepository repository;

    @Override
    public ResurseDiscipline save(ResurseDiscipline entity) {
        return this.repository.save(entity);
    }


    @Override
    public List<ResurseDiscipline> getAll() {
        return this.repository.findAll();
    }

    @Override
    public ResurseDiscipline getById(Long id) {
        return this.repository.findOne(id);
    }

    @Override
    public void delete(Long id) {
        this.repository.delete(id);
    }
}
