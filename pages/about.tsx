import AboutContent from '@/components/business/AboutContent';
import StartJourney from '@/components/business/StartJourney';
import BannerAbout from '@/components/layout/BannerAbout';
import Head from 'next/head';

const About = () => {
    return ( <div>
        <Head>
          <title>关于我们</title>
        </Head>
        <BannerAbout></BannerAbout>
        <AboutContent></AboutContent>
        <StartJourney></StartJourney>
    </div>  );
}
 
export default About;