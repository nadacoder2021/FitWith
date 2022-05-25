import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";




export function Sidebar(props) {

const [image, setImage]= useState("")



useEffect(()=> {if(props.src){setImage(props.src)}}, [props.src])

    console.log("this is image passed", props.src)
    console.log("this is setting image",image)



    return (
      <div className="">
       <div className="w-64 border flex-col bg-white py-4 px-6 h-full">
          <div className=" flex justify-center items-center">
            <div className="flex p-1 justify-center items-center bg-black rounded-full w-fit">
              <Link href="/">
                <Image
                  height={props.height}
                  width={props.width}
                  src={props.src}
                  alt="logo"
                  className="overflow-visible rounded-full"
                />
              </Link>
            </div>
          </div>
          <div className="">
            {props.links.map((link, i) => (
              <div
                className="mt-10 text-center hover:bg-sky-700 rounded-full"
                key={i}
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  href={link[1]}
                >
                  <a>{link[0]}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    );
}

export function SidebarMobile(props) {
  const [image, setImage] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (props.src) {
      setImage(props.src);
    }
  }, [props.src]);

  console.log("this is image passed", props.src);
  console.log("this is setting image", image);
  //if width is small, we want the togglemenu

  return (
    <div className="">
      {toggleMenu ? (
        <RiCloseLine
          color="white"
          size={27}
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <RiMenu3Line
          color="white"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
      )}
      {toggleMenu && (
        <div className="w-64 border flex-col bg-white py-4 px-6 h-full">
          <div className=" flex justify-center items-center">
            <div className="flex p-1 justify-center items-center bg-black rounded-full w-fit">
              <Link href="/">
                <Image
                  height={props.height}
                  width={props.width}
                  src={props.src}
                  alt="logo"
                  className="overflow-visible rounded-full"
                />
              </Link>
            </div>
          </div>
          <div className="">
            {props.links.map((link, i) => (
              <div
                className="mt-10 text-center hover:bg-sky-700 rounded-full"
                key={i}
              >
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={20}
                  duration={500}
                  href={link[1]}
                >
                  <a>{link[0]}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


// {
//   toggleMenu ? (
//     <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
//   ) : (
//     <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
//   );
// }
// {
//   toggleMenu && (
//     <div className="w-64 border flex-col bg-white py-4 px-6 h-full">
//       <div className=" flex justify-center items-center">
//         <div className="flex p-1 justify-center items-center bg-black rounded-full w-fit">
//           <Link href="/">
//             <Image
//               height={props.height}
//               width={props.width}
//               src={props.src}
//               alt="logo"
//               className="overflow-visible rounded-full"
//             />
//           </Link>
//         </div>
//       </div>
//       <div className="">
//         {props.links.map((link, i) => (
//           <div
//             className="mt-10 text-center hover:bg-sky-700 rounded-full"
//             key={i}
//           >
//             <Link
//               activeClass="active"
//               spy={true}
//               smooth={true}
//               offset={20}
//               duration={500}
//               href={link[1]}
//             >
//               <a>{link[0]}</a>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }