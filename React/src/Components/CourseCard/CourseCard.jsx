import React from 'react'
import './coursecard.css'

function CourseCard() {
  return (
    <div className="course-card-container">
        <div className="course-card-image-container">
            <img src="https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?s=612x612&w=0&k=20&c=2YJG1My6Lu1T1FnzIPbimRNORcSbSuz6A8zb7HKNpx4=" alt="Course Image" id='course-image'/>
        </div>
        <div className="course-card-details-container">
            <h1>Course Title</h1>
            <p>Course Description</p>
            <button>Enroll Now</button>
        </div>
    </div>
  )
}

export default CourseCard