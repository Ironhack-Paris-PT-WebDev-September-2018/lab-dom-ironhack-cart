function deleteItem(e) {}

function getPriceByProduct(itemNode) {
var quantity = itemNode.getElementsByClassName("quantity");
if (quantity.length < 1){
  return 0;
} else {
  quantity = quantity[0].value;
  var unitPrice = itemNode.getElementsByClassName("item-price")[0].textContent.trim().substr(1);
  return quantity*unitPrice
}
// console.log(quantity);
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
 var totalItems = document.getElementsByClassName("item");
 var totalPrice = 0;
  for (i = 0 ; i < totalItems.length ; i ++) {
    totalPrice += getPriceByProduct(totalItems[i]);
  }
  document.getElementById("total-price").textContent = "$" + totalPrice;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
