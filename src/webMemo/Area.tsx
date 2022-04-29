import Memo from "./Memo"
import Add from "./Add"
import { useState, useEffect } from "react"
import { AnimatePresence, LayoutGroup } from "framer-motion"


const initial = 5
const max = 50

const NoticeBoard = () => {
    const [id, setId] = useState<number>(initial)
    const increaseId = () => setId(id + 1)

    useEffect(() => {
        if (id > initial)   // block initial render when initial value is set
            addNotice()
    }, [id])

    const [notices, setNotices] = useState<number[]>([1,2,3,4,5])
    const addNotice = () => setNotices([...notices, id])

    const deleteNotice = (k: number) => {
        console.log("id to be deleted", k)
        const newList = notices.filter(x => x != k)
        setNotices(newList)
    }

    const [canAdd, setCanAdd] = useState<boolean>(notices.length < max)

    useEffect(() => {
        setCanAdd(notices.length < max)
    }, [notices])

    const adder = <Add
        addNotice={increaseId}
    />

    return (
        <LayoutGroup>
            {notices.map((id: number) =>
                <Memo
                    key={id.toString()}
                    id={id}
                    deleteNotice={deleteNotice}
                />)}
            {canAdd ? adder : null}
        </LayoutGroup>
    )
}


export default NoticeBoard