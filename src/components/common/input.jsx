import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  console.log(rest);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //   ref={this.username}
        {...rest} //wow!
        autoFocus
        className="form-control"
        id={name}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;