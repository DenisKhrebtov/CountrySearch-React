import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCountry } from "service/country-service";

export const useGetCountry = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getRegion = async () => {
      try {
        const data = await getCountry(id);
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getRegion();
  }, [id]);

  return {
    country,
    error,
    isLoading,
  };
};
