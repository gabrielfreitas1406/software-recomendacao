export interface BackButtonProps {
  onClick: () => void;
}

export interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
  idQuestaoAtual?: number;
}
