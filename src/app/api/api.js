import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCartSession } from "../../utils/cartSession";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://vogue-back.onrender.com/api",
  }),

  tagTypes: ["Product", "Category", "Brand"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();

        if (filters?.category) params.append("category", filters.category);

        if (filters?.brand) params.append("brand", filters.brand);

        if (filters?.search) params.append("search", filters.search);

        if (filters?.page) params.append("page", filters.page);

        if (filters?.sort) params.append("sort", filters.sort);

        return `/products?${params.toString()}`;
      },
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    getCategories: builder.query({
      query: () => "/categories/tree",
      providesTags: ["Category"],
    }),

    getBrands: builder.query({
      query: () => "/brands",
      providesTags: ["Brand"],
    }),

    getCart: builder.query({
      query: () => ({
        url: "/cart",
        headers: {
          "x-cart-session": getCartSession(),
        },
      }),
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation({
      query: (body) => ({
        url: "/cart",
        method: "POST",
        headers: {
          "x-cart-session": getCartSession(),
        },
        body,
      }),
      invalidatesTags: ["Cart"],
    }),

    updateCartItem: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/cart/${id}`,
        method: "PATCH",
        headers: {
          "x-cart-session": getCartSession(),
        },
        body: {
          quantity,
        },
      }),

      async onQueryStarted({ id, quantity }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getCart", undefined, (draft) => {
            const item = draft.items.find((item) => item.id === id);

            if (item) {
              item.quantity = quantity;
            }

            draft.count = draft.items.reduce(
              (sum, item) => sum + item.quantity,
              0,
            );

            draft.total = draft.items.reduce(
              (sum, item) => sum + item.product.price * item.quantity,
              0,
            );
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },

      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
        headers: {
          "x-cart-session": getCartSession(),
        },
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getCart", undefined, (draft) => {
            draft.items = draft.items.filter((item) => item.id !== id);

            draft.count = draft.items.reduce(
              (sum, item) => sum + item.quantity,
              0,
            );

            draft.total = draft.items.reduce(
              (sum, item) => sum + item.product.price * item.quantity,
              0,
            );
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    clearCart: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
        headers: {
          "x-cart-session": getCartSession(),
        },
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getCart", undefined, (draft) => {
            draft.items = [];
            draft.total = 0;
            draft.count = 0;
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: "/checkout",

        method: "POST",

        body: data,

        headers: {
          "x-cart-session": getCartSession(),
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,
  useCreateOrderMutation,
} = api;
