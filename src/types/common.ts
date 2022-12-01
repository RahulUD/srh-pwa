// Pagination  starts
export enum paginationTypeEnum {
  small = 1,
  standard = 2,
  detailed = 3,
}
export type paginationTypeType = 1 | 2 | 3;

export interface paginationConfigType {
  totalItem: number;
  perPage: number;
  currentPage: number;
}

// Pagination  ends

export interface dataCardType {
  iconClasses: string;
  title: string;
  count: string;
  cardClass: string;
}

export interface countType {
  title: string;
  count: string | number;
}

export interface numberKeyValue {
  key: string|number;
  val: number;
}
