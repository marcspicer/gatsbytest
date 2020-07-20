import React, { useContext } from "react";
export const IntlContext = React.createContext("en");
const yi_key = "__yi__intl__";

export const initIntl = (obj) => {
  if (!window[yi_key]) {
    window[yi_key] = { es: {}, en: {} };
  }

  if (obj["en"]) {
    Object.keys(obj["en"]).map((key) => {
      window[yi_key]["en"][key] = obj["en"][key];
    });
  }
  if (obj["es"]) {
    Object.keys(obj["es"]).map((key) => {
      window[yi_key]["es"][key] = obj["es"][key];
    });
  }
};

export const useIntl = () => {
  const local = useContext(IntlContext);
  return (phrase) => intl(phrase, local);
};

const intl = (string, locale) => {
  return window["__yi__intl__"] && window["__yi__intl__"][locale]
    ? window["__yi__intl__"][locale][string]
    : "";
};
