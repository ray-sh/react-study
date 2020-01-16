import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
function ManageCourse(props) {
  //debugger，用来调试的关键字
  const [course, setCouse] = useState({
    id: null,
    slug: "",
    title: "",
    authId: null,
    category: ""
  });
  const [errors, setErrors] = useState({});

  function isValideForm() {
    let _error = {};
    if (course.title === "") _error.titleError = "Title is empty";
    if (course.authId === null) _error.authIdError = "AuthId is empty";
    if (course.category === "") _error.categoryError = "Category is empty";
    setErrors(_error);
    return Object.keys(_error) === 0;
  }
  function handleChange(event) {
    //[event.target.name]这里并不是Array，而是计算括号里面的变量，并把结果当作object的属性
    //clone先前的course，并且更新某些属性
    const _course = { ...course, [event.target.name]: event.target.value };
    setCouse(_course);
  }
  function handleSubmit(event) {
    //这个经常用到，it's used to prevent default behavior of the control
    event.preventDefault();
    if (!isValideForm()) return;
    courseApi.saveCourse(course).then(() => {
      //只有这个组件是被Route加载以后，才可以访问props.history，来实现页面的从定向
      props.history.push("/courses");
      toast.success("Course added");
    });
  }
  return (
    <div>
      Manage Course
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
}

export default ManageCourse;
