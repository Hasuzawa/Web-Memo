import { useState, useRef } from "react"
import { motion, AnimatePresence, Variants, Transition } from "framer-motion"
import { ImCross } from "react-icons/im"

const titleMaxLength = 25
const contentMaxLength = 300
const iconSize = 128

const memoTransition: Transition = {
    duration: 0.5
}

const memoAnimation: Variants = {
    appear: {
        opacity: 0.3,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: memoTransition
    }
}

const crossTransition = {
    duration: 0.3
}

const crossAnimation: Variants = {
    appear: {
        opacity: 0.3
    },
    visible: {
        opacity: 1,
        transition: crossTransition
    },
    fade: {
        opacity: 0,
        transition: crossTransition
    }
}

const plainTextField = {
    disabled: false,
    spellCheck: false,
    readOnly: false,
    autoCapitalize: "none",
    autoComplete: "off",
    autoCorrect: "off"
}

interface noticeProps {
    id: number,
    deleteNotice: (id: number) => void
}

const Notice = (props: noticeProps) => {
    const [text, setText] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
    }

    const deleteThis = () => props.deleteNotice(props.id)

    const [deleting, setDeleting] = useState<boolean>(false)

    const cross = (
        <motion.span
            layout
            className="cross-container"
            variants={crossAnimation}
            initial="appear"
            animate="visible"
            exit="fade"
        >
            <ImCross
                size={iconSize}
            />
        </motion.span>
    )

    const cornerRef = useRef<HTMLButtonElement>(null)
    const onCornerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Delete" || e.key === "Backspace")
            deleteThis()
        else if (e.key === "Escape")
            cornerRef.current?.blur()
    }

    return (
        <AnimatePresence>
            <motion.div
                layout
                className="box-dimension memo"
                variants={memoAnimation}
                initial="appear"
                animate="visible"
                exit="fade"
            >
                <div className="header">
                    <input
                        type="text"
                        className="title"
                        maxLength={titleMaxLength}
                        { ...plainTextField }
                    />
                    {text.length > 0 ? <span className="counter">{text.length}/{contentMaxLength}</span> : null}
                </div>
                <textarea
                    className="text-area"
                    maxLength={contentMaxLength}
                    onChange={handleChange}
                    value={text}
                    { ...plainTextField }
                />
                
                <AnimatePresence>
                    {deleting ? cross : null}
                </AnimatePresence>
                <button
                    className="notice-corner"
                    onClick={deleteThis}
                    onKeyDown={onCornerKeyDown}
                    onMouseEnter={() => setDeleting(true)}
                    onMouseLeave={() => setDeleting(false)}
                    onFocus={() => setDeleting(true)}
                    onBlur={() => setDeleting(false)}
                    ref={cornerRef}
                >
                    <span className="lower-triangle" />
                </button>
            </motion.div>
        </AnimatePresence>
    )
}


export default Notice