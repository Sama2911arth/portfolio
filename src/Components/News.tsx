// App.tsx
import React from 'react';

interface NewsArticle {
    title: string;
    logoSrc: string; // URL for the publication logo
    date: string;
    imageSrc: string;
    link: string;
}

const newsArticles: NewsArticle[] = [
    {
        title: "Coding Jr's CEO, Sumit Bhat felicitated at Times 40 Under 40",
        logoSrc: 'https://s3-alpha-sig.figma.com/img/0cb8/e5e6/3e7ed149414ecbd4376c5f5161a39238?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEPyb2AC~RpWuZO50t00NEDx9UrW8CiUZwrisTMALxZ2SzDvTJIsdHPxDmYVyLBROjYIGRQx~-wiDWtnqHcSQ-n6~Ph63D38AK-G9RvEHz2Va1utt6wQCJX9A2E37w3A-SeYHW7utZaLhE6SSKe~qpJ0G3T-x96F5GFejvjDvlsk6OZoVCGM7ygIuGnuF2Sh6m6xSwz8EpoLnhKUJ-xelWJEbTyOsCbRB7-SAUOxrp~zAzAEXwpBvFaGxtIcIIMRwoU7cALgF3sfSGk9JnV1a0PTGq6uJjRNqkpEhIXRsnDG74R8A-8qr72luZ2Ixt08hM9ouP1M3lil0n-OR54BbA__', // Replace with actual logo URL
        date: '31 March, 2023',
        imageSrc: 'https://s3-alpha-sig.figma.com/img/927d/8d77/78d26a6805d6423d0a5544120c61f26d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qUw7psTE-yGQwb5oqjn~WGPvPO9SuGYdYy2CD-eVwwWBibsK5nW6xiWhSElSCG~L2a2YgoByrs5M6R--8Q-SHPhWZ-UTH8rSLrbNKz1hQACIhMvDimeiGxU6JjfFSIeVbWh76nMetGr~IrMQGvEIbGH407R14m621-wagX2ibfOGCkmYaO3UjR6FuT9-QKL8081eqZSBiUdKOMU5HbvPisaugHv92lt5BdaDovl46apRylHe95BtC3McdLEI-e5U6Vl-eZZl~OkWQoaHU4xTVuZ4-iuzktJW1MnRL8EbpYXyS3sTTf03NPGs2o-pHWEULB~psvEuh-61RTQjXenuZw__', // Replace with actual article image URL
        link: '#',
    },
    {
        title: 'Meet Vikas Shukla- The flag bearer of technology and...',
        logoSrc: 'https://s3-alpha-sig.figma.com/img/c459/c016/ce24bdb89ed1f0484535b5b36c8618cc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JbA5Uzfbh4Mkj15SMCCgLnD9uZWEpUt8doDi~ZhjemU9Oe0XpxLgIP4j81HHmNzExdoMYaG-lZJF5kD64RT4r-loMxvi8EQgRb-FWBWAl3avLLuwY2iAfgAIa0bd6RaviHD28-R2o1RqHDmj1wh9CGf7nutHYcuLNIARPd4X683PJd5fc5ChMfaZsVVYjSBQBxfKxSRCDWEm-K2nLPtiaFX~gSBu0SIsosTFsr4cKNK9au1vhCOXCsrMhCi35pBxm0pB5daXXgBUHJeL8tMH4fZSflxYPrDxzpQpTJRvwPXZl3IE8dSpDGN9WjLcsuzOHBL3PbtWYV6TO3nms5vQOw__', // Replace with actual logo URL
        date: '01 March, 2023',
        imageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA+AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDEBUAAABQQVBQUQQgKKAgAAAAgoIioKKJqgAIACgAKKioIiiogqIAEUVFSooqRQShQAAFEUAAAABFFRAAAEABRQEAAUAAABBUVAAUAQAIAAAqAKAAAAUAQVFAFERQQEUUAEUDQAABFAQAAoAAAAAAAACKIooAAAAAAAAAAAAAAAAAAiiiEKIFAAAAAAAEANAVFFAIAACC1AURQFAHKiKigIoAAACCpQABAAUAEAAAAFQBRFFAAAAAAAAAFAAABAAUAEECgAAgAoigAAAAAqKAAigAAAAACoqgiogAAAAAihQEQAUAAAEAAAAAAFEUVFAAAAAABRUBAAAAARUVAAAAAAAAABFAUEDAAARQBQABQBAFAAAAABESgKAAAAACAoKIAgoAoAAAIACigAAD/2Q==', // Replace with actual article image URL
        link: '#',
    },
    {
        title: 'Meet Vikas Shukla- The flag bearer of technology and...',
        logoSrc: 'https://s3-alpha-sig.figma.com/img/0cb8/e5e6/3e7ed149414ecbd4376c5f5161a39238?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEPyb2AC~RpWuZO50t00NEDx9UrW8CiUZwrisTMALxZ2SzDvTJIsdHPxDmYVyLBROjYIGRQx~-wiDWtnqHcSQ-n6~Ph63D38AK-G9RvEHz2Va1utt6wQCJX9A2E37w3A-SeYHW7utZaLhE6SSKe~qpJ0G3T-x96F5GFejvjDvlsk6OZoVCGM7ygIuGnuF2Sh6m6xSwz8EpoLnhKUJ-xelWJEbTyOsCbRB7-SAUOxrp~zAzAEXwpBvFaGxtIcIIMRwoU7cALgF3sfSGk9JnV1a0PTGq6uJjRNqkpEhIXRsnDG74R8A-8qr72luZ2Ixt08hM9ouP1M3lil0n-OR54BbA__', // Replace with actual logo URL
        date: '01 March, 2023',
        imageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA+AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQcC/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDEBUAAABQQVBQUQQgKKAgAAAAgoIioKKJqgAIACgAKKioIiiogqIAEUVFSooqRQShQAAFEUAAAABFFRAAAEABRQEAAUAAABBUVAAUAQAIAAAqAKAAAAUAQVFAFERQQEUUAEUDQAABFAQAAoAAAAAAAACKIooAAAAAAAAAAAAAAAAAAiiiEKIFAAAAAAAEANAVFFAIAACC1AURQFAHKiKigIoAAACCpQABAAUAEAAAAFQBRFFAAAAAAAAAFAAABAAUAEECgAAgAoigAAAAAqKAAigAAAAACoqgiogAAAAAihQEQAUAAAEAAAAAAFEUVFAAAAAABRUBAAAAARUVAAAAAAAAABFAUEDAAARQBQABQBAFAAAAABESgKAAAAACAoKIAgoAoAAAIACigAAD/2Q==', // Replace with actual article image URL
        link: '#',
    },
];

