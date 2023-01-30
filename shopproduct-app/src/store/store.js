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
    },
    // updateItem (state,data) {


    //   //güncellemeyapılacak
    // }
  }
,
actions: {
  addBasket (context) {

    context.commit('addBasket')
  },


  updateItem (context) {
  //Güncelleme yapılacak
    context.commit('updateItem')
  }
}

})