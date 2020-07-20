import React from "react";
import { useIntl, initIntl } from "../components/useIntl";
export const Anothercomponent = React.memo(() => {
  var intl = useIntl();
  return <span>
      {"For now let it wrap in span"}
      <br />
      {intl("some")}
      <br />
      {intl("another")}
    </span>;
});
initIntl({
  en: {
    some: "Some",
    another: "another"
  },
  es: {
    some: "Algunas",
    another: "another"
  }
})