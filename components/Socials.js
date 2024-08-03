import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/nitesh-ghosh-844a77290'} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
      <Link href={'https://github.com/NiteshCodes7'} className="hover:text-accent transition-all duration-300">
        <FaGithub />
      </Link>
      <Link href={'mailto:workwithnites@gmail.com'} className="hover:text-accent transition-all duration-300">
        <FaEnvelope />
      </Link>
      <Link href={'https://x.com/NiteshGhosh15'} className="hover:text-accent transition-all duration-300">
        <FaTwitter />
      </Link>
      <Link href={'https://www.instagram.com/mr_futuristic.___/'} className="hover:text-accent transition-all duration-300">
        <FaInstagram />
      </Link>
      <Link href={'https://www.facebook.com/nitesh.ghosh.775'} className="hover:text-accent transition-all duration-300">
        <FaFacebookSquare />
      </Link>
    </div>
  ) 
};

export default Socials;
