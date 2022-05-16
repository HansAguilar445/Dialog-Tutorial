# Modals
Modals are the dialogue boxes that are used on websites for the purpose 
of interacting with the user. They appear above the rest of the content
of the page. There are several methods to create a modal, but using the 
``<dialog>`` element is the simplest one.

## The ``<dialog>`` element
The ``<dialog>`` element generates a white dialog box that appears at the forefront of the website, regardless of the ``z-index`` value in the CSS.
By default, it has no backdrop and is positioned at the top-left corner of
the window.

```
<dialog>
	<p>Test Message</p>
</dialog>
```

The uses of the ``<dialog>`` element include:
- Asking the user to fill out a login or sign-up form
- Notifying the user about something important
- Requesting information from the user

## Styling the ``<dialog>`` element
There are several parts to styling the ``<dialog>`` element.
- ``dialog``: The default.
- ``dialog[open]``: For when the modal is open on the page. 
Generally, if the CSS styling is not working with ``dialog`` by itself, adding 
the intended CSS to ``dialog[open]`` fixes the problem.
- ``dialog:not([open])``: For when the modal is closed. This should be set to 
``display: none;`` to hide the modal when it is no longer needed.
- ``dialog::backdrop``: The overlay behind the modal. This encompasses the 
entirety of the visible space on the screen behind the modal. 

Without CSS, the ``<dialog>`` element aligns itself with the top-left corner of 
the screen. You can fix this by adding ``margin: auto;`` to ``dialog`` inside 
the CSS. This will ensure that it is centered on the screen.

```
dialog {
	//Centers the dialog element
    margin: auto;
}

dialog::backdrop {
	//Creates a dark translucent overlay
    background-color: rgb(0 0 0 / .45);
}

dialog[open] {
    //Ensures that the open version of the dialog is visible
    display: block;
}

dialog:not([open]) {
    //Ensures that the closed version of the dialog is invisible
    display: none;
}
```

## Writing the code
The ``<dialog>`` element has a built-in API that it uses to set its values. The 
HTMLDialogElement API allows you to change the circumstances in which the modal is open.
- ``HTMLDialogElement.open``: This Boolean determines if the modal is open or 
not. The CSS from before applies depending on the value of ``open``.
- ``HTMLDialogElement.showModal()``: This function opens the modal and prevents
interaction with anything other than itself.
- ``HTMLDialogElement.close()``: This function closes the modal.
```
const dialogue = document.querySelector('dialog');

//Upon opening the page, the modal shows
window.onload = () => {
	dialogue.showModal();
}

//Upon pressing the escape key, closes the modal
document.addEventListener('keydown', function(event) {
	if (event.key === 'esc') {
		dialogue.close();
	}
});
```
## References
- [HTMLDialogElement API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)
- [The ``<dialog>`` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)