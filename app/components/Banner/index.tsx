import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" className='bg-white'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            {/* <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} /> */}
                            {/* <h3 className='text-kellygreen text-sm font-semibold text-center lg:text-start'>Get 30% off on first enroll</h3> */}
                        </div>
                        <h1 className='text-black text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Study In CANADA</h1>
                        <center><h1 className='text-red text-lg font-semibold text-center lg:text-start opacity-75 pt-5 lg:pt-0'>We Are Coming Soon . . . !</h1></center>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
                            Afro Brave is a dynamic and innovative Canadian-based company dedicated to providing African
                            students with access to education and support services to help them pursue their academic goals.
                            We believe that every student deserves equal opportunities for education, and our mission is to
                            bridge the gap by connecting African students with educational institutions across Canada and the world.

                        </h3>
                                                     <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
                            At Afro Brave, we are fueled by our passion for empowering African students,
                            and we firmly believe that education has the power to transform lives. By
                            leveraging technology, fostering innovation, and collaborating with strategic
                            partners like Google, we strive to create a future where every African student
                            has equal access to quality education and the opportunity to achieve their full
                            potential.


</h3>
                        {/* <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-5 lg:pt-0">
                            <input type="Email address" name="q" className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black" placeholder="search programs..." autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                                <button type="submit" className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                    <Image src={'/assets/banner/search.svg'} alt="inputicon" width={30} height={30} />
                                </button>
                            </div>
                        </div> */}

                        {/* <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Admision Process</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Language Tests</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/assets/banner/check-circle.svg" alt="check-image" width={30} height={30} className='smallImage'/>
                                <p className='text-sm sm:text-lg font-normal text-black'>Scholarships</p>
                            </div>
                        </div> */}
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/logo.jpeg" alt="nothing" width={600} height={600} />
                    </div>
                    
                </div>
            </div>
            {/* second parag */}
            

   
               
   <div className='grid lg:grid-cols-12 space-x-1'>
  <div className='col-span-12 lg:col-start-2 lg:col-span-10'>
    <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
                        Our digital platform serves as a one-stop solution, empowering African students to apply directly
                        to educational institutions without incurring any extra costs. We understand the challenges that
                        students face when navigating the application process. We are committed to leveling the playing
                        field and making education more accessible.
                    </h3>
                    <br />
    <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
      We are dedicated to building a network of educational institutions that offer programs specifically designed for international students. Through our platform, institutions can easily add programs, ensuring that students have access to the most up-to-date information. By directly connecting students with these institutions, we streamline the application process and eliminate unnecessary intermediaries.
    </h3>
    
  </div>
</div>
  
  


            {/* third paragraph */}
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
  <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
    <div className='col-span-6 flex justify-center'>
      <Image src="/assets/banner/slogan.jpeg" alt="nothing" width={1000} height={805} />
    </div>
    <div className='col-span-6 flex flex-col justify-evenly pl-10'>
      <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
        Our commitment extends beyond the application process. We provide support services such as IELTS and TOEFL preparation courses to equip students with the necessary skills for academic success. We believe that education is not limited to the classroom, and our comprehensive approach ensures that students receive holistic support throughout their academic journey.
      </h3>
      <br />
      <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
        As we envision the future of Afro Brave, we are driven by a clear set of milestones. Over the next six months, we aim to further expand our network of educational institutions, increase the program offerings available to students, enhance our platform user experience, and solidify our position as a trusted platform for African students seeking international education opportunities.
      </h3>
      <br />
      <h3 className='text-black text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>
        Join us on this incredible journey as we revolutionize the way African students pursue their educational dreams. Together, we can build a brighter future for the next generation of African leaders.
      </h3>
    </div>
  </div>
</div>
        </div>
        // text changes
        
    )
}

export default Banner;
