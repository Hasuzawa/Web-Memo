import "./notice-board.css"
import Notice from "./Notice"
import Add from "./Add"
import { useState, useEffect } from "react"


const initial = 5
const max = 100

const NoticeBoard = () => {
    let id: number = 0
    let initialNotices: number[] = []
    while (id < initial && id < max) {
        initialNotices.push(++id)
    }

    const [notices, setNotices] = useState<number[]>(initialNotices)
    const addNotice = () => setNotices([...notices, ++id])  // holding a particular key can create 5 at once

    const deleteNotice = (id: number) => setNotices(notices.filter(x => x != id))

    const [canAdd, setCanAdd] = useState<boolean>(notices.length < max)

    useEffect(() => {
        setCanAdd(notices.length < max)
    }, [notices.length])

    const adder = <Add
        addNotice={addNotice}
    />

    return (
        <div className="outer-frame">
            <div className="inner-frame">
                {
                    notices.map((id: number) => <Notice key={id.toString()} id={id} />)
                }
                {canAdd ? adder : null}
            </div>
        </div>
    )
}


export default NoticeBoard