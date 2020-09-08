import React, { useState } from "react";
import { useHistory } from "react-router";
// import styled from 'styled-components';

export default function Login() {
  const [values, setValues] = useState({});
  const [error, setError] = useState({});
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const history = useHistory();
  async function fetchData() {
    const res = await fetch(
      "https://express-delivery-api.herokuapp.com/api/v1/user/login",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: values.user_name,
          password: values.password,
        }),
      }
    );
    res.json().then((res) => {
      if (Object.prototype.hasOwnProperty.call(res, "error")) {
        setError(res.error);
        setValues({
          user_name: "",
          password: "", 
        });
      }
      if (Object.prototype.hasOwnProperty.call(res, "token")) {
        localStorage.setItem("token", res.token);
        history.push("/stops");
      }
    });
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <h1>Delivery Scanner</h1>
      <p />
      <form onSubmit={handleSubmit}>
        <input
          name="user_name"
          type="text"
          placeholder="User Name"
          value={values.user_name}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
// const LoginTitle = styled.h1`
// font-weight: 500;
// `;
// const ErrorMessage = styled.p``;
// const LoginForm = styled.form``;
