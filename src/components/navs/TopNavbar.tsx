import { Button } from '..'
import { homeLinks } from '../../utils'
import { cancleIcon, menuIcon } from '../../assets'
import { Logo } from '../../atoms'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const TopNavbar = () => {
    const [showMenubar, setShowMenubar] = useState(false)
    return (
        <header>
            <nav className="px-[54px] py-7 flex items-center justify-between border-b border-b-slate-800 md:px-[38px] lg:px-[128px]">
                <Logo/>
                <img src={menuIcon} alt='menu-icon' className="cursor-pointer md:hidden" onClick={() => setShowMenubar(!showMenubar)} />
                <div className={`px-[47px] pt-[119px] fixed h-screen w-screen top-0 left-0 bg-primaryVariantOne z-50 transition-all duration-700 ease-in-out ${!showMenubar && '-translate-x-full'} md:transition-none md:translate-x-0 md:h-fit md:w-fit md:relative md:flex md:items-center md:pt-0 md:bg-transparent`}>
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-[50px]">
                        {homeLinks.map(({ id, title, path }) => (
                            <Link key={id} to={path} className="text-white font-family-1 font-normal w-fit tracking-wide transition-all duration-700 ease-in-out hover:text-primaryVariantThree">{title}</Link>
                        ))}
                    </div>
                    <div>
                        <span className="absolute right-[51px] top-[31px] w-7 h-7 rounded-full gradientOne grid place-content-center cursor-pointer md:hidden" onClick={() => setShowMenubar(!showMenubar)}> <img src={cancleIcon} alt='menu-icon' className="z-10" />
                            <span className="bg-primaryVariantOne absolute top-0 left-0 right-0 bottom-0 h-[25px] w-[25px] rounded-full z-0 m-auto"></span>
                        </span>
                        <Button title="Register" extraClass="mt-[29px] md:mt-0 md:ml-[121px]" />

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default TopNavbar