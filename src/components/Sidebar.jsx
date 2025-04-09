import { FaTwitter, FaFacebookF, FaDribbble, FaHome, FaStore, FaBlog, FaEnvelope, FaProjectDiagram, FaUser, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="w-64 min-h-screen bg-gray-100 px-6 py-8 border-r">
            <div className="text-center mb-8">
                <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full outline outline-2 md:outline-2 outline-dashed outline-yellow-700 animate-rotating hover:animate-none cursor-pointer dark:outline-white">
                    </div>
                    <img
                        src="./profile.png"
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />
                </div>
                <h2 className="mt-4 font-bold text-lg">Binayak Bhandari</h2>
                <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>

            <nav className="space-y-4 text-gray-700">
                <Link to="/" className="flex items-center gap-2 font-medium text-black">
                <FaHome /> Home
                </Link>
                <Link to="/about" className="flex items-center gap-2 ">
                <FaUser /> About
                </Link>
                <Link to="/projects" className="flex items-center gap-2 ">
                <FaProjectDiagram /> Projects
                </Link>
                <Link to="/blog" className="flex items-center gap-2 ">
                <FaBlog /> Blog
                </Link>
                <Link to="/contact" className="flex items-center gap-2 ">
                <FaEnvelope /> Contact
                </Link>
            </nav>

            <div className="mt-10 text-gray-600">
                <p className="uppercase text-xs mb-2">Social</p>
                <div className="flex gap-4 text-xl">
                    <a href="https://github.com/binayakbhandari/"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/binayak-bhandari/"><FaLinkedinIn /></a>
                    <a href="https://x.com/binayak_np/"><FaTwitter /></a>
                    <a href="https://facebook.com/binayakbhandari.np/"><FaFacebookF /></a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
