import React from "react";

const Mentors = () => {
  const MentorsData = [
    {
      id: 1,
      userImg: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      university: "Harvard University",
    },
    {
      id: 2,
      userImg: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      university: "Stanford University",
    },
    {
      id: 3,
      userImg: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Michael Johnson",
      university: "MIT",
    },
    {
      id: 4,
      userImg: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Williams",
      university: "Yale University",
    },
    {
      id: 5,
      userImg: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "David Brown",
      university: "Columbia University",
    },
    {
      id: 6,
      userImg: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Olivia Jones",
      university: "University of California, Berkeley",
    },
  ];
  return (
    <div className="text-center pt-[3rem] pb-[3rem]">
      <h2 className="text-3xl text-white p-5">Meet Our Mentors</h2>
      <div className="flex flex-wrap justify-center">
        {MentorsData.map((item, id) => {
          return (
            <div
              key={id}
              className=" flex flex-col items-center justify-center bg-blue-900 rounded-[1.5rem] w-[280px] h-[150px] m-[2rem]"
            >
              <div className="pb-[1rem]">
                <img
                  src={item.userImg}
                  className="h-[80px] w-[80px] rounded-full border-white border-solid border-2"
                  alt="mentor-img"
                />
              </div>
              <h2 className="text-white font-semibold text-[18px]">
                {item.name}
              </h2>
              <h3 className="text-purple-1000 font-semibold pb-[5rem]">
                {item.university}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentors;
