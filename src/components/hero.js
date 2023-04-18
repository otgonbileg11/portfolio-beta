import Image from "next/image"

export default function Hero() {
    return (
        <div className="hero relative">
             <Image src="/anime-programmer.jpg" width={700} height={900} />
            <div className="contents w-1/2">
                <p className="code">&lt;Start/&gt;</p>
                <h1 className="heading-jumbo">Hello.<br></br>I'm Otgonbileg.</h1>
                <p>I’m a lorem ipsum, illustrator, and creator of courses, templates, wireframe kits, and the occasionally useful side-project.</p>
            </div>
        </div>
    )
}