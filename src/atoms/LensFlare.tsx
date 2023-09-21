interface IProps {
    extraClass?: string;
}
const LensFlare = ({ extraClass }: IProps) => {
    return (
        <div className={`${extraClass} bg-purple-600 h-32 w-32 blur-3xl absolute z-0 md:blur-[120px]`}></div>
    )
}

export default LensFlare