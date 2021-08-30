function updatePreview() {
	let previewElement = document.getElementById("preview");
	let editorValue = document.getElementById("editor").value;
	let markedUpHTML = marked(editorValue);
	previewElement.innerHTML = markedUpHTML;
}

function setDefault() {
	let defaultText = `\
  # Redux Lessons &amp; Tutorials

**What is Redux?**
Redux is a state managment library for javaScript apps. It is a predictable state container.

While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.

-   Redux stores the state of application - It is a container of all states of application.
-   In Redux state of an app is a state represented by all individual components of that app.

**What is doing Redux?**

-   Redux centralizes application's state
-   Makes data flow transparent & predictable
-   In Redux all state transitions are explicit and and it is possible to keep track of them
-   Easy debugging
-   Preserve page state
-   Undo/Redu

**When not to use Redux?**

-   Tight Budget
-   Small to medium-size apps
-   Simple UI/Data flow
-   Static Data

---

## Main Principles:

1. **_The state of your hole application is stored in an object tree within a single store._**
Maintain our application state in an single object which would be managed by the Redux store.

2. **_The only way to change the state is to emit the action, an object describing what happened._**
To update the state of your app, you need to let Redux know about that with an action.

3. **_To specify how the state tree is transformed by actions, you wright reducers._**

---
  `;

	let editorField = document.getElementById("editor");
	let previewElement = document.getElementById("preview");
	editorField.value = defaultText;
	previewElement.innerHTML = marked(defaultText);
}
