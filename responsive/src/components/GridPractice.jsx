import React from 'react'

const GridPractice = () => {
    const data = [
        {
            name : "Alisha Sedai",
            desc : "Software Deveopler"
        },
        {
            name : "Alisha Sedai 1",
            desc : "JAVA Deveopler"
        },
        {
            name : "Alisha Sedai 3",
            desc : "Full Stack Deveopler"
        },
        {
            name : "Alisha Sedai 4",
            desc : "Web Developer"
        },
        {
            name : "Alisha Sedai 5",
            desc : "Backend Deveopler"
        },
        {
            name : "Alisha Sedai 6",
            desc : "Mobile App Deveopler"
        }

    ]
  return (
    <div className='min-h-[200px] flex-col flex items-center justify-center  w-full'>
       <div className='bg-blue-400 sm:w-[300px] w-[250px] h-[40px] lg:w-[780px] mb-2 rounded-lg'>
         <h2 className=' text-center'>Hello</h2>
       </div>
     <div className=' grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center place-content-center  justify-items-center gap-2 w-[800px]'>
         {data.map((d,index) => {
        return <div key={index} className='shadow-lg hover:shadow-[10px_10px_30px_rgba(130,130,246,0.4)] mb-4 mt-10 border-2 font-semibold bg-red-600 hover:border-blue-200 text-center w-60 h-16 rounded-xl  border-red-100 transition-all duration-300 ease-in-out'>
            <h2 className=''>{d.name}</h2>
            <p className='text-sm'>{d.desc}</p>
        </div>
      })}
     </div>
    </div>
  )
}

export default GridPractice
