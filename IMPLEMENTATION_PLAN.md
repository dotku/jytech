# Internationalization (i18n) Implementation Plan

## Current State Analysis

### Findings:
- **Framework**: Next.js 14.2.3 with App Router
- **Existing i18n Setup**: Partial implementation
  - `middleware.js` exists with stub locale logic (empty `getLocale()` function)
  - `src/app/zh/` directory with minimal Chinese pages (career, job-market)
  - No i18n library installed
  - Most content is hardcoded in English
- **Requirement**: URL-based language switching (per CLAUDE.md)

### Content to Translate:
- Navigation menu (Header component)
- Homepage hero section and business cards
- All business pages (EB-5, investors, opportunities, etc.)
- Tech/consultant pages
- Career and contact pages
- Footer content
- Data files (investors.ts, products.js, etc.)

## Recommended Approach: next-intl

### Why next-intl:
1. **Best Next.js 14 App Router support** - Designed specifically for App Router
2. **URL-based routing** - Supports `/en/*` and `/zh/*` pattern required by CLAUDE.md
3. **Type-safe** - Full TypeScript support with autocomplete
4. **Server Components** - Works with both Server and Client Components
5. **Active development** - Well-maintained and widely adopted

### Alternative Considered:
- **Manual implementation**: Would require significant custom code for routing, locale detection, and translation management
- **Verdict**: next-intl is more maintainable and robust

## Implementation Steps

### Phase 1: Setup and Configuration (Foundation)

1. **Install next-intl**
   ```bash
   npm install next-intl
   ```

2. **Create directory structure**
   ```
   messages/
     ├── en.json    # English translations
     └── zh.json    # Chinese translations
   ```

3. **Update next.config.js**
   - Add next-intl configuration

4. **Update middleware.js**
   - Replace stub logic with next-intl middleware
   - Configure supported locales: ['en', 'zh']
   - Set default locale: 'en'
   - Add locale detection (from URL, headers, cookies)

### Phase 2: App Structure Refactoring

5. **Restructure app directory**
   - Move all routes under `src/app/[locale]/` dynamic segment
   - Current: `src/app/page.tsx` → New: `src/app/[locale]/page.tsx`
   - Current: `src/app/business/page.jsx` → New: `src/app/[locale]/business/page.jsx`
   - Remove old `src/app/zh/` directory (will be replaced by [locale] pattern)

6. **Update root layout**
   - Modify `src/app/layout.tsx` to wrap locale layout
   - Create `src/app/[locale]/layout.tsx` with NextIntlClientProvider
   - Pass locale parameter to all child components

### Phase 3: Translation Files

7. **Create base translation structure**
   - `messages/en.json`: Extract all English text
   - `messages/zh.json`: Add Chinese translations

   Structure:
   ```json
   {
     "common": {
       "contactUs": "Contact us",
       "learnMore": "Learn more"
     },
     "header": {
       "marketing": "Marketing",
       "technologies": "Technologies",
       "business": "Business"
     },
     "home": {
       "title": "JY Tech",
       "mission": "Our mission is to..."
     },
     "business": { ... },
     "tech": { ... }
   }
   ```

8. **Translate data files**
   - Create locale-specific versions:
     - `src/data/investors.ts` → Support both languages
     - `src/data/products.js` → Support both languages
   - Or use translation keys in data and resolve in components

### Phase 4: Component Updates

9. **Update Header component**
   - Add `useTranslations` hook
   - Replace hardcoded text with translation keys
   - Add language switcher component

10. **Create LanguageSwitcher component**
    - Display current language
    - Toggle between English/Chinese
    - Update URL to switch locale (e.g., `/en/business` ↔ `/zh/business`)
    - Use flags or text labels

11. **Update all pages**
    - Homepage (`src/app/[locale]/page.tsx`)
    - Business pages
    - Tech pages
    - Career pages
    - Contact page
    - Each page should use `useTranslations()` or `getTranslations()`

12. **Update shared components**
    - GeneralLayout
    - Footer
    - BusinessCards
    - All Card components with text

### Phase 5: Metadata and SEO

13. **Update metadata**
    - Make page titles and descriptions locale-aware
    - Add alternate language links for SEO
    - Update Open Graph tags per language

14. **Update HTML lang attribute**
    - English pages: `<html lang="en">`
    - Chinese pages: `<html lang="zh">`

### Phase 6: Testing and Cleanup

15. **Test all routes**
    - Verify `/en/*` routes work
    - Verify `/zh/*` routes work
    - Test language switcher on all pages
    - Verify locale persistence

16. **Handle edge cases**
    - Default locale redirect (root `/` → `/en` or `/zh` based on browser)
    - 404 pages in both languages
    - API routes (if they need locale handling)

17. **Clean up**
    - Remove duplicate investor pages (`.jsx` and `.tsx` versions)
    - Remove old `src/app/zh/` directory
    - Update any internal links to use locale-aware routing

### Phase 7: Documentation

18. **Update README**
    - Document i18n setup
    - How to add new translations
    - How to add new languages in the future

## File Changes Summary

### New Files:
- `messages/en.json` - English translations
- `messages/zh.json` - Chinese translations
- `src/components/LanguageSwitcher.tsx` - Language toggle component
- `src/app/[locale]/layout.tsx` - Locale-aware layout
- `src/i18n.ts` - i18n configuration (if needed)

### Modified Files:
- `middleware.js` - Update with next-intl locale handling
- `next.config.js` - Add next-intl config
- `src/app/layout.tsx` - Adjust for locale support
- All page files - Move to `[locale]` directory and add translations
- `src/components/Header/Header.tsx` - Add translations and language switcher
- `src/components/Footer/Footer.jsx` - Add translations
- Data files in `src/data/` - Make locale-aware

### Deleted Files:
- `src/app/zh/` directory (replaced by [locale] pattern)
- `src/app/business/investors/page.jsx` (duplicate of .tsx)
- `src/app/api/investors/route.js` (duplicate of .ts)

## Success Criteria

- ✅ URL pattern: `/en/*` for English, `/zh/*` for Chinese
- ✅ Language switcher in header works on all pages
- ✅ All visible text translated (no hardcoded English/Chinese)
- ✅ Default language based on browser preference
- ✅ SEO metadata in both languages
- ✅ No broken links or routes
- ✅ Clean console (no warnings about missing translations)

## Estimated Scope

- **Core setup**: ~20 files modified
- **Translation extraction**: ~50-100 translation keys
- **Page updates**: ~15-20 page files
- **Component updates**: ~10-15 components

## Notes

- Keep translations organized by feature/page for maintainability
- Use nested keys for better organization
- Consider using TypeScript for type-safe translation keys
- Test with both simplified and traditional Chinese if needed
- Ensure all images/assets work in both languages
