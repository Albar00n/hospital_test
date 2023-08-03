import Head from "next/head";
import Image from "next/image";
import HomeDetails from "../components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home home</title>
        <link rel="icon" href="/icons/face.svg" />
        <link rel="image_src" type="image/png" href="https://lmtd.coffee/lmtd.png" />
      </Head>
      <HomeDetails />
    </>
  );
}
