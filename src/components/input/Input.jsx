import css from "./Input.module.scss";

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

  return (
    <form>
        <div className="form-group mb-3">
          {inputs.map((input) => (
            <div key={input.id}>
              {input.type === "textarea" ? (
                <>
                <label className="mb-2" htmlFor="">
                {input.label}
              </label>
                <textarea {...input} required />
                </>
              ) : (
                <>
                  <label className="mb-2" htmlFor="">
                    {input.label}
                  </label>
                  <input {...input} type={input.type} required />
                </>
              )}
            </div>
          ))}
        </div>
        <button type="submit" className={`btn ${css.cusBtn}`}>
          Submit
        </button>
      </form>
  );
}

export default Input;
