const months = ['Jan','Feb','Mar','Apr','May','Jun',
  'Jul','Aug','Sep','Oct','Nov','Dec'];

export const convertDateShort = (date) => {
  return `${months[date.getMonth()]} ${date.getDate()}`;
};

export const convertDateLong = (date) => {
  return `${months[date.getMonth()]} ${date.getDate()}
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
