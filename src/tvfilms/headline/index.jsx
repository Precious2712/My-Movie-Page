
const Headings = () => {
    return (
        <div className="">
            <div className="sm:block hidden">
                <h1 className="font-bold text-white text-3xl ml-6 pt-9 sm:text-5xl">Only on Netflix</h1>
                <p className="text-white text-[16px] sm:text-[18px] mt-3 ml-6">
                    Netflix is the home of amazing original programming that you can’t <br />
                    find anywhere else. Movies, TV shows, specials and more, all tailored <br />
                    specifically to you.
                </p>
            </div>

            <div className="sm:hidden block pt-10 ">
                <h1 className="font-bold text-white text-3xl ml-6 ">Only on Netflix</h1>
                <p className="text-white ml-6 mt-3 antialiased duration-75">
                    Netflix is the home of amazing original programming that you can’t find <br />
                    anywhere else. Movies, TV shows, specials and more, all tailored specifically to <br />
                    you
                </p>
            </div>
        </div>
    )
};

export default Headings;