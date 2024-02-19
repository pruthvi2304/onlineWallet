// src/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

import { Heading } from '../component/Heading'
import { SubHeading } from '../component/SubHeading';
import { InputBox } from '../component/InputBox';
import { SubmitButton } from '../component/SubmitButton';
import { BottomWarning } from '../component/BottomWarning';


export const SignIn = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      
      const navigate = useNavigate();
    
    
      const [signInSuccess, setSignInSuccess] = useState(false);
      const [responseMessage, setResponseMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/v1/user/signin', formData);
            const authToken = response.data.token;
            // set login data
            setSignInSuccess(true);
            localStorage.setItem('authToken', authToken);
            // clear form data

            setFormData({
                username: '',
                password: ''
            });

            console.log('Form Submitted:', formData);
            setTimeout(function() {
                navigate('/dashboard');
              }, 2000);
        }catch(e){
            console.log('Error submitting form:', e.response.data);
            setResponseMessage(e.response.data.message);
            setSignInSuccess(false);
        }
      };
    

    return (
        <div className="min-h-screen flex items-center justify-center ">
          <div className="max-w-md w-full space-y-8">
           <Heading label="SignIn" />
           <SubHeading label="Enter your details for Sign In" />
            {signInSuccess &&  <label className='w-full flex justify-center flex-py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                SignIn Successful!
            </label>
            }
            {!signInSuccess && responseMessage && <label className='w-full flex justify-center flex-py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                {responseMessage}
            </label>
            }
            <div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
              <InputBox id="username" name="username" type="text" placeholder="Email Address" onChange={handleChange} />  
              <InputBox id="password" name="password" type="password" placeholder="Password" onChange={handleChange} />  
              <SubmitButton label="Sign In" />
              </div>
              <BottomWarning label={"Dont have a account?"} buttonText={"Sign up"} to={"/signup"} />
            </form>
            </div>
          </div>
        </div>
      );
};