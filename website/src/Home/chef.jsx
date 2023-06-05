import React from 'react';
import '../Home/chef.css'

const chef = () => {
  return (
    <div>
      <div className='chef-img'>
        <div className="container">
          <div className='chef-content'>
            <h1 className='heading-primary'>our <span>chef</span></h1>

            <p className='text-white'>Award Winning meals,delivered by an amazing team</p>
          </div>
        </div>
      </div>
         {/* //chef info// */}
         <div className='container'>
          <div className='grid-container py-md'>
            <div className='grid-item chef-info'>
            <h3 className='heading-tertiary'>Marcus<span>Cole</span></h3>

               <h4>Grill Chef</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat recusandae excepturi deleniti voluptatum voluptatibus eum consequuntur ea molestiae debitis! Reiciendis, voluptates? Aliquam excepturi repudiandae dolor dolorem est itaque optio! Maxime?</p>
               </div>
              <div className='grid-item chef-info'>
                <h3 className='heading-tertiary'>Lisa<span>Cole</span></h3>

                  <h4>Executive chef</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat recusandae excepturi deleniti voluptatum voluptatibus eum consequuntur ea molestiae debitis! Reiciendis, voluptates? Aliquam excepturi repudiandae dolor dolorem est itaque optio! Maxime?</p>
                </div>


                    <div className='grid-item chef-info'>
                 <h3 className='heading-tertiary'>Lara<span>Langford</span></h3>

                 <h4> Chef De cuisine</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat recusandae excepturi deleniti voluptatum voluptatibus eum consequuntur ea molestiae debitis! Reiciendis, voluptates? Aliquam excepturi repudiandae dolor dolorem est itaque optio! Maxime?</p>
              </div>

                 <div className='grid-item chef-info'>
                 <h3 className='heading-tertiary'>Alex<span>Deer</span></h3>
                 <h4>Sous Chef</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat recusandae excepturi deleniti voluptatum voluptatibus eum consequuntur ea molestiae debitis! Reiciendis, voluptates? Aliquam excepturi repudiandae dolor dolorem est itaque optio! Maxime?</p>
                 </div>

         
        </div>
        </div>


     </div>
  )
}

export default chef