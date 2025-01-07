import BootStrapPage from '@/bootsrap'
import ShowAll from '@/contain'
import FooterPage from '@/footer'
import FewWording from '@/fraction'
import HeroPlay from '@/mani'
import Allunits from '@/section'
import AnimatedView from '@/vieew'
import React from 'react'
import { Link } from 'react-router-dom'

const AllDocument = () => {
    return (
        <div>
            <Link to={'/'}>
                <div>
                    <Allunits />

                    <HeroPlay />

                    <ShowAll />

                    <FewWording />

                    <AnimatedView />

                    <BootStrapPage />

                    <FooterPage />
                </div>
            </Link>
        </div>
    )
}

export default AllDocument
