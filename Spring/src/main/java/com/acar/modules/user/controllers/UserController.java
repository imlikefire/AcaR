package com.acar.modules.user.controllers;

import com.acar.modules.user.dtos.GetUserDTO;
import com.acar.modules.user.dtos.PostUserDTO;
import com.acar.modules.user.models.User;
import com.acar.modules.user.services.UserService;
import com.acar.transformers.UserTransformer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@SuppressWarnings("rawtypes")
@RequestMapping("/v1/users")
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private UserTransformer transformer;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<GetUserDTO>> get() {
        List<User> users = this.service.getAll();
        if (users.isEmpty()) {
            return new ResponseEntity<List<GetUserDTO>>(HttpStatus.NO_CONTENT);
        }
        List<GetUserDTO> usersDTO = new ArrayList<>();
        for (User user : users) {
            usersDTO.add(transformer.toDTO(user));
        }
        return new ResponseEntity<List<GetUserDTO>>(usersDTO, HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(value="{id}",method = RequestMethod.GET)
    public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
        User userExist = service.findById(id);
        if (userExist==null) {
            return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
        }
        else
        {
            userExist.setPassword("");
            return new ResponseEntity<User>(userExist, HttpStatus.OK);
        }
    }

	@RequestMapping(method = RequestMethod.POST)
    public ResponseEntity addUser(@RequestBody PostUserDTO user) {
        this.service.save(transformer.toModel(user));
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
