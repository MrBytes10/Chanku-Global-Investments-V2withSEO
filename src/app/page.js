//B:\mytestProjects\ChankuConstructionsV2\src\app\page.js
"use client";
import React from "react";
import Image from "next/image"; //for nextjs///Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to optimize images. Learn more: https://nextjs.org/docs/messages/next-image-optimization
import { Building2, Shield, ArrowRight, Lock, FileWarning } from "lucide-react";
//import { Link } from "react-router-dom"; this is only for reactjs
//import Link from "next/link"; //for nextjs now, then use link href, not link to
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported all images
import BoxCulvert from "../assets/images/ProjectsPics/NewPics/BoxCulvertConstructionAfterHome.jpeg";
import KilomboAfter from "../assets/images/ProjectsPics/NewPics/KilomboPrimarySchoolAfter.jpeg";
import SultanHamud from "../assets/images/ProjectsPics/NewPics/AICSultanHamudPrimarySchooAfter.jpeg";
import NgoniPoliceStation from "../assets/images/ProjectsPics/NewPics/NgoniPoliceStationConstructionAfterHome.jpeg";

const Home = () => {
  // const features = [
  //   {
  //     icon: <Building2 className="h-8 w-8" />,
  //     title: "Quality Construction",
  //     description:
  //       "Expert civil and structural engineering solutions delivered with precision and professionalism.",
  //   },
  //   {
  //     icon: <Shield className="h-8 w-8" />,
  //     title: "Safety First",
  //     description:
  //       "Unwavering commitment to safety standards and environmental protection in every project.",
  //   },
  //   {
  //     icon: <Clock className="h-8 w-8" />,
  //     title: "Timely Delivery",
  //     description:
  //       "Consistent track record of completing projects within specified timelines.",
  //   },
  //   {
  //     icon: <Award className="h-8 w-8" />,
  //     title: "Expert Team",
  //     description:
  //       "Dynamic team of skilled professionals dedicated to excellence in construction.",
  //   },
  // ];
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety Policy",
      description:
        "We enhance work safety, value our employees, and maintain strict compliance with safety rules and regulations. Safety is our first priority, not an additional consideration.",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Environment Policy",
      description:
        "Committed to sustainable construction through renewable energy adoption, materials recycling, tree planting initiatives, and use of eco-friendly biodegradable materials in our projects.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Quality Policy",
      description:
        "Creating secure working environments while minimizing losses and work disruptions through proactive approaches and full compliance with the law.",
    },
    {
      icon: <FileWarning className="h-8 w-8" />,
      title: "Drugs and Alcohol Policy",
      description:
        "Maintaining a safe workplace through strict prohibition of substance use, with support for rehabilitation and education to ensure employee wellbeing.",
    },
  ];
  //completedProjects Array
  const completedProjects = [
    {
      title: "Gachie Primary School",
      location: "Kiambu Constituency",
      year: "2019-2020",
      client: "NG-CDF Kiambu Constituency",
      image: SultanHamud,
    },
    {
      title: "Box Culvert Construction",
      location: "Embul Bul Ngong Road",
      client: "China Civil Engineering Construction Corporation",
      year: "2020",
      image: BoxCulvert,
    },
    {
      title: "Police Station Construction",
      location: "Mbooni West",
      client: "Africa Star Railway Operation Company Ltd",
      year: "2021",
      image: NgoniPoliceStation,
    },

    // {
    //   title: "Isaani Playground Rehabilitation",
    //   location: "Kibwezi West sub county",
    //   client: "County Government of Makueni",
    //   year: "2019-2020",
    //   image: IsaaniPlaygroundAfter,
    // },
  ];

  //Sliding images for the recent projects
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: false, // Changed from true to false
    arrows: false,
    pauseOnHover: false,
    ltr: true, // Added for right to left animation
  };

  const heroImages = [
    { url: SultanHamud, overlay: "rgba(2,4,6,0.05)" },
    { url: NgoniPoliceStation, overlay: "rgba(2,4,6,0.05)" },
    { url: KilomboAfter, overlay: "rgba(2,4,6,0.05)" },
    { url: BoxCulvert, overlay: "rgba(2,4,6,0.05)" },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        {/* Background Slider */}
        <div className="absolute inset-0 w-full h-full z-0">
          {" "}
          {/* Added z-0 */}
          <Slider {...sliderSettings}>
            {heroImages.map((image, index) => (
              <div key={index} className="relative h-[300px]">
                {/* <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${image.url})`,
                    backgroundPosition: "50% 30%",
                  }}> */}
                {/* Gradient Overlay */}
                {/* <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(90deg, ${image.overlay} 30%, rgba(245, 131, 30, 0.05))`,
                    }}></div> */}
                <Image
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(90deg, ${image.overlay} 30%, rgba(245, 131, 30, 0.05))`,
                  }}></div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          {" "}
          {/* Added z-10 */}
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-center">
              {" "}
              {/* Added background and padding */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white  bg-black/50 p-0 rounded-lg inline-block mx-auto">
                Excellence in Construction, Quality in Delivery
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white  bg-black/50 p-2 rounded-lg inline-block mx-auto">
                Your trusted partner in civil, structural & mechanical
                contracting
              </p>
              <br />
              <a
                href="/contact"
                className="inline-block bg-white text-[#020406] px-8 py-3 rounded-full font-bold hover:bg-[#01aaeb] hover:text-white transition duration-300">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section content end*/}

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
                <div className="text-[#01aaeb] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Recent Projects Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-sm text-gray-500">
                    {project.client} | {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-flex items-center text-[#01aaeb] hover:text-[#020406]">
              View All Projects <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-[#020406] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's work together to bring your construction vision to life
          </p>
          <a
            href="/contact"
            className="bg-[#01aaeb] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300 inline-flex items-center">
            Contact Us Today
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
