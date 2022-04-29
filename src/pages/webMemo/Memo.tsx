import { useState } from "react"
import { motion, AnimatePresence, Variants, Transition } from "framer-motion"
import { ImCross } from "react-icons/im"

const titleMaxLength = 25
const contentMaxLength = 300
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
        y: -50,
        transition: {
            duration: 1
        }
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
                className="cross-icon"
                size={size}
            />
        </motion.span>
    )


    return (
        <AnimatePresence>
            <motion.div
                layout
                className="box-dimension memo"
                variants={noticeAnimation}
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
                
                <h1>{props.id}</h1>
                    {deleting ? cross : null}
                <button
                    className="notice-corner"
                    onClick={deleteThis}
                    onKeyDown={(e) => (e.key === "Delete" || e.key === "Backspace") ? deleteThis() : null}
                    onFocus={() => setDeleting(true)}
                    onBlur={() => setDeleting(false)}
                />
            </motion.div>
        </AnimatePresence>
    )
}


export default Notice