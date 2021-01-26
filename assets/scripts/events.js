const buttons = document.querySelectorAll('button');

const buttonClickHanlder = (event) => {
	event.target.disabled = true;
	console.log(event);
};
const anotherButtonClickHanlder = () => {
	console.log('This is was clicked');
};
const boundFn = buttonClickHanlder.bind(this);
// button.addEventListener('click', boundFn);
// setTimeout(() => {
// 	button.removeEventListener('click', boundFn);
// }, 2000);
buttons.forEach((btn) => {
	btn.addEventListener('mouseenter', buttonClickHanlder);
});

window.addEventListener('scroll', (event) => {
	console.log(event);
});
