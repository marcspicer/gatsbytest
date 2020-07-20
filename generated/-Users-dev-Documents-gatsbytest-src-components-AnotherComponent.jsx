import React from "react";
import { useIntl, initIntl } from "../components/useIntl";
export const Anothercomponent = React.memo(() => {
  var intl = useIntl();
  return <span>
      {"For now let it wrap in span"}
      <br />
      {intl("some")}
    </span>;
});
initIntl({
  en: {
    some: "Some"
  },
  es: {
    some: "Algunas"
  }
})