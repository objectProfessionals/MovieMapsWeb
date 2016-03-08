simpleCart({
    checkout: {
      type: "PayPal",
      email: "emailSanj@yahoo.com"
    }
  });
simpleCart({
    currency: "GBP" // set the currency to pounds sterling
});

simpleCart.bind( "afterAdd" , function( item ){
    updateCartAlert();
    updateCartClass();
});

simpleCart.bind( "update" , function( item ){
    updateCartClass();
});

simpleCart.ready( function(){
	updateCartClass();
});

function updateCartAlert() {
	var myCartAlert = document.getElementById('myCartAlert');
	myCartAlert.className='alert alert-info';
}

function updateCartClass() {
	var cartMenu = document.getElementById('cartMenu');
	var cartIcon = document.getElementById('cartIcon');
	if (cartMenu) {
		if(simpleCart.quantity() > 0) {
			cartMenu.className='active2';
		}
	}
	if (cartIcon) {
		cartIcon.style.visibility='hidden';
		if(simpleCart.quantity() > 0) {
			cartIcon.style.visibility='';
		}
	}
}

function getDiscounted() {
	var discountEl = document.getElementById('discount');
	if (discountEl && discountEl.value) {
		for (var d in discounts) {
			var drow = discounts[d];
			if (drow.code && drow.code==discountEl.value) {
				var expiry = new Date(drow.exp);
				var now = new Date();
				if (now < expiry) {
					alert('The discount code you entered has been applied');
					return (1-(drow.pc /100));
				} else {
					alert('The discount code you entered was not valid');
				}
			}
		}
	}
	
	return 1;
}
