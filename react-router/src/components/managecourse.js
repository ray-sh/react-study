import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
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
  function handleSubmit(event) {
    //这个经常用到，it's used to prevent default behavior of the control
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      //只有这个组件是被Route加载以后，才可以访问props.history，来实现页面的从定向
      props.history.push("/courses");
    });
  }
  return (
    <div>
      Manage Course
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ManageCourse;
