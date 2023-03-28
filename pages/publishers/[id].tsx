import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {  useRecoilValue } from "recoil";
import { darkState, sideBarState } from "../../atoms/darkAtom";
import Hero from "../../components/Hero";



const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  const dark = useRecoilValue(darkState);
  const sideBar = useRecoilValue(sideBarState);
  const [loading, setLoading] = useState(false);
  const [publishers, setPublishers] = useState([]);

  async function fetchPublishers() {
    setLoading(true);
    const data = await fetch(
      `https://api.rawg.io/api/games?publishers=${id}&key=${process.env.NEXT_PUBLIC_GAMES_API_KEY}`
    ).then((res) => res.json())
    setPublishers(data.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchPublishers();
  }, [id]);
  
  return (
    <div
      className={` h-full ${dark ? " bg-[#141414]" : "bg-white"} ${
        sideBar && "!h-screen overflow-hidden"
      }`}>
      <Head>
        <title>Publisher - {id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative pt-32 lg:space-y-24 lg:pl-16 max-w-[1240px] mx-auto">
        <section className="max-w-[1240px] mx-auto flex items-center justify-center">
          <Hero item={publishers} title={id} />
        </section>
      </main>
    </div>
  );
};

export default Home;

