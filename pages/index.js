// Componets
import Mains from "./components/main";
import Nav from "./components/nav";
import Projects from "./components/project"
import Foot from './components/footer'

export default function Home() {
  return (
    <div className="font-sans">
      <Nav />
      <Mains />
      <hr></hr>
      <Projects />
      <hr></hr>
      <Foot />
    </div>
  );
}
