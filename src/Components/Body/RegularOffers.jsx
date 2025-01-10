import React from 'react'

const RegularOffers = () => {
    const data = [

        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736346552283--0.4154739994823833image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            title: "100,000 Դ",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736346067846--0.48136685223654463image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            title: "55,000 Դ",
        },
        {
            id: 4,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736264307372--0.5923133238359417image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            title: "45,000 Դ",
        }
    ];
    let data2 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1736262949713--0.5438384878532811image.webp&w=1920&q=75",
            description: "Ծաղկաձոր",
            title: "65,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735309341998--0.18031243054065027image.webp&w=1920&q=75",
            description: "Արզական",
            title: "60,000",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735307864481--0.8688546137086155image.webp&w=1920&q=75",
            description: "Քասախ",
            title: "120,000 Դ",
        },
    ]
    let data3 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735305286415--0.799977604430975image.webp&w=1920&q=75",
            description: "Դիլիջան",
            title: "25,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735302502215--0.230355006263677image.webp&w=1920&q=75",
            description: "Վանաձոր",
            title: "30,000",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735210751295--0.852475450909614image.webp&w=1920&q=75",
            description: "Թեղենիք",
            title: "25,000 Դ",
        },
    ]
    let data4 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735139871431--0.24029398091295828image.webp&w=1920&q=75",
            description: "Դիլիջան",
            title: "50,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735208216849--0.48038698225258836image.webp&w=1920&q=75",
            description: "Փարպի",
            title: "100,000 Դ",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735135057801--0.6317828904538976image.webp&w=1920&q=75",
            description: "Աբովյան",
            title: "55,000 Դ",
        },
    ]
    let data5 = [
        {
            id: 1,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1734367997011--0.42441673023022153image.webp&w=1920&q=75",
            description: "Երևան",
            title: "100,000 Դ",
        },
        {
            id: 2,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733224666202--0.8153535162596828image.webp&w=1920&q=75",
            description: "Ջերմուկ",
            title: "35,000 Դ",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733224168744--0.13257965616354328image.webp&w=1920&q=75",
            description: "Ջերմուկ",
            title: "45,000 Դ",
        },
    ]
    return (
        <>
            <div className='mt-[80px]'>
                <div className='flex justify-center flex-wrap'>
                    <h1 className="title text-[black] text-[30px] mt-[20px]">Սովորական առաջարկներ</h1>
                </div>
                <div className="flex justify-center mt-[10px] flex-wrap w-[1/6] gap-[200px]">
                    {data.map((el) => (
                        <div key={el.id} className="card w-[250px] text-left">
                            <img src={el.image} className="image w-[100%] " />
                            <h2 className="card-title text-[black]">{el.title}</h2>
                            <p className="card-description text-[black]">{el.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center flex-wrap w-[1/6] gap-[200px]">
                    {data2.map((el) => (
                        <div key={el.id} className="card w-[250px] text-left">
                            <img src={el.image} className="image w-[100%] " />
                            <h2 className="card-title text-[black]">{el.title}</h2>
                            <p className="card-description text-[black]">{el.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center flex-wrap w-[1/6] gap-[200px]">
                    {data3.map((el) => (
                        <div key={el.id} className="card w-[250px] text-left">
                            <img src={el.image} className="image w-[100%] " />
                            <h2 className="card-title text-[black]">{el.title}</h2>
                            <p className="card-description text-[black]">{el.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center flex-wrap w-[1/6] gap-[200px]">
                    {data4.map((el) => (
                        <div key={el.id} className="card w-[250px] text-left">
                            <img src={el.image} className="image w-[100%] " />
                            <h2 className="card-title text-[black]">{el.title}</h2>
                            <p className="card-description text-[black]">{el.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center flex-wrap w-[1/6] gap-[200px]">
                    {data5.map((el) => (
                        <div key={el.id} className="card w-[250px] text-left">
                            <img src={el.image} className="image w-[100%] " />
                            <h2 className="card-title text-[black]">{el.title}</h2>
                            <p className="card-description text-[black]">{el.description}</p>
                        </div>
                    ))}
                </div>
            </div>
    </>
  )
}

export default RegularOffers