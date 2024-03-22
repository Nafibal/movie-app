import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  return (
    <div
      className={`bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 ${
        visible ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline ">Home</div>
        <div className="px-3 text-center text-white hover:underline ">
          Movies
        </div>
        <div className="px-3 text-center text-white hover:underline ">
          Series
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
