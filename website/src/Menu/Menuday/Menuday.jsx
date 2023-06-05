import React from 'react';
import ListItem from '../../Components/Listitem/ListItem';
import '../Menuday/Menuday.css';
import image1 from '../../assets/burger.jpg';
import image2 from '../../assets/cheese.jpg';

const MenuData = [
    {
      title:"Sesame Crusted Scotch fillet",
      description:"with honeyed pedro ximenz sauco and potato cake",
      price:"7.50",
      img:image1, 
    },
    {
     title:"Roast rack of lamb",
      description:"with honeyed pedro ximenz sauco and potato cake",
      price:"7.50",
      img:image2, 
    }
]

const Menuday = () => {
  return (
    <div className='section'>
        <div className='container menu-of-the-day'>
            <h1 className='heading-secondary'>
                <span>menu</span> of the day
            </h1>
            {
                MenuData.map((data, i)=>(
                <ListItem 
                title={data.title}
                 description={data.description}
                 price={data.price}
                 itemImage={data.img} />
                 ))
            }
        </div>

    </div>
  )
}

export default Menuday