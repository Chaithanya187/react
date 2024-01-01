import { useState } from "react";

const FormComponent = () => {
  const [formfields, setFormFields] = useState({
    name: {
      value: ''
    },
    email: {
      value: ''
    }
  });

  const FormHandler = (e) => {
    e.preventDefault();
    // Perform any other actions you need when the form is submitted
    console.log(formfields);
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value
      }
    }));
  };

  return (
    <div>
      <form onSubmit={FormHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formfields.name.value}
          onChange={changeHandler}
        />
        <br />
        <input
          type="email"
          placeholder="Enter the Email"
          name="email"
          value={formfields.email.value}
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
