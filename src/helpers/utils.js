export const numberFormatter = amount => {
  return 'Rp' + amount.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const uppercaseFirstLetter = string => {
  return string.charAt(0) + string.substring(1).toLowerCase();
};

export const dateFormatter = dateToFormat => {
  var monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  var newDate = new Date(dateToFormat.replace(' ', 'T'));
  var date = new Date(newDate).getDate();
  var month = new Date(newDate).getMonth();
  var year = new Date(newDate).getFullYear();

  // convert the month number into the month name based on array index
  var convertedMonth = monthNames[month];

  return date + ' ' + convertedMonth + ' ' + year;
};
