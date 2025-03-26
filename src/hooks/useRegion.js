import { useState, useEffect } from 'react';

const CHINA_REGIONS = ['CN', 'HK', 'TW', 'MO'];

export function useRegion() {
  const [region, setRegion] = useState('cn'); // Default to CN

  useEffect(() => {
    // Try to detect region using browser language
    const languages = navigator.languages || [navigator.language];
    const primaryLang = languages[0]?.toLowerCase();
    
    // Check if language is Chinese-based
    const isChinese = primaryLang.startsWith('zh') || 
                     CHINA_REGIONS.some(r => primaryLang.includes(r.toLowerCase()));
    
    setRegion(isChinese ? 'cn' : 'us');
  }, []);

  return region;
}
