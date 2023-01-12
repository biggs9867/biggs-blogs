import Link from "next/link";

import Image from "next/image";

export default function premier() {

  
  return (
    <section className="py-16 " >
        
        
        <div className="container mx-auto md:px-20  ">
            <h1 className="font-bold text-4xl pb-12 text-center " >All Football live here</h1>
            <div className="relative px-4 py-6 bg-gray-300 rounded-lg shadow-lg justify-center">

        <Link href={""}>
          
          <Image src="/../public/images/articles/posts/UEFA_Champions_League.svg.png" width={500} height={600} alt="" />
        </Link>
        <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Watch UEFA champions league All Matches live here </h1>
        <p className="text-gray-600 text-center">Get the latest from the UEFA champions league. Catch all the latest news, match results, stats, videos and features from  right here.</p>
      </div>
         </div>
            </div>
            <div className="relative px-4 py-6 bg-gray-300 rounded-lg shadow-lg justify-center">
            <iframe  width="100%" height="600"  frameborder="0" allowfullscreen="true" allow="autoplay;" allowtransparency="true" src="https://www.freeshot.live/embed/CBS-SportsNetwork.php"  ></iframe>

</div></section>
  )
}


