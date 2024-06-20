import dynamic from 'next/dynamic'

import { HeroComp } from "@/components/HeroComp/page";
const About = dynamic(()=>import ('@/components/AboutComp/page'));
const ContactComp = dynamic(()=>import('@/components/ContactComp/page'));

export default function HomeComp() {

  return (
   <>
   <div id="home">
    <HeroComp/>
   </div>
    <div id="about">

    <About />
    </div>
    <div id="contact">

    <ContactComp/>
    </div>
   </>
  );
}
