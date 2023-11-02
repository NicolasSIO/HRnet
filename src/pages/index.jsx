import React from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import { states, departments } from "@/api/data";
import "./index.css";

const Index = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <h1 className="title">HRnet</h1>
        <Link to="employeeList">View Current Employee</Link>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName")} />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName")} />

          <label htmlFor="dateBirth">Date of Birth</label>
          <Controller
            control={control}
            name="dateBirth"
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                type="date"
                onChange={(date) => {
                  onChange(date);
                }}
                onBlur={onBlur}
                selected={value}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                todayButton="Today"
              />
            )}
          />

          <label htmlFor="startDate">Start date</label>
          <Controller
            control={control}
            name="startDate"
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                type="date"
                onChange={(date) => {
                  onChange(date);
                }}
                onBlur={onBlur}
                selected={value}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                todayButton="Today"
              />
            )}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input type="text" id="street" {...register("street")} />

            <label htmlFor="city">City</label>
            <input type="text" id="city" {...register("city")} />

            <label htmlFor="state">State</label>
            <Controller
              control={control}
              name="state"
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  className="dropdown"
                  options={states}
                  onChange={(values) => onChange(values)}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" {...register("zipCode")} />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Controller
            control={control}
            name="department"
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                className="dropdown"
                options={departments}
                onChange={(values) => onChange(values)}
                onBlur={onBlur}
                selected={value}
                labelField="name"
                valueField="id"
              />
            )}
          />

          <button type="submit">Save</button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default Index;
