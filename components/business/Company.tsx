import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface ComProps {
    label?: string;
    icon?: string;
    href?: string;
    onClick?: () => void;
  }


const Company: React.FC<ComProps> = ({ label, icon, href, onClick }) => {
   const router = useRouter();
   
   const doClick = useCallback(()=>{

   }, []);

    
    return ( 
      <div>
      {icon !== undefined ? (
           <Image alt="company" width="130" src={icon}  height="60" className='border border-gray-200 rounded'  ></Image>
         ) : (
            <div></div>
         )}
    
      </div> );
}
 
export default Company;

