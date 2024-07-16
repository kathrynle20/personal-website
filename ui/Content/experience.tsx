export default function Experience() {
  const experienceList = [
    {
      company: "Akamai Technologies",
      position: "Software Engineering Intern",
      description: "Bot detections",
      skills: ["a", "b", "c"],
    },
  ];
  return (
    <div>
      {experienceList.map((exp, index) => (
        <ExperienceCard
          key={index}
          company={exp.company}
          position={exp.position}
          description={exp.description}
          skills={exp.skills}
        />
      ))}
    </div>
  );
}

interface ExperienceCardProps {
  company: string;
  position: string;
  description: string;
  skills: string[];
}

function ExperienceCard({
  company,
  position,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div>
      <div>
        <div>{company}</div>
      </div>

      <div>
        <div>{position}</div>
      </div>

      <div>
        <div>{description}</div>
      </div>

      <div>
        {skills.map((skill, index) => {
          return (
            <div>
              {index === 0 ? <div>{skill}</div> : <div>&#183;{skill}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
