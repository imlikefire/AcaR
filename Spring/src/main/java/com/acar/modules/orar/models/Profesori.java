package com.acar.modules.orar.models;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="profesori")
public class Profesori implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_prof;

    @NotNull
    @Column(name = "nume")
    private String nume;

    @Column(name = "grad_didactic")
    private String grad_didactic;

    @NotNull
    @Column(name="nota")
    private double nota;

    @NotNull
    @Column(name="count")
    private long count;

    @NotNull
    @Column(name="procentaj")
    private long procentaj;

    public long getId_prof() {
        return id_prof;
    }

    public void setId_prof(long id_prof) {
        this.id_prof = id_prof;
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

    public double getNota() {return nota;}

    public void setNota(double nota) {this.nota = nota;}

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    public long getProcentaj() {
        return procentaj;
    }

    public void setProcentaj(long procentaj) {
        this.procentaj = procentaj;
    }
}