const News: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">
                    We’ve Also Been In <span className="text-teal-500">News!</span>
                </h2>
            </div>

            {/* Background Circles */}
            <div className="relative flex justify-center items-center">
                <div className="absolute top-0 left-8 transform translate-x-[-50%] h-40 w-40 rounded-full border border-teal-300 opacity-50"></div>
                <div className="absolute top-0 right-8 transform translate-x-[50%] h-40 w-40 rounded-full border border-teal-300 opacity-50"></div>
            </div>

            {/* News Articles */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                {newsArticles.map((article, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg shadow-lg bg-white w-72 p-4 transform hover:scale-105 transition duration-300"
                    >
                        {/* Publication Logo and Date */}
                        <div className="flex justify-between items-center mb-4">
                            <img src={article.logoSrc} alt="Publication Logo" className="h-6 w-auto" />
                            <p className="text-sm text-gray-500">{article.date}</p>
                        </div>

                        {/* Article Image */}
                        <div className="mb-4 h-40 overflow-hidden rounded-lg">
                            <img src={article.imageSrc} alt={article.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Article Title */}
                        <p className="text-gray-700 text-sm mb-4">{article.title}</p>

                        {/* Read Article Link */}
                        <a href={article.link} className="text-blue-500 font-semibold text-sm flex items-center gap-1 hover:underline">
                            Read article <span className="text-xl">&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
