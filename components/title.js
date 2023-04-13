import Image from "next/image"

export default function Title({title}) {
    return (
        <div className="title-container">
            <div className="title-style">
                <div className="title">{title}</div>
            </div>
        </div>
    )
}