import { useState, useRef } from "react"
import { motion, AnimatePresence, Variants, Transition } from "framer-motion"
import { ImCross } from "react-icons/im"

const maxLength = 300
const size = 128

const noticeAnimation = {
    appear: {
        opacity: 0.3,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    fade: {
        opacity: 0
    }
}

const crossAnimation = {
    appear: {
        opacity: 0.5
    },
    visible: {
        opacity: 1
    },
    fade: {
        opacity: 0
    }
}





interface noticeProps {
    id: number
}


const Notice = (props: noticeProps) => {
    const [text, setText] = useState<string>("")
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    // const handleInput = () => {
    //     const currentRef = textAreaRef.current
    //     if (!currentRef) return
    //     while (currentRef?.clientHeight < currentRef?.scrollHeight) {
    //         text.substring(0, text.length - 1)
    //     }
    // }

    // experimenting

    const [shift, setShift ] = useState<boolean>(false)
    const handleKeyDown = (e: React.MouseEvent<HTMLDivElement>) => {
        
    }

    const [hover, setHover ] = useState<boolean>(true)

    const deleter = <ImCross className="deleter" size={size} />


    return (
        <AnimatePresence>
            <motion.div
                className="box-dimension notice"
                variants={noticeAnimation}
                initial="appear"
                animate="visible"
                exit="fade"
                onKeyDown={(e) => handleKeyDown}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="header">
                    {text.length > 0 ? <span className="counter">{text.length}/{maxLength}</span> : null}
                </div>
                <textarea
                    className="text-area"
                    autoComplete="off"
                    disabled={false}
                    readOnly={false}
                    spellCheck={false}
                    maxLength={maxLength}
                    onChange={handleChange}
                    value={text}
                    // onInput={handleInput}
                    ref={textAreaRef}
                />
                {deleter}
            </motion.div>
        </AnimatePresence>
    )
}


export default Notice