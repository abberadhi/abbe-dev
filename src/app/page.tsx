import { Header } from "./components/header";
import { AboutMe } from "./components/aboutMe";
import { MyJourney } from "./components/myJourney";
import ArticlePage from "./articles/page";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="max-w-5xl mx-auto my-12">
        <AboutMe></AboutMe>
        <MyJourney></MyJourney>
      </main>
    </>
  );
}
