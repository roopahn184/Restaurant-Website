import React from 'react';
import '../Breakfast/Breakfast.css';
import ListItem from '../../Components/Listitem/ListItem';

const menuDataLeft = [
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
    }
];

const menuDataRight = [
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
    {
        title:"Amarican pancakes",
        description:"with chocolate sause or maple syrup, honey and cream",
        price:"21"
    }
];


const Breakfast = () => {
  return (
    <div className='container breakfast'>
        <h1 className='heading-secondary'>
            break <span>fast</span>
        </h1>

        <div className="grid-container">
            <div>
                {
                    menuDataLeft.map((data, i)=>(
                        <ListItem title={data.title}
                        description={data.description}
                        price={data.price}
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
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Breakfast