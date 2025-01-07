import { Link } from "react-router-dom";
import { item } from "./last";


const FooterPages = () => {
    return (
        <div className="mt-20 sm:mt-[140px]">
            <div className="flex gap-3 w-[91%] sm:w-[96%] m-auto">
                {
                    item.map((e, i) => {
                        return (
                            <div className="" key={i}>
                                <img className="filter blur-md" src={e.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-[80px] sm:mt-[120px]">
                <h1 className="text-center text-white text-2xl sm:text-[33px]">There’s even more to watch.</h1>
                <p className="text-center text-white text-1xl mt-7 sm:text-[22px]">Netflix has an extensive library of feature films, documentaries, TV <br />
                    shows, anime, award-winning Netflix originals, and more. Watch as <br />
                    much as you want, anytime you want. <br />
                </p>

                <div className="mt-10">
                    <button className="bg-[rgb(225,7,18)] w-40 h-10  text-center text-white text-[20px] flex justify-center items-center m-auto">Join Now</button>
                </div>
            </div>

            <div className="mt-[80px] ml-9 sm:mt-[135px]">
                <p className="text-white text-[14px]"><a href="">Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</a></p>
                <div className="mt-16">
                    <p className="text-white">
                        <a href="">Questions? Contact us.</a>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-10 sm:grid-cols-4">
                    <div className="">
                        <p className=" text-white text-[13px]"><a href="">FAQ</a></p>
                        <p className="mt-4 text-white text-[13px]"><a href="">Investor Relations</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Privacy</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Speed Test</a></p>
                    </div>

                    <div>
                        <p className=" text-white text-[13px]"><a href="">Help Center</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Jobs</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Cookie Preferences</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Legal Notices</a></p>
                    </div>

                    <div>
                        <p className=" text-white text-[13px]"><a href="">Account</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Ways to Watch</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Corporate Information</a></p>
                        <Link to={''}>
                            <p className=" text-white text-[13px] mt-4">Only on Netflix</p>
                        </Link>
                    </div>

                    <div>
                        <p className=" text-white text-[13px]"><a href="">Media Center</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Terms of Use</a></p>
                        <p className=" text-white text-[13px] mt-4"><a href="">Contact Us</a></p>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default FooterPages;