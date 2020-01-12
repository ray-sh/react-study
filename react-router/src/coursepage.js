import React, { useState, useEffect } from "react";
import { getCourses } from "./api/courseApi";
import { Link } from "react-router-dom";
function CoursePage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(courses => setCourses(courses));
  }, []);
  return (
    <>
      <h1>Courses</h1>
      <Link to="/course" className="btn btn-primary">
        Add course{" "}
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>
                <Link to={"course/" + course.slug}> {course.title} </Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CoursePage;
