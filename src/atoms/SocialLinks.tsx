import { SpecialText } from '.'
import { socialIcons } from '../utils'

interface IProps {
    title: string,
    extraClass?: string
}

const SocialLinks = ({title, extraClass}: IProps) => {
    return (
        <div className={`${extraClass} flex gap-x-4 mt-[12px]`}>
            <SpecialText title={title} extraClass="text-xs" />
            <div className="flex items-center gap-x-4">
                {
                    socialIcons.map(({ id, image }) => (
                        <img key={id} src={image} alt="social-icon" />
                    ))
                }
            </div>
        </div>
    )
}

export default SocialLinks