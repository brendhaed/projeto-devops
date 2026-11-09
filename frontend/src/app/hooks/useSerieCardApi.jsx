import axios from "axios";

const useSerieCards = () => {
  const getSerieCards = async () => {
    try {
      const response = await axios.get("https://seriejournal-api.onrender.com/series");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getSerieCard = async (id) => {
    try {
      const response = await axios.get(`https://seriejournal-api.onrender.com/series/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

const updateSerieCard = async (updatedSerie) => {
  try {
    const { id } = updatedSerie; 
    
    await axios.put(
      `https://seriejournal-api.onrender.com/series/${id}`, updatedSerie
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

  const deleteSerieCard = async (id) => {
    try {
      await axios.delete(`https://seriejournal-api.onrender.com/series/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createSerieCard = async (newSerie) => {
    try {
      await axios.post("https://seriejournal-api.onrender.com/series", newSerie);
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