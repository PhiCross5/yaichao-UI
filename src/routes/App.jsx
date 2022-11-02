import * as React from 'react'

//MUI components directly used in this page.
import {Typography} from "@mui/material"
import {Box} from "@mui/material"
import {Button} from "@mui/material"
import "@egjs/react-flicking/dist/flicking.css"

//using react router for links and possibly conditional rendering.
import {
	Outlet,
	Link
} from 'react-router-dom'

//google's Roboto family of fonts for general UI use.
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//preconfigured wrappers around MUI and other libraries
import {Carrousel} from '../components'
import {DeskBar} from '../components'

//custom theme: 'iaçú'
import {createTheme, ThemeProvider, useTheme} from '@mui/material/styles'
import {deepmerge} from '@mui/utils'
import CssBaseline from '@mui/material/CssBaseline'
import {iaçú} from '../theme.js'

const baseTheme = createTheme()
// const partialTheme = createTheme(iaçú)
const customTheme = createTheme(deepmerge(baseTheme,iaçú))
// const customTheme = createTheme(deepmerge(iaçú,baseTheme))
// const customTheme = createTheme(iaçú,baseTheme)
// const customTheme = createTheme(iaçú)
//console.log("base theme:" + JSON.stringify(baseTheme))

// const customTheme = createTheme({
// 	palette:{
// 		mode: 'dark'
// 	}
// })

const featured=[
	<Box component="img" src="lizard.png" maxwidth="100%" height="auto"></Box>,
	//<img src="archlinux.svg" ></img>,
	<Typography align="center">{"unlimited meme works."}</Typography>,
	<Typography align="center">{"honestly i'm running out of ideas."}</Typography>
]

export function HomePage(){
	return (
		<Box sx={{width:"100%", backgroundColor:"background.paper"}}>
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
	<ThemeProvider theme={customTheme} >
		<CssBaseline />
		<Box sx={{width:"100%",height:"100%"}}>
			<Box sx={{backgroundColor:"primary.main", color:"background.paper", width:"100%", display:"flex"}}>
				<Box component="img"
					src="lizard-white.png"
					sx={{height:"34px",p:1}}></Box>
				<Button variant="text"
					sx={{color:"background.paper"}}
					onClick={() => setContent(<HomePage />)}
				>	home
				</Button>
				<Link><Button variant="text"
					sx={{color:"background.paper",maxwidth:"28%"}}
					onClick={() => setContent(<Academic />)}
				>	academic media
				</Button></Link>
			</Box>
			{content}
		</Box>
	</ThemeProvider>
	)
}

export default App;
