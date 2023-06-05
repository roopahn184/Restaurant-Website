import React from 'react';
import '../Bevarages/Bevarages.css';
import ListItem from '../../Components/Listitem/ListItem';

const menudata =[
 {
    title:"milk shake",
    price:"6.5"
 },
 {
    title:"banana shake",
    price:"7.5"
 },
 {
    title:"mango shake",
    price:"5.0"
 },
 {
 title:"apple shake",
    price:"8.0"
},
{
    title:"sapota shake",
    price:"9.0"
},
{
    title:"mix shake",
    price:"10.5"
}
 
]


const Bevarages = () => {
  return (
    <div className='section'>
     <div className="container bevarages">
        <h1 className='heading-secondary'>
            Non Alcoholic <span>Bevarages</span>
        </h1>

        <div className="grid-container">
        <div>
                {
                    menudata.map((data, i)=>(
                        <ListItem title={data.title}
                        description={data.description}
                        price={data.price}
                        />
                    ))
                }
            </div>
        </div>
     </div>
    </div>
  )
}

export default Bevarages