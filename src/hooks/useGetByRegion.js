import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getByRegion } from "service/country-service";

export const useGetByRegion = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleSubmit = (query) => {
    setSearchParams({ query: query });
    setQuery(searchParams.get("region"));
  };

  useEffect(() => {
    const region = searchParams.get("region");
    if (!region) return;
    setIsLoading(true);
    const getRegion = async () => {
      try {
        const data = await getByRegion(region);
        setCountries(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getRegion();
  }, [searchParams]);

  return {
    countries,
    error,
    isLoading,
    onHandleSubmit,
  };
};
