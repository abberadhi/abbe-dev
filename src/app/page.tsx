import { Header } from "./components/header";
import { AboutMe } from "./components/aboutMe";
import { TitlePageBreak } from "./components/title-page-break";
import { WorkTimeline } from "./components/workTimeline";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="max-w-5xl mx-auto my-12">
        <AboutMe></AboutMe>
        <article className="p-12 bg-transparent mx-auto lg:px-8">
          <TitlePageBreak title="My Journey"></TitlePageBreak>

          <div className="flex gap-6 mt-12 flex-col-reverse md:flex-row">
            <div className="flex-1 flex flex-col gap-4">
              <div className="border-l-2 border-gray-600 p-4 ">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Meet X</h3>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
                </div>
                <p className="text-gray-400">
                  Developed a web application for scheduling meetings. Built
                  with Node.js, Express.js, and Handlebars, with MySQL for data
                  storage. Implemented OAuth 2.0 for third-party login
                </p>
              </div>
              <div className="border-l-2 border-gray-600 p-4 ">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">
                    Project with HiUnity
                  </h3>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
                </div>
                <p className="text-gray-400">
                  Participated in a group project at BTH to digitalize
                  gravestone orders. Developed a product configurator as a
                  WordPress plugin with Vue.js and the WooCommerce API. The code
                  was delivered for further development and launch
                </p>
              </div>
              <div className="border-l-2 border-gray-600 p-4 ">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">
                    Website for a student-run business
                  </h3>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"></time>
                </div>
                <p className="text-gray-400">
                  At a student-run business program (UF företag - in Swedish) in
                  high school, I undertook my first professional web development
                  project. Using the LAMP stack, I built and managed a website
                  for player registrations and event tracking, supporting
                  LAN/e-sports tournaments that drew over 100 attendees.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <WorkTimeline></WorkTimeline>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
