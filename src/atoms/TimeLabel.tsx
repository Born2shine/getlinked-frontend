
const TimeLabel = ({ value, unit }: { value: string, unit: string }) => {
    return (
        <span className="font-family-2 text-[48px] md:text-[64px]">{value}<span className="text-[14px]">{unit}</span></span>
    )
}

export default TimeLabel