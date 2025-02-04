import { TitlePageBreak } from "./title-page-break";
import { WorkTimeline } from "./workTimeline";

export const MyJourney = () => {
  const items = [
    {
      time: null,
      title: "Meet X",
      description: `Developed a web application for scheduling meetings. Built with
              Node.js, Express.js, and Handlebars, with MySQL for data storage.
              Implemented OAuth 2.0 for third-party login`,
    },
    {
      time: null,
      title: "Project with HiUnity",
      description: `Participated in a group project at BTH to digitalize gravestone
              orders. Developed a product configurator as a WordPress plugin
              with Vue.js and the WooCommerce API. The code was delivered for
              further development and launch.`,
    },
    {
      time: null,
      title: "Website for a student-run business",
      description: `At a student-run business program (UF företag - in Swedish) in
              high school, I undertook my first professional web development
              project. Using the LAMP stack, I built and managed a website for
              player registrations and event tracking, supporting LAN/e-sports
              tournaments that drew over 100 attendees.`,
    },
  ];

  return (
    <article className="p-12 bg-transparent mx-auto lg:px-8">
      <TitlePageBreak title="My Journey"></TitlePageBreak>

      <div className="flex gap-6 mt-12 flex-col-reverse md:flex-row">
        <div className="flex-1 flex flex-col gap-4">
          {items.map((item, i) => {
            return (
              <div key={i} className="border-l-2 border-gray-600 p-4 ">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.time}
                  </time>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex-1">
          <WorkTimeline></WorkTimeline>
        </div>
      </div>
    </article>
  );
};
