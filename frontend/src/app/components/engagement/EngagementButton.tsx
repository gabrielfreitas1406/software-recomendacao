import * as React from "react";

import { EngagementButtonProps } from "../../types/engagementTypes";

const EngagementButton: React.FC<EngagementButtonProps> = ({
  text,
  onClick,
  isSelected,
}) => (
  <button
    className={
      isSelected
        ? "selected-word-recommendations-button"
        : "word-recommendations-button"
    }
    onClick={onClick}
    aria-label={text}
  >
    <span className={isSelected ? "selected-option-label" : "option-label"}>
      {text}
    </span>
  </button>
);

export default EngagementButton;
