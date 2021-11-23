const priceFixer = (price) => {
  return price.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) + ' TL';
};

const discountPriceFixer = (price, percentage) => {
  const finalPrice = (price * (100 - percentage)) / 100;
  return priceFixer(finalPrice);
};

export { priceFixer, discountPriceFixer };
