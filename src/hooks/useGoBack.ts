import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export function useGoBack(fallback: string = ROUTES.HOME) {
  const navigate = useNavigate();

  return () => {
    if (window.history.state?.idx === 0) {
      // No history — this is the first page, go to fallback
      navigate(fallback);
    } else {
      navigate(-1);
    }
  };
}
