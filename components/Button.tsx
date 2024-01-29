"use client";


interface buttonProps {
    text: string;
}



export default function Button({text}: buttonProps) {
  return (
    <button className="bg-[#161b32] text-white border-4 border-transparent lg:py-2 lg:px-6 lg:text-2xl rounded-full text-sm px-4 py-3  hover:bg-transparent hover:border-[#161b32] hover:border-4 hover:text-[#161b32] transition-all duration-150 hover:scale-110 uppercase tracking-tighter">
      {text}
    </button>
  )
}
