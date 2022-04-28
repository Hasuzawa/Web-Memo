import { FaPlus } from "react-icons/fa"
import { motion, AnimatePresence, Variants, Transition } from "framer-motion"



const size = 147

interface AddProps {
    addNotice: React.Dispatch<React.SetStateAction<any>>
}

const Add = (props: AddProps) => {


    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.addNotice(e)
    }

    return (
        <motion.div
            layout
            className="box-dimension add"
            onClick={handleClick}
        >
            <FaPlus
                className="plus-sign"
                size={size}
            />
        </motion.div>
    )
}


export default Add