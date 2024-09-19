import Wrapper from "@/components/shared/Wrapper"
import Button from "@/components/shared/Button"
import QuaterBox from "@/components/shared/QuaterBox"

const CoreCourses = () => {

    
    return (
        <section className="mt-16 lg:mt-28">

            <Wrapper>
                <div className="max-w-screen-xl relative">
                    <h4 className='text-lg font-semibold text-primary '>Program of Studies</h4>
                    <h2 className="text-4xl  font-bold  text-gray-900  max-w-xl">Core Course <br />
                        (Common in All Specialisation):</h2>
                    <p className="mt-6 text-lg text-slate-600 font-medium max-w-sm">Every participant of the program will start by completing the following three core courses</p>
                    <div className="bg-violet-200 blur-3xl absolute mx-0 w-80 h-80 rounded-full -top-10 left-0 -z-10"></div>
                    <div>
                        <Button text={"Learn More"} />
                    </div>
                </div>
                {/* Boxes */}
                <div className="my-20 grid gap-8 md:flex md:flex-row items-stretch">
                    <QuaterBox title="Quater 1" desc="CS-101: Object-Oriented Programming using TypeScript" number={1} />
                    <QuaterBox title="Quater 2" desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 14 and Cloud Development Kit (CDK) for Terraform" number={2} />
                    <QuaterBox title="Quater 3" desc="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development" number={3} />
                </div>
            </Wrapper>
        </section>
    )
}

export default CoreCourses
