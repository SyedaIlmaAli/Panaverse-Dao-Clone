const Button = (props:{text: string}) => {   
  return (
    
      <button className="bg-[#D46A8E] rounded-full mt-5 px-7 py-4 text-sm text-white font-bold hover:shadow-lg hover:bg-pink-600  hover:duration-400 hover:scale-105">{props.text}</button>
    
  )
}

export default Button
