import React from 'react'

const Button2 = ({firstType, text,width,height, ...rest}) => {
    const type1 = 'bg-[#ed2a4f] text-[#e6ebe0]'
    const type2 = 'bg-white text-[#ed2a4f]'
    const hgt = height || "";
    const wdt = width || "";
  return (
    <button className={`${firstType ? type1 :type2} ${wdt} ${hgt} px-7 font-bold py-2 border border-[#ed2a4f] hover:bg-[#698a93] hover:text-[#e6ebe0] hover:border-[#698a93] transition-all duration-300 `} {...rest}>{text}</button>
  )
}

export default Button2