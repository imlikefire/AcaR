package com.acar.modules.orar.DTOs;


public class ProfesoriDTO {

    private String nume;
    private String grad_didactic;
    private double nota;
    private long procentaj;

    public ProfesoriDTO(){

    }

    public ProfesoriDTO(String nume, String grad_didactic, double nota, long procentaj) {
        this.nume = nume;
        this.grad_didactic = grad_didactic;
        this.nota=nota;
        this.procentaj=procentaj;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getGrad_didactic() {
        return grad_didactic;
    }

    public void setGrad_didactic(String grad_didactic) {
        this.grad_didactic = grad_didactic;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {this.nota = nota;}

    public long getProcentaj() {
        return procentaj;
    }

    public void setProcentaj(long procentaj) {
        this.procentaj = procentaj;
    }
}
