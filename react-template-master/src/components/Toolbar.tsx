/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';

import {css} from '@emotion/react'

const style = css`
	color: white;
	background: black;
	height: 56px;
	font-size: 34px;
`

class Toolbar extends React.Component {
	render() {
		return <div css={style}>
			<Link to="/nothing">Nothing</Link>
			Toolbar
		</div>
	}
}

export default Toolbar;