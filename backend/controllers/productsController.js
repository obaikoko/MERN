const getProducts = (req, res) => {
    res.status(200)
    res.send([
        {
            id: 1,
            name: 'iPhone 12pro',
            price: '$ ' + 893,
            desc: 128 + 'GB ROM, 4GB RAM ',
            image: 'https://res.cloudinary.com/dzajrh9z7/image/upload/v1662770898/Online%20Shop/iphone12pro_xudu5h.jpg' 
        },
        {
            id: 2,
            name: 'Samsung Galaxy S',
            price: '$ ' + 981,
            desc: 64 + 'GB ROM, 6GB RAM ',
            image: 'https://res.cloudinary.com/dzajrh9z7/image/upload/c_scale,h_500,w_400/v1662770904/Online%20Shop/galaxyS_ws35ms.png'
        },
        {
            id: 3,
            name: 'iPhone 12pro',
            price: '$ ' + 993,
            desc: 128 + 'GB ROM, 8GB RAM ',
            image: 'https://res.cloudinary.com/dzajrh9z7/image/upload/v1662770898/Online%20Shop/iphone12pro_xudu5h.jpg'
        },
        {
            id: 4,
            name: 'Samsung A12',
            price: '$ ' + 700,
            desc: 128 + 'GB ROM, 6GB RAM ',
            image: 'https://res.cloudinary.com/dzajrh9z7/image/upload/v1663272371/Online%20Shop/Samsung_A12_phklqu.jpg'
        },
        {
            id: 5,
            name: 'Redmi 10',
            price: '$ ' + 893,
            desc: 128 + 'GB ROM, 4GB RAM ',
            image: 'https://res.cloudinary.com/dzajrh9z7/image/upload/c_scale,h_500,w_400/v1663283381/Online%20Shop/Redmi_10_qjtmfm.jpg'
        },
        {
            id: 6,
            name: 'Samsung Galaxy S',
            price: '$ ' + 981,
            desc: 64 + 'GB ROM, 6GB RAM ',
            image: 'https://res.cloudinary.com/dzajrh9z7/image/upload/c_scale,h_500,w_400/v1662770904/Online%20Shop/galaxyS_ws35ms.png'
        },
   
    ])
}

module.exports = getProducts