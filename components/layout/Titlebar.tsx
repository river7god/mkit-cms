import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from 'react';


interface TitlebarProps {
  bgStyle?: string;
  textStyle?: string;
  logoURL?:string;
}

const Titlebar: React.FC<TitlebarProps> = ({ bgStyle, textStyle,logoURL }) => {
    const router = useRouter();

    const supportHandler = () => {
      router.push('/support');
    };

    const handleButtonClick = () => {
      router.push('/');
    };

    if(!textStyle) {
      textStyle = "white";
    }

    const aboutusHandler = () => {
      router.push('/about');
    };

    if(!logoURL) {
      logoURL = "/img/logotitle.png?cache=${Date.now()}";
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return ( 
      <nav className="title
      flex
      item-center
      justify-between text-gray-950 space-x-6">
             <div onClick={handleButtonClick} className=" cursor-pointer flex items-center justify-center space-x-[20px]">
                 <p className="text-white text-4xl">代雇佣平台</p>
             </div>
                <div className={`text-${textStyle} flex items-center font-sans justify-between space-x-12 text-[13px]`}>
                      <div className="relative cursor-pointer hover:text-blue-600" 
                      onClick={toggleDropdown}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true">解决方案
                        <span className="ml-2">
                            <svg className={`text-${textStyle} w-4 h-4 inline-block fill-current`}><path d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/></svg>
                        </span>
                        {isDropdownOpen && (
                            <div className="origin-top-right absolute z-20 left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" id="dropdown-menu">
                              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link href="/hire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">海外·雇佣管理</Link>
                                <Link href="/employee" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">海外·用工解决方案</Link>
                                <Link href="/recruitment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">海外·招聘服务</Link>
                              </div>
                            </div>
                          )}                      
                      </div>
                      {/*<div className="cursor-pointer hover:text-blue-600">全球雇佣指南</div>
                      <div className="cursor-pointer hover:text-blue-600">雇佣成本计算器</div> 
                      */}
                      <div onClick={aboutusHandler} className="cursor-pointer hover:text-blue-600">关于我们</div>
                </div>
             
             <div onClick={supportHandler} className={`text-${textStyle} border-${textStyle} border rounded-3xl cursor-pointer  px-6 py-2 flex justify-center items-center font-semibold text-[12px]`}>获取支持</div>
        </nav>
    );
}

export default Titlebar;
