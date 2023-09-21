import { Link } from "react-router-dom"
import { SpecialText } from "."

const Logo = () => {
    return (
        <Link to="/" className="font-medium text-white font-clashBold text-[15px] md:text-2xl">get<SpecialText title="linked" /> </Link>
    )
}

export default Logo