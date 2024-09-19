import Wrapper from "@/components/shared/Wrapper"
import HeroPoster from '@/assets/images/panaverse-hero-image.webp'
import Image from "next/image"
import Button from "@/components/shared/Button"

const Hero = () => {
    return (
        <section className="mt-8 lg:mt-14">
            <Wrapper>
                {/* Left Side */}
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="flex-1">
                        <h4 className='text-lg font-semibold text-z text-primary'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className="text-5xl  sm:text-6xl font-extrabold leading-[50px] text-gray-900  max-w-sm">Certified Web 3.0 and Metaverse Developer</h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-sm  font-medium ">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet. </p>
                            <p className="mt-6 text-lg text-slate-600 max-w-sm  font-medium " >Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, 
                            and Bioinformatics Technologies</p>
                            <div >

                            <Button text= {"Apply Now"}/>
                            </div>
                    </div>
                    {/* Right Side */}
                    <div className="flex-1 mt-8">
                    <Image src={HeroPoster} alt="Hero Panaverse Image"/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Hero
