// import mainImg from '../assets/home-cover.svg'
export const Hero = () => {
  return (
    <main className='relative max-w-7xl mx-auto pt-24 px-3 lg:px-0'>
        <h1 className='text-black tracking-tight text-[2.5rem] leading-[3rem] md:text-[6rem] md:leading-[6.5rem] font-semibold'>Elevate products through <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5b72e1] via-[#e240a6] to-[#f70000a1]'>human-centered </span> design &  Storytelling.</h1>
        <p className='text-base md:text-2xl text-slate-700 py-8 md:py-14'>Specialized in UX / UI, and Front End Development.</p>
        {/* <img className='py-20' src={mainImg} alt="" /> */}
    </main>
  )
}
