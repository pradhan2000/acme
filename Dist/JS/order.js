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