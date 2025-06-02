// About.js
// B:\mytestProjects\ChankuConstructionsV2\src\app\about\page.js
import React from "react";
import { Shield, Users, Target, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Safety First",
      description:
        "We prioritize the safety of our employees, customers, and the public above all else.",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "People-Focused",
      description:
        "Our team is our greatest asset. We invest in training and development to deliver excellence.",
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Integrity",
      description:
        "We maintain the highest standards of ethics and integrity in all our dealings.",
    },
  ];

  const achievements = [
    "1st Runners Up - Women Contractor of the Year Excellence Award (NCA 2023)",
    "Successfully completed over 10 major construction projects",
    "Perfect safety record across all projects",
    "Recognized for excellence in public infrastructure development",
    "Strong partnerships with government and private sector clients",
  ];

  return (
    <div className="flex-grow">
      <div className="bg-gradient-to-r from-[#020406] to-[#01aaeb] py-16">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl font-bold mb-6">About ChankuGlobal Ltd.</h1>
          <p className="text-xl">
            Building excellence through integrity and innovation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            ChankuGlobal Ltd. stands at the forefront of Kenya's construction
            industry, founded by visionary young entrepreneurs who combine
            innovation with technical excellence. As an{" "}
            <b>NCA-licensed contractor</b> {""}
            specializing in building works, roads, water infrastructure, and
            mechanical engineering services, we bring fresh perspectives and
            proven expertise to every project.
          </p>
          <p className="text-gray-600">
            ChankuGlobal Ltd.'s comprehensive capabilities in civil, structural,
            and mechanical contracting enable us to deliver advanced
            construction solutions that not only meet today's needs but are
            built to serve generations to come. Our commitment to excellence,
            safety, and quality has established us as a trusted partner in the
            construction industry. We take pride in our ability to deliver
            projects that meet the highest standards while maintaining strict
            timelines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg hover:shadow-lg transition duration-300">
              <div className="text-[#01aaeb] mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="text-[#01aaeb] h-6 w-6 mr-2" />
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
