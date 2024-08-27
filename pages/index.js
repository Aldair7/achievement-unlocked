import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Achievement Unlocked</title>
        <meta name="description" content="Achieve your goals with gamification!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Achievement Unlocked</h1>
        <p>Your Journey to unlocking achievements in real life starts here.</p>
      </main>
    </div>
  );
}
