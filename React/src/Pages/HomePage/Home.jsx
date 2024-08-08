import React , {useEffect , useState} from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import CourseCard from '../../Components/CourseCard/CourseCard'
import EnrolledCourseCard from '../../Components/EnrolledCourseCard/EnrolledCourseCard'
import axios from 'axios'

function Home({userInfo}) {
  const [userId, setUserId] = useState(userInfo.user._id);
  const coursesId=[];
  const courses = [];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('http://127.0.0.1:6969/enrollment/enrollmentbyid', {
  //         userId
  //       }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         }
  //       });
  
  //       const data = response.data;
  //       console.log(data);
  
  //       for (let i = 0; i < data.length; i++) {
  //         coursesId.push(data[i].courseId);
  //       }
  
  //       console.log(coursesId);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  //   // for (let i = 0; i < coursesId.length; i++){
  //   //   axios.get(`http://127.0.0.1:6969/courses/${coursesId[i]}`)
  //   //   .then((result)=>{console.log(result);
  //   //   });
  //   // }
  // }, [userId]);

  // useEffect(async()=>{
  //   for (let i = 0; i < coursesId.length; i++){
  //     await axios.get(`http://127.0.0.1:6969/courses/${coursesId[i]}`)
  //     .then((result)=>console.log(result));
  //   }
  // },[coursesId])


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