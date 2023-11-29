import { useState } from "react";
import CardList from "./DashboardCard";
import SignIn from "./SignIn";
import DisplayUsername from "./DisplayUsername";

const Sidebar = ({ onSkillClick, loggedInUser}) => {
  const skills = ["ALL", "TechSkills", "SoftSkills"];

  const [isSubmenuHidden, setIsSubmenuHidden] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuHidden((prev) => !prev);
  };

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.classList.toggle("hidden");
    }
  };

  return (
    <div>
      <div>
        <span
          className="absolute text-white text-xl top-5 left-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
              <h1 className="font-bold text-gray-200 text-[20px] ml-3">
                Welcome!   
                

              </h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick={toggleSidebar}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          {/* ... other menu items */}
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleSubmenu}
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[20px] ml-4 text-gray-200 font-bold">
                Edu Dashboard
              </span>
              <span
                className={`text-sm ${
                  isSubmenuHidden ? "rotate-0" : "rotate-180"
                }`}
                id="arrow"
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className={`text-left text-sm mt-2 mx-auto text-gray-200 font-bold ${
              isSubmenuHidden ? "hidden" : ""
            }`}
            id="submenu"
          >
            <ul>
              {skills.map((skill) => (
                <h1 key={1}>
                  <li
                    className="text-[20px] text-bold pl-8 cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1"
                    key={skill}
                    onClick={() => onSkillClick(skill)}
                  >
                    {skill}
                  </li>
                </h1>
              ))}
            </ul>
          </div>
          {/* ... other menu items */}

          <div className="p-3 mt-9 flex items-left rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="text-[15px] ml-2 text-gray-200 font-bold">
              Your Email {}
            </span>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              {" "}
              is registered
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
