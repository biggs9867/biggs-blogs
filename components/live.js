import "swiper/css";

import Link from "next/link";

import Image from "next/image";


function live() {
  return (
    
    <section className="py-16 " >
        
        
        <div className="container mx-auto md:px-20  ">
            <h1 className="font-bold text-4xl pb-12 text-center " >Because i Love Football</h1>
            
             <div class="flex items-center justify-center min-h-screen">
            <div className="h-auto max-w-lg rounded-lg   justify-center"  >
        <Link href={""}>
          <Image src="/../public/images/articles/posts/i.png" width={500} height={600} />
        </Link>
        
        <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">The Premier League is the highest level of the men English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League. Seasons typically run from August to May with each team playing 38 matches.</p>
        
        
  <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded justify-center ">Click here to watch live Premer League </button>
  
        </div>
        <div className="h-auto max-w-lg rounded-lg   justify-center"  >
        <Link href={""}>
          <Image src="/../public/images/articles/posts/UEFA_Champions_League.svg.png" width={500} height={600} />
        </Link>
        
        <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">The UEFA Champions League is an annual club football competition organised by the Union of European Football Associations and contested by top-division European clubs, deciding the competition winners through a round robin group stage to qualify for a double-legged knockout format, and a single leg</p>
        
        
  <button class=" bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded  ">Click here to watch live Champions league </button>
  
        </div>
        
            
        
        </div>
        </div>
        
        
        

        
    </section>
  )
}

export default live