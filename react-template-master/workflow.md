
# Logs


## 11/13 
- Further research for workflow development in React
- Now I'm thinking the workflow is:
  - Following [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) ![Design Template](https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png) Clearly sets a basis for modular components, npm packages are part of that. Just the `theme-ui` library has `@theme-ui/core`, `@theme-ui/css`, `@theme-ui/mdx`, `@theme-ui/preset-*`, etc.. separating the work like that, allows the components to do 1 job, and do it well.
  - <b>Atoms</b> Pretty useless by themselves -> Buttons, TextFields, Text, Heading
  - <b>Molecules</b> Atoms bonded together and are the smallest fundamental units of a compound -> Search Bar with button and Description
  - <b>Organisms</b> Molecules joined together to form a relatively complex, distinct section of an interface -> Toolbar, Sidebar, Heading, Section
  - <b>Templates</b> Design for a page with organisms -> Home, Profile, Order, Store
- I'm using Emotion package `@emotion/react` to get the `css` 'overload' in jsx, which allows me to include css <i>in code</i>.
- So I won't be using scss? I don't want to, because if all variables can be in typescript, it'll be a wonder to work with.
-----
- I'll work with React and emotion for now I want to allow the knowledge to settle and play around before adding more stuff to the mix.
- I'll be using `rebass` which is a small set of ui components based on Styled System, style props for rapid UI development

## 11/14
# React Knowledge
## <center>Components</center>
Are supposed to be small parts of your web app with a specific functionality.
### JSX Represents Objects
Babel compiles JSX down to React.createElement() calls
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// Turns into this
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
### These are all equivalent
Which means you can put jsx anywhere and they'll be turned to React Components, in turn then rendered by React
```
const Element = <h1>Hello, world</h1>;

const Element = () => {return <h1>Hello, world</h1>}

class Element extends React.Component{
	render() {
		return <h1>Hello, world</h1>
	}
}
```
- <b>Props</b> -> Components have to be pure (can't modify prop variable)
---
## <center>State</center>

Holds state of a current component, to hold state componet has to be ES6 class. 
### If we want to have a custom constructor.
In ES6 Class React Component
```
constructor(props) {
	super(props);
	this.state = { ... };  
}
```
---
## <center>Lifecycle</center>
### Lifecycle hooks
`componentDidMount` -> Initialized <br>
`componentWillUnmount` -> Deleted

```
componentDidMount() {
	this.timerID = setInterval(
		() => this.tick(),
		1000
	);
}

componentWillUnmount() {
	clearInterval(this.timerID);
}
```
... many more

---
## <center>Handling Events</center>
```
// HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React
<button onClick={activateLasers}>  
	Activate Lasers
</button>
```
- You cannot return `false` to prevent default behavior in React. You must call `preventDefault` explicitly
- Events created by React are synthetic. React defines these synthetic events according to the `W3C spec`, so you don’t need to worry about cross-browser compatibility.
- In React, you generally don’t need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
- You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind `this.handleClick` and pass it to `onClick`, `this` will be `undefined` when the function is actually called.
```
constructor(props) {
	super(props);
	this.state = {isToggleOn: true};

	// This binding is necessary to make `this` work in the callback
	this.handleClick = this.handleClick.bind(this);  
}

handleClick() {
	this.setState(state => ({
		isToggleOn: !state.isToggleOn
	}));
}
render() {
	return (
		<button onClick={this.handleClick}>
			{this.state.isToggleOn ? 'ON' : 'OFF'}
		</button>
	);
}
```

If calling bind annoys you, there are two ways you can get around this. 

### Public class fields syntax, define function like this inside the class:
```
// This syntax ensures `this` is bound within handleClick.
// Warning: this is *experimental* syntax.  
handleClick = () => {
	console.log('this is:', this);
}
```
This syntax is enabled by default in `Create React App`.
### Arrow function in callback:
```
render() {
	// This syntax ensures `this` is bound within handleClick    
	return (
		<button onClick={() => this.handleClick()}>
			Click me
		</button>
	);
}
```

I'll keep reading on my own cause I think I'm taking too much time making this summary

So, bye for now my friends :)
