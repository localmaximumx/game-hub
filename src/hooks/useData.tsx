import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import type { Genre } from "./useGenres";
import type { Platform } from "./useGames";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  endpoint: string,
  selectedGenre?: Genre,
  selectedPlatfomr?: Platform
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        params: {
          genres: selectedGenre?.slug,
          platforms: selectedPlatfomr?.id,
        },
      })
      .then((res) => {
        setLoading(false);
        setData(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort(); // clean up function
  }, [selectedGenre, selectedPlatfomr]);

  return { error, data, isLoading };
};

export default useData;
