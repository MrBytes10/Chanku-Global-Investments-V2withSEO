import React from "react";
import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
// Import images
import ChinaCivilEngineeringCCorporation from "../../assets/images/ChinaCivilEngineeringCCorporation.jpg";
import CountyGovernmentofMakueniLogo from "../../assets/images/nairobiCounty.jpg";
import NGCDFMbooni1 from "../../assets/images/NG-CDF.jpg";
import NGCDFKilome3 from "../../assets/images/NG-CDF.jpg";
//import NGCDFKilome1 from "../assets/images/NG-CDF.jpg";
//import NGCDFKilome2 from "../assets/images/NG-CDF.jpg";
import AfricaStarLtd from "../../assets/images/AfricaStarLtd.jpg";

const ClientsPage = () => {
  const clients = [
    {
      name: "County Government of Nairobi",
      year: "2019-2020",
      project: "Road Construction plus Box Culvert",
      details:
        "Filling with murram, compacting, construction of prevention wall, drainage and road works.",
      location: "Kibwezi West",
      type: "Sports Facility",
      image: CountyGovernmentofMakueniLogo,
    },
    {
      name: "China Civil Engineering Construction Corporation",
      year: "2020",
      project: "Construction of box culvert - Embul Bul Ngong Road",
      location: "Ngong",
      type: "Infrastructure",
      image: ChinaCivilEngineeringCCorporation,
    },

    {
      name: "NG-CDF Mbooni Constituency",
      year: "2019-2020",
      project: "Renovation of 3 classrooms Kaseki S.D.A Primary School",
      location: "Mbooni",
      type: "Education",
      image: NGCDFMbooni1,
    },
    {
      name: "NG-CDF Yatta Constituency",
      year: "2019-2020",
      project: "Construction of Classrooms at Ikombe Primary School",
      location: "Yatta",
      type: "Education",
      image: NGCDFKilome3,
    },
    // {
    //   name: "NG-CDF Kilome Constituency",
    //   year: "2019-2020",
    //   project: "Renovation of 2 Classrooms Ikombe Primary School",
    //   location: "Kilome",
    //   type: "Education",
    //   image: NGCDFKilome1,
    // },
    // {
    //   name: "NG-CDF Kilome Constituency",
    //   year: "2021-2022",
    //   project: "Renovation of 4 Classrooms Enguli Primary School",
    //   location: "Kilome",
    //   type: "Education",
    //   image: NGCDFKilome2,
    // },
    {
      name: "Africa Star Railway Operation Company Ltd",
      year: "2021",
      project: "Construction of police station, staff quarters and toilets",
      details: "Chain link fencing and gate",
      location: "Mbooni West",
      type: "Security Infrastructure",
      image: AfricaStarLtd,
    },
  ];

  const projectTypes = [...new Set(clients.map((client) => client.type))];

  return (
    <div className="min-h-screen bg-gray-50 py-0">
      <div className="bg-gradient-to-r from-[#020406] to-[#01aaeb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-6"> Our Trusted Clients</h1>
          <p className="text-xl">
            {" "}
            Building partnerships and delivering excellence across Kenya
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}

        {/* <div className="text-center mb-16 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Clients
          </h1>
          <p className="text-xl text-gray-600">
            Building partnerships and delivering excellence across Kenya
          </p>
        </div> */}

        {/* Project Types Filter */}
        {/* <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {projectTypes.map((type) => (
              <div
                key={type}
                className="bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200">
                <span className="text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                {/* Project Image */}
                <div className="w-full h-72 bg-white rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={client.image}
                    alt={client.project}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Client Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {client.name}
                  </h3>

                  {/* <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{client.year}</span>
                  </div>

                  <div className="flex items-start gap-2 text-gray-600">
                    <Building2 className="w-4 h-4 mt-1" />
                    <p>{client.project}</p>
                  </div>

                  {client.details && (
                    <p className="text-gray-500 text-sm">{client.details}</p>
                  )}

                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{client.location}</span>
                  </div> */}
                  {/* 
                  <div className="pt-4">
                    <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                      {client.type}
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Join our growing list of satisfied clients
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#01aaeb] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors duration-300">
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
