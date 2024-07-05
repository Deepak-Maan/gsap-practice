import CardboardIcon from "../../public/assets/images/svg/cardBoardIcon.svg"
import MeetIcon from "../../public/assets/images/svg/meetIcon.svg"
import StandBoardIcon from "../../public/assets/images/svg/standBoardIcon.svg"
import MoneyBagIcon from "../../public/assets/images/svg/moneyBagIcon.svg"
import PaperWorkIcon from "../../public/assets/images/svg/paperIcon.svg"
import ToolsIcon from "../../public/assets/images/svg/toolsIcon.svg"

export const TopCardsData = [
    {
        id: 1,
        Icon: CardboardIcon,
        para: "Inspect property for storm damage or quote preparation."
    },
    {
        id: 3,
        Icon: MeetIcon,
        para: "Meet with claims adjuster if applicable"
    },
    {
        id: 5,
        Icon: StandBoardIcon,
        para: "Production Planning (permitting/scheduling)"
    },
]

export const BottomCardsData = [
    {
        id: 2,
        Icon: MoneyBagIcon,
        para: "Estimate repair or replacement cost"
    },
    {
        id: 4,
        Icon: PaperWorkIcon,
        para: "Finalize necessary documentation"
    },
    {
        Icon: ToolsIcon,
        para: "Construction begins! (Most projects completed in 1 day!)"
    },
]
