import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title> Achievement Unlocked</title>
        <meta name="description" content="Achieve your goals with gamification!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Achievement Unlocked</h1>
        <p className="mt-2 text-lg">Your Journey to unlocking achievements in real life starts here.</p>
        <Link href="/auth/login">
          <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Get Started
          </a>
        </Link>
      </main>
    </div>
  );
}
