// components/LeftSidebarImage.jsx
import { leftSidebar } from "../assets/images";

const LeftSidebarImage = () => (
    <img
        src={leftSidebar}
        alt="Left Sidebar"
        className="w-[297px] h-auto object-cover absolute top-0 left-0 z-0"
    />
);

export default LeftSidebarImage;
