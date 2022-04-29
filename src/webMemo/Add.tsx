import { FaPlus } from "react-icons/fa"
import { motion } from "framer-motion"


const size = 147

interface AddProps {
    addNotice: () => void
}

const Add = (props: AddProps) => {
    const triggerAdd = () => props.addNotice()


    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        triggerAdd()
    }

    const handleMouseDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter")
            triggerAdd()
    }

    return (
        <motion.div
            layout
            className="box-dimension add"
            onClick={handleClick}
            tabIndex={0}
            onKeyDown={handleMouseDown}
        >
            <FaPlus
                className="plus-sign"
                size={size}
            />
        </motion.div>
    )
}


export default Add