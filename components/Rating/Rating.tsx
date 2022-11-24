import React, { useEffect, useState, KeyboardEvent } from "react";
import RatingProps from "./RatingProps";
import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        key={i}
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      </span>
    ));
    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r: JSX.Element, i: number) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
