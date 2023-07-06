export interface ICredentials {
  identifier: string;
  host_name: string;
  username: string;
  password: string;
  database_name: string;
  port: number;
  database_type: string;
}

export interface IResponseData {
  tables: string[];
  schema: string;
}
