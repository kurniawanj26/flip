export const numberFormatter = amount => {
  console.log(amount);
  return 'Rp ' + amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const uppercaseFirstLetter = string => {
  return string.charAt(0) + string.substring(1).toLowerCase();
};
