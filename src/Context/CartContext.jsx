import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export let CartContext = createContext();

export default function CartContextProvider({ children }) {
    let headers = {
        token:localStorage.getItem('userToken')
    }
    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(false)

    async function addProductToCart(productId) {

        try {
            setLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
                productId
            }, {
                headers
            })
            console.log(data);
            toast.success(data.message, {
                style: {
                    backgroundColor: "green",
                    color: 'white'
                }
            });
            setCart(data)
            setLoading(false)

        } catch (err) {
            console.log(err);
            setLoading(false)
        }
     
    }

    async function checkout(shippingAddress) {
        try {
            setLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
                shippingAddress
            }, {
                headers
            })
            console.log(data);
            window.location.href=data.session.url
            setLoading(false)

        } catch (err) {
            console.log(err);
            setLoading(false)
        }
     
    }
    async function deleteProduct(productId) {

        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                headers
            })
            console.log(data);
            setCart(data)
            setLoading(false)

        } catch (err) {
            console.log(err);
            setLoading(false)
        }
     
    }
    async function deleteCart() {

        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers
            })
            console.log(data);
            setCart(null)
            setLoading(false)

        } catch (err) {
            console.log(err);
            setLoading(false)
        }
     
    }
    async function updateProductCount(productId,count) {

        if (count>0) {
            try {
                setLoading(true)
                let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                    count
                }, {
                    headers
                })
                console.log(data);
                setCart(data)
                setLoading(false)
            } catch (err) {
                console.log(err);
                setLoading(false)
            }
        }
    }
    async function getCart() {

        try {
            const token = localStorage.getItem('userToken')
            if (!token) {
                return
            }
            let headers = {
                token:localStorage.getItem('userToken')
            }
            setLoading(true)
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers
            })
            console.log(data);
            setCart(data)
            setLoading(false)
            
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
     
    }

    useEffect(() => {
        getCart()
    }, [])
    
 return   <CartContext.Provider value={{deleteCart,checkout,deleteProduct,updateProductCount,loading,addProductToCart,getCart,setCart,cart}}>
        {children}
    </CartContext.Provider>
}