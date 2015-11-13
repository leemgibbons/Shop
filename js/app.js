/* function for adding items to the shopping list using the add to list button and enter key */
function additem() {
//get the value of the input box
	var itemValue = $('#additem').val();
//dynamicaly create one row inside the shopping list 
	var row = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + itemValue + '</span><button class="delete" id="removeitem">x</button></li>');
//add each row to the previous ones
	$('#list').append(row);
}

/*function to remove an item from the list clicking on the 'x' */
function removeItem() {
	$(this).parent().remove();
}

/*function to select an item to cross out 
	Note: create the 'cross-out' class in CSS first!
*/
function crossOut() {
	$(this).parent().toggleClass('cross-out');
}

/*function to reset and clear the list */
function clearList() {
	$('#list').empty();
}	

/*the following 2 function calls should be INSIDE the $(document).ready(function() becuase the targeted containers where created WHEN the page was loaded*/
$(document).ready(function() {
	/*on click of the add to list button id add-button action add item */
	$('#add-button').on('click', addItem);
	
	
	/*on click of the reset list button id startover action reset list */
	$('#startover').on('click', clearList);

});