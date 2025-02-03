import { Header } from "./components/header";
import { AboutMe } from "./components/aboutMe";
import { TitlePageBreak } from "./components/title-page-break";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="max-w-5xl mx-auto my-12">
        <AboutMe></AboutMe>
        <article className="p-12 bg-transparent mx-auto lg:px-8">
          <TitlePageBreak title="Experience"></TitlePageBreak>
        </article>
      </main>
    </>
  );
}
