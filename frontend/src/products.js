const products = [
	{
		_id: '1',
		name: 'samsung buds',
		image: '/images/product1.jpg',
		description: 'ear buds',
		brand: 'samsung',
		category: 'Electronic',
		price: 20.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: '2',
		name: 'nike shoes',
		image: '/images/product2.jpg',
		description: 'shoes',
		brand: 'nike',
		category: 'footwear',
		price: 13.65,
		countInStock: 10,
		rating: 4,
		numReviews: 10,
	},
	{
		_id: '3',
		name: 'sonata watch',
		image: '/images/product3.jpg',
		description: 'watch',
		brand: 'sonata',
		category: 'Electronic',
		price: 201.99,
		countInStock: 1,
		rating: 4.3,
		numReviews: 14,
	},
	{
		_id: '4',
		name: 'T.V',
		image: '/images/product4.jpg',
		description: 'T.V',
		brand: 'samsung',
		category: 'Electronic',
		price: 210.99,
		countInStock: 10,
		rating: 4.5,
		numReviews: 12,
	},
	{
		_id: '5',
		name: 'ear phone',
		image: '/images/product5.jpg',
		description: 'ear phone',
		brand: 'samsung',
		category: 'Electronic',
		price: 2.99,
		countInStock: 14,
		rating: 2.5,
		numReviews: 13,
	},
	{
		_id: '6',
		name: 'phone',
		image: '/images/product6.jpg',
		description: 'mobile',
		brand: 'oneplus',
		category: 'Electronic',
		price: 290.99,
		countInStock: 5,
		rating: 4.8,
		numReviews: 19,
	},
]


export default products;
















//  fetch("https://adr-magento-v1.p.rapidapi.com/magento", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "7467ac0551msh5f66c78f9bda81ap100584jsn84e2f54c00bb",
// 		"x-rapidapi-host": "adr-magento-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });