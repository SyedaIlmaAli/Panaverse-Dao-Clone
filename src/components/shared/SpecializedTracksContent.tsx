"use client"

import Image from 'next/image'
import QuaterBox from './QuaterBox'
import { specializedTracksBoxesData } from '@/data/specializedTracksBoxesData'
import { useState } from 'react'

function SpecializedTracksContent() {

    const [selectedItem, setSelectedItem] = useState("wmd");
    const selectedItemData = specializedTracksBoxesData.find((item) => item.slug === selectedItem)





    return (
        
        <div className='flex flex-col-reverse lg:flex-row mt-11 gap-x-6 gap-y-8'>
                {/* left content */}
            <div className='border self-start sticky top-28 basis-8/12 shadow-xl border-slate-200 py-8 px-8 rounded-xl'>
                <h4 className='text-lg font-semibold text-teal-700'>Specialized Track</h4>
                <h3 className="text-3xl  font-extrabold  text-gray-900 mt-2  max-w-xl">{selectedItemData?.header}</h3>
                <p className='my-3'>{selectedItemData?.desc}</p>
                <button className=' text-xl text-teal-700 gap-x-1 items-end underline flex'>Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current mt-3 text-teal-700]"
                    >
                        <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                        <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                    </svg>
                </button>
                <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                    {
                        selectedItemData?.Quarters.map((item) => {
                            return (
                                <QuaterBox
                                key={item.number}
                                    title={item.header}
                                    desc= {item.desc}
                                    number={item.number}
                                    haveBorder={false}
                                    haveHoverBG={false}
                                    haveBG={false}
                                />
                            )
                        })
                    }


                </div>

                {/* Right Content */}
            </div>
            <div className='px-4 py-6 space-y-4 gap-x-4 basis-4/12 '>
                {
                    specializedTracksBoxesData.map((item, i) => {
                        return (
                            <div key={item.slug} className='flex mt-4 cursor-pointer items-center gap-x-4' onClick={() => setSelectedItem(item.slug)}>
                                <div className='hover:scale-105 rounded'>
                                    <div className='flex-shrink-0 h-24 w-36'>
                                        <Image src={item.image} alt={item.header} className="h-24 w-48 object-cover rounded-md" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-primary font-medium'>Specialized Tracks</h4>
                                    <h3 className='font-bold text-md max-w-72 '>{item.header}</h3>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            
        </div>
    )
}

export default SpecializedTracksContent
