import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CourseListItems = ({ list }) => {
  const {
    ui:updateList,
    moveDown, 
    moveUp,
    remove,
    showMenu,
    menuDialogeBox
  } = list;
  const [courseList, setCourseList] = useState(updateList);

  useEffect(() => {
    setCourseList(updateList);
    console.log("CourseList updated:", list);
  }, [list]);

  const onDragEnd = (result) => {
    console.log("Drag ended:", result);
    if (!result.destination) return;

    const items = Array.from(courseList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCourseList(items);
  };

  const onDragStart = (start) => {
    console.log("Drag started:", start);
  };

  const onDragUpdate = (update) => {
    console.log("Drag updated:", update);
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      <Droppable droppableId="courses">
        {(provided, snapshot) => (
          <ul
            className={`w-full max-w-[1080px] ${
              snapshot.isDraggingOver ? "bg-blue-100" : ""
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {courseList.map((course, index) => (
              <Draggable
                key={course.id}
                draggableId={String(course.id)}
                index={index}
              >
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{
                      ...provided.draggableProps.style,
                      backgroundColor: snapshot.isDragging
                        ? "lightgreen"
                        : "white",
                      transition: "background-color 0.2s ease",
                    }}
                    className="w-full border-2 mb-2 p-4 transition-all duration-300 flex gap-4 items-center rounded-lg shadow"
                  >
                    <div
                      {...provided.dragHandleProps}
                      className="w-6 h-12 cursor-grab"
                    >
                      <img
                        src="/grid.png"
                        alt="drag handle"
                        className="object-contain h-full"
                      />
                    </div>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-24 h-14 rounded-lg shadow-sm shadow-[#00000040]"
                    />
                    <h3 className="flex-grow font-medium text-xl text-black">
                      {course.title}
                    </h3>
                    <p className="text-black text-lg font-normal">
                      {course.price ?? (course.free ? "Free" : "")}
                    </p>
                    <p className="text-sm font-normal text-black px-2 border-[1px] border-[#7E7E7E] bg-[#DBFFCE] rounded">
                      {course.type}
                    </p>
                    <div
                      className="border-2 py-2 px-4 cursor-pointer relative"
                      onClick={() => menuDialogeBox(index)}
                    >
                      <i className="fa-solid fa-ellipsis-vertical text-2xl"></i>

                      {showMenu === index && (
                        <ul className="absolute top-full left-0 shadow bg-[#F7F7F7] rounded-lg z-[1] p-3 flex flex-col gap-2">
                          <li
                            className="text-base font-normal text-black text-nowrap py-1 px-4"
                            onClick={() => moveUp(index)}
                          >
                            <i className="mr-1 fa-solid fa-arrow-up"></i>
                            Move to To
                          </li>
                          <li
                            className="text-base font-normal text-black text-nowrap py-1 px-4"
                            onClick={() => moveDown(index)}
                          >
                            <i className="mr-1 fa-solid fa-arrow-down"></i>
                            Move to Down
                          </li>
                          <li
                            className="text-base font-normal text-[#FA2D2D] text-nowrap py-1 px-4"
                            onClick={() => remove(index)}
                          >
                            <i className="mr-1 fa-regular fa-trash-can"></i>
                            Remove
                          </li>
                        </ul>
                      )}
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CourseListItems;
