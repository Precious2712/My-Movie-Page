import './module.css'
import childrens from '/children.png'

const AnimatedView = () => {
    return (
        <div className='w-full over-flow x-hidden'>
            <div className='bg-black pt-[60px] pb-[60px]'>
                <div className='kidshow'>
                    <h1>Create profiles for kids</h1>
                    <p>Send kids on adventures with their favorite characters in a space made just for them—free with</p>
                </div>

                <div className='flex flex-wrap justify-center sm:flex'>
                    <div>
                        <img className='w-[360px] sm:w-[430px] md:w-[605px]' src={childrens} alt="" />
                    </div>

                    <div className='kidhide'>
                        <h1>Create profiles for <br /> kids</h1>
                        <p>Send kids on adventures with their favorite <br /> characters in a space made just for them—free with <br /> your membership.</p>
                    </div>
                </div>
            </div>
            <hr className="border-black w-full h-1.5 border-t-2 bg-black opacity-80 " />
        </div>
    )
};

export default AnimatedView