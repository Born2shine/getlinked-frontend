import { BiChevronLeft } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { Button, GTLInput, GTLTextarea, TopNavbar } from "../components";
import { LensFlare, SocialLinks } from '../atoms';
import { Fade, Slide } from 'react-awesome-reveal';
import { useFormik } from 'formik';
import { contactSchema } from '../schema';
import { useState } from 'react';
import axios from '../api/axios';
import { CONTACT } from '../api/constant';
import { flashMessage } from '../utils';

interface ContactProps {
    email: string,
    phone: string,
    message: string,
    first_name: string,
}

const Contact = () => {
    const [loading, setLoading] = useState(false)

    const contactFormHandler = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${CONTACT}`, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setLoading(false)
            if (res.data) {
                resetForm()
                setLoading(false)
                flashMessage({type: "success", message: 'message sent successfully'})
            }

        } catch (error: any) {
            setLoading(false)
            if (error.response.data) {
                flashMessage({type: "error", message: 'please fill all fields'})
            }
        }
    }

    const initialValues: ContactProps = {
        email: '',
        phone: '',
        message: '',
        first_name: '',
    }

    const { values, errors, touched, handleBlur, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: contactSchema,
        onSubmit: () => contactFormHandler()
    })

    return (
        <main className="">
            <div className="hidden md:block">
                <TopNavbar showBorderBottom={false} />
            </div>
            <section className="mt-6 px-10 py-6 md:px-[38px] lg:px-[128px]">
                <Link to='/' className="relative w-7 h-7 rounded-full gradientOne grid place-content-center cursor-pointer md:hidden" onClick={() => null}> <span className="z-10"><BiChevronLeft /> </span>
                    <span className="bg-primaryVariantOne absolute top-0 left-0 right-0 bottom-0 h-[25px] w-[25px] rounded-full z-0 m-auto"></span>
                </Link>
                <section className='mt-8'>
                    <article className='relative md:w-[90%] md:mx-auto md:flex md:justify-between'>
                        <Fade direction='left' delay={9000} className='hidden md:block'>
                            <>
                                <h1 className='text-primaryVariantThree leading-8 font-clashSemibold text-[24px] md:text-2xl md:my-8'
                                > Get in touch </h1>
                                <div>
                                    <p className="text-sm my-6 w-[90%] leading-5">Contact <br /> Information</p>
                                    <p className="text-sm my-6 w-[90%] leading-5">27,Alara Street <br /> Yaba 100012 <br />Lagos State</p>
                                    <p className="text-sm my-6 leading-5">Call Us : 07067981819</p>
                                    <p className="text-sm my-6 leading-5">we are open from Monday-Friday
                                        <br />08:00am - 05:00pm</p>
                                    <SocialLinks title='Share on' extraClass='flex-col gap-y-2 items-start' />
                                </div>
                            </>
                        </Fade>
                        <Slide direction='right' className='relative z-10 md:bg-[#FFFFFF08] md:shadow-shadowOne md:p-10 md:px-20 md:rounded-[12px] md:max-w-[35rem]'>
                            <>
                                <h1 className='text-primaryVariantThree leading-8 font-clashSemibold text-[24px] md:text-xl md:w-[80%] md:mb-8'
                                > Questions or need assistance? <span className='md:hidden'><br /></span> Let us know about it </h1>
                                <p className="text-sm my-6 w-[90%] md:hidden">Email us below to any question related
                                    to our event</p>
                                <form onSubmit={handleSubmit}>
                                    <GTLInput
                                        placeholder="First Name"
                                        id='first_name'
                                        name='first_name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        touched={touched}
                                        value={values.first_name}
                                        error={errors.first_name}
                                    />
                                    <GTLInput
                                        placeholder="Email"
                                        marginTop='mt-[25px] md:mt-[30px]'
                                        id='email'
                                        name='email'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        touched={touched}
                                        value={values.email}
                                        error={errors.email}
                                    />
                                    <GTLTextarea
                                        row={4}
                                        col={0}
                                        placeholder="Message"
                                        marginTop='mt-[25px] md:mt-[30px]'
                                        id='message'
                                        name='message'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        touched={touched}
                                        value={values.message}
                                        error={errors.message}
                                    />
                                    <div className="flex justify-center mt-[25px] md:mt-[31px]">
                                        <Button 
                                            title="submit" 
                                            type="submit"
                                            loading={loading} 
                                        />
                                    </div>
                                </form>
                            </>
                        </Slide>
                        <LensFlare extraClass="-top-10 -left-8 md:top-[2rem] md:-left-[10rem] md:h-48 md:w-44" />
                        <LensFlare extraClass="hidden md:-bottom-[4rem] md:block md:-right-[7rem] md:h-48 md:w-44" />
                    </article>
                </section>
                <footer className='mt-9 md:hidden'>
                    <SocialLinks title='Share on' extraClass='flex-col items-center gap-y-2' />
                </footer>
            </section>
        </main>
    )
}

export default Contact