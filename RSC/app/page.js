import UsePromiseDemo from "@/components/UsePromiseDemo";
import { Suspense } from "react";
import fs from "fs/promises";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  const usersPromiseData = new Promise((resolve, reject) => {
    setTimeout(async () => {
      const data = await fs.readFile("dummy-db.json", "utf-8");
      const users = JSON.parse(data);
      resolve(users);
    }, 2000);
  });

  return (
    <main>
      <ErrorBoundary fallback="Something went Wrong.">
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo usersPromise={usersPromiseData} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
