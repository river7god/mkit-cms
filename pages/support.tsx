import SupportContent from '@/components/business/SupportContent';
import BannerAbout from '@/components/layout/BannerAbout';
import Head from 'next/head';

const Support = () => {
    return ( <div>
        <Head>
          <title>获取支持</title>
        </Head>
        <BannerAbout></BannerAbout>
        <SupportContent></SupportContent>
    </div> );
}
 
export default Support;