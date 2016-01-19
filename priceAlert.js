newdisplay =  nlapiLookupField('item','7359','costestimatetype'); 
itemRecord = nlapiLoadRecord('assemblyitem', '7359'); //loads all sub-records of page
UGEBJprice = itemRecord.getLineItemMatrixValue( 'price1', 'price', '12', '1'); //retrieves pricing record in USD, 12th line in 1st column