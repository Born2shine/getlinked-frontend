
interface IProps {
    title: string| React.ReactElement,
    extraClass?: string
}

const specialText = ({ title, extraClass }: IProps) => {
    return (
        <span className={`${extraClass} text-primaryVariantThree`}>{title}</span>
    )
}

export default specialText