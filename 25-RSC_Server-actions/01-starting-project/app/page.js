import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense, use } from "react";
import fs from 'node:fs/promises';


export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf-8');
    const users = JSON.parse(data);
    resolve(users);
    //reject(new Error("Error"));
  }, 2000));

  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <UsePromiseDemo usersPromise={fetchUsersPromise}/>
      </Suspense>
    </main>
  );
}
