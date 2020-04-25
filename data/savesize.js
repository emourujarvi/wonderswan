/*
	List gathered from:
	http://daifukkat.su/docs/wsman/#cart_meta_publist
*/

const SAVESIZE = {
	0x00: 'None', 
	0x01: '64Kbit SRAM (8KB)', 
	0x02: '256Kbit SRAM (32KB)', 
	0x03: '1Mbit SRAM (128KB)', 
	0x04: '2Mbit SRAM (256KB)', 
	0x05: '4Mbit SRAM (512KB)', 
	0x10: '1Kbit EEPROM', 
	0x20: '16Kbit EEPROM', 
	0x50: '8Kbit EEPROM'
};

export default SAVESIZE;