import { Fade } from "react-awesome-reveal"
import { Button } from ".."
import { illustrationSeven, starGray, starPurpleOne, winkWomanIcon } from "../../assets"

interface IProps {
    show: boolean,
    handleClose: () => void
}

const Modal = ({ show, handleClose }: IProps) => {
    return (show &&
        <Fade className='fixed w-screen h-screen bg-primaryVariantOne/95 z-[60] grid place-content-center'>
            <div className="relative m-4 border border-primaryVariantThree rounded-[5px] p-5 md:p-12">
                <img src={starPurpleOne} alt="star-icon" className="w-[12px] animate-pulse absolute -right-1 -top-[1.6rem] md:-right-[1rem] md:-top-[1rem] md:w-[16px]" />
                <img src={illustrationSeven} className="w-[258px] mx-auto md:w-[300px]" alt="success-img" />
                <div className="text-center py-[26px] font-semibold w-[70%] mx-auto md:text-2xl md:w-[80%]">
                    <h3>Congratulations</h3>
                    <p className="">you have successfully Registered!</p>
                </div>
                <div className="grid place-content-center text-xs text-center font-medium w-[80%] mx-auto md:text-[14px] md:w-[80%] md:leading-6">
                    <span>Yes, it was easy and you did it! </span>
                    <p className="flex items-center gap-x-[2px]"><span>check your mail box for next step</span> <img src={winkWomanIcon} alt="wink-icon" className="w-[16px] h-fit" /></p>
                </div>
                <Button
                    title="Back"
                    onClick={handleClose}
                    extraClass="w-full mt-[23px]"
                />
                <img src={starGray} alt="star-icon" className="w-[16px] animate-pulse absolute left-10 top-[11rem] md:left-[3.5rem] md:top-[13rem] md:w-[18px]" />

                <img src={starPurpleOne} alt="star-icon" className="w-[12px] animate-pulse absolute right-10 -bottom-[2.6rem] md:right-[1.5rem] md:bottom-[.8rem] md:w-[14px]" />
            </div>
        </Fade>
    )
}

export default Modal