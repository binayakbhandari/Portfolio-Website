import SelectedWork from "../components/SelectedWork";
import Sidebar from "../components/Sidebar";

const Projects = () => {
    return (
        <>
            <div className="flex bg-gray-50 min-h-screen">
                <Sidebar />
                <section className="flex-1 p-10 space-y-12">
                    <SelectedWork />

                </section>
            </div>
        </>

    );
};

export default Projects; 