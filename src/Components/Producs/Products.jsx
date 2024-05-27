import React from 'react'
import './products.scss'



const items = [
    {
        id: 1,
        title: 'ID Card',
        image: 'Idcard.jpg',
        desc: 'A resilient, bespoke, laminated card for secure, professional identification and access control.',
    },
    {
        id: 2,
        title: 'Wide Format Printing',
        image: 'Wideformatprint.jpg',
        desc: "A high-quality, bespoke printing method for creating large, vibrant, professional graphics and displays.",
    },
    {
        id: 3,
        title: 'Digital Printing',
        image: 'Digitalpriting.jpg',
        desc: 'A precise, versatile printing method for producing sharp, professional, and customizable high-quality prints.',
    },
    {
        id: 4,
        title: 'T-Shirt Printing',
        image: 'Tshritprinting.jpg',
        desc: 'A creative, customizable printing technique for producing vibrant, professional, and durable T-shirt designs.',
    },
    {
        id: 5,
        title: 'Mug Printing',
        image: 'mug2.jpg',
        desc: 'A personalized, durable printing method for crafting professional, vibrant designs onto mugs.',
    },
    {
        id: 6,
        title: 'Thermal Lamination',
        image: 'Tremallaminationandfoiling.jpg',
        desc: 'A meticulous, protective process ensuring professional, durable, and sleek finishing for printed materials',
    },
    {
        id: 7,
        title: 'Sticker Shape Cutting',
        image: 'sticker.jpg',
        desc: 'A precise, meticulous process for crafting professional, custom-shaped stickers with sleek edges and flawless finish.',
    },
    {
        id: 8,
        title: 'Perfect Binding',
        image: 'https://avatars.mds.yandex.net/i?id=8b06af7252f31464f21fc0173eb00a66-5282542-images-thumbs&n=13',
        desc: "A meticulous, professional binding technique ensuring sleek, durable, and seamless finishing for printed materials.",
    },

    {
        id: 9,
        title: 'Book Publishing',
        image: 'https://avatars.mds.yandex.net/i?id=dea73679e5d83e985861f8ededdf2dc5-5233442-images-thumbs&n=13',
        desc: "A comprehensive, professional process for producing high-quality, polished books with meticulous attention to detail.",
    },
    {
        id: 10,
        title: 'Advertising',
        image: 'Advertising.jpg',
        desc: "A strategic, creative process for crafting professional, impactful advertisements that captivate and engage target audiences.",
    },
    {
        id: 11,
        title: 'Creative Designing',
        image: '/Creativedesigning.jpg',
        desc: "An imaginative, meticulous process for producing professional, captivating designs that inspire and elevate brands and projects",
    },
    {
        id: 12,
        title: 'Momento',
        image: '/FeaturedAwards.jpg',
        desc: "Cherished memory captured in a keepsake card, preserving special moments forever.",
    },

];






function Products() {



    return (


        <div className="progress pb-10">
            <h1 className="text text-[#6a7031] text-4xl">Featured Works</h1>
            <div className="md:grid grid-cols-4 px-20 pb-6 progress">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex w-full max-w-[20rem] flex-col rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#000000] bg-clip-border text-gray-700 shadow-2xl mt-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-[#f0f0f0] hover:to-[#303030] active:scale-105 focus:scale-105 active:bg-gradient-to-br active:from-[#f0f0f0] active:to-[#303030] focus:bg-gradient-to-br focus:from-[#f0f0f0] focus:to-[#303030]"
                    >
                        <div className="relative w-full h-36 md:h-48 overflow-hidden text-white shadow-lg rounded-2xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
                            <button
                                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                {/* Optional button content */}
                            </button>
                        </div>
                        <div className="p-6 md:p-6">
                            <div className="flex items-center justify-between mb-2 md:mb-3">
                                <h5 className="text-lg md:text-lg block font-sans antialiased font-medium leading-snug tracking-normal text-[#ffffff]">
                                    {item.title}
                                </h5>
                            </div>
                            <p className="text-xs md:text-sm block font-sans antialiased font-light leading-relaxed text-[#ffffff] custom-justify times-new-roman max-h-14 md:max-h-16 overflow-hidden">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}



export default Products
