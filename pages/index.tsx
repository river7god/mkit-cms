import React from 'react';
import Customs from '@/components/business/Customs';
import Declariation from '@/components/business/Declaration';
import IndexContent from '@/components/business/IndexContent';
import Banner from '@/components/layout/Banner';
import Footer from '@/components/layout/Footer';
import Titlebar from '@/components/layout/Titlebar';

export default function Home() {
  return (
    <div className=" bg-white px-0 py-0">
       
        <Banner></Banner>
        <Declariation></Declariation>
        <Customs></Customs>
        <IndexContent></IndexContent>
     
    </div>
  )
}
