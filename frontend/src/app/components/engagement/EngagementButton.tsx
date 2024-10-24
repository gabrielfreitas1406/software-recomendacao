import * as React from "react";

import { EngagementButtonProps } from "../../types/engagementTypes";

export const EngagementButton: React.FC<EngagementButtonProps> = ({
  text,
  width = 159,
}) => (
  <button className="engagement-button" style={{ width }} aria-label={text}>
    {text}
  </button>
);
