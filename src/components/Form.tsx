import React, { useState } from "react";

import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

const Form = () => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    avatar: "",
    subMonths: 0,
    description: "",
  });

  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            onChange={handleChange}
            value={inputValues.nick}
            name="nick"
            placeholder="nick"
          />
          <input
            type="number"
            onChange={handleChange}
            value={inputValues.subMonths}
            name="subMonths"
            placeholder="subMonths"
          />
          <input
            type="text"
            onChange={handleChange}
            value={inputValues.avatar}
            name="avatar"
            placeholder="avatar"
          />
          <input
            type="text"
            onChange={handleChange}
            value={inputValues.description}
            name="description"
            placeholder="description"
          />
          <button>Save new sub</button>
        </form>
      </div>
    </>
  );
};

export default Form;
