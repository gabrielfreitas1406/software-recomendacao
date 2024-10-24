import * as React from "react";
import { HeaderActionProps } from "../../types/engagementTypes";

export const HeaderAction: React.FC<HeaderActionProps> = ({
  text,
  variant,
}) => <button className={`header-action ${variant}`}>{text}</button>;
