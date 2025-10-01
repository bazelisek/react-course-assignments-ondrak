import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({params}) {
    const {mealSlug} = await params;
    const meal = getMeal(mealSlug);
    if (!meal) {
        notFound(0);
    }
    return {
        title: meal.title,
        description: meal.description,
    }
}

export default async function Meal({params}) {
    const {mealSlug} = await params;
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, "<br />")

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill src={meal.image} alt={meal.title + " image"}/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                  __html: meal.instructions,
                }}></p>
            </main>
        </>
    )
}