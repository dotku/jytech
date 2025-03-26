"use client";

import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
  options?: RequestInit;
}

interface UseFetchResult<T> {
  data: T | null;
  error: Error | null;
  ifLoading: boolean;
}

export default function useFetch<T>({ url, options }: UseFetchProps): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [ifLoading, setIfLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setIfLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, ifLoading };
}
