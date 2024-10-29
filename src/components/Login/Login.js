import React, { useState } from "react";

function Login() {
  // State to hold form data and errors
  const [formData, setFormData] = useState({
    UserName: "",
    Email: "",
    Age: "",
    City: "Delhi", // default selected city
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};

    if (!formData.UserName) {
      newErrors.UserName = "User Name is required";
    }

    if (!formData.Email) {
      newErrors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }

    if (!formData.Age) {
      newErrors.Age = "Age is required";
    } else if (!/^\d+$/.test(formData.Age)) {
      newErrors.Age = "Age must be a valid number";
    }

    if (!formData.City) {
      newErrors.City = "City is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors if any
    } else {
      console.log("Form submitted successfully", formData);
      // Here you can handle the successful form submission, e.g., send form data to a server
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-content-center">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <dl>
            <dt>User Name</dt>
            <dd>
              <input
                name="UserName"
                type="text"
                value={formData.UserName}
                onChange={handleChange}
              />
            </dd>
            <dd className="text-danger">
              {errors.UserName && <span>{errors.UserName}</span>}
            </dd>

            <dt>Email</dt>
            <dd>
              <input
                name="Email"
                type="text"
                value={formData.Email}
                onChange={handleChange}
              />
            </dd>
            <dd className="text-danger">
              {errors.Email && <span>{errors.Email}</span>}
            </dd>

            <dt>Age</dt>
            <dd>
              <input
                name="Age"
                type="text"
                value={formData.Age}
                onChange={handleChange}
              />
            </dd>
            <dd className="text-danger">
              {errors.Age && <span>{errors.Age}</span>}
            </dd>

            <dt>City</dt>
            <dd>
              <select name="City" value={formData.City} onChange={handleChange}>
                <option value="Delhi">Delhi</option>
                <option value="Hyd">Hyderabad</option>
              </select>
            </dd>
          </dl>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
