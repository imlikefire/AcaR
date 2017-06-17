package com.acar.modules.orar.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * Created by eduar on 6/17/2017.
 */


@Entity
@Table(name="resurse")

public class Resurse implements Serializable{

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @Column(name = "nume")
        @NotNull
        private String nume;

        @NotNull
        @Column(name = "tip")
        private String tip;

        @NotNull
        @Column(name="link")
        private String link;

        @NotNull
        @Column(name="dificultate")
        private int dificultate;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getTip() {
        return tip;
    }

    public void setTip(String tip) {
        this.tip = tip;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public int getDificultate() {
        return dificultate;
    }

    public void setDificultate(int dificultate) {
        this.dificultate = dificultate;
    }
}
