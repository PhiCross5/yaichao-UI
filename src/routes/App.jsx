import * as React from 'react'

import {Typography} from "@mui/material"
import {Box} from "@mui/material"
import {Button} from "@mui/material"
import "@egjs/react-flicking/dist/flicking.css"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Carrousel} from "../components"
import {DeskBar} from "../components"

const featured=[
	<Box component="img" src="lizard.png" maxwidth="100%" height="auto"></Box>,
	//<img src="archlinux.svg" ></img>,
	<Typography align="center">{"unlimited meme works."}</Typography>,
	<Typography align="center">{"honestly i'm running out of ideas."}</Typography>
]
	

function App() {


  return (
	<Box sx={{width:"100%",height:"100%"}}>
		<DeskBar>
			<Box component="img" src="lizard-white.png" sx={{height:"46px"}}/>
			<Button variant="text" color="inherit" sx={{maxwidth:"28%"}}>home</Button>
			<Button variant="text" color="inherit" sx={{maxwidth:"28%"}}>academic media</Button>
		</DeskBar>
		<Typography variant="h3" component="h1"> Flavoured with Computer Science.</Typography>
		<Typography variant="body" >based cringe normie chad soy wojak shrigma the attentiveness of a non-attractive human-being depends on few factors when taking into account popular thresholds such as 5-minute staredowns, 10% content memorized or direct eyecontact... you still reading this?</Typography>
		<Box sx={{bgcolor:"primary.main"}}>threshold</Box>
		<Box sx={{display:"flex",justifyContent:"center"}}><Typography  variant="body"sx={{}} align={"center"}>centered text?</Typography></Box>
		<Carrousel delay={2700}>
			{featured.map((e,i) => <div className="flicking-panel" key={i}><Box sx={{ display:"flex", justifyContent:"center"}}>{e}</Box></div>)}
		</Carrousel>
	</Box>
	)
}

export default App;
