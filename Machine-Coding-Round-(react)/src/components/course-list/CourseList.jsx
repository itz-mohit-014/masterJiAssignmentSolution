import courses from "./mockData.js";
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import BrandingLogo from "../utils/BrandingLogo.jsx";
import DragList from "./DragList.jsx";

const CourseList = ({ theme }) => {
  const { bg, text } = theme;
  const [courseList, setCourseList] = useState(courses);
  const [showMenu, setShowMenu] = useState(null);
  const [ui, setUi] = useState(courseList);

  const moveUp = (index) => {
    if (index == 0) return;
    console.log("goes up", index);
    const arr = [...courseList];
    const temp = arr[index];
    arr[index] = arr[index - 1];
    arr[index - 1] = temp;
    setCourseList(arr);
  };

  const movePosition = (oldIndex, newIndex) => {
    console.log("position", index);
    const arr = [...courseList];
    const temp = arr[oldIndex];
    arr[oldIndex] = arr[newIndex];
    arr[newIndex] = temp;
    setCourseList(arr);
  };

  const menuDialogeBox = (index) => {
    console.log("menu toggle");
    index !== showMenu ? setShowMenu(index) : setShowMenu(null);
  };

  const moveDown = (index) => {
    if (index >= courseList.length - 1) return;
    console.log("goes down", index);
    const arr = [...courseList];
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
    setCourseList(arr);
  };

  const remove = (index) => {
    console.log("remove", index);
    const courseListArray = [...courseList];
    courseListArray.splice(index, 1);
    setCourseList(courseListArray);
  };

  useEffect(() => {
    setUi(courseList);
  }, [courseList]);

  return (
    <section
      className={`min-h-screen w-full pt-4 px-9 pb-9 `}
      style={{
        backgroundColor: bg,
      }}
    >
      <Header text={text} />

      <div className="bg-[#F9F7F7] rounded-2xl [box-shadow:_2px_2px_3px_0px_#00000040] p-9 py-6 mt-8 w-3/4 min-h-[80vh] mb-40 md:mb-0 ">
        <div>
          <h2 className="font-bold text-[40px] text-[#313131]">
            Manage Bundle
          </h2>
          <p className="text-xl font-normal text-[#4B4747]">
            Change orders of the products based on priority
          </p>
        </div>

        <DragList
          list={{
            ui,
            menuDialogeBox,
            moveDown,
            moveUp,
            remove,
            movePosition,
            showMenu,
          }}
        />
      </div>

      <BrandingLogo />
    </section>
  );
};

export default CourseList;
