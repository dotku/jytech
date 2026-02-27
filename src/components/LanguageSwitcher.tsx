"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@nextui-org/react';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    // Toggle between 'en' and 'zh'
    const newLocale = locale === 'en' ? 'zh' : 'en';

    // Remove the current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <Button
      variant="light"
      size="sm"
      onClick={switchLocale}
      className="text-sm font-medium"
    >
      {locale === 'en' ? '中文' : 'English'}
    </Button>
  );
}
