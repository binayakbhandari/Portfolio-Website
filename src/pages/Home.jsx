import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Services from "../components/Services";

function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-10 space-y-12">
        <Hero />
        <SelectedWork />
        <Services />
      </main>
    </div>
  );
}

export default Home;