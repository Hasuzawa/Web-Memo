import "./notice-board.css"
import Notice from "./Notice"
import Add from "./Add"
import { useState, useEffect } from "react"
import { LayoutGroup, Reorder } from "framer-motion"


const initial = 5
const max = 50

const NoticeBoard = () => {
    const [id, setId] = useState<number>(initial)
    const increaseId = () => setId(id + 1)

    useEffect(() => {
        addNotice()
    }, [id])

    const [notices, setNotices] = useState<number[]>([1,2,3,4,5])
    const addNotice = () => setNotices([...notices, id])  // TODO: holding a particular key can create 5 at once

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
        <div className="outer-frame">
            <div className="inner-frame">
                {/* <Reorder.Group values={notices} onReorder={setNotices}>
                    {notices.map((id: number) => 
                        <Reorder.Item key={id} value={id}>
                            {id}
                        </Reorder.Item>
                    )}
                </Reorder.Group> */}

                <LayoutGroup>
                    {notices.map((id: number) =>
                         <Notice
                            key={id.toString()}
                            id={id}
                            deleteNotice={deleteNotice}
                        />)}
                
                    {canAdd ? adder : null}
                </LayoutGroup>
            </div>
        </div>
    )
}


export default NoticeBoard