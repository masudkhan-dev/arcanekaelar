import React from "react";

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill">
      <div className="skill-name">{name}</div>
      <div className="skill-bar">
        <div className="skill-per" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

const MyCertificate = () => {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 75 },
    { name: "JavaScript", percentage: 55 },
  ];

  return (
    <div className="bg-[#F5F7F2] font-t pt-20">
      <div>
        <h2 className="md:text-5xl text-2xl text-center space-font font-semibold text-[#333333]">
          Skills
        </h2>
      </div>
      {/* List of skills with progress bars */}
      <div className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default MyCertificate;
