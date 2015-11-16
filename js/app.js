/* function for adding items to the shopping list using the add to list button and enter key */
function additem() {
	
//get the value of the input box
	var itemvalue = $('#add-item').val();

//dynamicaly create one row inside the shopping list 
	var row = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + itemvalue + '</span><button class="delete" id="remove-item">x</button></li>');
//add each row to the previous ones
	$('#list').append(row);
}

/*function to remove an item from the list clicking on the 'x' */
function removeitem() {
	
	$(this).parent().remove();
}

/*function to select an item to cross out 
	Note: create the 'cross-out' class in CSS first!
*/
function crossOut() {
	alert ('here')
	$(this).parent().toggleClass('cross-out');
}

/*function to reset and clear the list */
function clearList() {
	$('#list').empty();
}	

/*the following 2 function calls should be INSIDE the $(document).ready(function() becuase the targeted containers where created WHEN the page was loaded*/
$(document).ready(function() {
	/*on click of the add to list button id add-button action add item */
	$('#add-button').on('click', additem);
	
	
	/*on click of the reset list button id startover action reset list */
	$('#clearList').on('click', clearList);

});

/*the following 3 function calls should be OUTSIDE the $(document).ready(function() becuase the targeted containers where created AFTER the page was loaded*/

/*on ENTER add item */
	$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            additem();
        }
	});


/*on click of the 'x' button id remove-button action remove item */
	$(document).on('click', '#remove-item', removeitem);
	
/*on click of a list item id cross-out action cross out item */
	$(document).on('click', '.checkbox', crossOut);