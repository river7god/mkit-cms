import RecruitmentContent from "@/components/business/RecruitmentContent";
import BannerRecruitment from "@/components/layout/BannerRecruitment";

import Head from 'next/head';

const Recruitment = () => {
    return ( 
        <div>
            <Head>
       <title>海外招聘服务</title>
    </Head>
            <BannerRecruitment></BannerRecruitment>
            <RecruitmentContent></RecruitmentContent>
           
        </div>
     );
}
 
export default Recruitment;
