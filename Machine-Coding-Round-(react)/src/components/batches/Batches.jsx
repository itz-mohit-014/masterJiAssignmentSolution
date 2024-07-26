import batches from "./mockData.js";
import { useEffect, useRef, useState } from "react";
import Header from "../Header/Header.jsx";
import BrandingLogo from "../utils/BrandingLogo.jsx";

const Batches = ({ theme }) => {
  const { bg, text } = theme;
  const [pagenateList, setPaginateList] = useState(10);
  const [searchInput, setSearchInput] = useState("");
  const [courseListBatches, setcourseListBatches] = useState(batches);
  const [searchCourseListBatches, setSearchCourseListBatches] =
    useState(courseListBatches);

  const currentListStart = useRef(0);

  const searchBatch = () => {
    const filterBatch = batches.filter((batch) =>
      batch.title.toLowerCase().includes(searchInput)
    );
    setcourseListBatches(filterBatch);
  };

  const nextList = () => {
    currentListStart.current += Number(pagenateList);
    console.log("increment", currentListStart.current);

    currentListStart.current >= courseListBatches.length - 1
      ? (currentListStart.current -= Number(pagenateList))
      : currentListStart.current;

    const lastIndex = pagenateList + currentListStart.current;
    setSearchCourseListBatches(
      courseListBatches
        .slice(currentListStart.current, lastIndex)
        .slice(0, pagenateList)
    );
  };

  const prevList = () => {
    currentListStart.current -= Number(pagenateList);

    currentListStart.current <= 5
      ? (currentListStart.current = 0)
      : currentListStart.current;

    console.log("decrement", currentListStart.current);
    const lastIndex = pagenateList + currentListStart.current;
    setSearchCourseListBatches(
      courseListBatches
        .slice(currentListStart.current, lastIndex)
        .slice(0, pagenateList)
    );
  };

  useEffect(() => {
    setSearchCourseListBatches(courseListBatches.slice(0, pagenateList));
  }, [pagenateList]);

  useEffect(() => {
    setSearchCourseListBatches(courseListBatches.slice(0, pagenateList));
  }, [courseListBatches]);

  return (
    <section
      className={`min-h-screen w-full pt-4 px-9 pb-9 `}
      style={{
        backgroundColor: bg,
      }}
    >
      <Header text={text} />

      <div className="bg-[#F9F7F7] rounded-2xl [box-shadow:_2px_2px_3px_0px_#00000040] p-9 py-6 mt-8 max-w-fit md:mr-40 mb-40 md:mb-0">
        <div>
          <h2 className="font-bold text-[40px] text-[#313131]">Batches</h2>
          <p className="text-xl font-normal text-[#4B4747]">
            Create learner’s batch and share information at the same time.
          </p>
        </div>

        <form
          action=""
          className="my-8 flex gap-2 md:flex-nowrap flex-wrap"
          onSubmit={(e) => {
            e.preventDefault();
            searchBatch();
          }} 
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by Title (alt+k or cmd+k)"
            className="font-normal text-base text-black p-2 rounded-[4px] border-[1px] border-[#BEBEBE] placeholder:text-[#C8C7C7] outline-none mx-2"
          />
          <button className="bg-[#6C6BAF] py-2 px-6 text-white font-normal text-lg rounded-md active:scale-95">
            Submit
          </button>
        </form>

        <div className="overflow-auto">
          <table className="rounded-lg border-[1px] border-[#7D7D7D] overflow-hidden border-separate border-spacing-0">
            <thead className="relative bg-[#F2F2F2] after:content-[''] after:absolute after:inset-0 after:border-[1px] after:border-black after:h-full after:[border-radius:8px_8px_0px_0px]">
              <tr className="border-2 border-black">
                <th className="text-base py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                  Title
                </th>
                <th className="text-base py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                  Start Date
                </th>
                <th className="text-base py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                  End Date
                </th>
                <th className="text-base py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                  Price
                </th>
                <th className="text-base py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                  Validity/Expiry
                </th>
                <th className="text-base py-6 px-4 text-left text-[#4B4747]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {searchCourseListBatches.map((batch) => {
                return (
                  <tr key={batch.id}>
                    <td className="text-sm py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D] flex gap-4 items-center sm:flex-nowrap flex-wrap">
                      <img
                        src={batch.thumbnail}
                        alt={batch.title}
                        className="w-24 h-14 rounded-lg  shadow-sm shadow-[#00000040]"
                      />
                      <p>{batch.title}</p>
                    </td>
                    <td className="text-sm py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                      {batch.date.start}
                    </td>
                    <td className="text-sm py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                      {batch.date.end}
                    </td>
                    <td className="text-sm py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                      ₹ {batch.price}
                    </td>
                    <td className="text-sm py-6 px-4 text-left text-[#4B4747] border-r border-r-[#7D7D7D]">
                      {batch.validity} days
                    </td>
                    <td className="text-sm py-6 px-4 text-left text-[#4B4747] ">
                      <span
                        className={`p-2 py-1 rounded-[4px] border-[1px] ${
                          batch.status == "Published"
                            ? "bg-[#4dd04b52] border-[#4ED04B]"
                            : "bg-[#a4a4a455] border-[#A4A4A4]"
                        }`}
                      >
                        {batch.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="flex items-center gap-3 mt-6 ml-auto w-fit px-9 ">
          <span className="text-base font-normal text-[#4B4747]">
            Rows per page
          </span>
          <select
            className="border-[1px] border-[#BEBEBE] text-black text-base p-2 rounded-[4px]"
            value={pagenateList}
            onChange={(e) => setPaginateList(e.target.value)}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <button
            className="text-black text-xl disabled:bg-red-500 "
            onClick={prevList}
            disabled={currentListStart.current == 0 ? true : false}
          >
            <i
              className={`text-lg fa-solid fa-angle-left ${
                currentListStart == 0 ? "text-[#d6d6d6]" : "text-black"
              }`}
            ></i>
          </button>
          <button
            className="text-black text-xl  disabled:bg-red-500 "
            onClick={nextList}
            disabled={
              currentListStart.current >=
              courseListBatches.length - pagenateList
                ? true
                : false
            }
          >
            <i
              className={`text-lg fa-solid fa-angle-right ${
                currentListStart >= courseListBatches.length - pagenateList
                  ? "text-[#D6D6D6]"
                  : "text-black"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <BrandingLogo />
    </section>
  );
};

export default Batches;
