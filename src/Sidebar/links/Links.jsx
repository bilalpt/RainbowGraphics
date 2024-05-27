import React from 'react'

const variants={
  open:{
    transition:{
      staggerChildren:0.1,
    },
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
    },
  },
}

const itemVariants={
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  },
}

function Links() {
  const items=['Home','Our Works','About','Contact Us']
  return (
    <div className='links' variants={variants}>
      {items.map((item)=>(
      <a href={`#${item}`}  key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</a>
))}
      Links
    </div>
  )
}

export default Links
