import React , {useState} from 'react'
import './coursecard.css'

function CourseCard({img , title, description , instructor , schedule , course_id , user_id}) {

  const [courseId , setCourseId] = useState(course_id);
  const [userId , setUserId] = useState(user_id);

  const handleEnrollment = async () => {
    
    await fetch('http://127.0.0.1:6969/enrollment' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, courseId }),
    })
  }
  
  

  return (
    <div className="course-card-container">
        <div className="course-card-image-container">
            <img src={img} alt="Course Image" id='course-image'/>
        </div>
        <div className="course-card-details-container">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>Instructor : {instructor}</p>
            <p>Course Schedule : {schedule}</p>
            <button onClick={()=>{handleEnrollment()}}>Enroll Now</button>
        </div>
    </div>
  )
}

export default CourseCard