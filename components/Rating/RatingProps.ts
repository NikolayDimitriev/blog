import { HTMLAttributes, DetailedHTMLProps } from "react";

export default interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
}
