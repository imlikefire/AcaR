package com.acar.modules.login.repositories;


import com.acar.modules.login.models.ConfirmEmail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface ConfirmEmailRepository extends JpaRepository<ConfirmEmail,String> {

    ConfirmEmail findByEmail(String email);
    @Transactional
    void deleteByEmail(String email);
}
