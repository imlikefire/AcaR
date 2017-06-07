package com.acar.modules.orar.DTOs;


public class DisciplineDTO {

    private String titlu_disciplina;
    private int an;
    private int semestru;
    private int optional;

    public DisciplineDTO(){

    }

    public DisciplineDTO(String titlu_disciplina, int an, int semestru, int optional) {
        this.titlu_disciplina = titlu_disciplina;
        this.an = an;
        this.semestru = semestru;
        this.optional = optional;
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
