import axiosInstance from '@/shared/axios';
import { ICredentials, IResponseData } from '@/types/sql-optimizer.types';

export const handleConnect = async (credentials: ICredentials) => {
  try {
    const response = await axiosInstance.post<IResponseData>(
      `/db_connect`,
      credentials
    );
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
