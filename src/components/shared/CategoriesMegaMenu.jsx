import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetBrandsQuery, useGetCategoriesQuery } from "../../app/api/api";

const CategoriesMegaMenu = ({ slug, data }) => {
  // if (isLoading) return null;

  const { data: brands, isLoading } = useGetBrandsQuery();

  const root = data?.find((item) => item.slug === slug);

  if (!root) return null;

  const categories =
    slug === "muzhskoe" ? [...root.children].reverse() : root.children;

  return (
    <Grid
      container
      spacing={3}
      sx={{
        "& a": {
          display: "block",
          width: "fit-content",
          fontSize: 14,
          mb: 1,
          color: "#555",
          textDecoration: "none",
          transition: ".2s",

          "&:hover": {
            color: "#000",
          },
        },
      }}
    >
      {categories?.map((category) => (
        <Grid
          key={category.id}
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              mb: 1.5,
              fontSize: 18,
            }}
          >
            <Link
              to={`/catalog?category=${category.fullPath}`}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {category.name}
            </Link>
          </Typography>

          {category.children?.map((child) => (
            <Link
              key={child.id}
              className="menu-item"
              to={`/catalog?category=${child.fullPath}`}
            >
              {child.name}
            </Link>
          ))}
        </Grid>
      ))}
      <Grid
        size={{
          xs: 12,
          md: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            mb: 1.5,
            fontSize: 14,
          }}
        >
          Бренды
        </Typography>
        {brands?.map((item) => (
          <Link
            key={item.id}
            className="menu-item"
            to={`/catalog?brand=${item.slug}`}
          >
            {item.name}
          </Link>
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoriesMegaMenu;
