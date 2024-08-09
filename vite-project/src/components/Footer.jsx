import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#d10f0f] text-white py-6 fixed bottom-0 w-screen">
            <div className="container mx-auto flex flex-col items-center w-max">
                <p className="mb-4 text-center">
                    &copy; {new Date().getFullYear()} Portal Torii. Todos os direitos reservados.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        className="text-white hover:text-blue-600"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className="text-white hover:text-blue-400"
                        aria-label="Twitter"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        className="text-white hover:text-pink-500"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        className="text-white hover:text-blue-700"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
