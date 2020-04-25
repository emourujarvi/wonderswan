/*
	List gathered from:
	http://daifukkat.su/docs/wsman/#cart_meta_publist
*/

const FLAGS = {
	ORIENTATION: {
		0x0: 'horizontal',
		0x1: 'vertical'
	},

	ROM_BUS_WIDTH: {
		0x0: '16-bit',
		0x1: '8-bit'
	},

	ROM_ACCESS_SPEED: {
		0x0: '3 cycle',
		0x1: '1 cycle'
	}
}

export default FLAGS;