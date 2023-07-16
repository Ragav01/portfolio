import cover from '../assets/ligns/ligns-cover-banner.webp'
import reviews from '../assets/ligns/Review.svg'
import infoArch from '../assets/ligns/Information-architecture.svg'
import userFlow from '../assets/ligns/Userflow.svg'
import typograph from '../assets/ligns/Typography.svg'
import colors from '../assets/ligns/Colors.svg'
import uiElements from '../assets/ligns/UI-element.svg'
import allScreen from '../assets/ligns/all-screen.svg'
import hiring from '../assets/ligns/hiring.svg'

export const JobApp = () => {
  window.scrollTo(0, 0)
  return (
    <>
      <div className='max-w-7xl md:mx-auto mx-3 md:mt-10 p-4 md:p-10 pb-0 md:pb-0 bg-[#0D3562] rounded-xl md:rounded-3xl'>
          <img  src={cover} alt="cover-img" />
      </div>
      {/* Overview */}
      <section className='flex flex-col md:flex-row gap-y-5'>
        <div className='flex-1'>
          <p className='font-medium'>Overview</p>
        </div>
        <div className='flex-1 space-y-5'>
          <h1 className='text-4xl tracking-tight font-semibold'>Lings.app Improving the Recruitment process</h1>
          <p className='text-gray-700 text-lg leading-8'>Lings.app Network is an effective multi-job posting platform that makes finding applicants easy. We help recruiters and employers reach applicants in a fast, efficient and cost-effective way.</p>
          <p className='text-gray-700 text-lg leading-8'>With the increasing number of job applications posted every year by recruiters, there are increasing number of candidates willing to apply for those jobs, but neither the recruiters are able to target potential candidates nor the candidates are able to find suitable recruiters. Also not every job portal has jobs for all segment types i.e. from beginner to experienced profiles. So i took up this problem statement and created the case study around it. I have applied the following design process and arrived at the final conclusion.</p>
          <div className='flex flex-wrap gap-10 pt-5'>
            <div className='space-y-3'>
              <h3 className='font-bold'>Role</h3>
              <p className='text-gray-700'>UI/UX Designer</p>
              <p className='text-gray-700'>UI Developer</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Tools</h3>
              <p className='text-gray-700'>Figma</p>
              <p className='text-gray-700'>Flutter</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Timeline</h3>
              <p className='text-gray-700'>6 Weeks - Design </p>
              <p className='text-gray-700'>2 Weeks - UI Development</p>
            </div>
          </div>
        </div>
      </section>
      {/* Business Needs */}
      <section className='flex flex-col md:flex-row gap-y-5'>
        <div className='flex-1'>
          <p className='font-medium'>Business need</p>
        </div>
        <div className='flex-1 space-y-5'>
          <h3 className='text-2xl tracking-tight font-semibold'>Problem Statement</h3>
          <ul className='list-disc pl-6 space-y-5'>
            <li className='text-gray-700 text-lg leading-8'> Not able to find jobs of different company size i.e. from startups to MNCs </li>
            <li className='text-gray-700 text-lg leading-8'> Confused about applying for jobs that require more years of experience with same expertise and knowledge</li>
            <li className='text-gray-700 text-lg leading-8'> Very lengthy onboarding process into job portals</li>
            <li className='text-gray-700 text-lg leading-8'> No application tracker to know the status of applied jobs</li>
          </ul>
          <h3 className='text-2xl tracking-tight font-semibold pt-5'>Solution</h3>
          <ul className='list-disc pl-6 space-y-5'>
            <li className='text-gray-700 text-lg leading-8'> Providing all types of company sizes i.e. from startups to MNCs </li>
            <li className='text-gray-700 text-lg leading-8'> To answer a quiz and score a minimum of as per the companies requirement and get shortlisted for next round on clearance</li>
            <li className='text-gray-700 text-lg leading-8'> Easy and quick onboarding i.e. within 3-4 steps</li>
            <li className='text-gray-700 text-lg leading-8'> Application tracker to know the current status as well as next stage of application </li>
          </ul>
        </div>
      </section>
      <section className='bg-white rounded-xl md:rounded-3xl p-3 md:p-10'>
        <img src={hiring} alt="hiring" />
      </section>
      {/* Reviews */}
      <section className='space-y-5 md:space-y-10'>
        <h2 className='text-4xl tracking-tight font-semibold'>Competitive Analysis</h2>
        <img src={reviews} alt="Competitive-Analysis" />
      </section>
      {/* Information architecture */}
      <div className='bg-[#071545]'>
        <section className='space-y-5 md:space-y-10'>
          <h2 className='text-4xl text-white tracking-tight font-semibold'>Information architecture</h2>
          <img src={infoArch} alt="Information-architecture" />
        </section>
      </div>
      {/* User flows */}
      <div className='bg-white'>
        <section className='space-y-5 md:space-y-10'>
          <h2 className='text-4xl tracking-tight font-semibold'>User flow</h2>
          <img src={userFlow} alt="User-flow" />
        </section>
      </div>
      {/* Style Guides */}
      <section className='space-y-5 md:space-y-10'>
          <h2 className='text-4xl tracking-tight font-semibold'>Style Guides</h2>
          <img src={typograph} alt="typograph" />
          <img src={colors} alt="colors" />
      </section>
      {/* Components */}
      <section className='space-y-5 md:space-y-10'>
          <h2 className='text-4xl tracking-tight font-semibold'>Components</h2>
          <img src={uiElements} alt="components" />
      </section>
      {/* All Screen */}
      <div className='bg-[#071545]'>
        <section className='space-y-5 md:space-y-10'>
            <img src={allScreen} alt="components" />
        </section>
      </div>
    </>
  )
}
