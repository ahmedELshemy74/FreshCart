import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../Components/Loading/Loading.jsx";

export let WishlistContext = createContext();
export default function WishlistContextProvider({ children }) {
    let headers = {
        token: localStorage.getItem('userToken')
    }

    const [wishlist,setWishlist] = useState(null)

    async function addProductToWishlist(productId) {
        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId
            }, {
                headers
            })
            if (wishlist?.data.some((item)=> item.id === productId )) {
                deleteProductFromWishlist(productId)
                toast.success('product deleted from wishlist successfully', {
                    style: {
                        backgroundColor: "green",
                        color: 'white'
                    }
                });
            }
            else if (wishlist?.data.some((item)=> item.id !== productId )) {
                setWishlist(data);
                toast.success(data.message, {
                    style: {
                        backgroundColor: "green",
                        color: 'white'
                    }
                });
                getProductWishlist()
            }
            
        } catch (err) {
            console.log(err);
        }
       
    }
    async function getProductWishlist() {
        try {
            const token = localStorage.getItem('userToken')
            if (!token) {
                return
            }
            let headers = {
                token:localStorage.getItem('userToken')
            }
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                headers
            })
           
            setWishlist(data)
            
        } catch (err) {
            console.log(err);
            
        }
       
    }
    useEffect(() => {
        getProductWishlist();
    }, [])
    
    async function deleteProductFromWishlist(productId) {
        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers
            })
           
            console.log(data);
            // setWishlist(data)
            getProductWishlist()
            
            
        } catch (err) {
            console.log(err);
            
        }
       
    }

 
    
    return <WishlistContext.Provider value={{deleteProductFromWishlist,getProductWishlist,setWishlist,wishlist,addProductToWishlist}}>
        {children}
    </WishlistContext.Provider>

}