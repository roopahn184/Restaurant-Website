import React from 'react';
import '../Coffee/Coffee.css';
import ListItem from '../../Components/Listitem/ListItem';
import coffeeimage from '../../assets/coffee-items.jpg';

const menuDataRight = [
    {
        title:"Eggs Benedict",
        description:"with either bacon or salmon",
        price:"21"
    },
    {
        title:"Enfold's famous crepes",
        description:"with fresh fruits, bacon and maple syrup",
        price:"16"
    },
    {
        title:"French Toasted Brioche",
        description:"with grilled Banana, bacon and maple syrup",
        price:"17"
    },
    {
        title:"Low Carb Breakfast",
        description:"grilled chiken breast with veggies",
        price:"13"
    },
    {
        title:"Bagel",
        description:"with salmon, cream cheese and salsa",
        price:"8.5"
    },
    
];

const Cofee = () => {
  return (
   <div className='container coffe-selection'>
    <h1 className='heading-secondary'>Coffee <span>Selection</span></h1>

    <div className='grid-container'>
        <div>
            <img src={coffeeimage} alt="coffe items" />
        </div>

        <div>
            {
                menuDataRight.map((data, i)=>(
                    <ListItem title={data.title}
                    description={data.description}
                    price={data.price}
                    />
                ))
            }
        </div>
    </div>
   </div>
  )
}

export default Cofee