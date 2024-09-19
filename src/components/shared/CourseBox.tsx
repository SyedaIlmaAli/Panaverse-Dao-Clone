function CourseBox(props:{text:string, desc:string, btnText:string}) {
  return (
    <div className=" md:h-[250px] max-w-screen-sm rounded-lg bg-gray-200 px-6 py-4">
      <h4 className="text-zinc-700 text-3xl font-extrabold">{props.text}</h4>
      <p className="text-neutral-700 mt-6 font-semibold">{props.desc}</p>
      <button className="bg-zinc-700 text-white mt-6 rounded-lg px-4 py-2 font-semibold text-lg hover:bg-zinc-950 hover:scale-105">{props.btnText}</button>
    </div>
  )
}

export default CourseBox
