const priceAsc = (a, b) => {
  return a.price - b.price;
};

const priceDesc = (a, b) => {
  return b.price - a.price;
};

const titleAsc = (a, b) => {
  return a.title.localeCompare(b.title);
};

const titleDesc = (a, b) => {
  return b.title.localeCompare(a.title);
};

const Sorter = {
  priceAsc: priceAsc,
  priceDesc: priceDesc,
  titleAsc: titleAsc,
  titleDesc: titleDesc,
};

export default Sorter;
