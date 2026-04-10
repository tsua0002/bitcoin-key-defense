import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import Index from "./Index.tsx";

type Locale = "en" | "fr";

/**
 * Syncs i18n with the URL path: `/` → English, `/fr` → French.
 * Share `…/fr` for a direct French entry; root is always default English.
 */
const LocalizedHome = ({ locale }: { locale: Locale }) => {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return <Index />;
};

export default LocalizedHome;
