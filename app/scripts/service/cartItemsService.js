angular.module('anLetusgoApp')
    .service('CartItemService', function () {

        this.cartItems = function (items, inputCount) {
            return {items: items, inputCount: inputCount}
        };

        this.add = function (cartItem, cartProduct) {

            var cartSums = 0;
            _.forEach(cartProduct, function (item) {
                if (item.items.name === cartItem.name) {
                    cartSums = JSON.parse(localStorage.getItem('cartSum'));
                    item.inputCount += 1;
                    cartSums += 1;

                    localStorage.setItem('cartSum', JSON.stringify(cartSums));
                    localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
                }
            });
            cartSums = +localStorage.getItem('cartSum');
            return cartSums;
        };

        this.reduce = function(cartItem,cartProduct){

            var cartSums = 0;
            _.forEach(cartProduct, function (item) {

                if (item.items.name === cartItem.name) {
                    if(item.inputCount <= 1){
                        item.inputCount = 1;
                    }
                    else{

                        cartSums = JSON.parse(localStorage.getItem('cartSum'));
                        item.inputCount -= 1;
                        cartSums -= 1;

                        localStorage.setItem('cartSum', JSON.stringify(cartSums));
                        localStorage.setItem('cartProduct', JSON.stringify(cartProduct));
                    }
                }
            });
            cartSums = +localStorage.getItem('cartSum');
            return cartSums;
        };

        this.delete = function(cartItem,cartProduct){

            var cartSums = 0;

           for(var i = 0; i < cartProduct.length; i++){
             if(cartProduct[i].items.name === cartItem.name){

               cartSums = JSON.parse(localStorage.getItem('cartSum'));
               cartSums  = cartSums - cartProduct[i].inputCount;
               cartProduct = _.without(cartProduct,cartProduct[i]);
               localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
               localStorage.setItem('cartSum',JSON.stringify(cartSums));
             }
           }
            cartSums = +localStorage.getItem('cartSum');
            return cartSums;
        };

        this.getTotal = function (cartProduct) {
            var total = 0;
            _.forEach(cartProduct, function (item) {
                total += item.items.price * item.inputCount;
            });
            return total;
        };

        this.pay = function(cartProduct){

            cartProduct = [];
            localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
            var cartSums = 0;
            localStorage.setItem('cartSum',JSON.stringify(cartSums));
            return cartSums;

        };

    });
