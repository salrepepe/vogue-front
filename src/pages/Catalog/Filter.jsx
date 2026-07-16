import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";

import ExpandMore from "../../assets/icons/ExpandMore";
import { useGetBrandsQuery, useGetCategoriesQuery } from "../../app/api/api";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Search from "../../assets/icons/search";

const Filter = ({ t }) => {
  const { data: brands, isLoading: isBrandsLoading } = useGetBrandsQuery();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategoriesQuery();

  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") || "");

  const setFilter = (key, value) => {
    const newParams = new URLSearchParams(params);

    if (!value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    setParams(newParams);
  };

  const updateFilters = (updates) => {
    const newParams = new URLSearchParams(params);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    if (
      "category" in updates ||
      "brand" in updates ||
      "sort" in updates ||
      "search" in updates
    ) {
      newParams.set("page", "1");
    }

    setParams(newParams);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateFilters({
        search,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setSearch(params.get("search") || "");
  }, [params]);
  // CATEGORY CLICK
  const renderCategories = (nodes = []) =>
    nodes.map((cat) => (
      <div key={cat.id} style={{ marginLeft: 8 }}>
        <p
          onClick={() =>
            updateFilters({
              category: cat.fullPath.replace("/", ""),
            })
          }
          style={{
            cursor: "pointer",
            fontSize: 14,
            color:
              params.get("category") === cat.fullPath.replace("/", "")
                ? "#000"
                : "#777",
            fontWeight:
              params.get("category") === cat.fullPath.replace("/", "")
                ? 600
                : 400,
          }}
        >
          {cat.name}
        </p>

        {cat.children?.length > 0 && renderCategories(cat.children)}
      </div>
    ));

  return (
    <>
      <TextField
        size="small"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search color="#CCC" />
              </InputAdornment>
            ),
          },
        }}
        placeholder={t("nav.search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box
        sx={{
          mt: 2,
          p: 1,
          border: "1px solid #ddd",
          borderRadius: "10px",
          "& p": { fontSize: 14, cursor: "pointer", color: "#777" },
          "& .MuiPaper-root": {
            boxShadow: "none",
            border: "1px solid #CCC",
            borderRadius: "4px!important",
            mb: 2,
          },
          "& .MuiButtonBase-root": {
            minHeight: "32px!important",
            p: 1,
          },
          "& .MuiAccordionSummary-content": {
            m: "0!important",
          },
          "& .MuiAccordionDetails-root": {
            p: 1,
          },
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t("catalog.filter")}
        </Typography>

        {/* SORT */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Сортировка
          </AccordionSummary>

          <AccordionDetails>
            <p
              style={{
                color: !params.get("sort") ? "#000" : "#777",
              }}
              onClick={() => setFilter("sort", "")}
            >
              {t("catalog.default")}
            </p>
            <p
              style={{
                color: params.get("sort") === "price_asc" ? "#000" : "#777",
              }}
              onClick={() => setFilter("sort", "price_asc")}
            >
              {t("catalog.priceAsc")}
            </p>
            <p
              style={{
                color: params.get("sort") === "price_desc" ? "#000" : "#777",
              }}
              onClick={() => setFilter("sort", "price_desc")}
            >
              {t("catalog.priceDesc")}
            </p>
          </AccordionDetails>
        </Accordion>

        {/* BRAND */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            {t("catalog.brand")}
          </AccordionSummary>

          <AccordionDetails>
            {isBrandsLoading ? (
              Array.from({ length: 12 }).map((_, index) => (
                <Skeleton
                  variant="text"
                  width="70%"
                  sx={{ fontSize: "1rem" }}
                  key={index}
                />
              ))
            ) : (
              <>
                {" "}
                <p
                  onClick={() => {
                    updateFilters({
                      brand: "",
                    });
                  }}
                  style={{
                    cursor: "pointer",
                    color: params.get("brand") === null ? "#000" : "#777",
                  }}
                >
                  Любой
                </p>
                {brands?.map((b) => (
                  <p
                    key={b.id}
                    onClick={() =>
                      updateFilters({
                        brand: b.slug,
                      })
                    }
                    style={{
                      cursor: "pointer",
                      color: params.get("brand") === b.slug ? "#000" : "#777",
                    }}
                  >
                    {b.name}
                  </p>
                ))}
              </>
            )}
          </AccordionDetails>
        </Accordion>

        {/* CATEGORY */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            {t("catalog.catalog")}
          </AccordionSummary>

          <AccordionDetails>
            {isCategoriesLoading
              ? Array.from({ length: 12 }).map((_, index) => (
                  <Skeleton
                    variant="text"
                    // width="70%"
                    sx={{ fontSize: "1rem" }}
                    key={index}
                  />
                ))
              : renderCategories(categories || [])}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Filter;
