import { SpecialText } from "../../atoms"

interface IProps {
    title: string,
    subTitle: string,
    children?: React.ReactElement
}

const SingleArticle = ({ title, subTitle, children }: IProps) => {
    return (
        <div className="relative mt-[28px] md:mt-0">
            <span className="flex flex-col items-center text-[20px] leading-[26px] font-clashBold md:text-[32px] md:items-start md:leading-9"><span className="block">{title}</span><SpecialText title={subTitle} /></span>
            {children}
        </div>
    )
}

export default SingleArticle