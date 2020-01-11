import React from "react";
function ManageCourse(props) {
  //debugger，用来调试的关键字
  return <div>{props.match.params.slug}</div>;
}

export default ManageCourse;
