import React from "react";
import { useTranslation } from "react-i18next";

export const FormPage = () => {
  const { t } = useTranslation();
  return <h1>{t`form.title`}</h1>;
};
