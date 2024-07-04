"use client";

import { useCallback, useEffect, useState } from "react";

export default function useFetch({url}) {
  const [ifLoading, setIfLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const genFetch = useCallback(async () => {
    try {
      const data = await fetch(url).then(rsp => rsp.json())
      setData(data);
    } catch(e) {
      setError(e.message);
    } finally {
      setIfLoading(false);
    }
  }, [url])

  useEffect(() => {
    genFetch();
  }, [])

  return {ifLoading, data, error};
}