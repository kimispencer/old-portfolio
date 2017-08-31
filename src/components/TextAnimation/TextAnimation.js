import React from 'react';
import './TextAnimation.css';

// class TextAnimation extends React.Component {
// 	constructor(props) {
// 		super();
// 		this.state = {
// 			html: []
// 		}
// 		this._textAnimation = this._textAnimation.bind(this);
// 		this._setHtml = this._setHtml.bind(this);
// 	}
// 	componentDidMount() {
// 		this._textAnimation();
// 	}
// 	_textAnimation() {
// console.log('hi')
// 		let copy = "Hi, I'm Kimi. I'm an engineer & designer.";
// 		let letters = copy.split('');
// 		let spans = [];

// 		letters.map((letter, index) => {
// 			spans.push(`<span>${letter}</span>`);
// // console.log(spans)
// 			// setTimeout(() => {
// 			// this._setHtml(spans);
// 			// 	console.log('set timeout')
// 			// }, 2000)
// 		});
// 		this._setHtml(spans);
// 	}
// 	_setHtml(value) {
// // console.log(value)
// 		this.setState({
// 			html: value
// 			}, () => { 
// 				this.state.html.map((span, i) => {
// 					console.log(span)
// 					window.setTimeout(this._setHtml.push(span), 1000)
// 				});
// 		});
// 	}
// 	render() {
// 		return (
// 			<div className={`${this.props.className} text-animation`}>
// 				<h4 className="monospace" dangerouslySetInnerHTML={{ __html: '' }}></h4>
// 				{/*  */}
// 			</div>
// 		);
// 	}
// }
// export default TextAnimation;

const TextAnimation = (props) => {
	let copy = "Hi, I'm Kimi. I'm an engineer & designer.";
	let letters = copy.split('');

	letters.map((letter, index) => {
		letters[index] = `<span>${letter}</span>`;
	});

	let html = letters.join('');
// console.log(html)
	return (
		<div className={`${props.className} text-animation`}>
			<h4 className="monospace" dangerouslySetInnerHTML={{ __html: html }}></h4>
		</div>
	);
}

export default TextAnimation;