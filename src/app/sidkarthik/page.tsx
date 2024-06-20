import Image from "next/image"
import Link from "next/link"
import { FaPhone } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
const page = () => {
  return (
    <>
    <div className="mt-5 flex flex-col justify-center items-center">
      <div className="w-40 h-40 relative">
        <Image 
          src="/sid.jpg" 
          alt="sidkarthik-img" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-full"
          />
      </div>
      <div className="text-2xl font-semibold text-customBlack mt-5">
        Siddharth Karthikeyan
      </div>
      <div className="text-lg font-medium text-customBlack">
        Founder
      </div>
    </div>
    <div className="flex items-center justify-center mt-10">
      <div className="border-customGray border-2 rounded-md">

    <Link href="mailto:sidkarthik@excentrix.tech" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-1">
              <div className="bg-customBlack rounded-md w-12  flex justify-center items-center">
                <MdMail color="white" fontSize={25}/>
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">EMAIL</div>
                <div className="text-customBlack">sidkarthink@excentrix.tech</div>
              </div>
            </div>
          </Link>
      </div>
    </div>
    <div className="flex justify-center items-center gap-2 m-4">
      <div className="border-customGray border-2 rounded-md">
    <Link href="https://www.linkedin.com/in/sid-karthik/" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-1">
              <div className="bg-customBlack rounded-md w-12  flex justify-center items-center">
                <FaLinkedin color="white" fontSize={25}/>
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">LINKEDIN</div>
                <div className="text-customBlack">/sid-karthik</div>
              </div>
            </div>
          </Link>
      </div>
      <div className="border-customGray border-2 rounded-md">

          <Link href="https://wa.me/+919108287982" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-1">
              <div className="bg-customBlack rounded-md w-12  flex justify-center items-center">
                <IoLogoWhatsapp color="white" fontSize={25}/>
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">WHATSAPP</div>
                <div className="text-customBlack">9108287982</div>
              </div>
            </div>
          </Link>
      </div>

    </div>
    <div className="flex justify-center items-center">
      <div className="border-customGray border-2 rounded-md">

    <Link href="https://excentrix.tech/" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-1">
              <div className="bg-customBlack flex justify-center items-center rounded-md">
                <Image src="/whitelogo.png" alt="logo" width={125} height={60} className="p-2"/>
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">EXCENTRIX</div>
                <div className="text-customBlack">excentrix.tech</div>
              </div>
            </div>
          </Link>
      </div>

    </div>

          </>
  )
}

export default page
