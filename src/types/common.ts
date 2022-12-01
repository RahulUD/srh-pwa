// Pagination  starts
export enum paginationTypeEnum {
  small = 'small',
  standard = 'standard',
  detailed = 'detailed',
}
export type paginationTypeType = 'small' | 'standard' | 'detailed';

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
