const priceAsc = (a, b) => {
  return a.discountPrice - b.discountPrice;
};

const priceDesc = (a, b) => {
  return b.discountPrice - a.discountPrice;
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
