// src/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

import { Heading } from '../component/Heading'
import { SubHeading } from '../component/SubHeading';
import { InputBox } from '../component/InputBox';
import { SubmitButton } from '../component/SubmitButton';
import { BottomWarning } from '../component/BottomWarning';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });
  
  const navigate = useNavigate();


  const [signupSuccess, setSignupSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:3000/api/v1/user/signup', formData);
        const authToken = response.data.token;
         // Update state to indicate successful signup
            setSignupSuccess(true);

            // Store the authentication token in local storage or cookies for future requests
            localStorage.setItem('authToken', authToken);
    
            // Clear form data after successful signup
            setFormData({
                firstName: '',
                lastName: '',
                username: '',
                password: '',
            });
            console.log('Form submitted:', formData);
            setTimeout(function() {
              navigate('/dashboard');
            }, 2000);
      }catch(e){
          console.log('Error submitting form:', e.response.data);
          setResponseMessage(e.response.data.message);
        setSignupSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8">
       <Heading label="Sign Up to your Account" />
       <SubHeading label="Enter your details for Sign Up" />
        {signupSuccess &&  <label className='w-full flex justify-center flex-py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
            SignUp Successful!
        </label>
        }
        {!signupSuccess && responseMessage && <label className='w-full flex justify-center flex-py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
            {responseMessage}
        </label>
        }
        <div className='shadow-lg'>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
          <InputBox id="firstName" name="firstName" type="text" placeholder="First Name" onChange={handleChange} />  
          <InputBox id="lastName" name="lastName" type="text" placeholder="Last Name" onChange={handleChange} /> 
          <InputBox id="username" name="username" type="text" placeholder="Email Address" onChange={handleChange} />  
          <InputBox id="password" name="password" type="password" placeholder="Password" onChange={handleChange} />  
          <SubmitButton label="Sign Up" />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </form>
        </div>
      </div>
    </div>
  );
};   
