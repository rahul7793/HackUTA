package com.statefarm.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.statefarm.api.message.BaseResponse;
import com.statefarm.api.message.GetQuoteResponse;
import com.statefarm.api.message.GetUserNameResponse;
import com.statefarm.api.message.LoginCredentials;
import com.statefarm.api.message.UserDetails;
import com.statefarm.api.model.Users;
import com.statefarm.api.repository.UsersRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UsersRepository repo;
	public BaseResponse addUser(Users user) {
		BaseResponse response = new BaseResponse();
		try{
			repo.saveAndFlush(user);
			response.setResultcode(0);
			response.setResultDescription("Success");
			
		}
		catch (Exception e) {
			response.setResultcode(100);
			response.setResultDescription("Failed to create user");
		}
		return response;
	}
	
	public GetQuoteResponse getQuote(UserDetails details) {
		GetQuoteResponse response = new GetQuoteResponse();
		response.setValue(calculateQuote(details));
		response.setResultcode(0);
		response.setResultDescription("Success");
		return response;
	}
	
	public GetUserNameResponse getUsername(LoginCredentials credentials) {
		GetUserNameResponse response = new GetUserNameResponse();
		try{
			Users user = repo.findByEmailAndUserPassword(credentials.getUsername(),credentials.getPassword());
			String name = user.getFirstName() + user.getLastName();
			response.setUserName(name);
			response.setResultDescription("Login Success");
		}
		catch(Exception e) {
			response.setResultDescription("Login Failed");
		}
		
		response.setResultcode(0);
		
		return response;
	}
	
	private double calculateQuote(UserDetails details) {
		double monthlyPlan=0.0;
		
		return monthlyPlan;
	}
	
}
