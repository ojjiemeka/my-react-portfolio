import { useState } from "react";
import css from "./Input.module.scss";
// import axios from "axios";

function Input() {
  const inputs = [
    {
      id: 1,
      type: "text",
      label: "Name",
      className: "mb-1 form-control",
      name: "name",
    },
    {
      id: 2,
      type: "text",
      label: "Email",
      className: "mb-1 form-control",
      name: "email",
    },
    {
      id: 3,
      type: "textarea", // Use "textarea" for the type
      label: "Message",
      className: "mb-1 form-control",
      name: "message",
      rows: "3",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormData(() => ({
      ...formData, [e.target.name]: e.target.value
    }));
    // console.log(setFormData);
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Now, formData contains the form data
    console.log(formData);

    // If you want to make an HTTP request with Axios, you can uncomment and use the following code:

    // let url = "https://triiaconstructions.homes/api/forms";

    // axios
    //   .post(url, formData) // Pass the URL as the first argument and formData as the second argument
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };


  return (
    <form onSubmit={submitForm}>
        <div className="form-group mb-3">
          {inputs.map((input) => (
            <div key={input.id}>
              {input.type === "textarea" ? (
                <>
                <label className="mb-2">
                {input.label}
              </label>
                <textarea {...input}
                  onChange={onChangeHandler}
                  required 
                  />
                </>
              ) : (
                <>
                  <label className="mb-2">
                    {input.label}
                  </label>
                  <input 
                  {...input} 
                  type={input.type}
                  onChange={onChangeHandler}
                    required 
                    />
                </>
              )}
            </div>
          ))}
        </div>
        <button className={`btn ${css.cusBtn}`}>
          Submit
        </button>
      </form>
    
  );
}

export default Input;
