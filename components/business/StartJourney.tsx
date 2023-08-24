import { useRouter } from 'next/router';

const StartJourney = () => {
    const router = useRouter();

    const supportHandler = () => {
        router.push('/support');
    };

    return ( 
    <div className=" text-center py-10 space-y-6">
        <div className=" text-3xl font-medium">开启您的全球雇佣之旅</div>
        <div className="flex justify-center">
        <div onClick={supportHandler} className=" cursor-pointer px-10 border-blue-600 border rounded-2xl text-blue-600">联系我们</div>
        </div> 
    </div> );
}
 
export default StartJourney;