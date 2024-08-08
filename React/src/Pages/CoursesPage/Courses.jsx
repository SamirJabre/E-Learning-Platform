import React , { useEffect , useState } from 'react'
import './courses.css'
import Navbar from '../../Components/Navbar/Navbar'
import CourseCard from '../../Components/CourseCard/CourseCard'
import axios from 'axios'

function Courses({ userInfo }) {
    const [courses,setCourses] = useState([]);

    useEffect(async ()=> {
        console.log(userInfo.user._id);
        
        await axios.get('http://127.0.0.1:6969/courses')
        .then((result)=>{
            console.log(result.data);
            setCourses(result.data);
        })
},[])


    // useEffect(async ()=>{
    //     try {
    //     const response = await fetch('http://127.0.0.1:6969/courses' , {
    //         method : 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     const data = await response.json();
    //     if (response.ok) {
    //         console.log(data);
            
    //     } else {
    //       alert('Error: ' + data.error);
    //     }
    // }
    // catch(error){
    //         console.error('Error:', error);
            
    //     }
    // }
    //     ,[]);

  return (
    <>
    <Navbar/>
    <div className="courses-container">
      {courses.length > 0 ? (
        courses.map((course , index) => (
          <CourseCard 
            key={index}
            img={course.image}
            title={course.title}
            description={course.description}
            instructor={course.instructor}
            schedule={course.schedule}
            course_id={course._id}
            user_id={userInfo.user._id}
          />
        ))
      ) : (
        <p>Loading courses...</p>
      )}
      </div>
    </>
  );
}

export default Courses