import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "./employeeList.css";

const EmployeeList = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.employee.employee);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
      wrap: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      wrap: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.dateStart,
      sortable: true,
      wrap: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
      wrap: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.birthDate,
      sortable: true,
      wrap: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
      wrap: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      wrap: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
      wrap: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
      wrap: true,
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <main>
      <h1>Current Employees</h1>
      <DataTableExtensions print={false} export={false} {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
      <button onClick={() => navigate("/")}>Home</button>
    </main>
  );
};

export default EmployeeList;
