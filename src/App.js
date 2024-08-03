import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

const defaultMarkdown = `
# How to Become a Frontend Developer
## Steps to Start Your Journey

[Read More on FreeCodeCamp](https://www.freecodecamp.org/learn)

_\`HTML\`, \`CSS\`, and \`JavaScript\`_

_*Try This*_
\`\`\`
const learnFrontend = () => {
console.log("Start with HTML, CSS, and JavaScript!");
};
learnFrontend();
\`\`\`

### How can you learn

- Learn HTML: Understand the structure of web pages
- Master CSS: Style your web pages beautifully
- JavaScript: Add interactivity to your websites

### Motivational line for you

> "The best way to get started is to quit talking and begin doing." - Walt Disney

![Photo of writer](https://cdn.hashnode.com/res/hashnode/image/upload/v1630850841149/3FAlsNy5F.jpeg?w=400&h=210&fit=crop&crop=entropy&auto=compress,format&format=webp)

**Embrace the Future of Web Development**

[Find me on LinkedIn](https://www.linkedin.com/in/hpsanjel/) 
`;

const App = () => {
	const [markdown, setMarkdown] = useState(defaultMarkdown);

	const handleChange = (event) => {
		setMarkdown(event.target.value);
	};

	// const handleCopy = () => {
	// 	navigator.clipboard.writeText(marked(markdown)).then(() => {
	// 		alert("Content copied to clipboard!");
	// 	});
	// };

	return (
		<>
			<h2 className="headline">Just play with your own imagination in this markdown editor</h2>
			<div className="App">
				<div id="editor-container">
					<h2 className="headlines">Markdown</h2>
					<textarea id="editor" value={markdown} onChange={handleChange} />
				</div>
				<div id="preview-container">
					<h2 className="headlines">Preview</h2>

					<div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
				</div>
				{/* <div id="header">
				<button className="copy-btn" onClick={handleCopy}>
					Copy
				</button>
			</div> */}
			</div>
		</>
	);
};

export default App;
