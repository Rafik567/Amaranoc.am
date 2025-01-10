import React from 'react'

const BestOffers = () => {
    const data = [

        {
            id: 2,
            title: "90,000 Դ",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1735922464540--0.9832742505384362image.webp&w=1920&q=75",
            description: "Ակունք",
        },
        {
            id: 3,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1719483738178--0.17939100328131374image.webp&w=1920&q=75",
            title: "150,000 Դ",
            description: "Արզնի",
        },
        {
            id: 4,
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1727006467456--0.9643954207029866image.webp&w=1920&q=75",
            title: "130,000 Դ",
            description: "Ծաղկաձոր",
        }
    ];
    let data2 = [
        {
            id: 1,
            description: "Բջնի",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1718982997805--0.5443030491298497image.webp&w=1920&q=75",
            title: "90,000 Դ",
        },
        {
            id: 2,
            description: "Պտղնի",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1733690961413--0.3657082475795794image.webp&w=1920&q=75",
            title: "100,000 Դ",
        },
        {
            id: 3,
            description: "Օհանավան",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712567462741--0.9299629007114927image.webp&w=1920&q=75",
            title: "80,000 Դ",
        },
    ]
    let data3 = [
        {
            id: 1,
            description: "Ծաղկաձոր",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1726755455709--0.42990686786537236image.webp&w=1920&q=75",
            title: "100,000 Դ",
        },
        {
            id: 2,
            description: "Օհանավան",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1720431645306--0.9258848613459756image.webp&w=1920&q=75",
            title: "100,000 Դ",
        },
        {
            id: 3,
            description: "Նօր Հաճն",
            image: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326262412--0.25440242535580326image.webp&w=1920&q=75",
            title: "108,000 Դ",
        },
    ]
    return (
        <>
            <div className='mt-[80px]'>
                <div className='flex justify-center flex-wrap'>
                    <h1 className="title text-[black] text-[30px] mt-[20px]">Լավագույն առաջարկներ</h1>
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
            </div>
        </>
    )
}

export default BestOffers