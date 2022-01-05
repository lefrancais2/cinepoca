export const Mes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const shortDate = (element) => {
  return element.slice(0, element.length - 1);
};

export const addTime = (element) => {
  return element + "T00:00:00";
};
