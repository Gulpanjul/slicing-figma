import Home from "~/components/assets/Videfly/home.svg";
import Calender from "~/components/assets/Videfly/calender.svg";
import Folder from "~/components/assets/Videfly/folder.svg";
import Pencil from "~/components/assets/Videfly/pencil.svg";
import User from "~/components/assets/Videfly/user.svg";
import Note from "~/components/assets/Videfly/note.svg";
import Trash from "~/components/assets/Videfly/trash.svg";

const NAV_ITEM = [
    {
        icon: <Home />,
        label: "Beranda",
        href: "#",
    },
    {
        icon: <Calender />,
        label: "Kelola Konten",
        href: "#",
    },
    {
        icon: <Folder />,
        label: "Proyek",
        href: "#",
    },
    {
        icon: <Pencil />,
        label: "AI Tools",
        href: "#",
    },
    {
        icon: <User />,
        label: "Avatar",
        href: "#",
    },
    {
        icon: <Note />,
        label: "Brand Kit",
        href: "#",
    },
    {
        icon: <Trash />,
        label: "Trash",
        href: "#",
    },
];

export { NAV_ITEM };
