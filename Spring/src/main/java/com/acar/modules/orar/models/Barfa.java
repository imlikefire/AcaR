package com.acar.modules.orar.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * Created by eduar on 6/20/2017.
 */

@Entity
@Table(name="barfe")

public class Barfa implements Serializable {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @NotNull
        @Column(name = "barfa")
        private String barfa;

        @NotNull
        @Column(name = "id_prof")
        private long idProf;

    public Barfa() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBarfa() {
        return barfa;
    }

    public void setBarfa(String barfa) {
        this.barfa = barfa;
    }

    public long getIdProf() {
        return idProf;
    }

    public void setIdProf(long idProf) {
        this.idProf = idProf;
    }
}
