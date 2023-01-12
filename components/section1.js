import Image from "next/image";
import Link from "next/link";
import Author from "../components/_child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"

SwiperCore.use([Autoplay]);

const bg = {
  background:
    "linear-gradient(5deg, rgba(100,63,251,1) 8%, rgba(89,156,226,133) 34%, rgba(263,251,227,111) 100%)",
  backgroundPosition: "left",
};

export default function section1() {

  const { data, isLoading, isError } = fetcher('api/trending')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending Today</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay:1500
          }}
          
        >
         {
          data.map((value,index)=>(
            <SwiperSlide key={index}><Slide data = {value}></Slide></SwiperSlide>
          ))
         }
        </Swiper>
      </div>
    </section>
  );
}

function Slide({data}) {
  const { id, title, category, img, published,description,   author } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image src={img || "/"} width={500} height={600}alt="" />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
          {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"} 
          </Link>
        </div>
        <p className="text-black-500 py-3">
         {description || "description"}
        </p>
        { author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}

