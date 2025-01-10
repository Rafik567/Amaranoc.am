import React from 'react'

const TopHeader = () => {
    return (
        <>
            <div className='flex gap-[300px] justify-center flex-wrap '>
                <div className='flex gap[200px] flex-wrap'>
                    <img src='https://amaranoc.am/images/logo.svg'/>
                </div>
                <div className='flex gap-[25px] mt-[20px] flex-wrap'>
                    <p>Գլխավոր</p>
                    <p>Զեղչեր</p>
                    <p>Ծառայություններ</p>
                    <p>Մեր մասին</p>
                </div>
                <div className='mt-[15px]   '>
                    <input className='bg-gray-300 w-[250px] rounded-[10px]'  type="text" placeholder="Որոնում..."/>
                </div>
            </div>
  

        </>
    )
}

export default TopHeader