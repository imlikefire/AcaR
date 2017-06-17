package com.acar.modules.orar.DTOs;

/**
 * Created by eduar on 6/17/2017.
 */
public class ResurseDTO {

    private String nume;
    private String tip;
    private String link;
    private int dificultate;

    public ResurseDTO() {
    }

    public ResurseDTO(String nume, String tip, String link, int dificultate) {
        this.nume = nume;
        this.tip = tip;
        this.link = link;
        this.dificultate = dificultate;
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
