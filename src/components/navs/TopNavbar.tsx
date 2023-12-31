import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '..'
import { cancleIcon, menuIcon } from '../../assets'
import { Logo } from '../../atoms'
import { homeLinks } from '../../utils'

interface IProps {
    showBorderBottom?: boolean
}
const TopNavbar = ({ showBorderBottom = true }: IProps) => {
    const [showMenubar, setShowMenubar] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <header>
            {/* fixed w-screen top-0 z-50 bg-primaryVariantOne */}
            <nav className={`px-[54px] py-7 flex items-center justify-between ${showBorderBottom && 'border-b border-b-slate-800'} md:px-[38px] lg:px-[128px]`}>
                <Logo />
                <img src={menuIcon} alt='menu-icon' className="cursor-pointer md:hidden" onClick={() => setShowMenubar(!showMenubar)} />
                <div className={`px-[47px] pt-[119px] fixed h-screen w-screen top-0 left-0 bg-primaryVariantOne z-50 transition-all duration-700 ease-in-out ${!showMenubar && '-translate-x-full'} md:transition-none md:translate-x-0 md:h-fit md:w-fit md:relative md:flex md:items-center md:pt-0 md:bg-transparent`}>
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-[50px]">
                        {homeLinks.map(({ id, title, path }) => (
                            <NavLink
                                key={id}
                                to={path}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-gradient" : "text-white font-family-1 font-normal w-fit tracking-wide transition-all duration-700 ease-in-out hover:text-primaryVariantThree"
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    (location.pathname === '/contact' && path !== '/contact') ? navigate('/') : (location.pathname === '/register' && path !== '/contact') ? navigate('/') : path !== '/contact' ? navigate(`#${path}`) : navigate(path)
                                }}
                            >{title}
                            </NavLink>
                        ))}
                    </div>
                    <div>
                        <span className="absolute right-[51px] top-[31px] w-7 h-7 rounded-full gradientOne grid place-content-center cursor-pointer md:hidden" onClick={() => setShowMenubar(!showMenubar)}> <img src={cancleIcon} alt='menu-icon' className="z-10" />
                            <span className="bg-primaryVariantOne absolute top-0 left-0 right-0 bottom-0 h-[25px] w-[25px] rounded-full z-0 m-auto"></span>
                        </span>
                        {
                            location.pathname !== '/register' &&
                            <Button
                                title="Register"
                                extraClass="mt-[29px] md:mt-0 md:ml-[121px] bg-primaryVariantOne "
                                onClick={() => navigate('/register')}
                            />}
                        {
                            location.pathname === '/register' &&
                            <Link to="" className='w-[172px] h-[53px] text-white cursor-pointer border-gradient rounded-[4px] p-3 inline-block text-center ml-10'>Register</Link>
                        }

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default TopNavbar