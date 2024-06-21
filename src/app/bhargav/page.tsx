import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-center">
      <p>© 2024 Excentrix. All Rights Reserved.</p>
    </footer>
  );
};

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="mt-5 flex flex-col justify-center items-center">
          <div className="w-40 h-40 relative">
            <Image 
              src="/bhargav.jpg" 
              alt="bhargav-img" 
              fill
              style={{objectFit:'cover'}}
              className="rounded-full"
            />
          </div>
          <div className="text-2xl font-semibold text-customBlack mt-5">
            Bhargav P Raj
          </div>
          <div className="text-lg font-medium text-customBlack">
            Co-Founder
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-4 p-2">
          <div className="border-customGray border-2 rounded-md w-full sm:w-auto p-2">
            <Link href="mailto:bhargav@excentrix.tech" target="_blank" rel="noopener noreferrer">
              <div className="flex gap-2">
                <div className="bg-customBlack rounded-md w-12 flex justify-center items-center">
                  <MdMail color="white" fontSize={25} />
                </div>
                <div>
                  <div className="text-customBlack font-semibold tracking-wide">EMAIL</div>
                  <div className="text-customBlack">bhargav@excentrix.tech</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <div className="border-customGray border-2 rounded-md w-full sm:w-auto p-2">
              <Link href="https://www.linkedin.com/in/bhargav-p-raj/" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 py-2">
                  <div className="bg-customBlack rounded-md w-14 h-10 flex justify-center items-center">
                    <FaLinkedin color="white" fontSize={25} />
                  </div>
                  <div className="text-center">
                    <div className="text-customBlack font-semibold tracking-wide">LINKEDIN</div>
                    <div className="text-customBlack">bhargav-p-raj</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border-customGray border-2 rounded-md w-full sm:w-auto p-2">
              <Link href="https://wa.me/+919902878869" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 py-2">
                  <div className="bg-customBlack rounded-md w-14 h-10 flex justify-center items-center">
                    <IoLogoWhatsapp color="white" fontSize={25} />
                  </div>
                  <div className="text-center">
                    <div className="text-customBlack font-semibold tracking-wide">WHATSAPP</div>
                    <div className="text-customBlack">9902878869</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="border-customGray border-2 rounded-md w-full sm:w-auto p-2">
            <Link href="https://excentrix.tech/" target="_blank" rel="noopener noreferrer">
              <div className="flex gap-2">
                <div className="bg-customBlack flex justify-center items-center rounded-md">
                  <Image src="/whitelogo.png" alt="logo" width={125} height={60} className="p-2" />
                </div>
                <div>
                  <div className="text-customBlack font-semibold tracking-wide">EXCENTRIX</div>
                  <div className="text-customBlack">excentrix.tech</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
