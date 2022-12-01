import * as ago from 's-ago';
import { numberKeyValue } from 'src/types/common';
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

export const pagination = (
  currentPage: number,
  totalItems: number,
  delta: number,
  gap: string
): numberKeyValue[] => {
  const items = Math.ceil(totalItems);
  if (items <= 1) return [{ key: 1, val: 1 }];
  const center: numberKeyValue[] = [{ key: currentPage, val: currentPage }];

  for (let i = 1; i <= delta; i++) {
    center.unshift({ key: currentPage - i, val: currentPage - i });
    center.push({ key: currentPage + i, val: currentPage + i });
  }
  const filteredCenter = center.filter(
    (page) => page.key > 1 && page.key < items
  );
  const includeLeftGap = currentPage > 3 + delta;
  const includeLeftPages = currentPage === 3 + delta;
  const includeRightGap = currentPage < items - (2 + delta);
  const includeRightPages = currentPage === items - (2 + delta);
  const leftGap = Math.floor((currentPage - delta - 1) / 2);
  const rightGap = Math.floor((currentPage + delta + items) / 2);
  if (includeLeftPages) filteredCenter.unshift({ key: 2, val: 2 });
  if (includeRightPages)
    filteredCenter.push({ key: items - 1, val: items - 1 });
  if (includeLeftGap) filteredCenter.unshift({ key: gap, val: leftGap });
  if (includeRightGap) filteredCenter.push({ key: gap, val: rightGap });
  return [{ key: 1, val: 1 }, ...filteredCenter, { key: items, val: items }];
};
