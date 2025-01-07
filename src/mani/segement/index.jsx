import tv from '/tv.png'
// import watch from '@/assets/AnimePahe_Kimetsu_no_Yaiba_-_Hashira_Geiko-hen_-_08_360p_SubsPlease.mp4'
// import sees from '/AnimePahe_Kimetsu_no_Yaiba_-_Hashira_Geiko-hen_-_02_720p_SubsPlease.mp4'
import './style.css'

const Division = () => {
    return (
        <div className=''>
            <div className='show'>
                <h1>Enjoy on your TV</h1>
                <p>
                    Watch on Smart TVs, Playstation, Xbox, Chromecast,
                    Apple TV, Blu-ray players, and more.
                </p>
            </div>

            <div className='flex flex-wrap items-center justify-center sm:flex justify-between'>
                <div className='none'>
                    <h1>Enjoy on your TV</h1>
                    <p>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, <br />
                        Apple TV, Blu-ray players, and more.
                    </p>
                </div>
                <div className='mt'>
                    <div className='relative top-0 sm:top-2'>
                        <img className='w-[300px] sm: w-[410px] md:w-[460px] lg:w-[499px]' src={tv} alt="" />
                        <div className='absolute bottom-[82px] left-auto-[60px] sm:bottom-[75px] left-[52px] md:bottom-[89px] left-[71.5px] lg:bottom-[95px] left-[79px]'>
                            <video className='w-[256px] sm:w-[300px] md:w-[320px] lg:w-[350px]' src='' controls loop></video>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Division