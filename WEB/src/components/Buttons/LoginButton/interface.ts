type LoginType = "google" | "facebook";

export interface IProps {
  type: LoginType;
  onClick?: () => void;
}
