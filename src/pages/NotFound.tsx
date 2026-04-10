import { useEffect, useLayoutEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const homePath = useMemo(
    () => (location.pathname === "/fr" || location.pathname.startsWith("/fr/") ? "/fr" : "/"),
    [location.pathname],
  );

  useLayoutEffect(() => {
    void i18n.changeLanguage(homePath === "/fr" ? "fr" : "en");
  }, [homePath, i18n]);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("notFound.title")}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t("notFound.message")}</p>
        <Link to={homePath} className="text-primary underline hover:text-primary/90">
          {t("notFound.home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
