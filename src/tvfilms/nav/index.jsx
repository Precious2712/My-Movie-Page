import NetflixImage from "@/icon";

const MoviesWorld = () => {
    return (
        <div className="fixed w-full bg-black pt-2 pb-2">
            <div className="flex justify-between">
                <div className="mt-2 ml-6">
                    <NetflixImage />
                </div>

                <div className="mr-6">
                    <div className="flex gap-3">
                        <p className="hidden text-white text-[13px] mt-[8px] sm:block">UNLIMITED TV SHOWS & MOVIES</p>
                        <button type="button" className="btn btn-danger border-none bg-[rgb(225,7,18)] text-white w-[100px] sm:w-[130px]">Join Now</button>
                        <button type="button" className="btn btn-danger border-none bg-transparent text-white">Sign In</button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default MoviesWorld