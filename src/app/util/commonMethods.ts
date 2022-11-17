import * as ago from 's-ago';
export const findAndUplateObjArr = (array: any, obj: any, property: string) => {
  const arrCopy = [...array];
  arrCopy.map((item) => {
    if (item._id === obj._id) {
      return (item.isHot = !item.isHot);
    }
    return item;
  });
  return arrCopy;
};
export const humanDate = (dateTime: string) => {
  return ago(new Date(dateTime));
};
export const compareDate = (date1: string, date2: string) => {
  return date1 === date2;
};
export const isCurrentDate = (dateString: string) => {
  const currentDate = new Date().toDateString();
  const newDate = new Date(dateString).toDateString();
  console.log(currentDate, newDate, dateString);
  return currentDate === newDate;
};
