import { Link } from 'react-router-dom'
import illsu from '../assets/404-illus.svg'
export const ErrorPage = () => {
  return (
    <div className='max-w-7xl mx-auto pt-10 md:pt-5 md:flex justify-between space-y-20'>
        <div className='md:w-6/12 flex gap-4 md:gap-y-12 text-center flex-col justify-center items-center'>
            <h1 className='text-9xl font-semibold'>404</h1>
            <div>
                <p className='text-4xl md:text-6xl font-medium pb-4'>Something went</p>
                <p className='text-4xl md:text-7xl tracking-tight font-black'>WRONG!</p>
            </div>
            <div className='pt-5'>
                <Link to='/' className='text-lg font-semibold border-2 border-black px-6 py-4 hover:bg-black hover:text-white rounded-full'>
                    Back to Homepage
                </Link>
            </div>
        </div>
        <div className='md:w-6/12 flex justify-center'>
            <img src={illsu} alt="..." />
        </div>
    </div>
  )
}
