// import axios from 'axios';

// const BASE_URL = 'http://127.0.0.1:8000/api/'

// const LOGIN_URL = `${BASE_URL}login/`
// const REGISTER_URL = `${BASE_URL}register/`
// const LOGOUT_URL = `${BASE_URL}logout/`
// const NOTES_URL = `${BASE_URL}todos/`
// const AUTHENTICATED_URL = `${BASE_URL}authenticated/`

// axios.defaults.withCredentials = true; 

// export const login = async (username, password) => {
//     try {
//         const response = await axios.post(
//             LOGIN_URL, 
//             { username, password },  // Object shorthand for cleaner syntax
//             { withCredentials: true }  // Ensures cookies are included
//         );
        
//         // Check if the response contains a success attribute (depends on backend response structure)
//         return response.data
//     } catch (error) {
//         console.error("Login failed:", error);
//         return false;  // Return false or handle the error as needed
//     }
// };

// export const get_notes = async () => {
//     const response = await axios.get(NOTES_URL, { withCredentials: true });
//     return response.data;
// };

// export const logout = async () => {
//     const response = await axios.post(LOGOUT_URL, { withCredentials: true });
//     return response.data;
// };

// export const register = async (username, email, password) => {
//     const response = await axios.post(REGISTER_URL, {username, email, password}, { withCredentials: true });
//     return response.data;
// };

// export const authenticated_user = async () => {
//     const response = await axios.get(AUTHENTICATED_URL, { withCredentials: true });
//     return response.data
// }

// src/api/endpoints.js

import api from './api';

// Authentication
export const login = async (email, password) => {
    const response = await api.post('auth/login/', { email, password });
    return response.data;  // Return the token and user data
};

export const register = async (email, password) => {
    const response = await api.post('auth/register/', { email, password });
    return response.data;  // Return success message or user data
};

// Customers
export const fetchCustomers = async () => {
    const response = await api.get('customers/');
    return response.data;  // Return the list of customers
};

// Inventory
export const fetchInventory = async () => {
    const response = await api.get('inventory/');
    return response.data;  // Return the list of products
};

// Sales
export const fetchSales = async () => {
    const response = await api.get('sales/');
    return response.data;  // Return sales history
};

// You can add more functions for other endpoints as needed