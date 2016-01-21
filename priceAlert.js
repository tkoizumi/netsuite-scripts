function priceAlert(item_id) {
//displays a popup when the item page loads with our cost and MSRP

var itemtype = document.getElementById("baserecordtype").value; //retrives type of item

var item_name = nlapiLookupField('item', item_id,'itemid'); //the name of the item

var item_record = nlapiLoadRecord(itemtype, item_id); //loads all sub-records of page
var UGEBJ_price = item_record.getLineItemMatrixValue( 'price1', 'price', '12', '1'); //retrieves pricing record for our cost in USD, 12th line in 1st column 
var MSRP_USA = item_record.getLineItemMatrixValue( 'price1', 'price', '11', '1'); //retrieves pricing record for MSRP for US customers in USD
var MSRP_INTL = item_record.getLineItemMatrixValue( 'price1', 'price', '10', '1'); //retrieves pricing record for MSRP for International customers in USD

displayCustInfo ('Our Cost', UGEBJ_price, 'col');
displayCustInfo ('MSRP (USA)', MSRP_USA, 'row');
displayCustInfo ('MSRP (INTL)', MSRP_INTL, 'row');

//alert(item_name + '\nOur cost: $' + UGEBJ_price + ' , MSRP, Non-Parter USA: $' + MSRP_USA + ' , MSRP, Non-Parter INTL: $' + MSRP_INTL) //creates the popup with the pricing info

}