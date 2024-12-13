import * as React from "react";
import { ListRecursosProps } from "../../../types/favoriteButtonTypes";
export const ListRecursos: React.FC<ListRecursosProps> = ({ text }) => (
  <div className="feature-item">{text}</div>
);
