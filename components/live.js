import { useRouter } from "next/router";

import Link from "next/link";

import Image from "next/image";

function live() {
  const bg = {
    background:
      "linear-gradient(5deg, rgba(400,63,251,1) 8%, rgba(89,156,226,133) 34%, rgba(263,251,227,111) 100%)",
    backgroundPosition: "left",
  };

  const router = useRouter();

  const handleClick1 = () => {
    router.push("/live/premier");
  };
  const handleClick2 = () => {
    router.push("/live/champ");
  };
  const handleClick3 = () => {
    router.push("/live/laliga");
  };
  const handleClick4 = () => {
    router.push("/live/star");
  };
  return (
    <section className="py-16  "style={bg}>
      <div className="container mx-auto md:px-20  ">
        <h1 className="font-bold text-4xl  text-center ">
          Because i Love Football
        </h1>
           
        <div class="flex items-center justify-center min-h-screen">
          <div className="h-auto max-w-lg rounded-lg   justify-center">
            <Link href={""}>
              <Image
                src="/../public/images/articles/posts/i.png"
                width={250}
                height={250}
                alt=""
              />
            </Link>

            <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">
              The Premier League is the highest level of the men English
              football league system. Contested by 20 clubs, it operates on a
              system of promotion and relegation with the English Football
              League. Seasons typically run from August to May with each team
              playing 38 matches.
            </p>

            <button
              onClick={handleClick1}
             class="bg-purple-900 text-white hover:bg-blue-400 font-bold pl-4 py-4 px-6 mt-8 rounded justify-center "
            >
              Click here to watch live Premer League{" "}
            </button>
          </div>


<div className="h-auto max-w-lg rounded-lg   justify-center">
            <Link href={""}>
              <Image
                src="/../public/images/articles/posts/lal.jpg"
                width={250}
                height={250}
                alt=""
              />
            </Link>

            <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">
              The Premier League is the highest level of the men English
              football league system. Contested by 20 clubs, it operates on a
              system of promotion and relegation with the English Football
              League. Seasons typically run from August to May with each team
              playing 38 matches.
            </p>

            <button
              onClick={handleClick3}
              class="bg-purple-900 text-white hover:bg-blue-400 font-bold pl-4 py-4 px-8 mt-8 rounded justify-center "
            >
              Click here to watch live laliga{" "}
            </button>
          </div>



          <div className="h-auto max-w-lg rounded-lg   justify-center">
            <Link href={"{/live/premier}"}>
              <Image
                src="/../public/images/articles/posts/UEFA_Champions_League.svg.png"
                width={258}
                height={258}
                alt=""
              />
            </Link>

            <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">
              The UEFA Champions League is an annual club football competition
              organised by the Union of European Football Associations and
              contested by top-division European clubs, deciding the competition
              winners through a round robin group stage to qualify for a
              double-legged knockout format, and a single leg
            </p>

            <button
              onClick={handleClick2}
              class="bg-purple-900 text-white hover:bg-blue-400 font-bold pl-4 py-4 px-6 mt-8 rounded justify-center "
            >
              Click here to watch live Champions league{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-20  ">
        
        <h1 className="font-bold text-4xl  text-center ">
          “Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.”
― Pele
        </h1>
        <h1 className="font-bold text-6xl  text-center pt-20">I am cricket fan too.</h1>
        <div class="flex items-center justify-center min-h-screen">
        <div className="h-auto max-w-lg rounded-lg   justify-center">
            <Link href={""}>
              <Image
                src="/../public/images/articles/posts/star.png"
                width={250}
                height={250}
                alt=""
              />
            </Link>

            <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">
              The Premier League is the highest level of the men English
              football league system. Contested by 20 clubs, it operates on a
              system of promotion and relegation with the English Football
              League. Seasons typically run from August to May with each team
              playing 38 matches.
            </p>

            <button
              onClick={handleClick4}
             class="bg-purple-900 text-white hover:bg-blue-400 font-bold pl-4 py-4 px-6 mt-8 rounded justify-center "
            >
              Click here to watch live Premer League{" "}
            </button>
          </div>
          <div className="h-auto max-w-lg rounded-lg   justify-centerpt-15">
            <Link href={"{/live/premier}"}>
              <Image
                src="/../public/images/articles/posts/UEFA_Champions_League.svg.png"
                width={250}
                height={250}
                alt=""
              />
            </Link>

            <p className="tw-text-center tw-text-sm tw-font-light tw-leading-normal tw-mt-2 ">
              The UEFA Champions League is an annual club football competition
              organised by the Union of European Football Associations and
              contested by top-division European clubs, deciding the competition
              winners through a round robin group stage to qualify for a
              double-legged knockout format, and a single leg
            </p>

            <button
              onClick={handleClick2}
              class=" bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded  "
            >
              Click here to watch live Champions league{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default live;
