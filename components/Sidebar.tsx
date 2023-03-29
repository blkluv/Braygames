import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { darkState, sideBarState } from "../atoms/darkAtom";
import { AiOutlineClose } from "react-icons/ai";
import { MoonIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid";
import { HiOutlineLightBulb } from "react-icons/hi";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

function Sidebar() {
  const [dark, setDark] = useRecoilState(darkState);
  const [sideBar, setSideBar] = useRecoilState<boolean>(sideBarState);
  const router = useRouter();
  const id = router.asPath;
  const { user } = useAuth();
  const User = useUser(user!?.uid);

  function handleNav() {
    setSideBar(!sideBar);
  }
  return (
    <div
      className={sideBar ? `w-full h-[120vh] -translate-y-4  bg-black/70` : ""}>
      <div
        className={
          sideBar
            ? `fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[35%]
         h-screen ease-in-out duration-500 ${
           dark ? "bg-[#141414]" : "bg-white"
         }`
            : `fixed top-0 left-[-100%] ease-in duration-500 ${
                dark ? "bg-[#141414]" : "bg-white"
              }`
        }>
        <div className=" px-2 sm:px-4 md:px-6 mt-8">
          <div className=" flex w-full h-full items-center justify-between">
            <Link href="/">
              <div className="flex items-center absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6">
                <h1 className="text-2xl font-bold">
                  <span className={`${dark ? "" : "text-black"}`}>Game</span>
                  <span className="text-[#5165e5]">Land</span>
                </h1>
              </div>
            </Link>
            <div
              className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              onClick={handleNav}>
              <AiOutlineClose className={`${dark ? "" : "text-black"}`} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4 flex items-center space-x-2 justify-end py-2">
            {User?.userImage ? (
              <>
                <div
                  className="text-[#d9d9d9] flex items-center justify-center mt-auto hover:cursor-pointer ml-auto xl:-mr-5"
                  onClick={() => router.push(`/user`)}>
                  <img
                    src={User?.userImage}
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                    alt="userImg"
                  />
                  <div className=" leading-5 ">
                    <h4 className="font-bold text-sm">
                      {(User?.firstName[0] + User?.lastName[0]).toString()}
                    </h4>
                  </div>
                </div>
              </>
            ) : (
              <>
                <UserIcon
                  width={25}
                  height={25}
                  className={`hover:cursor-pointer ml-2 ${
                    dark ? "" : "text-black"
                  }`}
                  onClick={() => router.push("/user")}
                />
                <div className=" leading-5 ">
                  <h4 className="font-bold text-sm">
                    {(User?.firstName[0] + User?.lastName[0]).toString()}
                  </h4>
                </div>
              </>
            )}
            <div className="flex justify-center items-center space-y-2">
              {dark ? (
                <HiOutlineLightBulb
                  className="hover:cursor-pointer"
                  size={30}
                  onClick={() => setDark(!dark)}
                />
              ) : (
                <MoonIcon
                  width={30}
                  height={30}
                  onClick={() => setDark(!dark)}
                  className=" hover: cursor-pointer text-black"
                />
              )}
            </div>
          </div>
        </div>
        <div className="pb-4 pt-12 px-10 flex flex-col ">
          <ul className="uppercase text-left w-auto ">
            <Link href="/" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                home
              </li>
            </Link>
            <Link href="/mylist" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/mylist" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/mylist" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                my list
              </li>
            </Link>
            <Link href="/genres" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/genres" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/genres" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                genres
              </li>
            </Link>
            <Link href="/platforms" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/platforms" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/platforms" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                platforms
              </li>
            </Link>
            <Link href="/creators" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/creators" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/creators" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                creators
              </li>
            </Link>
            <Link href="/stores" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/stores" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/stores" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                stores
              </li>
            </Link>
            <Link href="/publishers" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/publishers" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/publishers" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                publishers
              </li>
            </Link>
            <Link href="/developers" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/developers" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/developers" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                developers
              </li>
            </Link>
            <Link href="/tags" onClick={handleNav}>
              <li
                className={
                  dark
                    ? `ml-10 cursor-pointer text-md md:text-xl py-2 uppercase hover:border-b border-b-[#5156e5] ${
                        id === "/tags" ? "text-[#5156e5]" : "text-white"
                      }`
                    : `ml-10 text-md md:text-xl py-2 uppercase cursor-pointer hover:border-b border-b-[#5156e5] ${
                        id === "/tags" ? "text-[#5156e5]" : "text-black"
                      }`
                }>
                tags
              </li>
            </Link>
          </ul>
          <div className="pt-20"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
