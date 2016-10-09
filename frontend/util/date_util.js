import React from 'react';

const months = ['Jan','Feb','Mar','Apr','May','Jun',
  'Jul','Aug','Sep','Oct','Nov','Dec'];

export const convertDate = (dateObj) => {
  if (dateObj === "") {
    return;
  } else {
    const minutes = dateObj.getMinutes() >= 10 ? dateObj.getMinutes()
    : `0${dateObj.getMinutes()}`;
    const seconds = dateObj.getSeconds() >= 10 ? dateObj.getSeconds()
    : `0${dateObj.getSeconds()}`;
    const date = `${months[dateObj.getMonth()]} ${dateObj.getDate()},
    ${dateObj.getFullYear()} ${dateObj.getHours()}:${minutes}:${seconds}`;
    return <div className="note-last-saved">Last saved {date}</div>;
  }
};
