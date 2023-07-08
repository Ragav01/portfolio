import React from 'react'

export const Process = () => {
  const processList = [
    {'title': 'Strategy', 'description': '<span class="text-black font-medium"> Ask first.</span> Before jumping into designing I always make sure that we’re asking the right questions and trying to accomplish the right challenges. This stage includes <span class="text-black font-medium"> market research, competitive analyses,</span> consulting and exploring possible solutions.'},
    {'title': 'Design', 'description': '<span class="text-black font-medium"> Problem solving. </span> At the end of this phase you’ll have a pixel perfect design for your app or website. During the transition from <span class="text-black font-medium"> wireframes </span> into the final design I create <span class="text-black font-medium"> prototypes </span> simulating final end results before development.'},
    {'title': 'Development', 'description': '<span class="text-black font-medium"> Bringing designs to life. </span> Since I’m a designer who can code too, I can easily work in close collaboration with developers up until the finish line and beyond. In case of web projects I also do <span class="text-black font-medium"> front-end development. </span>'},
    {'title': 'Quality assurance', 'description': '<span class="text-black font-medium"> Transparent process. </span> Complete overview of my design process through regular meetings. After the initial design versions I’m happy to do user testing with your customers to ensure the best possible solutions for their needs.'}
  ] 
  return (
    <section>
      <div className='md:flex'>
        <div className='md:w-6/12 lg:h-52 pb-5 space-y-2 lg:sticky top-14'>
          <p className='text-lg text-gray-600 font-medium tracking-tight'>How I work</p>
          <h1 className='text-3xl md:text-5xl font-semibold tracking-tighter mb-12'>Design Process</h1>
        </div>
        <div className='flex-1 space-y-10'>
          {processList.map((item,key)=>{
            return(
              <div key={key} className='p-5 lg:p-8 bg-white rounded-2xl space-y-5 sticky top-5 lg:top-14'>
                <h3 className='text-3xl font-semibold tracking-tight'>{item.title}</h3>
                <p className='text-lg text-gray-700' dangerouslySetInnerHTML = {{__html : item.description}}></p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
