import React from 'react'
import "..///../App.css"
const Post = () => {
    return (
        <>
            <div>
                <div className='photo flex justify-center flex-wrap'>
                    <div className='  mt-[100px]  bg-gray-500 shadow-lg shadow-gray-500/50 w-[800px] h-[300px]'>
                        <div className='flex flex-wrap justify-center'>
                            <h1 className='text-white text-[30px]'>Տեղադրել հայտարարություն</h1>
                        </div>
                        <div className='flex flex-wrap justify-center'>
                            <p className='text-white mt-[20px]'>Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ</p>
                        </div>
                        <div className='flex flex-wrap  justify-center gap-[20px] mt-[70px]'>
                            <input type='text' className='rounded-[10px]' placeholder='Անուն Ազգանուն'/>
                            <input type='number' className='rounded-[10px]' placeholder='Հեռախոսահամար'/>
                            <input type='email' className='rounded-[10px]' placeholder='Էլ․ Հասցե'/>
                            <button className='bg-orange-500 rounded-[10px] w-[100px]'>Ուղարկել</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post