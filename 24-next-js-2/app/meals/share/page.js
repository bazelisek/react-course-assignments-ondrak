import Link from "next/link"

export default function Share() {
    return(
        <main>
            <h1>Share</h1>
            <p><Link href={"/community"}>Community</Link></p>
            <p><Link href={"/meals"}>Meals</Link></p>
        </main>
    )
}