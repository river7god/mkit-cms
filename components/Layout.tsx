import React from 'react';
import Customs from './business/Customs';
import Declariation from './business/Declaration';
import IndexContent from './business/IndexContent';
import Banner from './layout/Banner';
import Footer from './layout/Footer';
import Titlebar from './layout/Titlebar';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=" bg-white px-0 py-0 w-full">
       <div className=' flex flex-col'>            
        
          <div>
            {children}
          
          </div>
          <Footer></Footer>
       </div>
    </div>
  )
}

export default Layout;
