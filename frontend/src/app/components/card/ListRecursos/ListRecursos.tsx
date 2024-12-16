import * as React from "react";
import { ListRecursosProps } from "../../../types/resultRecommenTypes";

export const ListRecursos: React.FC<ListRecursosProps> = ({ text }) => (
  <li className="feature-item">{text}</li>
);
