import arrowRightUp from '../assets/arrow-right-up.svg'
import frontDeskCover from '../assets/front-desk/front-desk-cover-2.webp'
import saiCover from '../assets/sai/sai-cover.webp'
import lignCover from '../assets/ligns/ligns-cover.webp'
import plugrCover from '../assets/plugr/plugr-cover.webp'
import fintechCover from '../assets/testguru/fintech-thumbnail.png'
import fittercover from '../assets/fitter/fitter-cover.png'
import { Link } from 'react-router-dom'

export const Works = () => {
  return (
    <section>
        <h2 className='text-3xl md:text-5xl font-semibold tracking-tighter'>Selected Projects</h2>
        <div className='grid grid-cols-12 gap-4 mt-5 md:mt-10'>
            {/* Front Desk */}
            <div className='col-span-12 bg-[#D3DBEC] works-container group'>
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
                <Link to="https://saiholdings.co/" target='blank'>
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI Design & Development</div>
                    <div className='card card-lg left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Sai Global</span>
                            <span className='chips hidden md:block'>2023</span>
                            <Link to="https://saiholdings.co/" target='blank' className='md:hidden caseBtn'>
                                Live preview
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Sai Global - Web Design and Development for Logistic Company</h3>
                            <Link to="https://saiholdings.co/" target='blank' className='caseBtn'>
                                Live preview
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                    </div>
                    <img src={saiCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
            {/* Job App */}
            <div className='col-span-12 md:col-span-4 works-container group'>
                <Link to={'/ligns'}>
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-sm left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <Link to={'/ligns'} className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                    </div>
                    <img src={lignCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
            {/* fintech */}
            <div className='col-span-12 works-container group'>
                <Link to={'/testguru'}>
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-lg right-2 md:right-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <span className='chips hidden md:block'>2023</span>
                            <Link to={'/testguru'} className='md:hidden caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Front Desk - Automates the process of attending to guest</h3>
                            <Link to={'/testguru'} className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                    </div>
                    <img src={fintechCover} class='p-10 bg-slate-200 group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
            {/* Plugr */}
            <div className='col-span-12 md:col-span-4 works-container group'>
                <Link to={'/plugr'}>
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-sm left-2 md:left-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <Link to={'/plugr'} className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                    </div>
                    <img src={plugrCover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
            {/* Fitter */}
            <div className='col-span-12 md:col-span-8 bg-[#D3DBEC] works-container group'>
                <Link to={'/fitter'}>
                    <div className='overlay  opacity-0 group-hover:opacity-100'></div>
                    <div className='tag'>UI/UX Design</div>
                    <div className='card card-lg right-2 md:right-5'>
                        <div className='flex justify-between'>
                            <span className='chips'>Front Desk</span>
                            <span className='chips hidden md:block'>2023</span>
                            <Link to={'/fitter'} className='md:hidden caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                        <div className='hidden md:flex items-end justify-between'>
                            <h3 className=''>Front Desk - Automates the process of attending to guest</h3>
                            <Link to={'/fitter'} className='caseBtn'>
                                See case
                                <img className='' src={arrowRightUp} alt="" />
                            </Link>
                        </div>
                    </div>
                    <img src={fittercover} class='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'  alt='' />
                </Link>
            </div>
        </div>
    </section>
  )
}
