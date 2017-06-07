package com.acar.modules.orar.repositories;

import com.acar.modules.orar.models.Discipline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DisciplineRepository extends JpaRepository<Discipline, Long> {
    //
}
