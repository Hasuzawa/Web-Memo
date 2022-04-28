import { useState, useRef } from "react"

const maxLength = 300

const Notice = () => {
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

    return (
        <div className="notice">
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
            {
                text.length > 0 ? <span className="counter">{text.length}/{maxLength}</span> : null
            }
        </div>
    )
}


export default Notice