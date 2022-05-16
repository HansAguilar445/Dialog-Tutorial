'use strict';

//Manitoba Institute of Trades and Technology
//Tools and Automation
//Teacher: Andre Specht

//Topic: The Utilization of the 'dialog' Interface/API
const dialogue = document.querySelector('dialog');

window.onload = () => {
	dialogue.showModal();
}

document.addEventListener('keydown', function(event) {
	if (event.key === 'esc') {
		dialogue.close();
	}
});

// document.addEventListener()
