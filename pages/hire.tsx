import HireContent from "@/components/business/HireContent";
import BannerHire from "@/components/layout/BannerHire";
import Titlebar from "@/components/layout/Titlebar";
import Head from 'next/head';


const Hire = () => {
    return ( <>
    <Head>
       <title>海外雇佣</title>
    </Head>
        <BannerHire></BannerHire>
        <HireContent></HireContent>
    </> );
}
 
export default Hire;