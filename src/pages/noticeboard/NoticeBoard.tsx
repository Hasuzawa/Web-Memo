import "./notice-board.css"
import Notice from "./Notice"

const NoticeBoard = () => {

    return (
        <div className="outer-frame">
            <div className="inner-frame">
                <Notice />
                <Notice />
                <Notice />

 

            </div>
        </div>
    )
}


export default NoticeBoard