package com.acar.modules.user.repositories;

import com.acar.AcarApplication;
import com.acar.modules.user.models.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.transaction.Transactional;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = AcarApplication.class)
@Transactional
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void ifItIsWorking() {
        User user = new User();
        user.setId(11);
        user.setFirstName("Ana");
        user.setRole(User.Role.student);
        User newUser = userRepository.save(user);

        assertEquals(user.getClass(), newUser.getClass());
    }

}