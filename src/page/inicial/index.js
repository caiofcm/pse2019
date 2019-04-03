import React, { lazy, Suspense } from 'react'
import { Grid, Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { Loading } from 'components'
import { useTitle } from 'utils'

// const Components = [lazy(() => import('./components/Bar')), lazy(() => import('./components/Map'))]

const useStyles = makeStyles(theme => ({
	card: {
		position: 'relative',
		height: 512,
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: (theme.palette.type === 'dark') ? '#333' : '#fff',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}
}))

function Inicial() {
	const classes = useStyles()
	useTitle('Página Inicial | PSE-2019');

	return (
		<div className={classes.container}>
			<Typography variant="h3">
				PSE 2019
			</Typography>		
			{/* <h1>
				PSE 2019
			</h1> */}
			<h4>
				Consulta e Avaliação de Trabalhos
			</h4>
			<Typography component="p">
					Seja bem-vindo!
			</Typography>
			<Typography component="p">
				Acesse o Site principal do PSE para maiores informações: http://www.ufrgs.br/psebr/
			</Typography>
		</div>
	)
}

export default Inicial