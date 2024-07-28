import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiPhone } from "react-icons/fi";
import { FaUserFriends } from 'react-icons/fa'; // Import icon for enrollment count
import deliveryImage from '../images/AmrognLogo2.png';
import Image from '../images/menu/chickenFajita.png';
import Placeholder from '../images/placeholder.png';
import branchCmc from '../images/branch.jpg';
import branch2 from '../images/branch2.jpg';
import branch4Kilo from '../images/branch4Kilo.jpg';
import branchMerkato from '../images/branchMerkato.jpg';
import branchPiassa from '../images/branchPiassa.jpg';
import branchMekanisa from '../images/branchMekanisa.jpg';
import branchBethel from '../images/branchBethel.jpg';

export const Example = () => {
  return (
    <div className="h-screen bg-neutral-100">
      <Nav />
    </div>
  );
};

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </>
  );
};

const LinksOverlay = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      {/* <Logo /> */}
      <NavLogo />
      <LinksContainer setHoveredImage={setHoveredImage} />
      {hoveredImage && (
        <motion.img
          src={hoveredImage}
          alt="Hovered"
          className="absolute top-8 right-10 w-60 h-50 border-2 border-black rounded-lg object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      <FooterCTAs />
    </nav>
  );
};

const LinksContainer = ({ setHoveredImage }) => {
  return (
    <>
      <h1 className=" font-extrabold pl-3 ">Addis Ababa </h1>
      <div className="flex items-center justify-center md:justify-start space-x-2">
        <FaUserFriends className="text-gray-600" />
        <p className=" text-gray-900">8+ branches in Addis</p>
      </div>
      <motion.div className="font-mono space-y-2 p-8 pl-8 md:pl-20">
        {LINKS.map((l, idx) => {
          return (
            <NavLink key={l.title} href={l.href} idx={idx} image={l.image} setHoveredImage={setHoveredImage}>
              {l.title}
            </NavLink>
          );
        })}
      </motion.div>
    </>
  );
};

const NavLink = ({ children, href, idx, image, setHoveredImage }) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className="block font-semibold text-2xl md:text-5xl lg:text-5xl text-2sm  text-gray from-neutral-600 transition-colors hover:text-neutral-500"
      onMouseEnter={() => setHoveredImage(image)}
      onMouseLeave={() => setHoveredImage(null)}
    >
      {children}
    </motion.a>
  );
};

const NavLogo = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6">
      <img 
        src={deliveryImage} 
        alt="Delivery" 
        className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto" 
      />
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12 }}
      href="#"
      className="grid h-18 w-18 place-content-center rounded-br-xl rounded-tl-xl bg-customYellow transition-colors"
    >
      <div className="md:w-1/2">
        <img src={deliveryImage} alt="Delivery" className=" h-auto object-contain absolute -top-12" />
      </div>
    </motion.a>
  );
};

const HamburgerButton = ({ active, setActive }) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, right: 16 }}
        className="fixed z-10 rounded-xl bg-gradient-to-br from-customYellow to-customRed shadow-lg shadow-violet-800/20"
      />
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`group fixed right-7 top-4 z-50 h-8 w-8 transition-all${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <div className="w-9 relative overflow-visible">
          <div className="flex justify-center mb-16">
            <img
              src={Placeholder}
              // alt={name}
              className="w-32 h-32 object-contain absolute -top-12"
            />
          </div>
        </div>
        {/* <img src={Placeholder} alt="" />
         */}
        {/* <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white"
          style={{ x: "-50%", y: "50%" }}
        /> */}
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-white transition-colors hover:text-violet-300" />
            </motion.a>
          );
        })}
      </div>
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.125,
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: 8 }}
        className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-gray-800 px-3 py-3 text-4xl uppercase text-white transition-colors hover:bg-customYellow hover:text-gray-300 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
      >
        <span className="hidden md:block">Order Now</span> <FiPhone />
      </motion.button>
    </>
  );
};

const LINKS = [
  {
    title: "Amroኝ Mekanisa/መካኒሳ ",
    href: "https://www.google.com/maps/dir//XPPP%2B4HF+Mela+Building,+Egypt+St,+Addis+Ababa/@8.9503227,38.6372101,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b859895a5738b:0x13436b018d17807d!2m2!1d38.7374226!2d8.9861947?entry=ttu",
    image: branchMekanisa,
  },
  {
    title: "Amroኝ Piassa/ፒያሳ",
    href: "https://www.google.com/maps/dir//2QH2%2BFM9,+Churchill+Ave,+Addis+Ababa/@9.0286645,38.6693344,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x164b85e231bf6445:0x9887bb7e7fb4c330!2m2!1d38.7517363!2d9.0286737?entry=ttu",
    image: branchPiassa,
  },
  {
    title: "Amroኝ CMC/ሲኤምሲ",
    href: "https://www.google.com/maps/dir//2V82%2BWHJ+Amrogn+Chicken+(CMC),+Addis+Ababa/@9.0178516,38.8514864,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x164b9bfe0fcb5e7d:0x28469f0a408bc3bd!2m2!1d38.8514907!2d9.0178515!3e0?entry=ttu",
    image: branchCmc,
  },
  // {
  //   title: "Amroኝ Sarbet/ሳርቤት",
  //   href: "#",
  //   image: branch,
  // },
  {
    title: "Amroኝ 4kilo/4ኪሎ",
    href: "https://www.google.com/maps/dir/8.9074185,38.7604635/2QJ7%2BQ78+Ambassador+Mall+%7C+4+KILO+%7C+%E1%8A%A0%E1%88%9D%E1%89%A3%E1%88%B3%E1%8B%B0%E1%88%AD+%E1%88%9E%E1%88%8D+%7C+4+%E1%8A%AA%E1%88%8E,+Addis+Ababa/@8.9699816,38.6689037,12z/data=!3m1!4b1!4m18!1m7!3m6!1s0x164b859797149b25:0x2bea4652ce50614!2zQW1iYXNzYWRvciBNYWxsIHwgNCBLSUxPIHwg4Yqg4Yid4Ymj4Yiz4Yuw4YitIOGInuGIjSB8IDQg4Yqq4YiO!8m2!3d9.0319229!4d38.7631891!16s%2Fg%2F11kqs8yqv1!4m9!1m1!4e1!1m5!1m1!1s0x164b859797149b25:0x2bea4652ce50614!2m2!1d38.7631891!2d9.0319229!3e0?entry=ttu",
    image: branch4Kilo,
  },
  {
    title: "Amroኝ Bethel/ቤተል",
    href: "https://www.google.com/maps/dir//2M4Q%2BVXP,+Addis+Ababa/@9.0072033,38.6075512,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b870022bf2d69:0xce13732998334078!2m2!1d38.6899531!2d9.0072125?entry=ttu",
    image: branchBethel,
  },
  {
    title: "Amroኝ Merkato/መርካቶ",
    href: "https://www.google.com/maps/dir//2PJQ%2BRJM,+Addis+Ababa/@9.0321444,38.6567416,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x164b85582ea19511:0x42bfa14b77382442!2m2!1d38.7391435!2d9.0321536?entry=ttu",
    image: branchMerkato,
  },
  {
    title: "Amroኝ Kality/ቃሊቲ ",
    href: "#",
    image: branch2,
  }
];

const SOCIAL_CTAS = [
  {
    Component: SiTwitter,
    href: "#",
  },
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "50px",
    height: "50px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
