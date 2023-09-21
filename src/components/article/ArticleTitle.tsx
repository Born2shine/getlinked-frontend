import { SpecialText } from "../../atoms"

interface IProps {
    title: string | React.ReactElement,
    specialText?: string | any,
    subTitle?: string,
    extraClass?: string,
    subTitleExtraClass?: string,
}

const ArticleTitle = ({ title, subTitle, specialText, subTitleExtraClass }: IProps) => {
    return (
        <div>
            <span className="flex flex-col items-center text-[20px] leading-[26px] font-clashBold md:text-[32px] md:items-start md:leading-9"><span className="block">{title}</span><SpecialText title={specialText} /></span>
            <p className={`${subTitleExtraClass} text-[13px] text-center mx-10 mt-4 mb-[45px] leading-6 md:text-[14px] md:text-left md:mx-0 md:w-[65%]`}>{subTitle}</p>
        </div>
    )
}

export default ArticleTitle