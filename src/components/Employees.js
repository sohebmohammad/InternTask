import React from "react";
function Employees(props) {
  return (
    <>
      <div className="container">
        {props.objects.map((e, i) => (
          <div key={i}>
            <h1>{e.name}</h1>
            <h1>{e.password}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Employees;
