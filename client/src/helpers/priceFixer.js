const priceFixer = (price) => {
  return price.toLocaleString('tr-TR', { minimumFractionDigits: 2 }) + ' TL';
};

export { priceFixer };
