var data = []

async function getProducts() {
    await fetch("./productos.json")
        .then(response => response.json())
        .then(json => { data.push(...json); });
    mostrarProduct()
}
getProducts()
console.log(data);


function mostrarProduct() {
    var products = []
    if (data === undefined) {
        products.push(...data)
        console.log(products)
    } else {
        products.push(...data)
        console.log(products)
    }
    let html = ''
    products.filter(product => product.id == 1).map(products => {
        html += `
            <div class="first-product container-product">
            <img src='${products.image}' alt="image-product" class="img-product"/>
            <div class="h-p-container">
            <h2 class='h-product'>${products.name}</h2>
            <p class="p-product">${products.description}</p>
            </div>
            </div>
            `
    })
    products.filter(product => product.id === 2).map(products => {
        html += `
            <div class="second-product container-product">
            <img src='${products.image}' alt="image-product" class="img-product"/>
            <div class="h-p-container">
            <h2 class='h-product'>${products.name}</h2>
            <p class="p-product">${products.description}</p>
            </div>
            </div>
            `
    })
    products.filter(product => product.id === 3).map(products => {
        html += `
            <div class="third-product container-product">
            <img src='${products.image}' alt="image-product" class="img-product"/>
            <div class="h-p-container">
            <h2 class='h-product'>${products.name}</h2>
            <p class="p-product">${products.description}</p>
            </div>
            </div>
            `
    })
    products.filter(product => product.id === 4).map(products => {
        html += `
            <div class="fourth-product container-product">
            <img src='${products.image}' alt="image-product" class="img-product"/>
            <div class="h-p-container">
            <h2 class='h-product'>${products.name}</h2>
            <p class="p-product">${products.description}</p>
            </div>
            </div>
            `
    })
    document.querySelector('#product').innerHTML = html

}
