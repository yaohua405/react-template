/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, useTheme, Theme } from '@emotion/react'
import StyledComponent from '../styles/StyledComponent';
import { palette, useS } from '../themes'

export type ButtonProps =
	StyledComponent & {
		width?: number
	}


// ? ############## BUTTON #################
class Button extends React.Component<ButtonProps>{
	render() {
		return (
			<button
				css={(t: Theme) => useS(t, this, (p) => ({
					background: p.cd,
					color: p.cd_t,
					transition: `all ${t.animations_length}s`,
					borderRadius: t.space[1],
					padding: t.space[2],
					'&:hover': {
						background: p.cl,
						color: p.cl_t,
					}
				}))}
				{...this.props}
			>
				{this.props.children}
			</button>
		)
	}
};

// ? ############## TOGGLE BUTTON #################

class ButtonToggle extends React.Component<ButtonProps>{
	render() {
		return (
			<div
				className="switch"
				css={(t: Theme) => useS(t, this, (p) => ({
					// background: p.cd,
					// color: p.cd_t,
					
					height: 30,
					width: 60,
					
					'&:hover': {
						// background: p.cl,
						// color: p.cl_t,
					},
					'&.slider:before':{
						transition: `${t.animations_length}s`,
					},
					'&input:checked + .slider)':{
						backgroundColor: p.c,
					},
					'&input:focus + .slider': {
						boxShadow: `0 0 1px ${p.c}`,
					},
				}))}
			>
				<input type="checkbox" />
				<span className="slider"></span>
				{this.props.children}
			</div>
		)
	}
}
// const StyledButtonToggle = styled(ButtonToggle)`
// 	${buttonStyle};
// `

export { Button, ButtonToggle }
