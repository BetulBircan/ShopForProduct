import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      basket: []
    }
  },

  mutations: {
    addBasket (state,data) {

      state.basket.push({...data})

      // console.log(data);
      // console.log(data.title);

    },
    deleteBasket (state) {

      state.basket.pop()
      

    },
    increaseQuantity (state, data) {
      let item = state.basket.find(p => p.id === data.id)
      if(item) {
        item.quantity++
        console.log(item.quantity);
        item.price *= item.quantity
        console.log(item.price);
      }
      // state.basket.map(cart => {
      //   if(cart.id === data.iSd  ) {
      //      cart.quantity++
      //      console.log(cart.quantity);
      //      cart.price *= cart.quantity
      //      console.log(cart.price);
      //   }
      // })
    //güncellemeyapılacak
    },
    decreaseQuantity (state, data) {
      let cart = state.basket.find(p => p.id === data.id)
      if(cart) {
        cart.price = cart.price/cart.quantity
        cart.quantity--
        console.log(cart.quantity);
         cart.price* cart.quantity
        console.log(cart.price);
      }
      // state.basket.map(card => { 
      //   if(card.id === data.id  ) {
      //     card.quantity--    
      //       console.log(card.quantity);
          
      //       console.log(card.price );
          
          
      //   }
      // })
    //güncellemeyapılacak
    }
  
  } 
,
actions: {
  addBasket (context) {

    context.commit('addBasket')
  },


  increaseQuantity (context) {
  //Güncelleme yapılacak
    context.commit('increaseQuantity')
  },
  decreaseQuantity (context) {
    context.commit('decreaseQuantity')
  }
}

})