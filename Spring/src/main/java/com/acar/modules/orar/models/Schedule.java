package com.acar.modules.orar.models;

import java.io.Serializable;
import java.sql.Time;

/**
 * Created by eduar on 6/10/2017.
 */
public class Schedule implements Serializable {

    private String zi;
    private Time oraInceput;
    private Time oraSfarsit;
    private String disciplina;
    private String prof;
    private int sala;
    private String tip;
    private String grupa;

    public Schedule(){

    }

    public Schedule(String zi, Time oraInceput, Time oraSfarsit, String disciplina, String prof, int sala, String tip, String grupa) {
        this.zi = zi;
        this.oraInceput = oraInceput;
        this.oraSfarsit = oraSfarsit;
        this.disciplina = disciplina;
        this.prof = prof;
        this.sala = sala;
        this.tip = tip;
        this.grupa = grupa;
    }

    public String getZi() {
        return zi;
    }

    public void setZi(String zi) {
        this.zi = zi;
    }

    public Time getOraInceput() {
        return oraInceput;
    }

    public void setOraInceput(Time oraInceput) {
        this.oraInceput = oraInceput;
    }

    public Time getOraSfarsit() {
        return oraSfarsit;
    }

    public void setOraSfarsit(Time oraSfarsit) {
        this.oraSfarsit = oraSfarsit;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public String getProf() {
        return prof;
    }

    public void setProf(String prof) {
        this.prof = prof;
    }

    public int getSala() {
        return sala;
    }

    public void setSala(int sala) {
        this.sala = sala;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public String getGrupa() {
        return grupa;
    }

    public void setGrupa(String grupa) {
        this.grupa = grupa;
    }
}
