export const convertToSlug = (Text) => {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const searchData = (list, id) => {
  for (let i = 0; i < list.results.length; i++) {
    if (list.results[i].id === parseInt(id)) {
      return list.results[i];
    }
  }
};
