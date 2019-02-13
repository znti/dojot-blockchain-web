import React from "react";

export default props => {
  let inputText = "";
  if (!!props.helperText) {
    inputText = <div className={"input-message"}>{props.helperText}</div>;
  }

  if (!!props.helperErrorText) {
    inputText = (
      <div className={"input-error-message"}>{props.helperErrorText}</div>
    );
  }
  return (
    <div className={"input-container"}>
      <label
        className={
          "input-label " +
          (!!props.value ? (!!props.value.length ? "has-content" : "") : "")
        }
      >
        {props.placeholder}
      </label>
      <div className={""}>
        <input
          type={props.type}
          name={props.name}
          className={
            "input-field " +
            (!!props.error || props.error === undefined ? "" : "input-error")
          }
          required={!!props.required}
          disabled={!!props.disabled}
          value={props.value}
          onChange={props.change}
        />
        {inputText}
      </div>
    </div>
  );
};
