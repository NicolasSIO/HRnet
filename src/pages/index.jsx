import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployeeAction } from "@/redux/employee";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import { states, departments } from "@/api/data";
import Modal from "modal-vite-lib";
import "./index.css";

const Index = () => {
  // State for modal
  const [isDisplay, setIsDislplay] = useState(false);

  const { register, control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Function to format date to XX/XX/XXXX
    const formatDate = (originalDateStr) => {
      // Convertir la chaîne de caractères en objet Date
      const originalDate = new Date(originalDateStr);

      // Obtenir le jour, le mois et l'année
      const day = originalDate.getDate().toString().padStart(2, "0");
      const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
      const year = originalDate.getFullYear();

      // Créer la nouvelle chaîne de caractères avec le format souhaité
      const formattedDate = `${day}/${month}/${year}`;

      return formattedDate;
    };

    const dateBirth = formatDate(data.birthDate);
    const dateStart = formatDate(data.startDate);

    // Create an employee with form values
    const employee = {
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: dateBirth,
      dateStart: dateStart,
      street: data.street,
      city: data.city,
      state: data.state[0].value,
      zipCode: data.zipCode,
      department: data.department[0].name,
    };

    // Display modal
    setIsDislplay(true);
    
    dispatch(addEmployeeAction(employee));
  };
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
        <Link to="employeeList">View Current Employee</Link>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName")} />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName")} />

          <label htmlFor="birthDate">Date of Birth</label>
          <Controller
            control={control}
            name="birthDate"
            id="birthDate"
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
            id="startDate"
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
              id="state"
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  className="dropdown"
                  options={states}
                  onChange={(value) => onChange(value)}
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
            id="department"
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
        <Modal onClose={() => setIsDislplay(false)} isDisplay={isDisplay}>
          <h4>Employé créé</h4>
          <p>L'employé a été ajouté à la base !</p>
        </Modal>
      </div>
    </>
  );
};

export default Index;
