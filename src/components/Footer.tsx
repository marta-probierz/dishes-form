import React from 'react';
import { useTranslation } from 'react-i18next';

import "../style/Footer.style.scss";

export const Footer = () => {
  const { t } = useTranslation();
  return <footer>{t`footer.footer`}</footer>;
};