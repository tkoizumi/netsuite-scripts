newdisplay =  nlapiLookupField('item','7359','costestimatetype');
itemRecord = nlapiLoadRecord('assemblyitem', '7359');
UGEBJprice = itemRecord.getLineItemMatrixValue( 'price1', 'price', '12', '1');