import { useState } from "react";

type UseApiReturn<T> = {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  request: (...args: any[]) => Promise<void>;
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

      if (!response.ok) {
        setHasError(true);
        return;
      }

      setData(response.data ?? null);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, hasError, isLoading, request };
}

export default useApi;
