import { useEffect, useState } from "react";
import BestIMDBSeriesCard from "./BestIMDBSeriesCard";

const BestIMDBSeries = ({ data }) => {
  //   const [newData, setNewData] = useState([]);

  let newData = [];
  let cont = 0;
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i]);
    if (data[i].imDbRating >= 9) {
      newData.push(data[i]);
      cont = cont + 1;
    }
    if (cont >= 10) {
      break;
    }
  }
  //console.log(newData);
  return (
    <section className="d-flex flex-row flex-wrap align-items-center justify-content-center">
      {newData.map((el, index) => (
        <BestIMDBSeriesCard key={index} el={el} />
      ))}
    </section>
  );
};

export default BestIMDBSeries;
