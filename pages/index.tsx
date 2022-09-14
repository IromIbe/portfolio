import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./components/homepage/homepage";

const Home: NextPage = () => {
  <Head>
    <title>Next App</title>
    <link rel='icon' href='/icon.svg' />
  </Head>;

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
