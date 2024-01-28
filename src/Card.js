import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "./Nav";
function Card() {



useEffect(() => {
    AOS.init({
     
      duration: 1000,
      offset: 300,
    });
  }, []);


  return (
    <>
    <HamburgerMenu/>


      <h1 className="max-w-[1200px] shadow-lg mx-auto m-7 p-4 bg-purple-200 text-center text-4xl  font-serif ...">Our-Card </h1>

      <div className="Container max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-3 py-5  font-serif ...">

        <div className="text-center shadow-lg flex  justify-center ">

          <div className="overflow-hidden ">

            <img src="./th.jpg" className="hover:scale-125 duration-1000 " />

            <h1 className="py-2 text-2xl">F-itm-1</h1>
          </div>
        </div>





        <div className="text-center shadow-lg flex  justify-center ">

          <div className="overflow-hidden">

            <img src="./th.jpg" className="hover:scale-125 duration-1000 " />

            <h1 className="py-2 text-2xl">F-itm-1</h1>
          </div>
        </div>



        
        <div className="text-center shadow-lg flex  justify-center  ">

          <div className="overflow-hidden">

            <img src="./th.jpg" className="hover:scale-125 duration-1000 " />

            <h1 className="py-2 text-2xl">F-itm-1</h1>
          </div>
        </div>




        <div className="text-center shadow-lg flex  justify-center">

          <div className="overflow-hidden">

            <img src="./th.jpg" className="hover:scale-125 duration-1000 " />

            <h1 className="py-2 text-2xl">F-itm-1</h1>
          </div>
        </div>


      </div>

     <div className="max-w-[1200px] shadow-lg mx-auto m-5 p-4 bg-purple-200">
        <h1 className="text-4xl text-center font-serif ...">Our-Services</h1>
     </div>



<div data-aos="fade-up" className="max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 py-5 font-serif ...">



<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b">

<p> <FontAwesomeIcon icon={faCode} className="animate-bounce " /></p><h1>&gt; </h1>

<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>


<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000">

<p> <FontAwesomeIcon icon={faCode} className="animate-bounce " /></p><h1>&gt; </h1>


<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>

<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b">

<p> <FontAwesomeIcon icon={faCode} className="animate-bounce " /></p><h1>&gt; </h1>


<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>

<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b">

<p> <FontAwesomeIcon icon={faCode} className="animate-bounce " /></p><h1>&gt; </h1>

<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>

<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b">

<p> <FontAwesomeIcon icon={faGlobe} className="animate-spin  " /></p> <h1>&gt; </h1>

<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>

<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b">

<p> <FontAwesomeIcon icon={faGlobe} className="animate-spin  " /></p> <h1>&gt; </h1>

<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>

<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b">
<p> <FontAwesomeIcon icon={faGlobe} className="animate-spin  " /></p> <h1>&gt; </h1>


<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>

<div className="shadow-lg text-center  p-4 rounded  hover:text-white hover:bg-blue-500 text-blue-500 duration-1000 b" >

<p> <FontAwesomeIcon icon={faGlobe} className="animate-spin  " /></p><h1>&gt; </h1>

<p className="text-center"> Weaving pixels into captivating user journeys, one design at a time</p>


</div>
</div>


<div className="max-w-[1200px] mx-auto p-4 m-5 shadow-xl text-center bg-purple-200">
    
      <h1 className="text-4xl font-serif ... ">About Section </h1>

</div> 


<div data-aos="fade-up" className="max-w-[1200px] mx-auto lg:flex md:flex-row sm:flex-row space-x-3 py-5 ">
<div className="text-center border border-solid border-black-200 shadow-lg">
  <h1 className="font-bold">Company</h1>
  In a world shaped by rapid technological advancements, staying informed is paramount. The ever-evolving landscape demands adaptability and continuous learning.
</div>
  <div className="text-center border border-solid border-black-200 shadow-lg">
  <h1 className="font-bold">Plans</h1>
  In a world shaped by rapid technological advancements, staying informed is paramount. The ever-evolving landscape demands adaptability and continuous learning.
</div>
  
  <div className="text-center border border-solid border-black-200 shadow-lg">
  <h1 className="font-bold">Services</h1>
  In a world shaped by rapid technological advancements, staying informed is paramount. The ever-evolving landscape demands adaptability and continuous learning.
</div>
    
  </div>
  <div  data-aos="fade-up" className="bg-purple-200 py-5 mt-5 flex flex-col  ">

      <div className="space-y-2  m-3 ">
        <h1 className="text-xl font-bold">Connect with Me</h1>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faFacebook} className="animate-bounce " />
          <p>Facebook</p>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faInstagram} className="animate-bounce " />
          <p>Instagram</p>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faYoutube} className="animate-bounce " />
          <p>Youtube</p>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faLinkedin} className="animate-bounce " />
          <p>LinkedIn</p>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faGithub} className="animate-bounce " />
          <p>GitHub</p>
        </div>
      </div>
      <h1 className="text-xl mt-3 lg:text-center animate-pulse">&copy; 2024 RohitAnnie. All Rights Reserved.</h1>
    </div>
   
    </>
  );



  
}

export default Card;
