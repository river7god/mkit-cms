import React from 'react';
import Customs from '@/components/business/Customs';
import Declariation from '@/components/business/Declaration';
import IndexContent from '@/components/business/IndexContent';
import Banner from '@/components/layout/Banner';
import Footer from '@/components/layout/Footer';
import Titlebar from '@/components/layout/Titlebar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
    <Head>
       <title>大圣国际：一站式全球雇佣平台</title>
    </Head>
    <div className=" bg-white px-0 py-0">
       
        <Banner></Banner>
        <Declariation></Declariation>
        <Customs></Customs>
        <IndexContent></IndexContent>
     
    </div>
    </div>
  )
}
