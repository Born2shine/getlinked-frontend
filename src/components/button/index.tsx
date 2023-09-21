interface IProps {
    title: string,
    extraClass?: string,
    onClick?: () => void
}

const index = ({ title, extraClass, onClick }: IProps) => {
    return (
        <button className={`${extraClass} w-[172px] h-[53px] gradientTwo text-white rounded-[4px] cursor-pointer hover:bg-red-500`} onClick={onClick}>{title}</button>
    )
}

export default index