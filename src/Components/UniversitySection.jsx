import React from "react";

const UniversitySection = () => {
  const UniversityData = [
    {
      id: 1,
      img: "https://seeklogo.com/images/U/university-of-cambridge-logo-958B084639-seeklogo.com.png",
    },
    {
      id: 2,
      img: "https://seeklogo.com/images/H/harvard-university-logo-9F80FAEA9A-seeklogo.com.png",
    },
    {
      id: 3,
      img: "https://seeklogo.com/images/U/university-of-southern-california-logo-731EC8D092-seeklogo.com.png",
    },
    {
      id: 4,
      img: "https://ethz.ch/en/the-eth-zurich/global/eth-global-news-events/2019/04/zurich---from-einstein-to-the-digital-future/_jcr_content/news_content/twocolumn/par_left/fullwidthimage/image.imageformat.930.864680530.jpg",
    },
    {
      id: 5,
      img: "https://seeklogo.com/images/J/jhu-johns-hopkins-university-logo-0AD931982D-seeklogo.com.png",
    },
    {
      id: 6,
      img: "https://seeklogo.com/images/I/illinois-state-university-logo-C1271B37DF-seeklogo.com.png",
    },
  ];
  return (
    <div>
      <div>
        <p className="p-[2rem] text-white text-center text-[20px]">
          Learn from Scientists, research scholars from the top institutes in
          the world.
        </p>
        <div className="text-center ">
          <h2 className="text-3xl text-white  p-2">Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {UniversityData.map((item, id) => {
              return (
                <div
                  key={id}
                  className="bg-white h-40 sm:h-[160px] rounded-lg flex items-center overflow-hidden justify-center"
                >
                  <img src={item.img} alt="img" className="p-4" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySection;
