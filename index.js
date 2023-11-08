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

selectSeller.addEventListener('change', function () {
  const sellerSelected = this.value
  if (sellerSelected === 'all') {
    showProducts(products)
  } else {
    const filterProducts = products.filter(
      (product) => product.seller === sellerSelected
    )
    showProducts(filterProducts)
  }
})

const selectStyle = document.querySelector('#style')

selectStyle.addEventListener('change', function () {
  const styleSelected = this.value
  if (styleSelected === 'all') {
    showProducts(products)
  } else {
    const filterStyleProducts = products.filter(
      (product) => product.style === styleSelected
    )
    showProducts(filterStyleProducts)
  }
})

const filterButton = document.querySelector('#filterButton')

filterButton.addEventListener('click', function () {
  const value = parseFloat(document.querySelector('#price').value)

  if (isNaN(value)) {
    showProducts(products)
    return
  }

  const filterPriceProducts = products.filter(
    (product) => product.price < value
  )
  showProducts(filterPriceProducts)
})

const buttonCleanFilters = document.querySelector('#cleanFilter')
buttonCleanFilters.textContent = 'Limpiar Filtros'

buttonCleanFilters.addEventListener('click', function () {
  showProducts(products)
  selectStyle.selectedIndex = 0
  selectSeller.selectedIndex = 0
  document.querySelector('#price').value = ''
})

const menuToggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('open')
})
