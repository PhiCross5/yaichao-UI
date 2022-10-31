import * as React from 'react'

import {Typography} from "@mui/material"
import {Box} from "@mui/material"
import {Button} from "@mui/material"
import "@egjs/react-flicking/dist/flicking.css"

import {
	Outlet,
	Link
} from 'react-router-dom'

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
	
export function HomePage(){
	return (
		<Box sx={{width:"100%"}}>
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

export function Academic(){
	return (
		<Typography variant="h2">Academic stuff.</Typography>
	)
}

export function App() {

	const [content, setContent] = React.useState(<HomePage />)

  return (
	<Box sx={{width:"100%",height:"100%"}}>
		<Box sx={{backgroundColor:"primary.main", color:"background.paper", width:"100%", display:"flex"}}>
			<Box component="img" src="lizard-white.png" sx={{height:"34px",p:1}}></Box>
			<Button variant="text" sx={{color:"background.paper"}} onClick={() => setContent(<HomePage />)}>home</Button>
			<Button variant="text" sx={{color:"background.paper",maxwidth:"28%"}} onClick={() => setContent(<Academic />)}>academic media</Button>
		</Box>
		{content}
	</Box>
	)
}

export default App;
