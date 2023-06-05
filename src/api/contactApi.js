import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const contactApi=createApi({
    reducerPath:"contactApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    tagTypes:["contact"],
    endpoints:(builder)=>({
        getContacts:builder.query({
            query:()=>({
                url:"/users",
            }),
            providesTags:["contact"]
        })
    })
})

export const {useGetContactsQuery}=contactApi