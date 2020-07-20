import React, { useState } from "react";
import { useContext } from "react";
import { IntlContext, FormattedMessage, Anothercomponent } from "../components/";
import { useIntl, initIntl } from "../components/useIntl";
export default React.memo(() => {
  return <IntlContext.Provider value="es">
      <Comp />
    </IntlContext.Provider>;
});
const Comp = React.memo(() => {
  var intl = useIntl();
  const [count, setCount] = useState(0);
  return <div>
      <button onClick={() => setCount(count + 1)}>
        {intl("count")}
      </button>
      <br />
      <span>{count}</span>
      <br />
      <Anothercomponent />
    </div>;
});
initIntl({
  en: {
    count: "Count"
  },
  es: {
    count: "Contar"
  }
})