interface IProps {
    title: string,
    extraClass?: string,
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset',
    loading?: boolean
}

const index = ({ title, extraClass, onClick, type, loading }: IProps) => {
    return (
        <button 
            className={`${extraClass} w-[172px] h-[53px] text-white rounded-[4px] cursor-pointer ${loading ? 'bg-primaryVariantThree/25' : 'gradientTwo'}`} type={type} onClick={onClick}
            disabled={loading}
        >
            {loading ? 'Loading...' : title}
        </button>
    )
}

export default index