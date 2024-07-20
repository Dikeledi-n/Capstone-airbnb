import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getAccommodations = async () => {
  try {
    const response = await axios.get(`${API_URL}/accommodations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    throw error;
  }
};

export const createAccommodation = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/accommodations`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating accommodation:', error);
    throw error;
  }
};

// Other API functions...
