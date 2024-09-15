import { createSlice } from "@reduxjs/toolkit";
// import productsItemList from "../../Api/productsItemList";

const inittialState = {
    products: [
      {
        id: 0,
        name: "",
        category: "",
        brand: "",
        price: 0,
        stock: 0,
        description: " ",
        image: "",
        quaninty: 0,
      },
    ],
  }


const ecomSlice = createSlice({
  name: "cards",
  initialState: inittialState,
  reducers: {
    addTocart: (state, action) => {
      const card = {
        id: action.payload.id,
        price: action.payload.price,
        stock: action.payload.stock,
        image: action.payload.image,
        name: action.payload.name,
        category: action.payload.category,
        quaninty: 1,
        totalprice: action.payload.price,
      };

      state.products.push(card);
    },
    removeToCart: (state, action) => {
      console.log("reach here");
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseProduct: (state, action) => {
      state.products.map((product) => {
        if (action.payload === product.id && product.quaninty < product.stock) {
          product.quaninty += 1;
          product.totalprice += product.price;
        }
      });
    },

    decereseProduct: (state, action) => {
      state.products.map((product) => {
        if (action.payload === product.id && product.quaninty > 1) {
          product.quaninty -= 1;
          product.totalprice -= product.price;
        }
      });
    },

    totalFinalvalue: (state, action) => {
      state.totalFinalPrice = action.payload;
    },
  },
});

export const {
  addTocart,
  removeToCart,
  increaseProduct,
  decereseProduct,
  totalFinalvalue,
  totalOfinduval,
} = ecomSlice.actions;

export default ecomSlice.reducer;
