export const storage = {
    state:{
        inventory:[],
        cart:[],
        searched:[]

    },
    getters:{
        getInventory(state){
            return state.inventory

        },
        getCart(state){
            return state.cart
        },
        getSearched(state){
            return state.searched
        }
    },
    mutations:{
        setInventory(state,payload){
            state.inventory = payload
        },
        addToCart(state, payload){
            state.cart.push(payload)
        },
        removeItem(state, payload){
            state.cart.splice(payload,1)
        },
        searchedInventory(state,payload){
            state.searched=payload
        },
        reset(state){
            state.cart = []
        }
    },
    actions:{
        addToCart(context, payload){
            context.commit('addToCart', payload)
        },
        setInventory(context, payload){
            context.commit('setInventory', payload)
        },
        searchedInventory(context, payload){
            context.commit('searchedInventory',payload)
        },
        removeItem(context,payload){
            context.commit('removeItem',payload)
        }

    }

}