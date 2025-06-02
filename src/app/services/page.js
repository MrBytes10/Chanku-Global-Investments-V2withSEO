// B:\mytestProjects\ChankuConstructionsV2\src\app\services\page.js
import React from "react";
import {
  Building,
  HardHat,
  Brush,
  Factory,
  Construction,
  Shell,
  Wrench,
  FileCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Building & Construction",
      description:
        "Expert delivery of commercial, residential, and industrial building projects with superior quality and precision.",
      details: [
        "Commercial & Office Buildings",
        "Residential Developments",
        "Renovations",
        "Educational Institutions",
        "Healthcare Facilities",
      ],
    },
    {
      icon: <Construction className="h-12 w-12" />,
      title: "Civil Engineering Works",
      description:
        "Comprehensive civil engineering solutions including roads, bridges, and infrastructure development with cutting-edge technology.",
      details: [
        "Road Construction & Rehabilitation",
        "Bridge Construction",
        "Drainage Systems",
        "Earthworks & Site Preparation",
        "Infrastructure Development",
      ],
    },
    {
      icon: <Shell className="h-12 w-12" />,
      title: "Water Works",
      description:
        "Specialized water infrastructure solutions ensuring reliable water supply and distribution systems.",
      details: [
        "Water Treatment Plants",
        "Water Supply Systems",
        "Sewerage Systems",
        "Borehole drilling Projects",
        "Water Storage Facilities",
        "Dam Construction & Desilting",
      ],
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Mechanical Engineering",
      description:
        "Full-service mechanical engineering solutions with modern equipment and expert technicians.",
      details: [
        "HVAC Systems Installation",
        "Industrial Equipment Setup",
        "Plant Installation & Maintenance",
        "Mechanical Systems Design",
        "Energy Efficiency Solutions",
      ],
    },
  ];

  const processes = [
    {
      number: "01",
      title: "Planning & Design",
      description:
        "Comprehensive project planning and detailed design development",
    },
    {
      number: "02",
      title: "Safety Assessment",
      description: "Thorough safety evaluation and risk mitigation strategies",
    },
    {
      number: "03",
      title: "Construction",
      description: "Expert execution with strict quality control measures",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Rigorous testing and quality verification processes",
    },
  ];

  return (
    <div className="flex-grow">
      <div className="bg-gradient-to-r from-[#020406] to-[#01aaeb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl">
            Comprehensive construction solutions for every project
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border rounded-lg hover:shadow-xl transition duration-300 bg-white">
              <div className="text-[#01aaeb] mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="text-gray-600 space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-[#01aaeb] rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#01aaeb] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.number}
                </div>
                <h3 className="font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Quality Commitment</h2>
          <p className="text-gray-600 mb-6">
            At ChankuGlobal Ltd., we maintain the highest standards of quality
            in every project we undertake. Our commitment to excellence is
            reflected in our comprehensive quality assurance processes and
            professional project management.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <FileCheck className="text-[#01aaeb] h-6 w-6 mr-2" />
              <span>Quality Control at Every Stage</span>
            </div>
            <div className="flex items-center">
              <HardHat className="text-[#01aaeb] h-6 w-6 mr-2" />
              <span>Professional Team</span>
            </div>
            <div className="flex items-center">
              <Shell className="text-[#01aaeb] h-6 w-6 mr-2" />
              <span>Modern Equipment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
