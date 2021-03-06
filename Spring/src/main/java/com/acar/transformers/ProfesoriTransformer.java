package com.acar.transformers;

import com.acar.modules.orar.DTOs.ProfesoriDTO;
import com.acar.modules.orar.models.Profesori;
import org.springframework.stereotype.Component;

    @Component
    public class ProfesoriTransformer implements Transformer<Profesori, ProfesoriDTO> {
        @Override
        public Profesori toModel(ProfesoriDTO object) {
            Profesori prof=new Profesori();
            prof.setNume(object.getNume());
            prof.setGrad_didactic(object.getGrad_didactic());
            prof.setNota(object.getNota());
            prof.setProcentaj(object.getProcentaj());
            return prof;
        }

        @Override
        public ProfesoriDTO toDTO(Profesori object) {
            return new ProfesoriDTO(object.getNume(),object.getGrad_didactic(),object.getNota(),object.getProcentaj());
        }
    }

