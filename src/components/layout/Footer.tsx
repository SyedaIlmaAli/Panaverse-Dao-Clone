import Image from 'next/image'
import Logo from '@/assets/images/logo.webp'
import Wrapper from '../shared/Wrapper'

function Footer() {

    const programSectionData = [
        "Web 3.0 and Metaverse Developer",
        'Artificial Intelligence',
        'Cloud-Native Computing',
        'Ambient Computing and IoT',
        'Genomics and Bioinformatics',
        'Network Programmability and Automation'
    ]

    const CompulsoryCourses = [
        'Quarter 1',
        'Quarter 2',
        'Quarter 3'
    ]


    return (
        <div className='border mt-20'>
            <div className='mt-11 mb-5 '>
                <Wrapper>
                    <div className='flex flex-col md:flex-row justify-evenly'>
                        {/* Left */}
                        <div >
                            {/* Image */}
                            <div>
                                <Image src={Logo} alt='Panaverse Dao Logo' />
                            </div>
                            {/* text */}
                            <p className='mt-5 text-slate-700 text-xl max-w-screen-sm'>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                            {/* Icons */}
                            <div className='flex gap-x-5 cursor-pointer  my-6'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(212, 106, 142, 1)' }}
                                    className='hover:scale-105'
                                >
                                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(212, 106, 142, 1)' }}
                                    className='hover:scale-105'
                                >
                                    <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(212, 106, 142, 1)' }}
                                    className='hover:scale-105'
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="45"
                                    height="45"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(212, 106, 142, 1)' }}
                                    className='hover:scale-105'
                                >
                                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                                </svg>
                            </div>
                        </div>
                        {/* Center */}
                        <div>
                            <h2 className='font-bold text-xl'>Programs</h2>
                            {
                                programSectionData.map((item,i) => {
                                    return (
                                        <div key={i} className='my-3 text-slate-700'>
                                            <p className='text-lg hover:cursor-pointer'>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* Right */}
                        <div>
                            <h2 className='font-bold text-xl'>Compulsory Courses</h2>
                            {
                                CompulsoryCourses.map((item,i) => {
                                    return (
                                        <div key={i} className='my-3 text-slate-700'>
                                            <p className='text-lg cursor-pointer'>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}

export default Footer
