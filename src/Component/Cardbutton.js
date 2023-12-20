import React from 'react'

function Cardbutton(props) {
  return (
   <>
     <button className="bg-[#E6992A] text-white xl:w-[117px] sm:w-[150px] w-full text-sm font-bold py-2 rounded-xl  hover:bg-[#F2C94C] hover:border-[#F2C94C] border border-[#E6992A] ">
          {props.buttonText}
        </button>
   </>
  )
}

export default Cardbutton
