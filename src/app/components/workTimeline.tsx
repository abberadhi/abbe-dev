import Image from "next/image";
import creatorPicture from "@public/photo_1.jpg";
import linkedInLogo from "@public/icons/linkedin.svg";
import githubLogo from "@public/icons/github.svg";

export const WorkTimeline = () => {
  const exp = [
    {
      company: "Ericsson AB",
      period: "2022 - 2024",
      role: "Software Developer",
      description: (
        <ol className="ml-4 text-base font-normal list-disc  ">
          <li>Developed a testing tool to improve quality assurance.</li>
          <li>
            Built REST APIs with Spring Boot to deliver dynamic data to a web
            application developed with AngularJS.
          </li>
          <li>
            Designed and implemented complex features from front-end to
            back-end.
          </li>
          <li>Created and maintained PostgreSQL database schemas</li>
        </ol>
      ),
    },
    {
      company: "Blekinge Institute of Technology",
      period: "2020 - 2021",
      role: "Teacher Assistant",
      description: (
        <ol className="ml-4 text-base font-normal list-disc">
          <li>
            Support teaching and help students achieve their academic goals.
            Grade assignments and provide constructive feedback to students.
          </li>
          <li>
            Involved in courses covering Python, JavaScript, Algorithms and Data
            Structures, Linux, and virtualization technologies.
          </li>
        </ol>
      ),
    },
    {
      company: "Blekinge Institute of Technology",
      period: "2019 - 2022",
      role: "Bachelor's degree in Software Development",
      description: (
        <>
          <ol className="ml-4 text-base font-normal list-disc">
            <li>
              Bachelor's thesis:{" "}
              <a
                href="https://www.diva-portal.org/smash/get/diva2:1676749/FULLTEXT02.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Security and performance impact of client-side token storage
                methods
              </a>
            </li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {exp.map((job) => {
        return (
          <li className="mb-6 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white border-gray-900 bg-gray-700"></div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {job.period}
              </time>
            </div>
            <h4 className="text-sm text-gray-300">{job.company}</h4>
            <div className="text-gray-400">{job.description}</div>
          </li>
        );
      })}
    </ol>
  );
};
