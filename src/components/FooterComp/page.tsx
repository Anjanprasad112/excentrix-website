import Image from "next/image"
import Link from "next/link"


const page = () => {
  return (
    <div className="flex items-center justify-between py-8 px-2 bg-black">
    <Link href="#home" className="cursor-pointer">
      <Image src="/whitelogo.png" height={50} width={150} alt="excentrix-logo"/>
    </Link>
    <div className=" text-white text-center tracking-wider  text-base">
        Copyright © Excentrix 2024.
    </div>
    </div>
  )
}

export default page