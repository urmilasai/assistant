
import { Button, Collapse, Input, Select } from "antd";
// import "antd/dist/antd.min.css";
import { getDatabaseData } from "@/store/actions/sql-optimizer-actions";
import { useAppDispatch } from "@/store/redux-Hooks";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from 'react';
import { Credentials } from '../../../services/sql-optimizer';

const { Panel } = Collapse;

// interface Credentials {
//   identifier: string;
//   host_name: string;
//   username: string;
//   password: string;
//   database_name: string;
//   port: number;
//   database_type: string;
// }
type DatabaseInputContainerType = {
  actionText?: string;
};


const DatabaseConnector: NextPage<DatabaseInputContainerType> = ({ actionText }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [inputValues, setInputValues] = useState({
    hostname: 'localhost',
    username: 'ekbana',
    password: 'Ekbana123!',
    databaseName: 'classicmodels',
    portNumber: 3306,
    databaseType: 'MySQL', // changed to string
  });

  const [tables, setTables] = useState<string[]>([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [schema, setSchema] = useState('');
  const [schemaVisible, setSchemaVisible] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      databaseType: value,
    }));
  };

  const handleSubmit = async () => {
    // map the inputValues to the Credentials type
    const credentials: Credentials = {
      identifier: 'ReactApp', // fill this as per your requirement
      host_name: inputValues.hostname,
      username: inputValues.username,
      password: inputValues.password,
      port: Number(inputValues.portNumber),
      database_name: inputValues.databaseName,
      database_type: inputValues.databaseType,
    };

    const response: any = await dispatch(getDatabaseData({ credentials }));
    if (response.payload) {
      router.push('/sql-optimizer/query-results')
    }
  };

  // add state for checked tables
  const [checkedTables, setCheckedTables] = useState<string[]>([]);

  const handleCheckboxChange = (checkedValues: any) => {
    setCheckedTables(checkedValues);
  };


  return (
    <div className="flex flex-col gap-[1.5rem]">
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <label className="cursor-pointer relative capitalize font-medium inline-block w-[7.75rem]">
          Hostname
        </label>
        <Input
          className="bg-[transparent] relative"
          type="text"
          style={{ width: "430px" }}
          size="large"
          placeholder="enter Your Hostname"
          name="hostname"
          value={inputValues.hostname}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <label className="cursor-pointer relative capitalize font-medium inline-block w-[7.75rem]">
          Username
        </label>
        <Input
          className="bg-[transparent] relative"
          type="text"
          style={{ width: "430px" }}
          size="large"
          placeholder="enter Your Username"
          name="username"
          value={inputValues.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <label className="cursor-pointer relative capitalize font-medium inline-block w-[7.75rem]">
          Password
        </label>
        <Input.Password
          className="bg-[transparent] relative"
          style={{ width: "430px" }}
          size="large"
          placeholder="enter Your password"
          name="password"
          value={inputValues.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <label className="cursor-pointer relative capitalize font-medium inline-block w-[7.75rem]">
          Database Name
        </label>
        <Input
          className="bg-[transparent] relative"
          type="text"
          style={{ width: "430px" }}
          size="large"
          placeholder="enter Your Name"
          name="databaseName"
          value={inputValues.databaseName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <label className="cursor-pointer relative capitalize font-medium inline-block w-[7.75rem]">
          Port Number
        </label>
        <Input
          className="bg-[transparent] relative"
          type="number"
          style={{ width: "430px" }}
          size="large"
          placeholder="enter Your Number"
          name="portNumber"
          value={inputValues.portNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <label className="cursor-pointer relative capitalize font-medium inline-block w-[7.75rem]">
          Database Type
        </label>
        <Select
          className="relative"
          style={{ width: "430px" }}
          size="large"
          placeholder="MYSQL"
          filterOption={(input: any, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          virtual={true}
          autoFocus
          showArrow={true}
          value={inputValues.databaseType}
          onChange={handleSelectChange}
        >
          <Select.Option value="MySQL">MySQL</Select.Option>
          <Select.Option value="Oracle">Oracle</Select.Option>
          <Select.Option value="PostgreSQL">PostgreSQL</Select.Option>
          <Select.Option value="Microsoft SQL Server">
            Microsoft SQL Server
          </Select.Option>
        </Select>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <Button
          className="self-stretch"
          type="primary"
          size="large"
          shape="default"
          onClick={handleSubmit}
        >
          Connect
        </Button>
      </div>

    </div>





  );
};

export default DatabaseConnector;
