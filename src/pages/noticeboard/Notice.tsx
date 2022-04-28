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
        opacity: 0.3
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4
        }
    },
    fade: {
        opacity: 0
    }
}





interface noticeProps {
    id: number,
    deleteNotice: (id: number) => void
}


const Notice = (props: noticeProps) => {
    const [text, setText] = useState<string>("")
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const deleteThis = () => props.deleteNotice(props.id)

    // const handleInput = () => {
    //     const currentRef = textAreaRef.current
    //     if (!currentRef) return
    //     while (currentRef?.clientHeight < currentRef?.scrollHeight) {
    //         text.substring(0, text.length - 1)
    //     }
    // }

    // experimenting

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    //     setDeleting(e.ctrlKey && e.shiftKey ? true : false)
    //     if (e.key == "Delete" || e.key == "Backspace") {
    //         deleteThis()
    //     }
    // }
    // const handleKeyUp = () => setDeleting(false)

    const [deleting, setDeleting] = useState<boolean>(false)
    // const handleMouseOver = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    //     setDeleting(e.ctrlKey && e.shiftKey ? true : false)
    // }
    // const handleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    //     e.preventDefault()
    //     if (deleting)
    //         deleteThis()
    // }



    const cross = (
        <motion.span
            className="cross-container"
            variants={crossAnimation}
            initial="appear"
            animate="visible"
            exit="fade"
        >
            <ImCross
                className="cross-icon"
                size={size}
            />
        </motion.span>
    )


    return (
        <AnimatePresence>
            <motion.div
                layout
                className="box-dimension notice"
                variants={noticeAnimation}
                initial="appear"
                animate="visible"
                exit="fade"
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

                    // onKeyDown={handleKeyDown}
                    // onKeyUp={handleKeyUp}
                    // onMouseOver={handleMouseOver}
                    // onMouseLeave={() => setDeleting(false)}
                    // onClick={handleClick}

                    ref={textAreaRef}
                />
                {deleting ? cross : null}
                <h1>{props.id}</h1>
                <button onClick={() => props.deleteNotice(props.id)}>delete this</button>
            </motion.div>
        </AnimatePresence>
    )
}


export default Notice