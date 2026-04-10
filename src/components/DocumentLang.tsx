import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function DocumentLang() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lng = i18n.resolvedLanguage ?? i18n.language;
    document.documentElement.lang = lng.startsWith("fr") ? "fr" : "en";
    document.title = t("meta.title");
  }, [i18n.resolvedLanguage, i18n.language, t]);

  return null;
}
