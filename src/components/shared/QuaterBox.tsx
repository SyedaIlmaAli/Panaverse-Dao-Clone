import { FC } from "react"

interface IProps {
  title: string, 
  desc: string, 
  number: number, 
  haveBorder? : boolean,
  haveBG?: boolean,
  haveHoverBG?: boolean
}

const QuaterBox : FC<IProps>= ({title, desc, number, haveBorder= true, haveBG= true, haveHoverBG= true}) => {
  return (
    
                    <div className={`flex flex-col z-10 relative justify-center  items-center  cursor-pointer px-8 py-16 flex-1   rounded-lg sm:w-auto hover:bg-gradient-to-r  hover:scale-105 ${haveBorder && 'border'} ${haveBG && 'bg-gradient-to-r from-pink-200 to-gray-300'} ${haveHoverBG && 'hover:from-pink-300 hover:to-purple-200'}`}>
                        <h4 className="text-lg z-10 font-bold">{title}</h4>
                        <p className="mt-2 text-neutral-700 max-w-sm z-10">{desc}</p>
                        <div className="absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-0">{number}</div>
                    </div>
                    
  )
}

export default QuaterBox


