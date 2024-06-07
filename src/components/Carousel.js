import React from 'react'

const Carousel = () => {
  return (
<div class="flex overflow-hidden space-x-12 group">
  <div class="flex space-x-8 animate-loop-scroll group-hover:paused">
    <img loading="lazy" src="images/logo1.svg" className="max-w-none h-5 " alt="" />
    <img loading="lazy" src="images/logo2.svg" className="max-w-none h-5  " alt="" />
    <img loading="lazy" src="images/logo3.svg" className="max-w-none h-5  " alt="" />
    <img loading="lazy" src="images/logo4.svg" className="max-w-none h-5 " alt="" />
    <img loading="lazy" src="images/logo5.svg" className="max-w-none h-5  " alt="" />
   
  </div>
  <div class="flex space-x-8 animate-loop-scroll group-hover:paused" aria-hidden="true">
  <img loading="lazy" src="images/logo1.svg" className="max-w-none h-5  " alt="" />
    <img loading="lazy" src="images/logo2.svg" className="max-w-none h-5  " alt="" />
    <img loading="lazy" src="images/logo3.svg" className="max-w-none h-5  " alt="" />
    <img loading="lazy" src="images/logo4.svg" className="max-w-none h-5  " alt="" />
    <img loading="lazy" src="images/logo5.svg" className="max-w-none h-5  " alt="" />
    
  </div>
</div>
  )
}

export default Carousel
