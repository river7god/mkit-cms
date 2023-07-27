//npm install react-slick slick-carousel 多张图的banner


const Banner = () => {
    return ( 
    
    
    <div  className=" bg-slate-600 h-[300px] px-24 py-10" style={{backgroundImage:"url('/img/indexBanner.png')",backgroundSize: "cover"}} >
       <div className="flex h-full w-full index-banner-bg" >
          <div className=" flex flex-col space-y-12  text-white font-light  w-1/2">   
             <div className="space-y-3">
                <div className="  text-3xl">一站式全球雇佣平台</div>     
                <div  className=" flex flex-row items-center space-x-4 text-sm">
                    <div>海外雇佣</div>
                    <div>|</div>
                    <div>灵活用工</div>
                    <div>|</div>
                    <div>全球招聘</div>
                </div>
             </div>
             <div className="flex flex-row items-center space-x-8 text-sm">
                  <div className=" space-y-2">
                     <div className="text-lg">100+</div> 
                     <div>服务商家</div>  
                  </div>
                  <div className=" space-y-2">
                     <div className="text-lg">130+</div> 
                     <div>主流货币</div>  
                  </div>
                  <div className=" space-y-2">
                     <div className="text-lg">100+</div> 
                     <div>支持国家</div>  
                  </div>
                  <div className=" space-y-2">
                     <div className="text-lg">5分钟</div> 
                     <div>制定方案</div>  
                  </div>
             </div>
           
          </div>
       </div>
    </div> 
  
  );
}
 
export default Banner;