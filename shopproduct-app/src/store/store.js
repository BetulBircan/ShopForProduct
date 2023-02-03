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

      console.log(data);
      console.log(data.title);

    },
    deleteBasket (state) {

      state.basket.pop()
      

    },
    increaseQuantity (state, data) {
      state.basket.map(cart => {
        if(cart.id === data.id  ) {
           cart.quantity++
           cart.price *= cart.quantity
         
        }
      })
    //güncellemeyapılacak
    },
    decreaseQuantity (state, data) {
      state.basket.map(cart => {
        if(cart.id === data.id  ) {
          cart.quantity--
        }
      })
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