import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface ComProps {
    label?: string;
    icon?: string;
    href?: string;
    onClick?: () => void;
  }


const Company: React.FC<ComProps> = ({ label, icon:string, href, onClick }) => {
   const router = useRouter();
   
   const doClick = useCallback(()=>{

   }, []);

    
    return ( <div>
              <Image src={icon}  height="60" className='border border-gray-200 rounded'  width="130"></Image>
    </div> );
}
 
export default Company;

