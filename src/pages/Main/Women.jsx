import { Box, Button, Container, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import img1 from "../../assets/images/bg.png";
import { useGetBrandsQuery } from "../../app/api/api";
import man1 from "../../assets/images/br.png";
import man2 from "../../assets/images/kiton.png";
import man3 from "../../assets/images/gucci.png";
import man4 from "../../assets/images/dg.png";
import man5 from "../../assets/images/dior.png";
import man6 from "../../assets/images/sr.png";
import man7 from "../../assets/images/lp.png";
import man8 from "../../assets/images/ys.png";
import bg from "../../assets/images/women-bg.png";

const Women = ({ t }) => {
  const brands = [man1, man2, man3, man4, man5, man6, man7, man8];

  const { data, isLoading } = useGetBrandsQuery();

  return (
    <Box
      component="section"
      sx={
        {
          // p: { xs: "30px 0 0", md: "0 0 0" },
        }
      }
    >
      <Box
        component="img"
        src={img1}
        sx={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
        }}
        alt=""
      />
      <Box
        sx={{
          background: `url(${bg}) center/cover no-repeat;`,
          padding: "71px 0 ",
        }}
      >
        <Container>
          <Box
            sx={{
              width: "fit-content",
              margin: "0 auto",
              background: "#FFF",
              borderRadius: "30px",
              padding: "39px 50px 81px",
            }}
          >
            <Typography variant="h3" sx={{ mb: "73px", textAlign: "center" }}>
              {t("nav.women")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "50px",
                alignItems: "start",
              }}
            >
              {data?.map((item, idx) => (
                <Link to={`/catalog/${item.slug}`} key={idx}>
                  <img src={item.logo} alt="" />
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Women;
