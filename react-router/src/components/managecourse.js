import React, { useState } from "react";
import CourseForm from "./CourseForm";
function ManageCourse(props) {
  //debugger，用来调试的关键字
  const [course, setCouse] = useState({
    id: null,
    slug: "",
    title: "",
    authId: null,
    category: ""
  });
  function handleChange(event) {
    //[event.target.name]这里并不是Array，而是计算括号里面的变量，并把结果当作object的属性
    //clone先前的course，并且更新某些属性
    const _course = { ...course, [event.target.name]: event.target.value };
    setCouse(_course);
  }
  return (
    <div>
      Manage Course
      <CourseForm course={course} onChange={handleChange} />
    </div>
  );
}

export default ManageCourse;
