import RomHeader from './rom-header.js';

document
	.querySelector('#rom input[type="file"]')
	.addEventListener('change', (event) => {
		let file = event.target.files[0];
		readRomInfo(file);
	});

function readRomInfo(file) {
	let blob = file.slice(-10);
	new Response(blob).arrayBuffer()
		.then(byteArray => {
			let header = new RomHeader(byteArray);
			console.debug(header);

			for (let [key, value] of Object.entries(header)) {
				try {
					showRomInfo(key, value);
				} catch (e) {
					console.error('Error while displaying rom info', key, value);
				}
			}

		}
	);
}

function showRomInfo(clazz, data) {
	let selector = '#rom-info tr.' + clazz;;
	let hexSelector = selector + ' td:nth-child(2)'
	let textSelector = selector + ' td:nth-child(3)'

	document.querySelector(hexSelector).innerText = '0x' + data.hex + 'h';	
	document.querySelector(textSelector).innerText = data.text;
}