"use client"

import axios from "axios";
import { useEffect } from "react";

const useSerieCards = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false); 
      } catch (error) {
        setError("erro ao buscar dados");
        setLoading(false);
      }
    };
    fetchData()
  }, [url]);

  return { data, loading, error };
};

export default useSerieCards;