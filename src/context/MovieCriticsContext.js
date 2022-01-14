import { createContext, useState } from "react";

const MovieCriticsContext = createContext();

const MovieCriticsProvider = ({ children }) => {
  const [dataForCritics, setDataForCritics] = useState(null);

  const data = { dataForCritics, setDataForCritics };

  return (
    <MovieCriticsContext.Provider value={data}>
      {children}
    </MovieCriticsContext.Provider>
  );
};

export { MovieCriticsProvider };

export default MovieCriticsContext;
