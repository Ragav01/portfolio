import competitor from '../assets/fitter/CompetitiveAnalysis.svg'
import competitor1 from '../assets/fitter/CompetitiveAnalysis1.svg'
import survey from '../assets/fitter/Survey.svg'
import affinityMap from '../assets/fitter/AffinityMap.png'
import persona from '../assets/fitter/Persona.svg'
import journeyMap from '../assets/fitter/Journey_map.svg'
import cover from '../assets/fitter/fitter-cover.png'
import informationArchitecture from '../assets/fitter/Information_architecture.svg'

export const Fitter = () => {
  return (
    <>
    {/* Banner */}
    <div className='max-w-7xl md:mx-auto mx-3 md:mt-10 overflow-hidden md:h-[680px] rounded-xl md:rounded-3xl'>
        <img  src={cover} alt="cover-img" />
      </div>
     {/* Overview */}
     <section className='flex flex-col md:flex-row gap-y-5'>
        <div className='flex-1'>
          <p className='font-medium'>Overview</p>
        </div>
        <div className='flex-1 space-y-5'>
          <h1 className='text-4xl tracking-tight font-semibold'>A mobile app for complete fitness</h1>
          <p className='text-gray-700 text-lg leading-8'>Fitter is a gym trainer app that virtual guides the user to perform their workouts in their preferred environment. Set your goals and start working towards achieving them with a few taps. Helps you to track your progress and update your fitness profile simultaneously. Its main purpose is to show users what exercises to do and explain exactly how to do them.</p>
          <div className='flex flex-wrap gap-10 pt-5'>
            <div className='space-y-3'>
              <h3 className='font-bold'>Role</h3>
              <p className='text-gray-700'>UX Design</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Tools</h3>
              <p className='text-gray-700'>Mirro</p>
            </div>
            <div className='space-y-3'>
              <h3 className='font-bold'>Timeline</h3>
              <p className='text-gray-700'>6 Weeks - Design </p>
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
          <h1 className='text-4xl tracking-tight font-semibold'>Problem Statement</h1>
          <p className='text-gray-700 text-lg leading-8'>Awareness of fitness importance exists among the users, But to achieve fitness they're facing some problems, In their daily life routine like time constraint for a working professional need of proper guidance, mentoring comfortable environment preference diet knowledge and the gym members fail to do justice to the membership for the entire duration they signed up for and so on time constraint tops the list of all problems.</p>
          <h1 className='text-4xl tracking-tight font-semibold'>Solution</h1>
          <p className='text-gray-700 text-lg leading-8'>A Smart phone application that can virtually guide the user to do their Daily exercises that are apt for them in their preferred environment. This could save a lot of time, money for people who couldn't visit a gym or in need of trainer guidance but prefer to workout at home. The user can measure their fitness and check their progress over a course of time.</p>
        </div>
      </section>
      {/* competitor analysis */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>Competitive Analysis</h2>
          <p className='text-gray-700 text-lg leading-8'>Before designing an app it's important to research solutions that already exist. This will help strategically create a superior experience that allows the app to stand out from the rest.</p>
          <img src={competitor1} alt="..." />
          <img src={competitor} alt="..." />
        </div>
      </section>
      {/* User research */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>User Research</h2>
          <p className='text-gray-700 text-lg leading-8'>I analysed the data from different age groups and discovered that 67% of users who prefer to workout at home, belong to the age group from 18 to 40 years old, busy professionals who are work bound and they cool go to the gym. They also eat a heavy diet, but don't do any physical activity.</p>
          <img src={survey} alt="..." />
        </div>
      </section>
      {/* Affinity Map */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>Affinity Map</h2>
          <p className='text-gray-700 text-lg leading-8'>Based on the result of the survey and one-to-one interview, I used an affinity map to edit the collected data. I categorize into three main columns.</p>
          <img src={affinityMap} alt="..." />
        </div>
      </section>
      {/* Persona */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>Persona</h2>
          <p className='text-gray-700 text-lg leading-8'>Adding a Persona to portray a single user who stands for all to understand them better as one instead of using multiple persona.</p>
          <img src={persona} alt="..." />
        </div>
      </section>
      {/* User Journey Map */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>User Journey Map</h2>
          <p className='text-gray-700 text-lg leading-8'>This is a journeymap based on user persona, which allows to receive the final map to accurately show what the actual user experience is.</p>
          <img src={journeyMap} alt="..." />
        </div>
      </section>
      {/* Problem Statement */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>Problem Statement</h2>
          <p className='text-gray-700 text-lg leading-8'>Problem statement, also know as point of view, by which i came across from the insights from user research, User persona and Empathy mapping. To find out the solution, i had synthesize the data and information i collected to define the statement. For Problem statement i used template like [User] [Need] & [Insights]</p>
          <div className="grid col-span-2 gap-5">
            <div className='col-span-1 space-y-3 bg-white p-3 md:p-8 rounded-2xl'>
              <h3 className='text-lg md:text-2xl tracking-tight font-semibold'>USER</h3>
              <p className='text-gray-700 text-lg leading-8'>A user work as a Accountant, work more than 8 hours a day, lives with parents and manage family by all himself.</p>
            </div>
            <div className='col-span-1 space-y-3 bg-white p-3 md:p-8 rounded-2xl'>
              <h3 className='text-lg md:text-2xl tracking-tight font-semibold'>NEED</h3>
              <p className='text-gray-700 text-lg leading-8'>To workout everyday atleast 30-60 minutes to stay fit, healthy and improve health condition.</p>
            </div>
            <div className='col-span-2 space-y-3 bg-white p-3 md:p-8 rounded-2xl'>
              <h3 className='text-lg md:text-2xl tracking-tight font-semibold'>INSIGHT</h3>
              <p className='text-gray-700 text-lg leading-8'>The user doesn't get much time to spend for some physical exercise for fitness. gym is a bit far from home and doesn't have much space in house as well. Ride on a bike to move to destination. User needs a coach to guide users fitness activities and suggest. Also want to main work-life balance. Moreover user willing to pay a fee for coach and interested in custom fitness plan. It's important for user to keep balance of every schedule stuffs to complete.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Information architecture */}
      <section>
        <div className='rounded-3xl space-y-5'>
          <h2 className='text-xl md:text-4xl tracking-tight font-semibold'>Information architecture</h2>
          <p className='text-gray-700 text-lg leading-8'>The user journey map helped us understand the user context and gave us a clear picture of the steps the user goes through when interacting with the app. It allows us to see the app from the user's point of view.</p>
          <img src={informationArchitecture} alt="..." />
        </div>
      </section>
    </>
  )
}
