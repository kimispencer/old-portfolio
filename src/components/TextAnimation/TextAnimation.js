import React from 'react';
// import Stagger from 'react-css-stagger';
import './TextAnimation.css';

// class TextAnimation extends React.Component {
// 	constructor(props) {
// 		super();
// 		this.state = {
// 			html: []
// 		}
// 		this._textAnimation = this._textAnimation.bind(this);
// 	}
// 	componentDidMount() {
// 		this._textAnimation();
// 	}
// 	_textAnimation() {
// 		let copy = "Hi, I'm Kimi. I'm an engineer & designer.";
// 		let letters = copy.split('');
// 		let spans = [];

// 		letters.map((letter, index) => {
// 			spans.push(`<span>${letter}</span>`);
// 		});
// 		spans = '<Stagger transition="fadeIn" delay={200}>' + spans.join('') + '</Stagge>';
// console.log(spans)
// 		this.setState({html: spans});
// 	}
// 	render() {
// 		return (
// 			<div className={`${this.props.className} text-animation`}>
// 				<h4 className="monospace" dangerouslySetInnerHTML={{ __html: this.state.html }}></h4>
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
		letters[index] = `<span class="fade-in-letter">${letter}</span>`;
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