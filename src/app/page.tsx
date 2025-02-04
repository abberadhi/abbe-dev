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

          <div className="flex gap-6 mt-12">
            <div className="flex-1"></div>
            <div className="flex-1">
              <WorkTimeline></WorkTimeline>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
