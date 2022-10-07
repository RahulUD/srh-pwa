export interface toastType {
  message: string;
  title: string;
  time?: string;
}
export enum EventTypes {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}
