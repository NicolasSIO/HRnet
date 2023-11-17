import React from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./employeeList.css";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employee.employee);
  console.log(employees);
  const navigate = useNavigate();

  const columns = [
    { key: "firstName", name: "First Name" },
    { key: "lastName", name: "Last Name" },
    { key: "dateStart", name: "Start Date" },
    { key: "department", name: "Department" },
    { key: "birthDate", name: "Date of Birth" },
    { key: "street", name: "Street" },
    { key: "city", name: "City" },
    { key: "state", name: "State" },
    { key: "zipCode", name: "Zip Code" },
  ];

  return (
    <main>
      <h1>Current Employees</h1>
      <DataGrid className="table" columns={columns} rows={employees} />
      <button onClick={() => navigate("/")}>Home</button>
    </main>
  );
};

export default EmployeeList;
