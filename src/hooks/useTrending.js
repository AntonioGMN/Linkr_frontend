import { useContext } from "react";
import TrendingContext from "../contexts/TrendingContext";

export default function useTrending() {
  return useContext(TrendingContext);
}