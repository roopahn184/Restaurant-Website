import React from 'react';
import ListItem from '../../Components/Listitem/ListItem';
import './Addtocart.css';

import image1 from '../../assets/burger.jpg';
import image2 from '../../assets/cheese.jpg';
import image3 from '../../assets/cake.jpg';
import image4 from '../../assets/coffee.jpg';
import image5 from '../../assets/pizza.jpeg';
import image6 from '../../assets/coffee.jpg';

const menuDataLeft = [
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
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image3, 
  
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image4, 
  
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image5, 
  
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image6, 
  
    }
]

const menuDataRight = [
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
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image3, 
  
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image4, 
  
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image5, 
  
    },
    {
        title:"Roast rack of lamb",
        description:"with honeyed pedro ximenz sauco and potato cake",
        price:"7.50",
        img:image6, 
  
    }
]
const Addtocart = () => {
  return (
    <div className='container add-to-cart'>
        <h1 className='heading-secondary'>
            <span>Click</span> to add to cart
        </h1>
        <div className="grid-container">
        <div>
                {
                    menuDataLeft.map((data, i)=>(
                        <ListItem title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                        />
                    ))
                }
            </div>

            <div>
                {
                    menuDataRight.map((data, i)=>(
                        <ListItem title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                        />
                    ))
                }
            </div>
        </div>
       

        <div className='addtocart-btn'>
            <h1 className='heading-secondary'>
                <span>are you</span>done?
            </h1>
            <button>show cart & checkout</button>
        </div>

    </div>
  )
}

export default Addtocart