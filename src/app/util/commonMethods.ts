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
