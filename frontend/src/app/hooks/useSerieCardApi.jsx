import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://seriejournal-api.onrender.com";

const useSerieCards = () => {
  const getSerieCards = async () => {
    try {
      const response = await axios.get(`${API_URL}/series`);;
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getSerieCard = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/series/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

const updateSerieCard = async (updatedSerie) => {
  try {
    const { id } = updatedSerie; 
    
    axios.put(`${API_URL}/series/${id}`, updatedSerie);
  } catch (error) {
    throw new Error(error.message);
  }
};

  const deleteSerieCard = async (id) => {
    try {
      await axios.delete(`${API_URL}/series/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createSerieCard = async (newSerie) => {
    try {
      await axios.post(`${API_URL}/series`, newSerie);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return {
    getSerieCards,
    getSerieCard,
    updateSerieCard,
    deleteSerieCard,
    createSerieCard,
  };
};

export default useSerieCards;