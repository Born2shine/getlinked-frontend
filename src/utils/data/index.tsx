import { bronzeMedal, facebookIcon, goldMedal, instagramIcon, linkedinIcon, partnerLogoFive, partnerLogoFour, partnerLogoOne, partnerLogoSix, partnerLogoThree, partnerLogoTwo, silverMedal, twitterIcon } from "../../assets"
import { SpecialText } from "../../atoms"

export const homeLinks = [
    {
        id: 1,
        title: 'Timeline',
        path: 'timeline',
        ref: '#timeline'
    },
    {
        id: 2,
        title: 'Overview',
        path: 'overview',
        ref: '#overview'
    },
    {
        id: 3,
        title: 'FAQs',
        path: 'faqs',
        ref: '#faqs'
    },
    {
        id: 4,
        title: 'Contact',
        path: '/contact',
        ref: '#contact'
    }
]

export const judgingCriteriaData = [
    {
        id: 1,
        title: <SpecialText title="Innovation and Creativity:" extraClass="text-[#FF26B9]" />,
        content: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features'
    },
    {
        id: 2,
        title: <SpecialText title="Functionality:"  extraClass="text-[#FF26B9]"/>,
        content: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
    },
    {
        id: 3,
        title: <SpecialText title="Impact and Relevance:"  extraClass="text-[#FF26B9]"/>,
        content: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
    },
    {
        id: 4,
        title: <SpecialText title="Technical Complexity:"  extraClass="text-[#FF26B9]"/>,
        content: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
        id: 5,
        title: <SpecialText title="Adherence to Hackathon Rules:" extraClass="text-[#FF26B9]" />,
        content: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    },
]
export const faqsData = [
    {
        id: 1,
        title: 'Can I work on a project I started before the hackathon?',
        content: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features'
    },
    {
        id: 2,
        title: 'What happens if I need help during the hackathon?',
        content: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
    },
    {
        id: 3,
        title: "What happens if I don't have an idea for a project?",
        content: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
    },
    {
        id: 4,
        title: 'Can I join a team or do I have to come with one?',
        content: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
        id: 5,
        title: 'What happens after the hackathon ends',
        content: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    },
    {
        id: 6,
        title: 'Can I work on a project I started before the hackathon?',
        content: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    },
]

export const timelineData = [
    {
        id: 1,
        title: <SpecialText title="Hackathon Announcement" />,
        content: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
        date: <SpecialText title="November 18, 2023" />,
    },
    {
        id: 2,
        title: <SpecialText title="Teams Registration begins" />,
        content: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
        date: <SpecialText title="November 18, 2023" />,
    },
    {
        id: 3,
        title: <SpecialText title="Hackathon Announcement" />,
        content: 'Interested Participants are no longer Allowed to register',
        date: <SpecialText title="November 18, 2023" />,
    },
    {
        id: 4,
        title: <SpecialText title="Announcement of the accepted teams and ideas" />,
        content: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
        date: <SpecialText title="November 18, 2023" />,
    },
    {
        id: 5,
        title: <SpecialText title="Getlinked Hackathon 1.0 Offically Begins" />,
        content: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
        date: <SpecialText title="November 18, 2023" />,
    },
    {
        id: 6,
        title: <SpecialText title="Demo Day" />,
        content: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
        date: <SpecialText title="November 18, 2023" />,
    },
]

export const rewardsData = [
    {
        id: 1,
        title: <span className="md:leading-6"> <span className="md:font-bold md:text-3xl">2nd</span> <br /> Runner</span>,
        prize: 'N300,000',
        image: silverMedal,
        bgColor: '#D434FE1F',
        borderColor: '#D434FE'
    },
    {
        id: 2,
        title: <span className="md:leading-6"><span className="md:font-bold md:text-3xl">1st</span> <br /> Runner</span>,
        prize: 'N400,000',
        image: goldMedal,
        bgColor: '#903AFF1F',
        borderColor: '#903AFF'
    },
    {
        id: 3,
        title: <span className="md:leading-6"><span className="md:font-bold md:text-3xl">3rd</span> <br /> Runner</span>,
        prize: 'N150,000',
        image: bronzeMedal,
        bgColor: '#D434FE1F',
        borderColor: '#D434FE'
    },

]

export const partnerLogo = [
    {
        id: 1,
        image: partnerLogoOne,
    },
    {
        id: 2,
        image: partnerLogoTwo,
    },
    {
        id: 3,
        image: partnerLogoThree,
    },
    {
        id: 4,
        image: partnerLogoFour,
    },
    {
        id: 5,
        image: partnerLogoFive,
    },
    {
        id: 6,
        image: partnerLogoSix,
    },

]

export const socialIcons = [
    {
        id: 1,
        image: instagramIcon,
    },
    {
        id: 2,
        image: twitterIcon,
    },
    {
        id: 3,
        image: facebookIcon,
    },
    {
        id: 4,
        image: linkedinIcon,
    }

]