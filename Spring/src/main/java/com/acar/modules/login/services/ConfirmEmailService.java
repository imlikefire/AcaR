package com.acar.modules.login.services;


import com.acar.modules.login.models.ConfirmEmail;
import org.springframework.stereotype.Service;

@Service
public interface ConfirmEmailService{

    public ConfirmEmail findEmail(String email);
    public ConfirmEmail save(ConfirmEmail entity);
    public void delete(String email);
    public String generateCode();

}
