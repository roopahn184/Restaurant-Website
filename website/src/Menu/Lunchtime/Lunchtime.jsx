import React from 'react';
import '../Lunchtime/Lunchtime.css';
import ListItem from '../../Components/Listitem/ListItem';


const menuDataLeft = [
    {
        title:"spiced pigeon",
        description:"with either bacon or salmon",
        price:"38"
    },
    {
        title:"ribeye steak",
        description:"with fresh fruits, bacon and maple syrup",
        price:"35"
    },
    {
        title:"roast turbot",
        description:"with grilled Banana, bacon and maple syrup",
        price:"22"
    }
];

const menuDataRight = [
    {
        title:"linefish",
        description:"grilled chiken breast with veggies",
        price:"27"
    },
    {
        title:"autumn lamb",
        description:"with salmon, cream cheese and salsa",
        price:"33"
    },
    {
        title:"duck",
        description:"with chocolate sause or maple syrup, honey and cream",
        price:"75"
    }
];


const Lunchtime = () => {
  return (
    <div className='container lunchtime'>
        <h1 className='heading-secondary'>
            Lunch <span>Break</span>
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

export default Lunchtime