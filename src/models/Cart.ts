import data from '../data/data.json'
import Storage from '../modules/storage/LocalStorage'
import GoodPracticesModel, { Filter, Criteres } from './CritereModel'

export type Cart = { id: string, value: string }

export default class CartModel {
    private static cart: Cart[] = []

    public static updateCart = () => {
        CartModel.cart = this.get()
    }

    public static readonly get = () => {
        const cart = Storage.get('cart') as Cart[]
        if (cart) return cart
        return CartModel.cart
    }

    public static readonly add = async (practice: Cart) => {
        let isExist = false
        CartModel.cart.map(value => {
            if (value.id == practice.id) {
                isExist = true
                return
            }
        })
        if (!isExist) {
            CartModel.cart.push(practice)
        } else {
            CartModel.cart.find(value => {
                if (value.id == practice.id) {
                    value.value = practice.value
                }
            })
        }
        this.save()
    }

    public static readonly save = () => {
        Storage.set('cart', CartModel.cart)
    }

    public static readonly getCriteres = (itemOffset: number = 0, endOffset: number = 21) => {
        const cartIds: Cart[] = this.get()
        const cartPractices: Criteres[] = []
        cartIds.map((cartElement) => {
            cartPractices.push(data.filter(value => value.id == cartElement.id)[0])
        })
        return cartPractices.reverse().slice(itemOffset, endOffset)
    }

}