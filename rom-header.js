import PUBLISHERS from './data/publishers.js'
import SYSTEMS from './data/systems.js'
import ROMSIZE from './data/romsize.js'
import SAVESIZE from './data/savesize.js'
import FLAGS from './data/flags.js'

function RomHeader(bytes) {
	console.debug('RomHeader constructor', bytes);
	let headerBytes = bytes.slice(-10);
	let view = new Uint8Array(headerBytes);

	return {
		publisher: RomHeader_readPublisher(view),
		system: RomHeader_readSystem(view),
		game: RomHeader_readGame(view),
		revision: RomHeader_readRevision(view),
		romSize: RomHeader_readRomSize(view),
		saveSize: RomHeader_readSaveSize(view),
		flags: RomHeader_readFlags(view),
		rtc: RomHeader_readRtc(view),
		checksum: RomHeader_readChecksum(view)
	};
}

function RomHeader_readPublisher(view) {
	let value = view[0];
	return { value: value, hex: toHex(value), text: PUBLISHERS[value] };
}

function RomHeader_readSystem(view) {
	let value = view[1];
	return { value: value, hex: toHex(value), text: SYSTEMS[value] };
}

function RomHeader_readGame(view) {
	let value = view[2];
	return { value: value, hex: toHex(value), text: '' };
}

function RomHeader_readRevision(view) {
	let value = view[3];
	return { value: value, hex: toHex(value), text: '' };
}

function RomHeader_readRomSize(view) {
	let value = view[4];
	return { value: value, hex: toHex(value), text: ROMSIZE[value] };
}

function RomHeader_readSaveSize(view) {
	let value = view[5];
	return { value: value, hex: toHex(value), text: SAVESIZE[value] };
}

function RomHeader_readFlags(view) {
	let value = view[6];

	let orientation = (value >>> 2) & 0x1;
	let bus = (value >>> 1) & 0x1;
	let access = (value >>> 0) & 0x1;

	let flags = {
		value: value,
		hex: toHex(value),
		orientation: { value: orientation, text: FLAGS.ORIENTATION[orientation] },
		bus: { value: bus, text: FLAGS.ROM_BUS_WIDTH[bus] },
		access: { value: access, text: FLAGS.ROM_ACCESS_SPEED[access] }
	}

	flags.text = 'Orientation ' + flags.orientation.text + ', Bus width ' + flags.bus.text + ', Access speed ' + flags.access.text;

	return flags;
}

function RomHeader_readRtc(view) {
	let value = view[7];
	return { value: value, hex: toHex(value), text: '' };
}

function RomHeader_readChecksum(view) {
	let value = view.slice(8, 10);
	let hex = toHex(value[0]) + "" + toHex(value[1]);
	return { value: parseInt('0x' + hex), hex: hex, text: '' };
}

function toHex(value) {
	return value.toString(16).padStart(2, '0');
}

export default RomHeader;