import { FaPlus } from "react-icons/fa"
import { motion } from "framer-motion"
import { useRef } from "react"


const size = 147

interface AddProps {
    addNotice: () => void
}

const Add = (props: AddProps) => {
    const triggerAdd = () => props.addNotice()
    const divRef = useRef<HTMLDivElement>(null)


    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        triggerAdd()
    }

    const handleMouseDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter")
            triggerAdd()
        else if (e.key === "Escape")
            divRef.current?.blur()
    }

    return (
        <motion.div
            layout
            className="box-dimension add"
            onClick={handleClick}
            tabIndex={0}
            onKeyDown={handleMouseDown}
            ref={divRef}
        >
            <FaPlus
                className="plus-sign"
                size={size}
            />
        </motion.div>
    )
}


export default Add