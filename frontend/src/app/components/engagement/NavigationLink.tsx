import * as React from "react";
import { NavigationLinkProps } from "../../types/engagementTypes";

export const NavigationLink: React.FC<NavigationLinkProps> = ({ text }) => (
  <a href="#" className="nav-link">
    {text}
  </a>
);
