import React from "react";

function TextInput(props) {
  let classStyle = "form-group";
  if (props.error && props.error.length > 0) {
    classStyle += " has-error";
  }
  return (
    <div className={classStyle}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        />
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
}

export default TextInput;
