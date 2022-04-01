import { useState, createContext } from "react";

const TrendingContext = createContext();

export function TrendingProvider({ children }) {
  const [hashtags, setHashtags] = useState([]);

	return (
		<TrendingContext.Provider value={{ hashtags, setHashtags }}>
			{children}
		</TrendingContext.Provider>
	);
}

export default TrendingContext;