import {
  FiCpu,
  FiFastForward,
  FiGlobe,
  FiLock,
  FiUserCheck,
  FiZap,
} from "react-icons/fi";

const FEATURE_ITEMS = [
  {
    icon: <FiCpu size={20} />,
    title: "Effortless Discovery",
    description:
      "Say goodbye to endless scrolling. Our intuitive interface lets you effortlessly discover the items you love.",
  },
  {
    icon: <FiLock size={20} />,
    title: "Secure Transaction",
    description:
      "Trust and safety are paramount. with robust security features and built-in payment protection.",
  },
  {
    icon: <FiZap size={20} />,
    title: "Instant Connection",
    description:
      "Connect with like-minded buyers and sellers instantly through our integrated messaging system.",
  },
  {
    icon: <FiFastForward size={20} />,
    title: "Seamless Transitions",
    description:
      "From browsing to checkout, we've streamlined every step of the buying process.",
  },
  {
    icon: <FiUserCheck size={20} />,
    title: "Personalized Experience",
    description: "Your journey is unique, and so is your shopping experience",
  },
  {
    icon: <FiGlobe size={20} />,
    title: "Global Reach, Local Touch",
    description:
      "With SellSpot, the world is your marketplace. Reach buyers and sellers from around the globe.",
  },
];

export { FEATURE_ITEMS };
