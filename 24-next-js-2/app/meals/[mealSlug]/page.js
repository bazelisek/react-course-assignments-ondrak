import Link from "next/link"
export default function Meal({params}) {
    return (
        <main>
            <h1>{params.slug}</h1>
            <p><Link href={"/community"}>Community</Link></p>
            <p><Link href={"/meals/share"}>Share</Link></p>
            <p><Link href={"/meals"}>Meals</Link></p>
        </main>
    )
}