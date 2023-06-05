import React from 'react';
import '../Contact/contactform.css';
import {themeProvider,createTheme, Button, Typography, TextField} from '@mui/material';
import {Box} from "@mui/material"
import bgimage from '../../assets/cake.jpg';

const Contactform = () => {
  return (
        <div className="section">
            <div className='container grid-container contact-content'>
              <div>
                    <h1 className='heading-secondary'>get in <span>touch</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus necessitatibus atque dolores laudantium! Eveniet, corrupti iure! Iusto dolores assumenda cumque, vitae maxime dolor sapiente eos sed quo sint tempore?</p>

                    <img src={bgimage} alt="get in touch" />
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus esse laudantium explicabo fugiat molestiae, laboriosam in, illo consequuntur quibusdam tenetur velit iusto suscipit expedita eius. Quisquam deserunt a accusantium.</p>

              </div>
                <div>
                 <form>
                   <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems="center" justifyContent={"center"} margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={"5px 5px 10px #ccc"}>
                    <Typography  variant='h2' alignItems="center" padding={3}>Login</Typography>
                     <TextField type={"text"} variant='outlined' placeholder='Name:'></TextField>
                     <TextField type={"text"} variant='outlined' placeholder='Email:'></TextField>
                     <TextField type={"password"} variant='outlined' placeholder='Password:'></TextField>
                     <TextField type={"text"} variant='outlined' placeholder='Subject:'></TextField>
                     <Button sx={{marginTop:3, borderRadius:4}} variant="contained" color='warning'>Submit</Button>
                   </Box>
                   </form>
               </div>
    </div>
              
        </div>
       
      )
}

export default Contactform