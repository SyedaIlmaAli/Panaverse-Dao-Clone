import Image from "next/image"
import Background from '@/assets/images/background2.webp'
import Wrapper from "@/components/shared/Wrapper"

function Outcome() {
    const outcomePrograms = [
        "Product Ownership",
        "Freelacing",
        "Global Marketing by Panaverse DAO",
        "Boosting Economy"
    ]
    return (
        <section >
            <Wrapper>
                <div className="flex gap-x-8 mt-16 md:mt-28 items-center flex-col-reverse md:flex-row ">
                    {/* Image */}
                    <div className="flex-1">
                        <Image src={Background} alt="outcome" />
                    </div>
                    {/* Content Right */}

                    <div className=" flex-1 relative">
                        <h2 className="text-4xl text-purple-700 font-bold">The Outcome for Participants of the Program</h2>
                        <p className="text-lg  text-slate-600 mt-4 font-medium">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan&apos;s software exports.</p>
                        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 ">
                            {
                                outcomePrograms.map((item, i) => (
                                    <div key={i} className="flex item-center gap-x-2 md:flex-row flex-col">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            style={{ fill: 'rgba(132, 90, 175, 1)' }}
                                            className="flex-shrink-0"
                                        >
                                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z" />
                                        </svg>
                                        <h3 className="font-medium text-lg">{item}</h3>
                                    </div>
                                ))
                            }
                            <div className="bg-[#FFD8F4] blur-3xl absolute mx-0 w-80 h-80 rounded-full -top-0 right-0 -z-10"></div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Outcome
