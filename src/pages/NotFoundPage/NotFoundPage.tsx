import React from "react";
import { useTranslation } from "react-i18next";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  return <h1>{t`notFound.title`}</h1>;
};
