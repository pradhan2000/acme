var product_details = [
    { "id": 0, "product_name": "--Select Option--", "product_desc": "Neighbour", "unit_price": 48, "quantity": "1218772956" },
    { "id": 1, "product_name": "Cob", "product_desc": "Neighbour", "unit_price": 48, "quantity": "1218772956" },
    { "id": 2, "product_name": "Lief", "product_desc": "Bache", "unit_price": 71, "quantity": "1311332367" },
    { "id": 3, "product_name": "Cally", "product_desc": "Bradford", "unit_price": 7, "quantity": "9848842217" },
    { "id": 4, "product_name": "Mirilla", "product_desc": "Goodrum", "unit_price": 98, "quantity": "3528763256" },
    { "id": 5, "product_name": "Maible", "product_desc": "Bullocke", "unit_price": 44, "quantity": "2618725069" },
    { "id": 6, "product_name": "Sarena", "product_desc": "Youthed", "unit_price": 62, "quantity": "4547293090" },
    { "id": 7, "product_name": "Torrey", "product_desc": "Kitchingman", "unit_price": 81, "quantity": "9132622384" },
];
var productCart =[];

var orderDetailArr = [];
//var queryStringVal = location.search.substring(1);
var orderNo = JSON.parse(localStorage.getItem('orderNumber'));
document.getElementById('bodyOrderDetail').onload = function () {
    var orderDetailObj = JSON.parse(localStorage.getItem('orderRecord'));
    orderDetailArr = orderDetailObj.filter(item => {
        return orderNo == item.orderNumber;
    })[0];

    document.getElementById('txtOrderNumber').value = orderDetailArr['orderNumber'];
    document.getElementById('txtCloseDate').value = orderDetailArr['expiryDate'];
    document.getElementById('txtAccountName').value = orderDetailArr['AccountName'];
    document.getElementById('txtPhone').value = orderDetailArr['phone'];
    document.getElementById('txtShipAddress').value = orderDetailArr['shipAdd'];
    loadProducts();
}

function loadProducts() {
    var select = document.getElementById('select');
    var selectOption = document.createElement('select');
    selectOption.setAttribute('class','form-control');
    selectOption.setAttribute('id','selectList');
    selectOption.setAttribute('onChange','getProductDetails()');  
    product_details.forEach(items => {      
        var option = document.createElement('option');
        Object.values(items).forEach(text =>{
            option.value = items.product_name;  
            option.innerHTML = option.value;
        })          
        selectOption.appendChild(option);
    });
    
    select.appendChild(selectOption);
    
    
}

var productName = '';
function getProductDetails() {
var selectedVal = document.getElementById('selectList');
var value = selectedVal.options[selectedVal.selectedIndex].value;
    document.getElementById('txtPrice').value = product_details.filter(item => {
        return item.product_name == value;
    })[0].unit_price;
    productName = value;
}

function calculatePrice() {
    var total = 0;
    var price = document.getElementById('txtPrice').value;
    var qty = document.getElementById('txtQty').value;
    total = price * qty;
    var totalPrice = total ? total : document.getElementById('txtPrice').value;

    document.getElementById('txtPrice').value = totalPrice;

}


 document.getElementById("btnSubmit").onclick = function(e) {
    //var productName = document.getElementById('txtProductName').value;
    var price = document.getElementById('txtPrice').value;
    var qty = document.getElementById('txtQty').value;
    var productDetailsObj = {
        productName,
        price,
        qty
    }
    productCart.push(productDetailsObj);
    localStorage.setItem('productRecord', JSON.stringify(productCart));    
    showAddedProduct();
    e.preventDefault();
}

function showAddedProduct() {
    var productsArr = JSON.parse(localStorage.getItem('productRecord'));
    document.getElementById('prodCount').innerText = productsArr.length;
    var divCard = document.getElementById('dvcard');
  
    productsArr.forEach(items =>{  
 console.log(items); 
  var dv= document.createElement('div');
        dv.setAttribute('class', 'card mb-2');
        var dvcardbody = document.createElement('div');
        dvcardbody.setAttribute('class','card-body');
        var h5 = document.createElement('h5');
        h5.setAttribute('class','card-title');
        h5.innerText = 'Product = ' + items.productName;
        var div = document.createElement('div');
        div.innerHTML = '<p class="card-text"><h5 class="card-subtitle mb-2"> Price = "'+items.price+'"</h5><h5 class="card-subtitle mb-2"> Quantity = "'+items.qty+'"</h5></p>';        
        dvcardbody.appendChild(h5);
        dvcardbody.appendChild(div);
        dv.appendChild(dvcardbody);
        divCard.appendChild(dv);
    })
}