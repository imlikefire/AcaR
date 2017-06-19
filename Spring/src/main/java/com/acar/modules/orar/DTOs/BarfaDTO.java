package com.acar.modules.orar.DTOs;

/**
 * Created by eduar on 6/20/2017.
 */
public class BarfaDTO {
    String barfa;
    String numeProf;

    public BarfaDTO() {
    }

    public BarfaDTO(String barfa, String numeProf) {
        this.barfa = barfa;
        this.numeProf = numeProf;
    }

    public String getBarfa() {
        return barfa;
    }

    public void setBarfa(String barfa) {
        this.barfa = barfa;
    }

    public String getNumeProf() {
        return numeProf;
    }

    public void setNumeProf(String numeProf) {
        this.numeProf = numeProf;
    }
}
