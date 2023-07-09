import arrowRightUp from '../assets/arrow-right-up.svg'
import frontDeskCover from '../assets/front-desk/all-screen.webp'
import saiCover from '../assets/sai/sai-cover.webp'
import lignCover from '../assets/ligns/ligns-cover.webp'
import plugrCover from '../assets/plugr/plugr-cover.webp'
import { Link } from 'react-router-dom'

export const Works = () => {
  return (
    <section>
        <h2 className='text-3xl md:text-5xl font-semibold tracking-tighter'>Selected Projects</h2>
        <div className='grid grid-cols-12 gap-4 mt-5 md:mt-10'>
            {/* Front Desk */}
            <div className='col-span-12 works-container group'>
                <Link to="/frontdesk">
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-lg right-2 md:right-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <span className='chips hidden md:block'>2023</span>
                            <Link to='/frontdesk' className='md:hidden caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Front Desk - Automates the process of attending to guest</h3>
                            <a href="/" className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                    </div>
                    <img src={frontDeskCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
            {/* Saigloble */}
            <div className='col-span-12 md:col-span-8 works-container group'>
                <Link to="/">
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-lg left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <span className='chips hidden md:block'>2023</span>
                            <a href="/" className='md:hidden caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Front Desk - Automates the process of attending to guest</h3>
                            <a href="/" className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                    </div>
                    <img src={saiCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
            {/* Mobile App */}
            <div className='col-span-12 md:col-span-4 works-container group'>
                <a href="/">
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-sm left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <a href="/" className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                    </div>
                    <img src={lignCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </a>
            </div>
            {/* Front Desk */}
            <div className='col-span-12 works-container group'>
                <a href="/">
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-lg right-2 md:right-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <span className='chips hidden md:block'>2023</span>
                            <a href='/' className='md:hidden caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Front Desk - Automates the process of attending to guest</h3>
                            <a href="/" className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                    </div>
                    <img src={frontDeskCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </a>
            </div>
            {/* Mobile App */}
            <div className='col-span-12 md:col-span-4 works-container group'>
                <a href="/">
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-sm left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <a href="/" className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                    </div>
                    <img src={plugrCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </a>
            </div>
            {/* Saigloble */}
            <div className='col-span-12 md:col-span-8 works-container group'>
                <a href="/">
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-lg left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <span className='chips hidden md:block'>2023</span>
                            <a href="/" className='md:hidden caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Front Desk - Automates the process of attending to guest</h3>
                            <a href="/" className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </a>
                        </div>
                    </div>
                    <img src={frontDeskCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </a>
            </div>
        </div>
    </section>
  )
}
