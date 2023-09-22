import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { contactIcon, mapIcon, starPurple, starWhite } from '../../assets'
import { Logo, SocialLinks, SpecialText } from '../../atoms'
import { homeLinks } from '../../utils'

const index = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <footer className="bg-[#100B20]">
            <section className="pb-[62px] pt-20 mx-10 md:mx-[38px] lg:mx-[128px]">
                <div className="flex flex-col items-start md:flex-row md:justify-between ">
                    <div className="mb-[32px] md:mb-0 md:w-[40%]">
                        <Logo />
                        <p className="mt-4 leading-7 relative text-[14px] mb-[45px] md:mx-0 md:w-[85%] md:text-left">Getlinked Tech Hackathon is a technology
                            innovation program established by a group
                            of organizations with the aim of showcasing
                            young and talented individuals in the field
                            of technology
                            <img src={starWhite} alt="star-icon" className="w-[12px] animate-pulse absolute -left-6 top-10 md:-left-20 md:top-12" />
                        </p>
                        <p className="mt-4 leading-7 text-[14px] md:mx-0 md:w-[85%] md:text-left">Terms of Use <span className="inline-block border-r-2 border-r-primaryVariantThree h-4 -my-1 mx-2"></span> Privacy Policy</p>
                    </div>
                    <div className="">
                        <SpecialText title='Useful Links' extraClass="font-medium" />
                        {
                            homeLinks.map(({ id, title, path }) => (
                                <div key={id} className="flex flex-col mt-[11px]">
                                    <NavLink
                                        key={id}
                                        to={path}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-gradient" : "text-white font-family-1 font-normal w-fit tracking-wide transition-all duration-700 ease-in-out hover:text-primaryVariantThree"
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            (location.pathname === '/contact' && path !== '/contact') ? navigate('/') : path !== '/contact' ? navigate(`#${path}`) : navigate(path)
                                        }}
                                    >{title}
                                    </NavLink>
                                </div>
                            ))
                        }
                        <SocialLinks title='Follow us' extraClass='items-center' />
                    </div>

                    <div className="mt-[32px] relative md:mt-0">
                        <SpecialText title='Contact Us' extraClass="font-medium" />
                        <p className="flex items-start mt-3 gap-x-4">
                            <img src={contactIcon} alt="contact-icon" />
                            <span className="text-xs">+234  6707653444</span>
                        </p>
                        <p className="flex items-start mt-3 gap-x-4">
                            <img src={mapIcon} alt="contact-icon" />
                            <span className="text-xs leading-5">27,Alara Street <br />Yaba 100012 <br />Lagos State</span>
                        </p>
                        <img src={starWhite} alt="star-icon" className="w-[12px] animate-pulse absolute -right-16 top-10 md:left-40 md:top-32" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="mt-12 text-sm text-center relative w-fit">All rights reserved. <span>&copy;</span> getlinked Ltd.
                        <img src={starPurple} alt="star-icon" className="absolute animate-pulse left-16 -top-8 md:left-24" />
                    </p>
                </div>
            </section>
        </footer>
    )
}

export default index