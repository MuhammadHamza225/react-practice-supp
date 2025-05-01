import { createSlice } from "@reduxjs/toolkit";

const initialState ={
 items: [{
id: 1,
category: 'Protein',
title: 'GOLD Whey protein',
image: '/images/goldwhey.webp',
price: '123'
 },
 {
  id: 2,
  category: 'Protein',
  title: 'Blade Whey Protein',
  image: '/images/bladewhey.webp',
  price: '123'
   },
   {
    id: 3,
    category: 'Protein',
    title: 'ISO100',
    image: '/images/dymatizeiso100.webp',
    price: '123'
     },
     {
      id: 4,
      category: 'Protein',
      title: 'Canrnivar Beef Protein',
      image: '/images/car123.webp',
      price: '123'
       },
       {
        id: 5,
        category: 'Protein',
        title: 'ISO HD BY BPI SPORTS',
        image: '/images/isobpi.webp',
        price: '123'
         },
         {
          id: 6,
          category: 'Protein',
          title: 'FA GOLD WHEY PROTEIN ISOLATE',
          image: '/images/fagold.webp',
          price: '123'
           },
           {
            id: 7,
            category: 'Protein',
            title: '100% WHEY',
            image: '/images/isowheychoc.webp',
            price: '123'
             },
             {
              id: 8,
              category: 'Protein',
              title: 'WHEY 1',
              image: '/images/whey1.webp',
              price: '123'
               },
               {
                id: 9,
                category: 'Protein',
                title: 'HYDRO WHEY PROTEIN POWDER',
                image: '/images/hydrowhey.webp',
                price: '123'
                 },
                 {
                  id: 10,
                  category: 'Protein',
                  title: 'NUTREX ISOFIT',
                  image: '/images/isofit.webp',
                  price: '123'
                   },
       {
        id: 11,
        category: 'Creatine',
        title: 'Warrior Creatine',
        image: '/images/warriorcreatine.webp',
        price: '123'
         },
         {
          id: 12,
          category: 'Creatine',
          title: 'Skull Labs Creatine',
          image: '/images/skullcreatine.webp',
          price: '123'
           },
           {
            id: 13,
            category: 'Creatine',
            title: 'Red Rex Creatine',
            image: '/images/redrex.webp',
            price: '123'
             },
             {
              id: 14,
              category: 'Creatine',
              title: 'Gold Creatine',
              image: '/images/goldcreat.webp',
              price: '123'
               },
               {
                id: 15,
                category: 'Creatine',
                title: 'IMPACT CREATINE MONOHYDRATE',
                image: '/images/impact.webp',
                price: '123'
                 },
                 {
                  id: 16,
                  category: 'Creatine',
                  title: 'SYNTHESIS MULTI CREATINE COMPLEX',
                  image: '/images/synthesis.webp',
                  price: '123'
                   },
                   {
                    id: 17,
                    category: 'Creatine',
                    title: 'ICE CREATINE',
                    image: '/images/ice.webp',
                    price: '123'
                     },
                     {
                      id: 18,
                      category: 'Creatine',
                      title: 'ANABOLIC CREA10',
                      image: '/images/klanabolic.webp',
                      price: '123'
                       },
                       {
                        id: 19,
                        category: 'Creatine',
                        title: 'PLATINUM 100% CREATINE',
                        image: '/images/platinum.webp',
                        price: '123'
                         },
                         {
                          id: 20,
                          category: 'Creatine',
                          title: 'ONE RAW CREATINE',
                          image: '/images/raw.webp',
                          price: '123'
                           },
               {
                id: 21,
                category: 'Pre-Workout',
                title: 'Cellucor C4 Pre-Workout',
                image: '/images/c4-60.webp',
                price: '123'
                 },
                 {
                  id: 22,
                  category: 'Pre-Workout',
                  title: 'Total War Pre-Workout',
                  image: '/images/totalwar.webp',
                  price: '123'
                   },
                   {
                    id: 23,
                    category: 'Pre-Workout',
                    title: 'Insane Labz Psychotic',
                    image: '/images/psychotic.webp',
                    price: '123'
                     },
                     {
                      id: 24,
                      category: 'Pre-Workout',
                      title: 'Cobra Labz The Curs',
                      image: '/images/TheCurseFNF.webp',
                      price: '123'
                       },
                       {
                        id: 25,
                        category: 'Pre-Workout',
                        title: 'SHAABOOM PUMP',
                        image: '/images/shaboom.webp',
                        price: '123'
                         },
                         {
                          id: 26,
                          category: 'Pre-Workout',
                          title: 'GAT NITRAFLEX',
                          image: '/images/nitraflex.webp',
                          price: '123'
                           },
                           {
                            id: 27,
                            category: 'Pre-Workout',
                            title: 'NITRO LIFT PREWORKOUT',
                            image: '/images/nitrolift.webp',
                            price: '123'
                             },
                             {
                              id: 28,
                              category: 'Pre-Workout',
                              title: 'SUPER HUMAN CORE PRE-WORKOUT',
                              image: '/images/super.webp',
                              price: '123'
                               },
],
cartItem: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    addToCart:(state, action) =>{
      const product = state.items.find((item) => item.id === action.payload)
      if(product){
        const existing = state.cartItem.find((item) =>item.id === product.id )
      if(!existing){
        state.cartItem.push({...product, quantity:1})
      }else{
        existing.quantity += 1;
      }
    }
  },
  removeFromCart: (state, action) => {
    state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
  }

}
})
export const {addToCart, removeFromCart} = productSlice.actions;
export default productSlice.reducer;