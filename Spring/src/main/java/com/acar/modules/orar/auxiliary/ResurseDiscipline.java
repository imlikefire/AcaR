package com.acar.modules.orar.auxiliary;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * Created by eduar on 6/17/2017.
 */
@Entity
@Table(name="resurse_discipline")
public class ResurseDiscipline implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "id_resursa")
    @NotNull
    private long idResursa;

    @NotNull
    @Column(name = "id_disciplina")
    private long idDisciplina;

    public ResurseDiscipline() {
    }

    public long getId() {
        return id;
    }

    public long getIdResursa() {
        return idResursa;
    }

    public void setIdResursa(long idResursa) {
        this.idResursa = idResursa;
    }

    public long getIdDisciplina() {
        return idDisciplina;
    }

    public void setIdDisciplina(long idDisciplina) {
        this.idDisciplina = idDisciplina;
    }
}
