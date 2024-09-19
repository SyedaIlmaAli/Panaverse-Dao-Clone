import Button from "@/components/shared/Button"
import Globe from '@/assets/images/globeimg.webp'
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"
import CourseBox from "@/components/shared/CourseBox"

function Courses() {

  const courseBoxData= [
    {
      id:1,
      text: 'Quarter : 4',
      desc: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
      btnText: 'Duration: (13 weeks)'
    },
    {
      id:2,
      text: 'Quarter : 5',
      desc: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
      btnText: 'Duration: (13 weeks)'
    }
  ]
  return (
    <Wrapper>
        <div className="flex flex-col md:flex-row mt-20">
      {/* Left Content */}
      <div>
        <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-[#8a34d1] via-[#634ccd] to-[#d46a8e] bg-clip-text text-transparent  font-extrabold   max-w-xl">Common In All</h3>
        <h2 className="text-4xl md:text-6xl font-extrabold">Specializations</h2>
        <p className="text-slate-700 text-xl mt-8 mb-2 font-semibold max-w-screen-sm">Before going forward everyone has to complete three complusory quarters</p>
        <Button text= "Sign Up"/>
      </div>
      {/* Image */}
      <Image src={Globe} alt="course-page-globe" className="" width={400} height={400}/>
    </div>
    {/* Courses boxes */}
    <div className="flex flex-col md:flex-row gap-y-5 gap-x-6 my-32">
      {
        courseBoxData.map((item) => {
          return(
            
              <CourseBox key={item.id} text={item.text} desc={item.desc} btnText={item.btnText}/>
         
          )
        })
      }
    </div>
      </Wrapper>
  )
}

export default Courses
