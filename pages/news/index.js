import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Index() {

    const [news, setNews] = useState()
    async function fetchNews(){
      const newsResposne =  await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-02-15&sortBy=publishedAt&apiKey=0bdbaf3b99964f38b59c78f80fa2b9c3");

    //   console.log("news ",news.data);

        setNews(newsResposne.data.articles)
      if(newsResposne.data.status == "ok"){
      }

    //   console.log("news ",news);
    }

    useEffect(()=>{
        console.log("news ",news);
    },[news])


  return (
    // <div className='p-10 bg-black '>
    //      <div className="mx-auto max-w-7xl px-4 grid gap-4 md:gap-6 lg:gap-8 items-start w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    //   <div className="flex flex-col gap-2 border rounded-lg">
    //     <div className="aspect-card overflow-hidden rounded-lg">
    //       <img
    //         alt="Thumbnail"
    //         className="aspect object-cover"
    //         height={225}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/225",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-lg font-semibold">
    //         <Link className="line-clamp-2" href="#">
    //           The new frontier of space tourism
    //         </Link>
    //       </h2>
    //       <p className="text-sm text-gray-500 dark:text-gray-400">SpaceX and Blue Origin are leading the way.</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="aspect-card overflow-hidden rounded-lg">
    //       <img
    //         alt="Thumbnail"
    //         className="aspect object-cover"
    //         height={225}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/225",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-lg font-semibold">
    //         <Link className="line-clamp-2" href="#">
    //           The impact of AI on healthcare
    //         </Link>
    //       </h2>
    //       <p className="text-sm text-gray-500 dark:text-gray-400">
    //         Revolutionizing patient care with machine learning.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="aspect-card overflow-hidden rounded-lg">
    //       <img
    //         alt="Thumbnail"
    //         className="aspect object-cover"
    //         height={225}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/225",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-lg font-semibold">
    //         <Link className="line-clamp-2" href="#">
    //           Sustainable cities of the future
    //         </Link>
    //       </h2>
    //       <p className="text-sm text-gray-500 dark:text-gray-400">
    //         Innovations in urban design and eco-friendly infrastructure.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="aspect-card overflow-hidden rounded-lg">
    //       <img
    //         alt="Thumbnail"
    //         className="aspect object-cover"
    //         height={225}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/225",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-lg font-semibold">
    //         <Link className="line-clamp-2" href="#">
    //           Exploring the mysteries of the deep sea
    //         </Link>
    //       </h2>
    //       <p className="text-sm text-gray-500 dark:text-gray-400">New discoveries in ocean exploration.</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="aspect-card overflow-hidden rounded-lg">
    //       <img
    //         alt="Thumbnail"
    //         className="aspect object-cover"
    //         height={225}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/225",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-lg font-semibold">
    //         <Link className="line-clamp-2" href="#">
    //           The art of sourdough: a beginner's guide
    //         </Link>
    //       </h2>
    //       <p className="text-sm text-gray-500 dark:text-gray-400">Perfecting your loaf with tips from master bakers.</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="aspect-card overflow-hidden rounded-lg">
    //       <img
    //         alt="Thumbnail"
    //         className="aspect object-cover"
    //         height={225}
    //         src="/placeholder.svg"
    //         style={{
    //           aspectRatio: "400/225",
    //           objectFit: "cover",
    //         }}
    //         width={400}
    //       />
    //     </div>
    //     <div className="flex flex-col gap-1">
    //       <h2 className="text-lg font-semibold">
    //         <Link className="line-clamp-2" href="#">
    //           The psychology of happiness
    //         </Link>
    //       </h2>
    //       <p className="text-sm text-gray-500 dark:text-gray-400">
    //         Insights from experts on the science of well-being.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    // </div>

    <div className='min-h-screen text-center p-10'>
        <h1> News</h1>


        <button onClick={fetchNews}>Click </button>

        <div>
            {news && (
              <div>
                {news?.map((item)=>(
                     <section class="text-gray-600 body-font">
                     <div class="container px-5 py-24 mx-auto">
                       <div class="flex flex-wrap -m-4">
                         <div class="p-4 md:w-1/3">
                           <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                             <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={item.urlToImage} alt="blog"/>
                             <div class="p-6">
                               <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                               <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                               <p class="leading-relaxed mb-3">{item.title}</p>
                               <div class="flex items-center flex-wrap ">
                                 <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                   <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                     <path d="M5 12h14"></path>
                                     <path d="M12 5l7 7-7 7"></path>
                                   </svg>
                                 </a>
                                 <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                   <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                     <circle cx="12" cy="12" r="3"></circle>
                                   </svg>1.2K
                                 </span>
                                 <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                   <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                   </svg>6
                                 </span>
                               </div>
                             </div>
                           </div>
                         </div>
                      
                       </div>
                     </div>
                   </section>
                ))}
              </div>
            )}
        </div>
    </div>
  )
}
