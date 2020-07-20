import React from "react";

export const Anothercomponent = React.memo(() => {
  return (
    <span>
      {"For now let it wrap in span"}
      <br />
      <FormattedMessage id="some" />
    </span>
  );
});
