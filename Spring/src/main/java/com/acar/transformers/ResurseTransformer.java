package com.acar.transformers;

import com.acar.modules.orar.DTOs.ResurseDTO;
import com.acar.modules.orar.models.Resurse;
import org.springframework.stereotype.Component;

/**
 * Created by eduar on 6/17/2017.
 */
@Component
public class ResurseTransformer implements Transformer<Resurse, ResurseDTO>{

    @Override
    public Resurse toModel(ResurseDTO object) {
        Resurse resursa=new Resurse();
        resursa.setNume(object.getNume());
        resursa.setTip(object.getTip());
        resursa.setLink(object.getLink());
        resursa.setDificultate(object.getDificultate());
        return resursa;
    }

    @Override
    public ResurseDTO toDTO(Resurse object){
        return new ResurseDTO(object.getNume(),object.getTip(),object.getLink(),object.getDificultate());
    }
}
