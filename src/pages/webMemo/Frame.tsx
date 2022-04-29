import Area from "./Area"

interface FrameProps {
    children: React.ReactNode
    memoPlacement: "start" | "center"
}

const placement = {
    "start": "start-memo",
    "center": "center-memo"
}

const Frame = (props: FrameProps) => {
    const memoLayout = placement[props.memoPlacement]
    const innerFrameCss = ["inner-frame", memoLayout].join(" ")

    return (
        <div className="outer-frame">
            <div className={innerFrameCss} >
                {props.children}
            </div>
        </div>
    )
}

export default Frame