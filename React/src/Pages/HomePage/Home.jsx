import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import CourseCard from '../../Components/CourseCard/CourseCard'
import EnrolledCourseCard from '../../Components/EnrolledCourseCard/EnrolledCourseCard'

function Home() {
  return (
    <div className="home-container">
        <Navbar/>
        <div className="enrolled-courses">
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
            <EnrolledCourseCard/>
        </div>
    </div>
  )
}

export default Home