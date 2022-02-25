import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "example@gmail.com",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (e) => {
    e.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  return (
    <div className="add-property">
      <p>Add A Property</p>
      <form className="addproperty-form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            className="addproperty-form_fields"
            placeholder="House for sale"
          />
        </label>

        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            className="addproperty-form_fields"
            placeholder="Flat"
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            min="0"
            max="10"
            value={fields.bedrooms}
            onChange={handleFieldChange}
            className="addproperty-form_fields"
            placeholder="0"
          />
        </label>

        <label htmlFor="bathrooms">
          Bathrooms
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            min="0"
            max="5"
            value={fields.bathrooms}
            onChange={handleFieldChange}
            className="addproperty-form_fields"
            placeholder="0"
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            value={fields.price}
            onChange={handleFieldChange}
            className="addproperty-form_fields"
            placeholder="100,000"
          />
        </label>

        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            className="addpropery-form__fields"
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Shefield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            className="addproperty-form_fields"
            placeholder="example@gmail.com"
          />
        </label>

        <button className="addproperty-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
