import React from 'react'
import "./style.css";

export default function Demo() {
  return (
    <div>
      <h5 className="mb-0">Demo</h5>

<Aaa />
    </div>
  )
}



const Aaa  = function() {
return (
  <div className='bg-neutral-800'>

<section className="py-10 bg-dark-400 md:py-20">
  <div className="container">
    <h2 data-aos="flip-left" className="text-white font-bold title-underline text-center text-2xl md:text-3xl after:left-1/2 after:-translate-x-1/2 pb-4 mb-[50px] md:mb-[74px]">
      預期上課流程
    </h2>
    <ol className="flex flex-wrap -mx-3 gap-y-[50px] text-white">
      <li data-aos="flip-left" data-aos-delay="100" className="w-full px-3 md:w-1/2 xl:w-1/4">
        <div className="h-full ring-1 ring-white rounded-xl relative p-12 before:absolute before:content-['01'] before:-top-6 before:left-10 before:px-2 before:bg-dark-400 before:text-5xl before:text-primary before:font-bold">
          <h3 className="mb-4 text-2xl font-bold">預約</h3>
          <p className="text-lg">線上預約指定課程與老師<br />由老師安排專屬課程</p>
        </div>
      </li>
      <li data-aos="flip-left" data-aos-delay="200" className="w-full px-3 md:w-1/2 xl:w-1/4">
        <div className="h-full ring-1 ring-white rounded-xl relative p-12 before:absolute before:content-['02'] before:-top-6 before:left-10 before:px-2 before:bg-dark-400 before:text-5xl before:text-primary before:font-bold">
          <h3 className="mb-4 text-2xl font-bold">付款</h3>
          <p className="text-lg">支援各種支付方式<br />提供12期分期付款</p>
        </div>
      </li>
      <li data-aos="flip-left" data-aos-delay="300" className="w-full px-3 md:w-1/2 xl:w-1/4">
        <div className="h-full ring-1 ring-white rounded-xl relative p-12 before:absolute before:content-['03'] before:-top-6 before:left-10 before:px-2 before:bg-dark-400 before:text-5xl before:text-primary before:font-bold">
          <h3 className="mb-4 text-2xl font-bold">上課</h3>
          <p className="text-lg">地點由您指定<br />密集性一對一教學</p>
        </div>
      </li>
      <li data-aos="flip-left" data-aos-delay="400" className="w-full px-3 md:w-1/2 xl:w-1/4">
        <div className="h-full ring-1 ring-white rounded-xl relative p-12 before:absolute before:content-['04'] before:-top-6 before:left-10 before:px-2 before:bg-dark-400 before:text-5xl before:text-primary before:font-bold">
          <h3 className="mb-4 text-2xl font-bold">提供滿意度</h3>
          <p className="text-lg">提供課程滿意度及回饋<br />讓我們持續成長與進步</p>
        </div>
      </li>
    </ol>
  </div>
</section>
  </div>

)
}