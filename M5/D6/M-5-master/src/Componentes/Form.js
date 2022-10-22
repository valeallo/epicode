import React, { useState } from "react";
import Hero from "./Hero";

const FormModalLogin = () => {
  const [formValue, setFormValue] = useState({});
  return (
    <form>
      Sign in
      <label for="e-mail">E-mail</label>
      <br />
      <input
        type="email"
        placeholder="e-mail"
        onChange={(e) =>
          setFormValue({
            ...formValue,
            email: e.target.value,
          })
        }
      >
        {" "}
      </input>
      <label for="e-mail">Password</label>
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setFormValue({
            ...formValue,
            email: e.target.value,
          })
        }
      >
        {" "}
      </input>
      <button>Save</button>
    </form>
  );
};
export default FormModalLogin;
