package com.acar.transformers;

import com.acar.modules.orar.DTOs.DisciplineDTO;
import com.acar.modules.orar.models.Discipline;
import org.springframework.stereotype.Component;

@Component
public class DisciplineTransformer implements Transformer<Discipline, DisciplineDTO> {
    @Override
    public Discipline toModel(DisciplineDTO object) {
        Discipline disciplina=new Discipline();
        disciplina.setTitlu_disciplina(object.getTitlu_disciplina());
        disciplina.setAn(object.getAn());
        disciplina.setSemestru(object.getSemestru());
        disciplina.setOptional(object.getOptional());
        return disciplina;
    }

    @Override
    public DisciplineDTO toDTO(Discipline object) {
        return new DisciplineDTO(object.getTitlu_disciplina(),object.getAn(),object.getSemestru(),object.getOptional());
    }
}
