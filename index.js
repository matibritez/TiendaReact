const products=[
    {id:1,nombre: "Motorola e20", price: 35000,img:"https://www.cetrogar.com.ar/media/catalog/product/2/0/2021_aruba_basic_pack_graphite_gray_frontback.png?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",stock:2},
    {id:2,nombre: "Samsung a22",price: 41000,img: "https://www.cetrogar.com.ar/media/catalog/product/t/e/te2755-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",stock:6},
    {id:3,nombre:"Samsung a12",price: 30000,img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2735_1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds",stock:9},
    {id:4,nombre:"Samsung ZFfold2",price: 138999,img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2665-1.jpg?width=500&height=500&canvas=500:500&quality=80&bg-color=255,255,255&fit=bounds://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/s/m/sm-f711_zflip3_openfront_phantomblack_4_1.png",stock:5},
    {id:5,nombre:"Motorola G9Plus",price: 89560,img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2657_6_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=265&width=265&canvas=265:265",stock:3},
    {id:6,nombre:"Motorola EDGE6",price: 111379,img:"https://www.cetrogar.com.ar/media/catalog/product/t/e/te2623_1__1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:", stock:15}
    ]


let htmlProducts = ''
products.forEach(product => {
    htmlProducts += `
        <div id='p-${product.id}' class='col-sm'>
            <p>${product.nombre}</p>
            <img class="imagen-celular" src='${product.img}'  />

            <button class='add'>Agregar</button>
            <button class='remove'>Remover</button>
        </div>
    `
})  
document.getElementById('products').innerHTML = htmlProducts

// Agregar eventos de click
const btnAdds = document.getElementsByClassName('add')
const btnRemove = document.getElementsByClassName('remove')

for (let i = 0; i < btnAdds.length; i++) {
    btnAdds[i].onclick = e => {
        const id = e.target.parentElement.id.split('-')[1]
        const product = products.find(p => p.id == id)
        
        Toastify({
            text: `Producto ${product.nombre} [${product.id}] agregado!`,
            className: "info",
            duration: 3000
        }).showToast();
    }
}

for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].onclick = e => {
        const id = e.target.parentElement.id.split('-')[1]
        const product = products.find(p => p.id == id)
        
        Toastify({
            text: `Producto ${product.nombre} [${product.id}] removido!`,
            className: "danger",
            style: {
                background: "red",
            },
            duration: 3000
        }).showToast();
    }
}

document.getElementById("jsonBtn").addEventListener("click", cargarJSON);


function cargarJSON(){
    fetch("data.json")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = "";
            data.forEach(function(product){
                html += `
                <hr>
                <li> 
                ${product.nombre}-
                Precio: $${product.price}-
                Stock: <span id="cantidad"> ${product.stock}</span>
                <img class="imagen-celular" src= "${product.img}"
               
               </li>`
            })
            document.getElementById("resultado").innerHTML=html;        
        })
        .catch(function(error){
            console.log(error);
        });
}

