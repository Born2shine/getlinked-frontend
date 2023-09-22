import { useNavigate } from "react-router-dom";
import { avatarVR, bigIdeaImg, bulb, chain, checkIcon, cicleNetwork, curveLine, fireBoom, gradientBg, illustrationFive, illustrationFour, illustrationOne, illustrationThree, illustrationTwo, plusIcon, starGray, starPurple, starPurpleOne, starWhite } from "../assets"
import { LensFlare, SpecialText, TimeLabel } from "../atoms"
import { ArticleTitle, Button, Footer, SingleArticle, TopNavbar } from "../components"
import { faqsData, judgingCriteriaData, partnerLogo, rewardsData, timelineData } from "../utils"
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
    const navigate = useNavigate()
    return (
        <main className="">
             <TopNavbar />
            <section className="mt-6">
                <div className="flex justify-center font-semibold md:justify-end md:text-[26px] md:px-[38px] lg:px-[128px]">
                    <div className="relative w-fit">
                        <Fade delay={1e2} cascade damping={1e-1} className="italic">
                            Igniting a Revolution in HR Innovation
                            {/* <h4 className="italic">Igniting a Revolution in HR Innovation</h4> */}
                        </Fade>
                        <Fade delay={4000}>
                            <img src={curveLine} alt="curve-line" className="absolute right-0 md:top-9 md:w-[170px]" />
                        </Fade>
                    </div>
                </div>
                {/* Hero Section */}
                <section className="md:px-[38px] lg:px-[128px] md:flex md:items-center border-b border-b-slate-800 mb-9">
                    <aside className="text-center mt-[58px] relative md:text-start">
                        <div className="font-clashBold text-[32px] relative z-10 lg:text-[60px]">
                            <div className="flex justify-center relative md:justify-start">

                                <h1 className="relative w-fit lg:leading-[5rem]">
                                    <Slide>getlinked Tech</Slide>
                                    <Fade delay={4000}><img src={bulb} alt="bulb" className="w-[20px] absolute right-4 -top-3 md:w-[35px] md:-top-8 md:right-6" /></Fade>
                                    <img src={starWhite} alt="star-white" className="w-[10px] absolute -top-4 left-[3.5rem]  md:w-[16px] md:-top-32 md:-right-[6rem]" />
                                    <img src={starGray} alt="star-white" className="w-[6px] absolute -top-4 -right-[1.2rem] md:w-[26px] md:-top-16 md:-right-[6rem]" />
                                </h1>
                            </div>
                            <div className="flex items-center justify-center md:justify-start">
                                <Slide className="leading-6"><Slide>Hackathon</Slide>
                                    <Fade delay={1500}><SpecialText title="1.0" /></Fade>
                                </Slide>
                                <Fade delay={2000}> <img src={chain} alt="chain" className="w-[32px] md:w-[56px]" /></Fade>
                                <Fade delay={3000}><img src={fireBoom} alt="fire-boom" className="w-[32px]" /></Fade>
                            </div>
                        </div>
                        <Fade delay={2e3} damping={1e-2} className="text-[13px] w-[70%] mx-auto mt-[9px] md:text-[16px] md:mx-0">
                            <Fade>Participate in getlinked tech Hackathon
                                2023 stand a chance to win a Big prize</Fade>
                        </Fade>
                        <LensFlare extraClass="-top-6 md:-top-[10rem] md:left-[10rem] md:h-48 md:w-44" />
                        <Fade direction="up" delay={3000} damping={1e-3}>
                            <Button 
                                title="Register" 
                                extraClass="mt-[1.5rem]"
                                onClick={() => navigate('/register')}
                             />
                        </Fade>
                        <div className="flex items-center gap-x-4 justify-center mt-[14.96px] relative md:justify-start md:mt-[77px]">
                            <Fade direction="up" delay={3000}>
                                <TimeLabel value={'00'} unit="H" />
                            </Fade>
                            <Fade direction="up" delay={4000}>
                                <TimeLabel value={'00'} unit="M" />
                            </Fade>
                            <Fade direction="up" delay={5000}>
                                <TimeLabel value={'00'} unit="S" />
                            </Fade>
                            <img src={starGray} alt="star-img" className="w-[8px] absolute -top-12 right-24  md:w-[16px] md:-top-6 md:right-40" />
                        </div>
                    </aside>
                    <aside className="mt-4 relative">
                        <Slide triggerOnce direction="right" >
                            <img src={avatarVR} alt="man-wearing-glasses" />
                        </Slide>
                        <Fade triggerOnce delay={600} >
                            <img src={cicleNetwork} alt="circle-network" className="w-[85%] absolute left-8 -top-2" />
                        </Fade>
                    </aside>
                </section>
                {/* End Hero Section */}

                {/* Introduction */}
                <section className="border-b border-b-slate-800 bg-[#140D27]">
                    <article className="md:w-[80%] md:mx-auto md:grid md:grid-cols-2 md:items-center py-[62px]">
                        <div className="relative flex justify-center">
                            <Slide><img src={bigIdeaImg} alt="big-idea-img" className="w-[264px] md:w-[400px]" /></Slide>
                            <img src={starPurple} alt="star-icon" className="w-[12px] absolute left-[4rem] top-[5rem] md:left-[4.5rem] md:top-[7rem] md:w-[16px]" />
                        </div>
                        <Fade direction="right" delay={400} damping={1e-1}>
                            <SingleArticle
                                title="Introduction to getlinked"
                                subTitle="tech Hackathon 1.0"
                            >
                                <>
                                    <p className="text-[13px] text-center mx-10 mt-[9px] leading-7 md:text-[14px] md:text-left md:mx-0">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                                        day: to shape the future. Whether you're
                                        a coding genius, a design maverick, or a
                                        concept wizard, you'll have the chance to transform your ideas into reality. Solving
                                        real-world problems, pushing the boundaries
                                        of technology, and creating solutions that can change the world, that's what we're all about!</p>
                                    <img src={starPurpleOne} alt="star-icon" className="w-[12px] absolute right-[3rem] top-[1rem] md:right-[2.5rem] md:-bottom-[1rem] md:w-[20px]" />
                                </>
                            </SingleArticle>
                        </Fade>
                    </article>
                </section>
                {/* End Introduction */}

                {/* Rules and Guidelines */}
                <section className="border-b border-b-slate-800">
                    <article className="md:w-[75%] md:mx-auto md:grid md:grid-cols-2 md:items-center pb-[62px]">
                        <div className="relative flex justify-center order-1">
                            <Fade direction="right" delay={700} damping={1e-1}>
                                <img src={illustrationOne} alt="big-idea-img" className="w-[294px] md:w-[500px]" />
                            </Fade>
                            <img src={starWhite} alt="star-icon" className="w-[12px] absolute left-[5rem] top-[8rem] md:hidden" />
                            <LensFlare extraClass="blur-[90px] top-5 -left-5 md:top-[20rem] md:left-[40rem] md:h-48 md:w-44" />
                        </div>
                        <Fade delay={400} damping={1e-1}>
                            <SingleArticle
                                title="Rules and "
                                subTitle="Guidelines">
                                <>
                                    <p className="text-[13px] text-center mx-10 mt-[9px] relative z-10 leading-7 md:text-[14px] md:text-left md:mx-0">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a
                                        design maverick, or a concept wizard, you'll have the chance to transform
                                        your ideas into reality. Solving real-world problems, pushing the boundaries
                                        of technology, and creating solutions that can change the world,
                                        that's what we're all about!</p>
                                    <img src={starGray} alt="star-icon" className="w-[12px] absolute right-[2rem] top-[3rem] md:left-[14.5rem] md:-top-[3rem] md:w-[20px]" />
                                    <img src={starWhite} alt="star-icon" className="w-[12px] absolute left-[7rem] -bottom-[2rem] md:left-[34.5rem] md:-bottom-[1rem] md:w-[20px]" />
                                    <LensFlare extraClass="-top-10 -right-8 md:-top-[6rem] md:left-[10rem] md:h-48 md:w-44" />
                                </>
                            </SingleArticle>
                        </Fade>
                    </article>
                </section>
                {/* End Rules and Guidelines */}

                {/* Judging Criteria */}
                <section className="border-b border-b-slate-800" id="overview">
                    <article className="md:w-[80%] md:mx-auto md:grid md:grid-cols-2 md:gap-x-8 md:items-center py-[62px]">
                        <div className="relative flex justify-center">
                            <Fade direction="left" delay={200}>
                                <img src={illustrationTwo} alt="big-idea-img" className="w-[332px] md:w-[710px]" />
                            </Fade>
                            <img src={starPurple} alt="star-icon" className="w-[12px] absolute left-[12rem] -top-[4rem] md:left-[7.5rem] md:-bottom-[1rem] md:w-[20px]" />
                            <img src={starGray} alt="star-icon" className="w-[12px] absolute right-[11rem] bottom-[7rem] md:right-[15rem] md:bottom-[12rem] md:w-[20px]" />
                            <LensFlare extraClass="-bottom-6 left-3 md:-bottom-[1rem] md:-left-[2rem] md:h-48 md:w-44" />
                        </div>
                        <SingleArticle
                            title="Judging Criteria"
                            subTitle="Key attributes">
                            <>
                                <Slide direction="right" delay={100} fraction={0}>
                                    {judgingCriteriaData.map(({ id, title, content }) => (
                                        <p key={id} className="text-[13px] relative z-10 text-center mx-10 mt-[9px] leading-7 md:text-[14px] md:text-left md:mx-0">
                                            {title} {content}
                                        </p>
                                    ))}
                                </Slide>
                                <Fade direction="up" className="flex justify-center md:justify-start"><Button title="Read More" extraClass="mt-5" /></Fade>
                                <img src={starWhite} alt="star-icon" className="w-[12px] absolute right-[2rem] bottom-[2rem] md:-left-[6.5rem] md:-bottom-[1rem] md:w-[20px]" />
                                <LensFlare extraClass="bottom-20 -right-8 md:-bottom-[6rem] md:-right-[4rem] md:h-48 md:w-44" />
                            </>
                        </SingleArticle>
                    </article>
                </section>
                {/* End Judging Criteria */}

                {/* FAQs */}
                <section className="border-b border-b-slate-800" id="faqs">
                    <article className="md:w-[80%] md:mx-auto md:grid md:grid-cols-2 md:gap-x-8 md:items-center py-[62px]">
                        <Fade direction="right" delay={100} className="flex justify-center order-1">
                            <img src={illustrationFour} alt="big-idea-img" className="w-[332px] md:w-[710px]" />
                        </Fade>
                        <SingleArticle
                            title="Frequently Ask"
                            subTitle="Question">
                            <div className="relative">
                                <Fade direction="left" delay={100}>
                                    <p className="text-[13px] text-center mx-10 mt-4 mb-[45px] leading-6 md:text-[14px] md:text-left md:mx-0 md:w-[65%]">We got answers to the questions that you might
                                        want to ask about getlinked Hackathon 1.0</p>
                                </Fade>
                                <Slide direction="right" delay={100} fraction={0}>
                                    {faqsData.map(({ id, title }) => (
                                        <p key={id} className="text-[12px] text-cente flex items-center justify-between cursor-pointer pb-1 mb-4 mx-10 mt-[9px] border-b border-b-[#D434FE] leading-5 md:text-[14px] md:text-left md:mx-0 md:mb-8 md:pb-3 md:w-[28rem]">
                                            {title}
                                            <img src={plusIcon} alt="toggle-icon" />
                                        </p>
                                    ))}
                                </Slide>
                                <img src={starPurple} alt="star-icon" className="w-[16px] absolute left-[5rem] -top-[5rem] md:-left-[1.5rem] md:-top-[8rem] md:w-[20px]" />
                            </div>
                        </SingleArticle>
                    </article>
                </section>
                {/* End FAQs */}

                {/* Timeline */}
                <section className="pt-[80px] pb-[62px] mx-10 md:mx-[38px] lg:mx-[128px]" id="timeline">
                    <Fade direction="up" className="flex flex-col items-center">
                        <span className="text-[20px] font-clashBold md:text-[32px]">Timeline</span>
                        <p className="text-[14px] text-center mx-10 mt-4 mb-[45px] md:mx-0 md:w-[25%]">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
                    </Fade>
                    <Slide direction="up" className="relative md:mt-8">
                        {
                            timelineData.map(({ id, title, content, date }, idx) => (
                                <div key={id} className="flex justify-center gap-4 md:gap-20 mb-8">
                                    <div className="flex flex-col justify-end md:w-[24rem] md:order-2">
                                        <SpecialText title={title} extraClass={`font-semibold text-[12px] md:text-[16px] ${(idx === 0 || idx === 2 || idx === 4) && 'md:hidden'}`} />
                                        <p className={`py-1 text-[12px] md:w-[24rem]  ${(idx === 0 || idx === 2 || idx === 4) && 'md:hidden'}`}>{content}</p>
                                        <SpecialText title={date} extraClass={`font-semibold text-[12px] md:text-[16px] ${(idx === 1 || idx === 3 || idx === 5) && 'md:hidden'}`} />
                                    </div>
                                    <div className={` ${idx === 0 ? 'h-[8rem]' : 'h-[5rem]'} border-l-2 border-l-[#D434FE] relative -order-1 md:order-1`}>
                                        <span className="absolute -left-3 -bottom-2 gradientOne w-5 h-5 rounded-full grid place-content-center z-10 md:w-8 md:h-8 md:-left-[17px]"><span className="text-[12px] font-semibold md:text-[14px]">{idx + 1}</span></span>
                                        <span className="absolute -left-4 -bottom-2 rounded-full z-0 w-7 h-7 bg-primaryVariantOne block md:w-10 md:h-10"></span>
                                    </div>
                                    <div className="hidden md:w-[24rem] md:flex md:flex-col md:items-end md:text-end md:justify-end">
                                        <SpecialText title={title} extraClass={`font-semibold text-[12px] md:text-[16px] ${(idx === 1 || idx === 3 || idx === 5) && 'md:hidden'}`} />
                                        <p className={`py-1 text-[12px] md:w-[24rem] ${(idx === 1 || idx === 3 || idx === 5) && 'md:hidden'}`}>{content}</p>
                                        <SpecialText title={date} extraClass={`font-semibold text-[12px] md:text-[16px] ${(idx === 0 || idx === 2 || idx === 4) && 'md:hidden'}`} />
                                    </div>
                                </div>
                            ))
                        }
                        <img src={starPurple} alt="star-icon" className="w-[12px] absolute left-[1rem] -top-[2rem] md:left-[22rem] md:-top-[1rem] md:w-[20px]" />
                        <img src={starWhite} alt="star-icon" className="w-[12px] absolute right-[7.5rem] bottom-[22.5rem] md:right-[20rem] md:bottom-[23rem]" />
                        <img src={starGray} alt="star-icon" className="w-[12px] absolute -left-[1.5rem] -bottom-[2rem] md:left-[12rem] md:bottom-[1rem]" />
                    </Slide>
                </section>
                {/* End Timeline */}

                {/* Reward Section */}
                <section className="pb-[62px] pt-12 bg-primaryVariantOne shadow-sm" style={{
                    backgroundImage: `url(${gradientBg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    backgroundBlendMode: 'multiply',
                    height: '500px',
                }}>
                    <div className="relative mx-10 md:mx-[38px] lg:mx-[128px] md:flex md:justify-end">
                        <Slide direction="right" delay={100} fraction={0}>
                            <ArticleTitle
                                title="Prizes and"
                                specialText="Rewards"
                                subTitle="Highlight of the prizes or rewards for winners and for participants"
                                subTitleExtraClass="z-10 relative md:w-[80%]"
                            />
                        </Slide>
                        <img src={starPurple} alt="star-icon" className="w-[12px] absolute left-[2.5rem] -top-[3.5rem] md:left-[14rem] md:top-[2rem]" />
                        <img src={starPurple} alt="star-icon" className="w-[10px] absolute z-0 right-[5.5rem] bottom-[5rem] md:right-[10rem] md:bottom-[4.6rem] md:w-[20px]" />
                    </div>
                    <article className="md:w-[80%] md:mx-auto md:grid md:grid-cols-2 md:gap-x-8 md:items-center">
                        <div className="relative flex justify-center">
                            <Slide direction="left" delay={90}>
                                <img src={illustrationThree} alt="big-idea-img" className="w-[321px] md:w-[500px]" />
                            </Slide>
                            <img src={starWhite} alt="star-icon" className="w-[12px] absolute left-[5rem] -bottom-[8px] md:left-[10rem] md:-bottom-[2rem]" />
                            <LensFlare extraClass=" -top-10 left-8 md:top-[3rem] md:left-[14rem] md:h-48 md:w-44" />
                        </div>
                        <div className="flex gap-x-4 justify-center items-center mt-32 md:gap-x-6 relative">
                            <Fade direction="right" delay={200} cascade fraction={0}>
                                {rewardsData.map(({ id, title, prize, image, bgColor, borderColor }, idx) => (
                                    <div key={id} style={{ border: '1px solid', borderColor: borderColor, backgroundColor: bgColor }} className={`w-[100px] h-[125] p-2 rounded-lg text-center pt-12 pb-4 relativ md:w-[180px] md:pt-24 md:p-5 ${idx !== 1 && 'mb-4 md:mb-8'}`}>
                                        <h3 className="font-medium text-xs md:text-[20px]">{title}</h3>
                                        <h2 className="font-semibold mt-2 text-sm md:text-[24px] md:py-4" style={{ color: borderColor }}>{prize}</h2>
                                        <img src={image} alt="medal" className={`absolute left-0 right-0 bottom-0 m-auto w-[90px] inline-block md:w-[139px] ${idx === 1 ? '-top-48 -left-3 -mr-4  min-w-[136px] md:-mr-7 md:min-w-[235px] md:-top-[19rem] md:-left-7' : '-top-32 md:-top-60'}`} />
                                    </div>
                                ))}
                            </Fade>
                            <img src={starWhite} alt="star-img" className="absolute right-12 -top-20 md:right-0" />
                            <img src={starGray} alt="star-icon" className="w-[12px] absolute right-[9.5rem] -bottom-[1rem] md:right-[11rem] md:-bottom-[2rem]" />
                            <LensFlare extraClass=" -bottom-13 -right-24 md:-bottom-[1rem] md:-right-[10rem] md:h-48 md:w-44" />
                        </div>
                    </article>
                </section>
                {/* End Reward Section */}

                {/* Parners */}
                <section className="mt-[25rem] pb-[62px] border-b border-b-slate-800">
                    <article className="mx-10 md:mx-[38px] lg:mx-[128px]">
                        <Fade direction="up" className="relative flex flex-col items-center">
                            <span className="text-[20px] font-clashBold md:text-[32px]">Partners and Sponsors</span>
                            <p className="text-[14px] relative z-10 text-center mt-4 mb-[45px] md:mx-0 md:w-[45%]">Getlinked Hackathon 1.0 is honored to have the following major
                                companies as its partners and sponsors</p>
                            <LensFlare extraClass="top-2 -left-20 md:top-[6rem] md:-left-[6rem] md:h-48 md:w-44" />
                        </Fade>
                        <div className="border border-[#D434FE] rounded-[5px] p-5">
                            <div className="grid grid-cols-3 gap-4 justify-center items-stretch place-content-center relative md:w-[70%] md:mx-auto md:p-16">
                                {
                                    partnerLogo.map(({ id, image }, idx) => (
                                        <div key={id} className={`${idx < 3 && 'border-b-2'} ${idx !== 2 && idx !== 5 && 'border-r-2'} border-r-[#D434FE] border-b-[#D434FE] p-3 grid place-content-center relative after:w-7 after:h-7 after:rounded-full ${idx === 0 ? 'after:bg-[#270942fc] md:after:bg-primaryVariantOne' : 'after:bg-primaryVariantOne'} after:absolute after:top-12 after:left-[4.5rem] md:after:top-20 md:after:left-[7rem] lg:after:top-[5.5rem] xl:after:left-[12.5rem] ${idx > 1 && 'after:hidden'}`}>
                                            <Fade delay={200} fraction={0}>
                                                <img src={image} alt="partner-logo" className={`w-[70%]  ${(idx === 1 || idx === 4 || idx === 5) && 'w-[30rem] md:w-[65%] md:mx-auto'}`} />
                                            </Fade>
                                        </div>
                                    ))
                                }
                                <img src={starPurple} alt="star-icon" className="w-[12px] absolute left-[1rem] bottom-[9rem] md:-left-[8rem] md:bottom-[23.5rem] md:w-[18px]" />
                                <img src={starPurple} alt="star-icon" className="w-[12px] absolute right-[7.5rem] bottom-[5.5rem] md:right-[22rem] md:bottom-[20rem]" />
                                <img src={starWhite} alt="star-icon" className="w-[12px] absolute right-3 -bottom-4 md:right-[22rem] md:bottom-12" />
                                <LensFlare extraClass="-bottom-32 -right-24 md:-bottom-[6rem] md:-right-[20rem] md:h-48 md:w-44" />
                            </div>
                        </div>

                    </article>
                </section>
                {/* End Partners */}

                {/* End Privacy Policy */}
                <section className="pb-[62px] pt-20 bg-primaryVariantOne mx-10 md:mx-[38px] lg:mx-[128px]">
                    <article className="md:grid md:grid-cols-2 md:gap-x-8 md:items-center">
                        <div>
                            <div className="mx-10 relative md:mx-0 md:flex md:justify-left">
                                <Fade direction="up">
                                    <ArticleTitle
                                        title="Privacy Policy and"
                                        specialText="Terms"
                                        subTitle="Last updated on September 12, 2023"
                                        subTitleExtraClass="w-full mb-[20px] mx-0 text-[#FFFFFFBF] md:w-[90%] md:text-[12px]"
                                    />
                                </Fade>
                                <img src={starGray} alt="star-icon" className="w-[8px] absolute right-7 -top-7 md:left-80 md:-top-2 md:w-[16px]" />
                                <img src={starPurple} alt="star-icon" className="w-[14px] absolute -right-6 -bottom-28 md:hidden" />
                            </div>
                            <Fade direction="up" className="text-[14px] text-center mb-[45px] md:mx-0 md:w-[85%] md:text-left">Below are our privacy & policy, which outline a lot of goodies.
                                it’s our aim to always take of our participant</Fade>
                            <Slide className="p-5 relative border border-[#D434FE] bg-[#D434FE]/5 rounded-[5px] md:p-16">
                                <>
                                    <p className="text-center md:text-left text-sm leading-7">
                                        At getlinked tech Hackathon 1.0, we
                                        value your privacy and are committed
                                        to protecting your personal information.
                                        This Privacy Policy outlines how we collect,
                                        use, disclose, and safeguard your data
                                        when you participate in our tech hackathon
                                        event. By participating in our event, you
                                        consent to the practices described in this
                                        policy.
                                    </p>
                                    <div className="mt-6">
                                        <SpecialText title='Licensing Policy' />
                                        <p className="mt-2 text-[14px] mb-3 font-semibold">Here are terms of our Standard License:</p>
                                        <div className="flex items-start mt-6 gap-x-2">
                                            <img src={checkIcon} alt="check-icon" />
                                            <p className="text-[14px] mb-4">The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                                        </div>
                                        <div className="flex items-start gap-x-2">
                                            <img src={checkIcon} alt="check-icon" />
                                            <p className="text-[14px] mb-[45px]">You are licensed to use the item available at any free source sites, for your project developement</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center"><Button title="Read More" /></div>
                                    <img src={starPurple} alt="star-icon" className="w-[12px] absolute -left-6 bottom-48 md:-left-20" />

                                    <LensFlare extraClass="bottom-24 -left-24 md:-bottom-[6rem] md:-left-[10rem] md:h-48 md:w-44" />
                                </>
                            </Slide>
                        </div>
                        <div className="flex justify-center order-1 mt-12">
                            <Fade direction="up">
                                <img src={illustrationFive} alt="big-idea-img" className="w-[300px] md:w-[520px]" />
                            </Fade>
                        </div>
                    </article>
                </section>
                {/* End Privacy Policy */}

                {/* Footer */}
                <Footer />
                {/* End Footer */}
            </section>
        </main>
    )
}

export default Home