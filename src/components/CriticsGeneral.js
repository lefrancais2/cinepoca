import { useContext, useEffect } from "react";
import MovieCriticsContext from "../context/MovieCriticsContext";
import CriticsGeneralCard from "./CriticsGeneralCard";

const CriticsGeneral = ({ data }) => {
  //console.log(data);
  const { setDataForCritics } = useContext(MovieCriticsContext);
  useEffect(() => {
    const getData = async () => {
      setDataForCritics(data);
    };

    getData();
  }, []);

  return (
    <>
      <aside className="title-critics title-critics-top">
        <h2>CRITICAS</h2>
      </aside>
      <section className="block-critics">
        {data &&
          data.map(
            (el, index) =>
              index < 12 && <CriticsGeneralCard key={index} el={el} />
          )}
      </section>
    </>
  );
};

export default CriticsGeneral;
