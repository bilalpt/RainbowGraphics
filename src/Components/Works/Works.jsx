import React from 'react'
import './works.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react';

const items = [
    {
        id: 1,
        title: 'PVC card',
        image: 'https://www.forceid.in/wp-content/uploads/2019/07/custom-pvc-cards.jpg',
        desc: 'PVC cards can be customized with various features, including magnetic stripes, barcodes, RFID chips, and holographic elements, depending on the specific needs of the user. They are typically printed using specialized printers that can handle the plastic material and produce high-quality, durable images and text.  / Identification Cards,Access Control Cards,Membership Cards,Gift Cards,Event Passes,Loyalty Cards ',
    },
    {
        id: 2,
        title: 'wide format printing',
        image: 'https://design.kuttytech.com/wp-content/uploads/2022/09/printed-backlit-film-4.jpg',
        desc: "Wide format printing is used to produce large-scale prints on a variety of materials, making it ideal for applications that require high visibility and detailed graphics. Here are some common items that come under wide format printing,Banners,Posters,Outdoor Flags,Vehicle Wraps,Signs, Window Graphics,Backlit Displays,Exhibition Stands,Roll-Up Banners,Wall Murals,Canvas Prints,Floor Graphics,Retail Signage,Window Clings,Site Plans,Large Photographs,Maps,Vinyl Decals,Event Backdrops",
    },
    {
        id: 3,
        title: 'Digital Printig',
        image: 'https://a0.anyrgb.com/pngimg/1424/1216/pamphlet-visiting-card-standard-paper-size-business-cards-flyer-brochure-idea-printing-marketing-plastic.png',
        desc: 'Digital printing is highly versatile and can be used to produce a wide variety of products across different industries. Here are some common types of products that can be printed using digital printing: Business Cards,Flyers and Brochures,Posters,Banners,Postcards,Books,Magazines and Newsletters,Reports and Manuals,Catalogs,Greeting Cards,Invitations,Calendars,Photo Prints,Custom Labels,Packaging Prototypes,Stickers and Decals,Displays and Stands,Window Graphics,',
    },
    {
        id: 4,
        title: 'T-Shirt Printing',
        image: 'https://assets.ajio.com/medias/sys_master/root/20231218/Yno6/65806e88ddf7791519d61348/-473Wx593H-465914828-multi-MODEL.jpg',
        desc: 'T-shirt printing is a versatile and creative process that allows you to transfer designs, logos, and artwork onto fabric. Various techniques are used, each with its unique advantages, making it possible to achieve a range of effects and finishes. Here’s a description of the most popular methods: Screen Printing,Heat Transfer Printing,Direct-to-Garment (DTG) Printing',
    },
    {
        id: 5,
        title: 'Mug Printing',
        image: 'https://avatars.mds.yandex.net/i?id=7151b1d1a358cf22df02a85f49d8f18b2cf1cd1e-12994680-images-thumbs&n=13',
        desc: 'Mug printing is a popular method of customizing mugs with images, text, logos, or artwork. Various techniques are used to achieve high-quality and durable prints. Here’s a description of the most common mug printing methods: Sublimation Printing, Screen Printing,Digital Printing,Pad Printing,Heat Transfer Printing.',
    },
    {
        id: 6,
        title: 'Turmal Lamination',
        image: 'https://avatars.mds.yandex.net/i?id=69c4d0e587d4205fd451a66df68a95b0a0b7ced5-10071889-images-thumbs&n=13',
        desc: 'Turmal Lamination is a premium lamination technique used primarily for decorative and protective purposes on various surfaces, such as paper, board, and other materials. This process involves applying a thin film of thermally activated adhesive laminate to a substrate using heat and pressure, resulting in a durable and aesthetically pleasing finish. Here’s a detailed description of Turmal Lamination: High-Quality Finish,Durability,Protection,Versatility,Enhanced Appearance,Easy Maintenance',
    },
    {
        id: 7,
        title: 'Sticker Shape Cutting',
        image: 'https://avatars.mds.yandex.net/i?id=c26b09776d6a1319c57e90cb2d42aea6feabeb27-5232005-images-thumbs&n=13',
        desc: 'Sticker Shape Cutting is the process of creating custom-shaped stickers by cutting printed adhesive material into specific designs or outlines. This technique allows for unique and creative sticker shapes beyond the traditional rectangular or circular forms. Here s a detailed description of the sticker shape cutting process: Customization,Precision Cutting,Versatility,Branding and Marketing,Creative Expression,Design Creation,Printing,Cutting Preparation,Shape Cutting,Weeding and Finishing',
    },
    {
        id: 8,
        title: 'Perfect Binding',
        image: 'https://avatars.mds.yandex.net/i?id=8b06af7252f31464f21fc0173eb00a66-5282542-images-thumbs&n=13',
        desc: "Perfect Binding is a widely used bookbinding method that involves attaching a book's pages to a spine using a strong adhesive. This technique is popular for its clean and professional appearance, making it ideal for softcover books, catalogs, magazines, and manuals. Here’s a detailed description of the perfect binding process: Professional Appearance,Durability,Cost-Effective,Versatility,Customizable",
    },

    {
        id: 9,
        title: 'Book Publishing',
        image: 'https://avatars.mds.yandex.net/i?id=dea73679e5d83e985861f8ededdf2dc5-5233442-images-thumbs&n=13',
        desc: "Book Publishing is the process of producing and distributing literature or information in the form of books. This process involves several stages, from manuscript development to printing and distribution. It can be carried out by traditional publishing houses, independent publishers, or through self-publishing platforms. Here’s a detailed description of the book publishing process: Authoring,Submission,Acquisition,Developmental Editing,Copy Editing,Proofreading,Cover Design,Interior Design,Typesetting",
    },
    {
        id: 10,
        title: 'Advertising',
        image: 'https://avatars.mds.yandex.net/i?id=3597786f2523f8afa2433026f04993c8a9f6e78c-10734598-images-thumbs&n=13',
        desc: "Advertising is the process of promoting products, services, or brands to a target audience through various media channels with the goal of influencing purchasing behavior or creating awareness. Effective advertising involves strategic planning, creativity, and the use of diverse platforms to reach and engage potential customers. Here’s a detailed description of key elements and types of advertising Awareness,Consideration,Conversion,Target Audience,",
    },
    {
        id: 11,
        title: 'Creative Desining',
        image: 'https://avatars.mds.yandex.net/i?id=d9f21269d08c7b9813a5238e8f063e90128fc465-10686310-images-thumbs&n=13',
        desc: "Creative Designing is the art and process of creating visual content to communicate messages, evoke emotions, and inspire action through the use of typography, imagery, color, and layout. It involves a blend of artistic skills, strategic thinking, and technological tools to produce aesthetically pleasing and functional designs for various media. Here’s a detailed description of creative designing,Concept Development ,Idea Generation,Research,Visual Elements,Typography,Imagery,Color,Layout",
    },

];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ['start start','end start' ]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (
        <section >
            <div className='container'>
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.image} alt="" />
                    </div>
                    <motion.div className='textContainer' style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}



export default function Works() {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
