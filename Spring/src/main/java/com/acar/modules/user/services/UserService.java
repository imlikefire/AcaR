package com.acar.modules.user.services;


import com.acar.modules.user.models.User;

import java.util.List;

public interface UserService {

    public User findByEmail(String email);
    public void delete(String email);
    public List<User> getAll();
    public User save(User user);
    public User update(User user);
    public User findById(Long id);
}

