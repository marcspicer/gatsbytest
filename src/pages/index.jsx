import React, { useState } from "react";
import { useContext } from "react";
import {
  IntlContext,
  FormattedMessage,
  Anothercomponent,
} from "../components/";

export default React.memo(() => {
  return (
    <IntlContext.Provider value="es">
      <Comp />
    </IntlContext.Provider>
  );
});

const Comp = React.memo(() => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {<FormattedMessage id="count" placeholder={{ count: 2 }} />}
      </button>
      <br />
      <span>{count}</span>
      <br />
      <Anothercomponent />
    </div>
  );
});
