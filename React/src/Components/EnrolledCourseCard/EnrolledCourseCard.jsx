import React from 'react'
import './enrolledcoursecard.css'

function EnrolledCourseCard() {
  return (
    <div className="enrolled-course-container">
        <h1>Course Title</h1>
        <div className="enrolled-course-resources">
            <h2>Resources</h2>
            <ul>
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
                <li>Resource 4</li>
                <li>Resource 5</li>
                <li>Resource 6</li>
                <li>Resource 7</li>
                <li>Resource 8</li>
                <li>Resource 9</li>
            </ul>
        </div>
        <button>Withdraw Course</button>
    </div>
  );
}

export default EnrolledCourseCard