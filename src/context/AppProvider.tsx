import { useState, useEffect } from "react";
import { AppContext } from "../hooks/AppContext";
import data from "../data/data";
import { Review } from "../shared/interfaces";

type Props = { children: JSX.Element };

function AppProvider({ children }: Props) {
  const [review, setReview] = useState<Review>(data[0]);
  const [index, setIndex] = useState<number>(0);

  const handleLeft = () => {
    if (index <= 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleRight = () => {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleSurprise = () => {
    const randomNum: number = Math.floor(Math.random() * data.length);
    setIndex(randomNum);
  };

  useEffect(() => {
    setReview(data[index]);
  }, [index]);

  return (
    <AppContext.Provider
      value={{ review, handleLeft, handleRight, handleSurprise }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
