import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-whi shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} text="Home" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <>
    <div className="sidebar-icon group">{icon}</div>
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </>
);
const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;
