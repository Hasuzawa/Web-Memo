import { GrReturn } from "react-icons/gr"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const iconSize = 60

const returnMemo = () => {

    return (
        <div className="box-dimension memo return-memo">
            <span className="e404">404</span>
            <h1 className="e404-header">This page is not found!</h1>
            <Link to="/" className="e404-return">
                <GrReturn size={iconSize} />
            </Link>
        </div>
    )
}

export default returnMemo