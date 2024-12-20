export interface CardProps {
  isInitCard: Boolean;
  isResultCard?: Boolean; //para quando a recomendação já terminou
  title?: string;
  description?: string;
  buttonLabel?: string;
  imageTitle?: string;
  isCardWord?: boolean;
}
