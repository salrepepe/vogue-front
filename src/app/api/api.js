import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCartSession } from "../../utils/cartSession";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5500/api",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("adminToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Product", "Category", "Brand", "Orders", "Cart"],

  endpoints: (builder) => ({
    // ======================
    // PRODUCTS PUBLIC
    // ======================

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

    // ======================
    // CATEGORIES
    // ======================

    getCategories: builder.query({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation({
      query: (body) => ({
        url: "/admin/categories",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/admin/categories/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Category"],
    }),

    // ======================
    // BRANDS
    // ======================

    getBrands: builder.query({
      query: () => "/brands",
      providesTags: ["Brand"],
    }),

    createBrand: builder.mutation({
      query: (data) => ({
        url: "/admin/brands",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Brand"],
    }),

    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/admin/brands/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Brand"],
    }),

    // ======================
    // ADMIN PRODUCTS
    // ======================

    getAdminProducts: builder.query({
      query: () => "/admin/products",
      providesTags: ["Product"],
    }),

    createProduct: builder.mutation({
      query: (body) => ({
        url: "/admin/products",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/admin/products/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Product"],
    }),

    // ======================
    // UPLOAD R2
    // ======================

    uploadImage: builder.mutation({
      query: (data) => ({
        url: "/admin/upload",
        method: "POST",
        body: data,
      }),
    }),

    // ======================
    // AUTH
    // ======================

    loginAdmin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    // ======================
    // DASHBOARD
    // ======================

    getDashboard: builder.query({
      query: () => "/admin/dashboard",
    }),

    // ======================
    // ORDERS
    // ======================

    getOrders: builder.query({
      query: () => "/admin/orders",
    }),

    getOrderById: builder.query({
      query: (id) => `/admin/orders/${id}`,
      providesTags: ["Orders"],
    }),

    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/orders/${id}/status`,
        method: "PATCH",
        body: {
          status,
        },
      }),

      invalidatesTags: ["Orders"],
    }),

    // ======================
    // CART
    // ======================

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

      invalidatesTags: ["Cart"],
    }),

    clearCart: builder.mutation({
      query: () => ({
        url: "/cart",
        method: "DELETE",
        headers: {
          "x-cart-session": getCartSession(),
        },
      }),

      invalidatesTags: ["Cart"],
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: "/checkout",
        method: "POST",
        headers: {
          "x-cart-session": getCartSession(),
        },
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,

  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,

  useGetBrandsQuery,
  useCreateBrandMutation,
  useDeleteBrandMutation,

  useGetAdminProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,

  useUploadImageMutation,

  useLoginAdminMutation,

  useGetDashboardQuery,

  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,

  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,

  useCreateOrderMutation,
} = api;
