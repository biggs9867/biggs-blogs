import Link from "next/link";

import Image from "next/image";

export default function premier() {
    const bg = {
        background:
          "linear-gradient(5deg, rgba(400,63,251,1) 8%, rgba(89,156,226,133) 34%, rgba(263,251,227,111) 100%)",
        backgroundPosition: "left",
      };

  
  return (
    <section className="py-16 " >
        
        
        <div className="container mx-auto md:px-20  " style={bg}>
            <h1 className="font-bold text-4xl pb-12 text-center " >All Cricket live here</h1>
            <div className="relative px-4 py-6 bg-gray-300 rounded-lg shadow-lg justify-center" style={bg}>

        <Link href={""}>
          
          <Image src="/../public/images/articles/posts/star.png" width={500} height={600} alt="" />
        </Link>
        <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Watch Cricket league All Matches live here </h1>
        <p className="text-gray-600 text-center">Get the latest from the UEFA champions league. Catch all the latest news, match results, stats, videos and features from  right here.</p>
      </div>
         </div>
            </div>
            <div className="relative px-4 py-6 bg-gray-300 rounded-lg shadow-lg justify-center" style={bg}>
            <iframe width="100%" height="600"  class="iframe" title="live score" src="https://stream.crichd.vip/update/star1hi.php" scrolling="no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div></section>
  )
}


