import {useRef} from 'react'
import * as React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import {Toolbar} from '@mui/material'
import {Pagination} from '@mui/material'
import {Card} from '@mui/material'
import {CardContent} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import Flicking from '@egjs/react-flicking'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Carrousel(props){
	
	//externally settable page number
	const [postsPage, setPostsPage] = React.useState(0)

	//reference to the internal Flicker object
	const theFlicker = useRef(null)

	//state variable to change the Flicker's "PanelsPerView" field.
	const [panelCount, setPanelCount] = React.useState(1)

	//explicitly call the currently used MUI theme for breakpoints.
	const theme=useTheme()
	const bigCarrousel = useMediaQuery(theme.breakpoints.up('sm'))


	//any actions triggered on page change start here.
	const changePage = ((newPage) => {
		if(theFlicker.current.index != newPage)
			theFlicker.current.moveTo(newPage)
		setPostsPage(newPage)
	})

	//optional timer for autoslide (property: delay (ms))
	React.useEffect( () => {
			if(props.delay){
				const pageTimer = setInterval(() => {
					const next = postsPage+1
					if (next >= props.children.length){
						changePage(0)
					}
					else{
						changePage(postsPage +1)
					}
				}, props.delay);
				return ( () => {clearInterval(pageTimer)} )} 
			}
	)

	//Set up side-effects so that bigger screens get more panels per view.
	//Relies on MUI's theme's breakpoints system.
	React.useEffect(() => {
			if(bigCarrousel){
				setPanelCount(2)
			}
			else{
				setPanelCount(1)
			}
		//(WORKAROUND) Setting the PanelsPerView prop directly to the state didn't work,
		//so i had to change the property on the DOM element itself...
			theFlicker.current.panelsPerView=panelCount
		})

	React.useEffect(() => {
		console.log("panelCount changed to " + panelCount + " .")
	}, [panelCount])

	
		return (
		<Card variant="outlined">	
			<CardContent sx={{display:"flex", justifyContent:"center"}}><Pagination count={props.children.length} page={postsPage+1} onChange={(e,val) => {changePage(val-1);} }/></CardContent>
			<CardContent sx={{display:"flex", justifyContent:"center"}}> <Box sx={{width:"100%"}}><Flicking align="prev" 
				deceleration={0.067}
				ref={theFlicker}
				onChanged={(ev) => changePage(ev.index)}
				panelsPerView={panelCount}
				renderOnSameKey={true}
				>
				{props.children}
			</Flicking></Box></CardContent>
					</Card>

	)	
}
export default Carrousel;
