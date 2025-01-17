import * as React from "react";
import { ListRecursosProps } from "../../../types/resultRecommenTypes";

export const ListRecursos: React.FC<ListRecursosProps> = ({ text }) => (
  <div className="feature-card">{text}</div>
);
