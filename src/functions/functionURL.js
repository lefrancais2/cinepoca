export const navBarList = ["peliculas", "cartelera", "noticias", "series"];
export const location = (url, page) => {
  if (url.indexOf(page) > 0) return true;
  return false;
};

export const btnList = (lista, objetivo) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === objetivo) {
      return true;
    }
  }
  return false;
};
