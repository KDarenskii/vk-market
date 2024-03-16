import axios from 'axios';

export const isCancelError = (error: unknown) =>
  axios.isAxiosError(error) && axios.isCancel(error);
