export interface NavLinkProps {
  text: string;
}

export interface HeaderButtonProps {
  label: string;
  variant: "primary" | "secondary";
}

export interface ListRecursosProps {
  text: string;
}

export interface FavoriteButtonProps {
  onClick: () => void;
}
