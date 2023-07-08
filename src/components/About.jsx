import React from 'react'

export const About = () => {
    const areaExpertise = [
        {'title':'Product Strategy'},
        {'title':'User Research'},
        {'title':'Empathy Maps'},
        {'title':'Affinity Diagram'},
        {'title':'User Journey'},
        {'title':'User Flow'},
        {'title':'Brainstorming'},
        {'title':'Testing & Iteration'},
        {'title':'Collaboration'},
        {'title':'Wireframe'},
        {'title':'Design Thinking'},
        {'title':'Data Visualization'},
        {'title':'Style Guides'},
        {'title':'Figma'},
        {'title':'Adobe Suite'},
        {'title':'HTML / CSS'},
        {'title':'Tailwind CSS'},
        {'title':'Boostrap'},
        {'title':'React js'}
    ]
  return (
    <div className='relative overflow-hidden bg-black text-white'>
        <div className='h-full w-full flex flex-col items-center'>
            <span className='h-[40vw] w-[50vw] mx-auto bg-purple-400 blur-[200px] opacity-40 absolute rounded-full'></span>
            <span className='h-[40vw] w-[50vw] mx-auto bg-blue-500 blur-[200px] opacity-40 absolute bottom-0 rounded-full'></span>
        </div>
        <section>
            <h1 className='text-3xl md:text-5xl text-center font-semibold tracking-tighter mb-12'>My Career So Far</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* Experience */}
                <div className='relative overflow-hidden text-center flex flex-col justify-center items-center space-y-2 bg-black/50  backdrop-blur-2xl py-6 lg:py-12 border-[2px] border-white/10 rounded-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-medium'>8 <span className='text-3xl font-normal'>years</span></h1>
                    <p className='text-lg lg:text-xl text-gray-500'>experience</p>      
                </div>
                {/* Clients */}
                <div className='flex flex-col justify-center items-center text-center space-y-2 bg-black/50  backdrop-blur-2xl py-6 lg:py-12 border-[2px] border-white/10 rounded-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-medium'>50+</h1>
                    <p className='text-lg lg:text-xl text-gray-500'>happy clients</p>      
                </div>
                {/* projects */}
                <div className='lg:col-start-1 lg:row-start-2 text-center flex flex-col justify-center items-center space-y-2 bg-black/50  backdrop-blur-2xl py-6 lg:py-12 border-[2px] border-white/10 rounded-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-medium'>80+</h1>
                    <p className='text-lg lg:text-xl text-gray-500'>successful projects</p>      
                </div>
                {/* Passion */}
                <div className='lg:col-start-2 lg:row-start-2 text-center flex flex-col justify-center items-center space-y-2 bg-black/50  backdrop-blur-2xl py-6 lg:py-12 border-[2px] border-white/10 rounded-2xl'>
                    <h1 className='text-3xl lg:text-5xl font-medium'>100%</h1>
                    <p className='text-lg lg:text-xl text-gray-500'>passion</p>      
                </div>
                {/* About */}
                <div className='col-span-2 lg:row-span-4 lg:col-start-3 lg:row-start-1 space-y-5 bg-black/50 backdrop-blur-2xl p-3 lg:p-14 border-[2px] border-white/10 rounded-2xl'>
                    <h2 className='text-3xl lg:text-4xl'>Working at the intersection of design and code.</h2>
                    <div className='space-y-4 text-lg text-gray-500'>
                        <p>Hi there! I'm Ragavarman, a Product Designer with experience building consumer-facing and B2B SaaS products in fast-paced environments. I aspire to build products that contribute to a more harmonious and compassionate world</p>
                        <p>Over the years, I’ve designed experiences across multiple domains - entertainment, enterprise, telecom and have worked in different environments- from early-stage start-ups, a design firm, and most recently, Samsung Digital Health - a health research incubator to build and launch consumer-oriented health product concepts</p>
                        <p>I like expanding and adapting my thought, skillset and processes to the changing problems and needs in the world around us. I thrive in ambitious, pro-active teams that value ethical product building and cultures that facilitate belonging.</p>
                        <p>Excited for the future, I’m eager to discover new opportunities to create memorable experiences.</p>
                    </div>
                </div>
                {/* Areas of expertise */}
                <div className='col-span-2 lg:row-span-2 row-start-4 lg:row-start-3 space-y-5 bg-black/50 backdrop-blur-2xl p-3 lg:p-14 border-[2px] border-white/10 rounded-2xl'>
                    <h2 className='text-3xl lg:text-4xl'>Areas of expertise</h2>
                    <div className='flex flex-wrap gap-2'>
                        {areaExpertise.map((item,key)=>{
                            return(
                                <span key={key} className='text-sm lg:text-base font-light text-center px-3 lg:px-4 py-2 border border-white/10 rounded-lg'>{item.title}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
