import React from "react";

const PointByPointMolecule = () => {
  const points = [
    {
      id: 1,
      job: "Graphic Designer",
      company: "RSDAC",
      date: "19 Jan - 19 Mar",
      long: "3 Bulan",
      location: "Klaten, Jawa Tengah, Indonesia",
      type: "Onsite",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQHoK9C7cm1dJA/company-logo_200_200/company-logo_200_200/0/1654163121594?e=2147483647&v=beta&t=ijuIUQTvXBv2yYtuNplGyvrTNY9p8zWivd0VGugSTms",
    },
    {
      id: 2,
      job: "UI Designer",
      company: "VERDEX",
      date: "19 Jan - 19 Mar",
      long: "3 Bulan",
      location: "Klaten, Jawa Tengah, Indonesia",
      type: "Onsite",
      image: "https://media.licdn.com/dms/image/v2/D560BAQHBfPJd4pl-vg/company-logo_200_200/company-logo_200_200/0/1732368014538/verdexid_logo?e=1743033600&v=beta&t=JDiuiIy05LK8k4BUyviJsywEoro-oBBX7g5o-rB9UZE",
    },
    {
      id: 3,
      job: "Frontend Web Developer",
      company: "UTY Software House",
      date: "19 Jan - 19 Mar",
      long: "3 Bulan",
      location: "Klaten, Jawa Tengah, Indonesia",
      type: "Onsite",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQHoK9C7cm1dJA/company-logo_200_200/company-logo_200_200/0/1654163121594?e=2147483647&v=beta&t=ijuIUQTvXBv2yYtuNplGyvrTNY9p8zWivd0VGugSTms",
    },
  ];

  return (
    <div className="flex items-center">
        {/* Vertical Line */}
        <div className="w-[1px] mr-[-8px] h-[400px] bg-[#17171750]"></div>

        {/* Card */}
        <div className="flex flex-col">
            {points.map((point, index) => (
            <div key={point.id} className="flex items-center mt-10 mb-10">
                {/* Dot */}
                <div className="z-10 w-4 h-4 bg-[#171717] rounded-full"></div>
                {/* Image */}
                <div className="ml-4">
                <img
                    src={point.image}
                    alt={point.title}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                </div>
                {/* Content */}
                <div className="ml-6 leading-none">
                <h3 className="text-[32px] font-thin text-[#171717]">{point.job}</h3>
                <p className="text-[24px] font-thin text-gray-600 mt-2">{point.company}</p>
                <p className="text-[12px] font-thin text-gray-600 mt-2">{point.date}, {point.long}</p>
                <p className="text-[12px] font-thin text-gray-600 mt-2">{point.location}, {point.type}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default PointByPointMolecule;
