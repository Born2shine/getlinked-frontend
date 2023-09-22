import { useFormik } from 'formik'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import axios from '../api/axios'
import { CATEGORY_LIST, REGISTER } from '../api/constant'
import { illustrationSix, starGray, starPurple, starPurpleOne, starWhite, teamMove } from '../assets'
import { LensFlare, SocialLinks } from '../atoms'
import { Button, GTLInput, GTLModal, GTLSelect, TopNavbar } from '../components'
import { flashMessage } from '../utils'
import { BiCheck, BiChevronLeft } from 'react-icons/bi'
import { registrationSchema } from '../schema'
import { Dictionary } from '../types'
import { Link } from 'react-router-dom'

interface RegisterProps {
    email: string,
    phone_number: string,
    team_name: string,
    group_size: number | string,
    project_topic: string,
    category: string,
    privacy_poclicy_accepted: boolean
}


const Register = () => {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [acceptPrivacy, setAcceptPrivacy] = useState(false)
    const [categoryList, setCategoryList] = useState([])

    // generate random number for group size
    const numberFrom = Array.from({ length: 10, }, (_, idx) => {
        return { value: (idx + 1) * 2, label: (idx + 1) * 2 }
    })

    const groupSize = useMemo(() => {
        return [
            {
                value: '',
                label: 'Select'
            },
            ...numberFrom
        ]
    }, [])

    // get category list
    const getCategoryList = async () => {
        try {
            // setLoading(true)
            const res = await axios.get(`${CATEGORY_LIST}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setLoading(false)
            if (res.data) {
                const sortData = res.data.map(({ id, name }: Dictionary) => {
                    return { value: id, label: name }
                })
                setCategoryList(sortData)
                console.log(sortData)
                // setLoading(false)
            }

        } catch (error: any) {
            console.log(error.message)
        }
    }

    // submit register form
    const registerFormHandler = async () => {
        try {
            setLoading(true)
            const res = await axios.post(`${REGISTER}`, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setLoading(false)
            if (res.data) {
                resetForm()
                values.category = ''
                values.group_size = ''
                setAcceptPrivacy(false)
                setLoading(false)
                setShowModal(true)
                // flashMessage({ type: "success", message: 'Registration was successfully' })
            }

        } catch (error: any) {
            setLoading(false)
            console.log(error)
            if (error?.response?.status === 400 && error?.response?.data?.email) {
                flashMessage({ type: "error", message: error.response.data.email[0] })
                return
            }
            if (error.response.data) {
                flashMessage({ type: "error", message: 'Please fill all fields' })
            }
        }
    }

    // initialize form data
    const initialValues: RegisterProps = {
        email: '',
        phone_number: '',
        team_name: '',
        group_size: '',
        project_topic: '',
        category: '',
        privacy_poclicy_accepted: false
    }

    const { values, errors, touched, handleBlur, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: registrationSchema,
        onSubmit: () => {
            if (!values.category) {
                flashMessage({ type: "error", message: 'Please choose a category' })
                return
            }
            if (!values.group_size) {
                flashMessage({ type: "error", message: 'Please choose your group size' })
                return
            }
            if (acceptPrivacy === false) {
                flashMessage({ type: "error", message: 'Your must agree with terms and policy' })
                return
            }
            registerFormHandler()
        }
    })

    useEffect(() => {
        values.privacy_poclicy_accepted = acceptPrivacy
    }, [acceptPrivacy])

    useLayoutEffect(() => {
        getCategoryList()
    }, [])

    return (
        <main className="">
            <GTLModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
            <div className="hidden md:block">
                <TopNavbar showBorderBottom={false} />
            </div>
            <section className="px-10 py-6 md:px-[38px] lg:px-[128px]">
                <Link to='/' className="relative w-7 h-7 rounded-full gradientOne grid place-content-center cursor-pointer md:hidden" onClick={() => null}> <span className="z-10"><BiChevronLeft /> </span>
                    <span className="bg-primaryVariantOne absolute top-0 left-0 right-0 bottom-0 h-[25px] w-[25px] rounded-full z-0 m-auto"></span>
                </Link>
                {/* <span className="cursor-pointer text-primaryVariantThree font-clashSemibold md:hidden"> Register
                </span> */}
                <section className='mt-4'>
                    <article className='relative md:w-[90%] md:mx-auto md:flex md:justify-between'>
                        <img src={starPurple} alt="star-icon" className="hidden w-[16px] animate-pulse absolute md:block md:left-[5rem] md:top-[2rem] md:w-[16px]" />

                        <img src={starGray} alt="star-icon" className="hidden w-[16px] animate-pulse absolute md:block md:left-[5rem] md:bottom-[10rem] md:w-[16px]" />
                        <Fade direction='left' delay={200} className='md:block'>
                            <img src={illustrationSix} alt="image" className='w-[70%] mx-auto md:hidden lg:block lg-top-0 lg:w-[1000px]' />
                        </Fade>
                        <Slide direction='right' className='relative z-10 md:bg-[#FFFFFF08] md:shadow-shadowOne mx-auto md:p-10 md:px-16 md:rounded-[12px] lg:w-[70rem]'>
                            <>
                                <span className="hidden cursor-pointer text-primaryVariantThree font-clashSemibold md:block md:text-2xl"> Register
                                </span>
                                <div className="text-sm mt-3 w-[90%] flex items-end gap-x-3">
                                    <span>Be part of this movement!</span>
                                    <img src={teamMove} alt='team-img' className='' />
                                </div>
                                <h1 className='uppercase leading-8 font-clashMedium tracking-widest mt-4 text-[18px] md:text-xl md:w-[80%] md:mb-8'
                                > Create a free account </h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mt-8 md:grid md:grid-cols-2 md:items-start md:gap-x-8">
                                        <GTLInput
                                            label='Team’s Name'
                                            placeholder="Enter the name of your group"
                                            id='team_name'
                                            name='team_name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched}
                                            value={values.team_name}
                                            error={errors.team_name}
                                        />
                                        <GTLInput
                                            label='Phone'
                                            placeholder="Enter your phone number"
                                            marginTop='mt-[15px] md:mt-0'
                                            id='phone_number'
                                            name='phone_number'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched}
                                            value={values.phone_number}
                                            error={errors.phone_number}
                                            type='number'
                                        />
                                    </div>
                                    <div className="mt-4 md:grid md:grid-cols-2 md:items-start md:gap-x-8">
                                        <GTLInput
                                            label='Email'
                                            placeholder="Enter your email address"
                                            id='email'
                                            name='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched}
                                            value={values.email}
                                            error={errors.email}
                                        />
                                        <GTLInput
                                            label='Project Topic'
                                            placeholder="What is your group project topic"
                                            marginTop='mt-[15px] md:mt-0'
                                            id='project_topic'
                                            name='project_topic'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            touched={touched}
                                            value={values.project_topic}
                                            error={errors.project_topic}
                                        />
                                    </div>
                                    <div className="mt-4 grid grid-cols-2 justify-between items-start gap-x-8">
                                        <GTLSelect
                                            options={[
                                                {
                                                    value: '',
                                                    label: 'Select your category'
                                                },
                                                ...categoryList
                                            ]}
                                            label='Category'
                                            id='category'
                                            name='category'
                                            onChange={(e) => values.category = e.target.value}
                                            onBlur={handleBlur}
                                            touched={touched}
                                            value={values.category}
                                            error={errors.category}
                                        />
                                        <GTLSelect
                                            options={groupSize}
                                            label='Group Size'
                                            id='group_size'
                                            name='group_size'
                                            onChange={(e) => values.group_size = e.target.value}
                                            onBlur={handleBlur}
                                            touched={touched}
                                            value={values.group_size}
                                            error={errors.group_size}
                                        />

                                    </div>
                                    <p className='text-[#FF26B9] my-3 leading-[-3px] text-[11px] italic md:text-[13px]'>
                                        Please review your registration details before submitting
                                    </p>
                                    <div className='flex gap-x-2 w-fit cursor-pointer items-start my-3 leading-[-3px] text-[11px] md:text-[13px] md:items-center'
                                        onClick={() => setAcceptPrivacy(!acceptPrivacy)}
                                    >
                                        <label className='grid place-content-center w-4 h-4 border border-white rounded-[2px]'>
                                            {acceptPrivacy && <span><BiCheck /></span>}
                                        </label>
                                        <span>I agreed with the event terms and conditions  and privacy policy</span>
                                    </div>
                                    <div className="flex justify-center mt-[25px] md:mt-[31px]">
                                        <Button
                                            title="Register Now"
                                            type="submit"
                                            loading={loading}
                                            extraClass='md:w-full'
                                        />
                                    </div>
                                </form>
                            </>
                        </Slide>
                        <LensFlare extraClass="-top-10 -left-8 md:top-[2rem] md:-left-[10rem] md:h-48 md:w-44" />
                        <LensFlare extraClass="hidden md:-bottom-[4rem] md:block md:-right-[7rem] md:h-48 md:w-44" />

                        <img src={starPurpleOne} alt="star-icon" className="w-[16px] animate-pulse absolute right-[1rem] top-[8rem] md:left-[25rem] md:top-[20rem] md:w-[16px]" />

                        <img src={starGray} alt="star-icon" className="w-[16px] animate-pulse absolute -left-[1.5rem] top-[23rem] md:left-[55rem] md:top-[1rem] md:w-[16px]" />

                        <img src={starPurpleOne} alt="star-icon" className="w-[12px] animate-pulse absolute -right-[1rem] bottom-[13rem] md:hidden" />

                        <img src={starWhite} alt="star-icon" className="hidden w-[16px] animate-pulse absolute md:block md:right-[4rem] md:-bottom-[1rem] md:w-[12px]" />
                    </article>
                </section>
                <footer className='mt-9 md:hidden'>
                    <SocialLinks title='Share on' extraClass='flex-col items-center gap-y-2' />
                </footer>
            </section>
        </main>
    )
}

export default Register