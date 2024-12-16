import * as React from "react";
import { FavoriteButtonProps } from "../../../types/resultRecommenTypes";

export const FavoriteToolButton: React.FC<FavoriteButtonProps> = ({
  onClick,
}) => (
  <div
    className="favorite-section"
    onClick={onClick}
    role="button"
    tabIndex={0}
  >
    <div className="favorite-text">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d5b598cdd8c92fa30c9f8b6ae069594189a3f227cf87362984dcd82c4cdd70a?placeholderIfAbsent=true&apiKey=83976f5dcdaa41408687cac3bc676028"
        alt="Favorite icon"
        className="favorite-icon"
      />
      Salve como favorito
    </div>
  </div>
);
