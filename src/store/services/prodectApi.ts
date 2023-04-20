import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IProdect{
    id:number
    title:string
    price:number
    description:string
    image:string
    rating:object
    cartQuantity:number
}

export const prodectApi = createApi({
    reducerPath:"prodectApi",
    baseQuery:fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints:(builder)=>({
        getCategory:builder.query<string[],void>({
            query:()=>({
                url:"products/categories",
                method:"GET"
            })
        }),
        getCategoryItem:builder.query<IProdect[],any>({
            query:(categoty)=>({
                url:`products/category/${categoty}`,
                method:"GET"
            })
        }),

        getProdect:builder.query<IProdect[],void>({
            query:()=>({
                url:"products",
                method:"GET"
            })
        }),

        getSingleProdect:builder.query<IProdect,any>({
            query:(id:number)=>({
                url:`products/${id}`,
                method:"GET"
            })
        })



    })
})


export const { useGetCategoryQuery, useGetProdectQuery,useGetSingleProdectQuery,useGetCategoryItemQuery } = prodectApi;