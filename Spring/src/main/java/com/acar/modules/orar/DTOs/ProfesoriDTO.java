package com.acar.modules.orar.DTOs;


public class ProfesoriDTO {

    private String nume;
    private String prenume;
    private String grad_didactic;
    private long nota;

    public ProfesoriDTO(){

    }

    public ProfesoriDTO(String nume, String prenume, String grad_didactic, long nota) {
        this.nume = nume;
        this.prenume = prenume;
        this.grad_didactic = grad_didactic;
        this.nota=nota;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getPrenume() {
        return prenume;
    }

    public void setPrenume(String prenume) {
        this.prenume = prenume;
    }

    public String getGrad_didactic() {
        return grad_didactic;
    }

    public void setGrad_didactic(String grad_didactic) {
        this.grad_didactic = grad_didactic;
    }

    public long getNota() {
        return nota;
    }

    public void setNota(long nota) {
        this.nota = nota;
    }
}
