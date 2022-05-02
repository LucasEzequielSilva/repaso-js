let data = []

async function getProducts() {
    await fetch("./productos.json")
        .then(response => response.json())
        .then(json => { data.push(...json); });
    mostrarProduct()
}
getProducts()
console.log(data);


function mostrarProduct() {
    let products = []
    if(data === undefined) {
        products.push(...data)
        console.log(products)
    }
    products.push(...data)
    let html
        products.filter(product=> product.id == 1).map(products =>{ 
            html+=`
            <div class="first-product container-product">
            <img src='${products.image}' alt="image-product" class="img-product"/>
            <div class="h-p-container">
            <h2 class='h-product'>${products.name}</h2>
            <p class="p-product">${products.description}</p>
            </div>
            </div>
            `
        })
        function hoverImg(event) {
            event.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        }
        document.querySelector('#product').innerHTML = html
        let imgProduct = document.querySelector('.img-product')
        imgProduct.addEventListener('mouseenter', ()=>{
            imgProduct.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1.03, 1.03, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
            imgProduct.style.transformStyle = 'preserve-3d';
            imgProduct.style.willChange = 'transform';
            imgProduct.style.transition = '2s';
        })
        imgProduct.addEventListener('mouseleave', ()=>{
            imgProduct.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
            imgProduct.style.transformStyle = 'preserve-3d';
        })
        console.log(imgProduct);
    }
   