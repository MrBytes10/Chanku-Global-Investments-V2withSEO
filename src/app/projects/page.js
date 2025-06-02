// B:\mytestProjects\ChankuConstructionsV2\src\app\projects\page.js
"use client";

import React, { useState } from "react";
import {
  Building2,
  Calendar,
  MapPin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

// Import your images
import BoxCulvert from "../../assets/images/ProjectsPics/NewPics/BoxCulvertConstructionAfter.jpeg";
import IsaaniPlaygroundBefore from "../../assets/images/ProjectsPics/IsaaniPrimarySchoolSportsGroundBefore.jpeg";
import IsaaniPlaygroundAfter from "../../assets/images/ProjectsPics/NewPics/IsaaniPlaygroundRehabilitationAfter.jpeg";
import KasekiPrimary from "../../assets/images/ProjectsPics/NewPics/KasekiSDAPrimarySchoolAfter.jpeg";
//import KasekiAfter from "../assets/images/ProjectsPics/KasekiAfter.jpeg";
import KilomboBefore from "../../assets/images/ProjectsPics/KilomboPrimarySchoolBefore.jpeg";
import KilomboAfter from "../../assets/images/ProjectsPics/NewPics/KilomboPrimarySchoolAfter.jpeg";
import EnguliBefore from "../../assets/images/ProjectsPics/EnguliPrimarySchoolBefore.jpeg";
import EnguliAfter from "../../assets/images/ProjectsPics/NewPics/EnguliPrimarySchoolAfter.jpeg";
import SultanHamud from "../../assets/images/ProjectsPics/NewPics/AICSultanHamudPrimarySchooAfter.jpeg";
import PoliceStation from "../../assets/images/ProjectsPics/NewPics/NgoniPoliceStationConstructionAfter.jpeg";
import BlueprintDesign from "../../assets/images/ProjectsPics/blueprint-design-nairobi.jpg";
import ExcavationKajiado from "../../assets/images/ProjectsPics/excavation-site-kajiado.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  // For projects with before/after images
  const [showAfterImage, setShowAfterImage] = useState({});

  const projects = [
    {
      id: 1,
      title: "Sustainable City Planning",
      location: "Nairobi",
      year: "2021-2022",
      category: "infrastructure",
      client: "Nairobi City County",
      description:
        "Collaborated on a comprehensive city planning project, focusing on sustainable infrastructure and green spaces. The resulting blueprint is set to transform urban living for over 100,000 residents.",
      image: BlueprintDesign,
      hasBeforeAfter: false,
    },

    {
      id: 2,
      title: "Isaani Playground Rehabilitation",
      location: "Kibwezi West sub county",
      year: "2019-2020",
      category: "recreation",
      client: "County Government of Makueni",
      description:
        "Filling with murram, compacting, construction of prevention wall, drainage, soccer goal posts and net.",
      imageBefore: IsaaniPlaygroundBefore,
      imageAfter: IsaaniPlaygroundAfter,
      hasBeforeAfter: true,
    },
    {
      id: 3,
      title: "Kaseki S.D.A Primary School",
      location: "Mbooni Constituency",
      year: "2019-2020",
      category: "education",
      client: "NG-CDF Mbooni Constituency",
      description: "Renovation of 3 classrooms with modern amenities.",
      // imageBefore: KasekiBefore,
      image: KasekiPrimary,
      hasBeforeAfter: false,
    },
    {
      id: 4,
      title: "Gachie Primary School",
      location: "Kiambu Constituency",
      year: "2019-2020",
      category: "education",
      client: "NG-CDF Kiambu Constituency",
      description: "Construction of 1 new classroom facility.",
      image: SultanHamud,
      hasBeforeAfter: false,
    },
    {
      id: 5,
      title: "Ikombe Primary School",
      location: "Yatta Constituency",
      year: "2019-2020",
      category: "education",
      client: "NG-CDF Yatta Constituency",
      description: "Renovation of 2 classrooms with modern facilities.",
      imageBefore: KilomboBefore,
      imageAfter: KilomboAfter,
      hasBeforeAfter: true,
    },
    {
      id: 6,
      title: "Enguli Primary School",
      location: "Kilome Constituency",
      year: "2021-2022",
      category: "education",
      client: "NG-CDF Kilome Constituency",
      description: "Renovation of 4 classrooms.",
      imageBefore: EnguliBefore,
      imageAfter: EnguliAfter,
      hasBeforeAfter: true,
    },

    {
      id: 7,
      title: "Box Culvert Construction",
      location: "Embul Bul Ngong Road",
      year: "2020",
      category: "infrastructure",
      client: "China Civil Engineering Construction Corporation",
      description: "Construction of box culvert improving road infrastructure.",
      image: BoxCulvert,
      hasBeforeAfter: false,
    },
    {
      id: 8,
      title: "Urban Renewal Excavation",
      location: "Kajiado",
      year: "2021",
      category: "infrastructure",
      client: "Kajiado Urban Development Authority",
      description:
        "Managed a large-scale excavation project for urban renewal, implementing innovative soil stabilization techniques to prepare the site for a new mixed-use development. The project was completed ahead of schedule and under budget.",
      image: ExcavationKajiado,
      hasBeforeAfter: false,
    },
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "education", label: "Education" },
    { value: "government", label: "Government" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "recreation", label: "Recreation" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const toggleImage = (projectId) => {
    setShowAfterImage((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div className="flex-grow">
      <div className="bg-gradient-to-r from-[#020406] to-[#01aaeb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl">
            Showcase of our completed construction projects
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-4 py-2 rounded-full transition duration-300 
                ${
                  filter === filterOption.value
                    ? "bg-[#01aaeb] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-[#01aaeb] hover:text-white"
                }`}>
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative">
                {project.hasBeforeAfter ? (
                  <>
                    <Image
                      src={
                        showAfterImage[project.id]
                          ? project.imageAfter
                          : project.imageBefore
                      }
                      alt={`${project.title} ${
                        showAfterImage[project.id] ? "After" : "Before"
                      }`}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => toggleImage(project.id)}
                      className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-opacity-70 transition">
                      {showAfterImage[project.id] ? (
                        <>
                          <ArrowLeft className="w-4 h-4" />
                          View Before
                        </>
                      ) : (
                        <>
                          View After
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Building2 className="h-4 w-4 mr-2" />
                    <span>{project.client}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
