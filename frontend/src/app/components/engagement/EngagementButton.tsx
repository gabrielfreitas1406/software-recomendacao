import * as React from "react";

import { EngagementButtonProps } from "../../types/engagementTypes";

const EngagementButton: React.FC<EngagementButtonProps> = ({ text }) => (
  <button className="categories-recommendations-button" aria-label={text}>
    <span className="option-label">{text}</span>
  </button>
);

export default EngagementButton;
