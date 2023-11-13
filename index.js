const productsList = document.querySelector('.products')

const getQuoteTemplate = (name, price, style, seller, image) => {
  return `<div class="product">
  <img src="${image}" alt="${name}">
  <h2>${name}</h2>
  <p>Precio: <span style="color: #fa6a41;">${price}€</span></p>
  <p>Estilo: ${style}</p>
  <p>Vendedor: ${seller}</p>
</div>`
}
function showProducts(products) {
  productsList.innerHTML = ''

  products.forEach((product) => {
    const productHTML = getQuoteTemplate(
      product.name,
      product.price,
      product.style,
      product.seller,
      product.image
    )
    productsList.innerHTML += productHTML
  })
}
const products = [
  {
    name: 'Frenchy jeans',
    price: 15.25,
    style: 'casual',
    seller: 'nihao',
    image: './assets/product1.png'
  },
  {
    name: 'Pantalones deportivos unicolor',
    price: 6.25,
    style: 'sport',
    seller: 'yaaku',
    image: './assets/product2.png'
  },
  {
    name: 'Frenchy sudadera con encaje',
    price: 11,
    style: 'elegant',
    seller: 'sugarlips',
    image: './assets/product3.png'
  },
  {
    name: 'ICON vaqueros',
    price: 25,
    style: 'casual',
    seller: 'nihao',
    image: './assets/product4.png'
  },
  {
    name: 'Jersey unicolor de manga raglán',
    price: 15,
    style: 'casual',
    seller: 'magnolia',
    image: './assets/product5.png'
  },
  {
    name: 'Frenchy Jeans de pierna amplia',
    price: 23,
    style: 'casual',
    seller: 'sugarlips',
    image: './assets/product6.png'
  },
  {
    name: 'Vestido tank con parche',
    price: 22,
    style: 'elegant',
    seller: 'dazy',
    image: './assets/product7.png'
  },
  {
    name: 'Blusa con estampado de cuello',
    price: 10.2,
    style: 'elegant',
    seller: 'yaaku',
    image: './assets/product9.png'
  },
  {
    name: 'Yoga basic leggins deportivos',
    price: 9,
    style: 'sport',
    seller: 'dazy',
    image: './assets/product10.png'
  },
  {
    name: 'Blusa unicolor de cuello de muesca',
    price: 11,
    style: 'elegant',
    seller: 'magnolia',
    image: './assets/product11.png'
  },
  {
    name: 'Jersey cruzado de hombros caídos',
    price: 17,
    style: 'casual',
    seller: 'sugarlips',
    image: './assets/product12.png'
  },
  {
    name: 'Running camiseta deportiva',
    price: 7,
    style: 'sport',
    seller: 'nihao',
    image: './assets/product13.png'
  }
]

showProducts(products)

const selectSeller = document.querySelector('#sellers')
const selectStyle = document.querySelector('#style')
const priceInput = document.querySelector('#price')
const filterButton = document.querySelector('#filterButton')
const buttonCleanFilters = document.querySelector('#cleanFilter')

filterButton.addEventListener('click', applyFilters)
buttonCleanFilters.addEventListener('click', clearFilters)

function applyFilters() {
  const sellerSelected = selectSeller.value
  const styleSelected = selectStyle.value
  const priceSelected = parseFloat(priceInput.value)

  let filteredProducts = products

  if (sellerSelected !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.seller === sellerSelected
    )
  }

  if (styleSelected !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.style === styleSelected
    )
  }

  if (!isNaN(priceSelected)) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price < priceSelected
    )
  }

  showProducts(filteredProducts)
}

function clearFilters() {
  showProducts(products)
  selectSeller.selectedIndex = 0
  selectStyle.selectedIndex = 0
  priceInput.value = ''
}

const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open')
})
