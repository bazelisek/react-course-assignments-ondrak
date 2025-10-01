import Link from "next/link";

export default function Meals() {
    return(
        <main>
            <h1>Meals</h1>
            <p><Link href={"/community"}>Community</Link></p>
            <p><Link href={"/meals/share"}>Share</Link></p>
        </main>
    )
}