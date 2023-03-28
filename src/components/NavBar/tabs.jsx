import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";

export const tabs = [
    {
        name: 'Home',
        path: '/',
        Icon: AiOutlineHome,
    },
    {
        name: 'Movies',
        path: '/movie',
        Icon: BiCameraMovie,
    },
    {
        name: 'Series',
        path: '/tv',
        Icon: MdMonitor,
    }
]