import './texts.css'

const Wordings = () => {
    return (
        <div className='mt-28'>
            <div>
                <h1 className="font-bold text-white text-[29px] text-center sm:text-[40px] md:text-[55px]">
                    Unlimited movies, TV shows, and more
                </h1>
                <p className="font-bold text-white text-center text-[18px] mt-3 sm:text-[25px]">
                    Watch anywhere. Cancel anytime.
                </p>
                <p className='font-bold text-white text-center text-[20px] mt-3 '>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
            </div>


            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <div className="input-container w-full sm:w-auto flex flex-col items-center">
                    <input
                        className="w-[75%] sm:w-80 h-14 border rounded bg-black opacity-60 font-bold text-white pl-3 py-1 placeholder-transparent"
                        type="text"
                        placeholder=" "
                        id="email"
                    />
                    <label htmlFor="email" className="floating-label">Email address</label>
                </div>

                <div className="w-full sm:w-auto flex justify-center">
                    <button
                        type="button"
                        className="w-[40%] sm:w-52 h-14 bg-red-600 rounded font-bold text-white text-2xl"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Wordings 