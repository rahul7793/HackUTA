package com.statefarm.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.statefarm.api.model.Users;
import com.statefarm.api.repository.UsersRepository;

@RestController
public class UserController {

	@Autowired
	UsersRepository usersRepository;

	@GetMapping("/users")
	public ResponseEntity<List<Users>> getAllTutorials(@RequestParam(required = false) String title) {
		try {
			List<Users> tutorials = new ArrayList<Users>();

			if (title == null)
				usersRepository.findAll().forEach(tutorials::add);
//			else
//				usersRepository.findByTitleContaining(title).forEach(tutorials::add);

			if (tutorials.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(tutorials, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
