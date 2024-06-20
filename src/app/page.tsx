import dynamic from "next/dynamic";
const NavbarComp = dynamic(()=>import('@/components/NavbarComp/page'))
const HomeComp = dynamic(()=>import('@/components/HomeComp/page'))
const FooterComp = dynamic(()=>import('@/components/FooterComp/page'))

export default function Home() {

  return (
   <>
    <NavbarComp/>
    <HomeComp/>
    <FooterComp/>
   </>
  );
}
