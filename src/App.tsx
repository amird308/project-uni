import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { IconButton, Toolbar, AppBar, Button, Typography, Card, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const [colorTheme, setcolorTheme] = useState("red");
  const [Theme, setTheme] = useState("defalut");
  function onClick(){
    setcolorTheme(colorTheme === "green" ? "red" :"green");
    setTheme(Theme === "defalut" ? "big" :"defalut");
  }
  useEffect(() => {
    
  });
  return (
    <div>
      <AppBar position="fixed" >
        <Toolbar style={{color:colorTheme , background:colorTheme}}>
          <IconButton edge="start" style={{color:colorTheme ,  background:colorTheme}} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button style={{color:"black" ,  background:"black"}}  color="inherit">Login</Button>
        </Toolbar>

      </AppBar>
      <Toolbar />
      <div className={Theme} onClick={onClick} />
      <Container>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      <Card style={{marginTop:"15px" , padding:"5px"}}><span>hello</span> <img src="https://images.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" style={{float:"right" ,  width:"100px" , height:"70px"}}  />  </Card>
      </Container>
    </div>
  );
}

export default App;
