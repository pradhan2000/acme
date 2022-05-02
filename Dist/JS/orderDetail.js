var product_details = [
    { "id": 1, "product_name": "Cob", "product_desc": "Neighbour", "unit_price": 48, "quantity": "1218772956" },
    { "id": 2, "product_name": "Lief", "product_desc": "Bache", "unit_price": 71, "quantity": "1311332367" },
    { "id": 3, "product_name": "Cally", "product_desc": "Bradford", "unit_price": 7, "quantity": "9848842217" },
    { "id": 4, "product_name": "Mirilla", "product_desc": "Goodrum", "unit_price": 98, "quantity": "3528763256" },
    { "id": 5, "product_name": "Maible", "product_desc": "Bullocke", "unit_price": 44, "quantity": "2618725069" },
    { "id": 6, "product_name": "Sarena", "product_desc": "Youthed", "unit_price": 62, "quantity": "4547293090" },
    { "id": 7, "product_name": "Torrey", "product_desc": "Kitchingman", "unit_price": 81, "quantity": "9132622384" },
];

var productCart = [];
var orderDetailArr = [];
var queryStringVal = location.search.substring(1);
var orderNo = queryStringVal.split('=')[1]
document.getElementById('bodyOrderDetail').onload = function() {
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
    var tblOrderList = document.getElementById('table');
    var orderData = JSON.parse(localStorage.getItem('orderRecord')) || [];
    orderRecords = orderData;
    var headers = ['ID', 'Product Name', 'Description', 'Unit Price', 'Quantity', 'Action'];
    var headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        var header = document.createElement('th');
        var textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);
    product_details.forEach(items => {
        var row = document.createElement('tr');
        Object.values(items).forEach(text => {
            var cell = document.createElement('td');
            cell.setAttribute('class', "product");
            var textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        var cell = document.createElement('td');
        row.appendChild(cell);
        var lastCell = row.cells[row.cells.length - 1];
        lastCell.innerHTML = "<button type='button' class='btn btn-primary' id='btnSubmit' data-bs-toggle='modal' data-bs-target='#addProductModal'  onclick = 'getProductDetails(" + items.id + ")'>Add</button>"

        table.appendChild(row);
    })
    tblOrderList.appendChild(table);
}

// JavaScript code
function search_product() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function getProductDetails(value) {
    document.getElementById('txtProductName').value = product_details.filter(item => {
        return item.id == value;
    })[0].product_name;
    document.getElementById('txtPrice').value = product_details.filter(item => {
        return item.id == value;
    })[0].unit_price;
}

function calculatePrice() {
    var total = 0;
    var price = document.getElementById('txtPrice').value;
    var qty = document.getElementById('txtQty').value;
    total = price * qty;
    var totalPrice = total ? total : document.getElementById('txtPrice').value;

    document.getElementById('txtPrice').value = totalPrice;

    console.log(total);
}

function addProduct() {
    var productName = document.getElementById('txtProductName').value;
    var price = document.getElementById('txtPrice').value;
    var qty = document.getElementById('txtQty').value;
    var productDetailsObj = {
        productName,
        price,
        qty
    }
    productCart.push(productDetailsObj);
}