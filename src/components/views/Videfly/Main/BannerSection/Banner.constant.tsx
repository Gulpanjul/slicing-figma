import Video from "~/components/assets/Videfly/video.svg";
import Textbox from "~/components/assets/Videfly/textbox.svg";
import UserTalk from "~/components/assets/Videfly/user-talk.svg";
import UserStar from "~/components/assets/Videfly/user-star.svg";

const ACTION_ITEMS = [
    {
        icon: <Video />,
        label: "URL to video",
        href: "#",
    },
    {
        icon: <Textbox />,
        label: "Text to Video",
        href: "#",
    },
    {
        icon: <UserTalk />,
        label: "Speech to Video",
        href: "#",
    },
    {
        icon: <UserStar />,
        label: "AI Avatar",
        href: "#",
    },
];

export { ACTION_ITEMS };
