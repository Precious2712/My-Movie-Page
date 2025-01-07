import mobile from '/mobile-0819.jpg'
import boxshot from '/boxshot.png'
import './mode.css'

const ItemAbsolutes = () => {
    return (
        <div className='bg-black'>
            <div className='visible'>
                <h1>Download your  shows to watch  offline</h1>
                <p>Save your favorites easily and always have something to watch.</p>
            </div>

            <div className="flex flex-wrap justify-center sm:flex justify-center md:flex justify-between">
                <div className='pt'>
                    <div className='relative sm:m-auto'>
                        <img className='w-[360px] sm:w-[430px] md:w-[600px]' src={mobile} alt="" />
                        <div className='relative border border-gray-800 border-t-3 rounded-[13px] bg-black w-[290px] h-20 left-[24px] bottom-[0px] sm:w-[340px] left-[60px] bottom-[100px] md:left-[130px] bottom-[]'>
                            <div className='flex gap-3 ml-3'>
                                <div className='mt-[11px]'>
                                    <img className='w-[40px]' src={boxshot} alt="" />
                                </div>
                                <div className='mt-[19px]'>
                                    <h4 className='text-white'>Stranger Things</h4>
                                    <h4 className='text-blue-800'>Downloading...</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hide'>
                    <h1>Download your <br /> shows to watch <br /> offline</h1>
                    <p>Save your favorites easily and always have <br /> something to watch.</p>
                </div>

            </div>
        </div>
    )
};

export default ItemAbsolutes