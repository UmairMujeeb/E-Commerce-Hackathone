import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/hero";
import Footer from "./Components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header color="bg-[#252B42]"/>
      <Navbar />
      <HeroPage />
      <Footer marginTop="mt-[4700px]"/>
    </div>
  );
}
