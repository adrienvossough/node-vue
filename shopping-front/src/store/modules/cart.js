const state = {
    cart: []
}

const getters = {
    ascPrice: ({ cart }) => cart.sort((p1, p2) => p1.price < p2.price),
    descPrice: ({ cart }) => cart.sort((p1, p2) => p1.price > p2.price),
}

const mutations = {
    addProduct: ({ cart }, id) => cart.push({ productId: id, quantity: 1 }),
    incrQuantity: ({ cart }, id) => cart.filter(p => p.productId == id)[0].quantity += 1
}

const actions = {
    actAddToCart: ({ state, commit }, { _id }) => {
        const isInCart = state.cart.filter(p => p.productId == _id).length > 0
        if (isInCart) {
            commit('incrQuantity', _id)
        } else {
            commit('addProduct', _id)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}