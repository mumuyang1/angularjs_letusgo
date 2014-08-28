angular.module('anLetusgoApp').service('ItemsService',function(CartItemService,localStorageService){
  this.getItems = function(){

    return [
              {barcode:'ITEM000001',category:'水果',name:'苹果',price:'3.00',unit:'斤'},
              {barcode:'ITEM000002',category:'水果',name:'香蕉',price:'3.50',unit:'斤'},
              {barcode:'ITEM000003',category:'水果',name:'菠萝',price:'4.00',unit:'个'},
              {barcode:'ITEM000004',category:'饮料',name:'雪碧',price:'3.00',unit:'瓶'},
              {barcode:'ITEM000005',category:'饮料',name:'可口可乐',price:'3.00',unit:'瓶'},
              {barcode:'ITEM000006',category:'生活用品',name:'公牛插座',price:'10.00',unit:'个'},
              {barcode:'ITEM000007',category:'生活用品',name:'水杯',price:'16.00',unit:'个'},
              {barcode:'ITEM000008',category:'饰品',name:'钻石项链',price:'160000.00',unit:'个'},
              {barcode:'ITEM000009',category:'饰品',name:'翡翠手镯',price:'200.00',unit:'个'}
            ];
          };

  this.addCart = function(item){
      var cartSum = +localStorageService.get('cartSum');
          cartSum += 1;
      localStorageService.set('cartSum',cartSum);


      var cartProduct = localStorageService.get('cartProduct');

      var cartItem = CartItemService.cartItems(item,1);

      if(cartProduct === null){
          cartProduct = [];
          cartProduct.push(cartItem);
      }
      else{
            if(!this.judgeIsExist(cartProduct,item)){
                cartProduct.push(cartItem);
          }
      }
      localStorageService.set('cartProduct',cartProduct);
      return cartSum;
    };

  this.judgeIsExist = function(cartProduct,item){

    for(var i = 0; i < cartProduct.length; i++){

        if(item.name === cartProduct[i].items.name){
          cartProduct[i].inputCount++;
          return true;
        }
    }

    return false;
  }
});