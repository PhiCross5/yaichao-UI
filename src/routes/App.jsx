import * as React from 'react'

//MUI components directly used in this page.
import {Typography} from "@mui/material"
import {Box} from "@mui/material"
import {Button} from "@mui/material"
import "@egjs/react-flicking/dist/flicking.css"
import {Card, CardContent} from "@mui/material"

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
	<Box component="img" src="lizard-white.png" maxwidth="100%" height="auto"></Box>,
	//<img src="archlinux.svg" ></img>,
	<Box sx={{display:"flex", alignItems:"center",justifyContent:"center",height:"100%"}}><Box component="img" src="archlinux.svg" width="100%" sx={{height:"100%"}}></Box></Box>,
	<Typography align="center">{"honestly i'm running out of ideas."}</Typography>
]

export function HomePage(){
	return (
		<Box sx={{width:"100%", backgroundColor:"background.paper",px:1}}>
			<Box>
				<Typography variant="h3" component="h1"> Flavoured with Computer Science.</Typography>
				<Typography variant="body" >Is the spacing of elements off for you? tweak it! Is copying files manually too tedious? script it! Everything is at your fingertips if you're willing to code it.</Typography>
			</Box>
			<Box sx={{my:1,px:2}}>
				<Carrousel delay={2700}>
					{featured.map((e,i) => <div className="flicking-panel" key={i}><Box sx={{ display:"flex", justifyContent:"center"}}o>{e}</Box></div>)}
				</Carrousel>
			</Box>
			<Box>
			<Typography variant="body2">While there is not much content here, feel free to browse whatever is already available.</Typography>
			</Box>
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
			<Box sx={{backgroundColor:"primary.main", color:"background.paper", width:"100%", display:"flex",px:1}}>
				<Box component="img"
					src="lizard.png"
					sx={{height:"41px",py:0.31}}></Box>
				<Button variant="text"
					sx={{color:"background.paper"}}
					onClick={() => setContent(<HomePage />)}
				>	home
				</Button>
				<Link ><Button variant="text"
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
