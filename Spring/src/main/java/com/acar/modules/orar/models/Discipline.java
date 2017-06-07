package com.acar.modules.orar.models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name="discipline")
public class Discipline implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_disciplina;

    @NotNull
    @Column(name = "titlu_disciplina")
    private String titlu_disciplina;

    @NotNull
    @Column(name = "an")
    private int an;

    @NotNull
    @Column(name = "semestru")
    private int semestru;

    @NotNull
    @Column(name = "optional")
    private int optional;

    public long getId_disciplina() {
        return id_disciplina;
    }

    public void setId_disciplina(long id_disciplina) {
        this.id_disciplina = id_disciplina;
    }

    public String getTitlu_disciplina() {
        return titlu_disciplina;
    }

    public void setTitlu_disciplina(String titlu_disciplina) {
        this.titlu_disciplina = titlu_disciplina;
    }

    public int getAn() {
        return an;
    }

    public void setAn(int an) {
        this.an = an;
    }

    public int getSemestru() {
        return semestru;
    }

    public void setSemestru(int semestru) {
        this.semestru = semestru;
    }

    public int getOptional() {
        return optional;
    }

    public void setOptional(int optional) {
        this.optional = optional;
    }
}