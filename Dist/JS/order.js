function saveData(){
    var orderNumber = document.getElementById('txtOrderNumber').value;
    var expiryDate = document.getElementById('txtDate').value;
    var AccountName = document.getElementById('txtAccountName').value;
    var phone = document.getElementById('txtPhone').value;
    var shipAdd = document.getElementById('txtShipAddress').value;

    var orderObj = {
        orderNumber,
        expiryDate,
        AccountName,
        phone,
        shipAdd
    }
    localStorage.setItem('orderRecord',JSON.stringify(orderObj));
    document.getElementById('orderForm').reset();  
}

document.getElementById('body').onload = function() {
    now = new Date();
    randomNum = '';
    randomNum += Math.round(Math.random() *9);
    randomNum += Math.round(Math.random() *9);
    randomNum += now.getTime();
    document.getElementById('txtOrderNumber').value = randomNum;
    
}