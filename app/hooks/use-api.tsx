import { useState } from "react";

type UseApiReturn<T> = {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  request: (...args: any[]) => Promise<{ ok: boolean; data?: T } | undefined>;
};

function useApi<T>(
  apiFunc: (...args: any[]) => Promise<{ ok: boolean; data?: T }>
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const request = async (...args: any[]) => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await apiFunc(...args);

      setHasError(!response.ok);
      setData(response.data ?? null);
      return response;
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, hasError, isLoading, request };
}

export default useApi;
