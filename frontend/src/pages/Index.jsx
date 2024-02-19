import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Index = () => {
    const [authToken, setAuthToken] = useState('');
    useEffect(() => {
    
        const storedToken = localStorage.getItem('authToken');
        setAuthToken(storedToken);
        axios.defaults.headers['Authorization'] = 'Bearer ' + storedToken;
        const navigate = useNavigate();

        if(!authToken || authToken === undefined){
            navigate('/signin');
        } else {
            navigate('/dashboard');
        }
        }, []);
};


