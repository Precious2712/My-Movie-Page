import { Link } from "react-router-dom";
import SvgLogo from "./svgfooter/SvgLogo";

const FooterPage = () => {
    return (
        <div className="bg-black pt-14 pb-14 pl-9">
            <p className="text-white underline">
                <a href="">Questions? Contact us.</a>
            </p>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 mt-3">
                <div className="">
                    <p className="underline text-white"><a href="">FAQ</a></p>
                    <p className="mt-2 underline text-white"><a href="">Investor Relations</a></p>
                    <p className="underline text-white mt-2"><a href="">Privacy</a></p>
                    <p className="underline text-white mt-2"><a href="">Speed Test</a></p>
                </div>

                <div>
                    <Link to={'/HelpCenter'}>
                        <p className="underline text-white mt-2">Help Center</p>
                    </Link>
                    <p className="underline text-white mt-2"><a href="">Jobs</a></p>
                    <p className="underline text-white mt-2"><a href="">Cookie Preferences</a></p>
                    <p className="underline text-white mt-2"><a href="">Legal Notices</a></p>
                </div>

                <div>
                    <p className="underline text-white"><a href="">Account</a></p>
                    <p className="underline text-white mt-2"><a href="">Ways to Watch</a></p>
                    <p className="underline text-white mt-2"><a href="">Corporate Information</a></p>
                    <Link to={'/movies'}>
                        <p className="underline text-white mt-2">Only on Netflix</p>
                    </Link>
                </div>

                <div>
                    <p className="underline text-white"><a href="">Media Center</a></p>
                    <p className="underline text-white mt-2"><a href="">Terms of Use</a></p>
                    <p className="underline text-white mt-2"><a href="">Contact Us</a></p>
                </div>
            </div>

            <div className="border rounded h-8 w-[120px] mt-4 flex gap-2 items-center justify-center">
                <SvgLogo />
                <p className="text-white">English</p>
            </div>

            <div className="mt-4">
                <p className="text-white text-[13px]">Netflix Nigeria</p>
            </div>
        </div>
    )
};

export default FooterPage