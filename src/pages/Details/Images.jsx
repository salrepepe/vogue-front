import { Box, Dialog, IconButton, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

const Images = ({ product, images, isLoading }) => {
  const allImages = images?.length > 0 ? images : product?.images || [];

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(0);
  }, [product]);

  if (isLoading) {
    return <Skeleton variant="rectangular" width="100%" height="60vh" />;
  }

  return (
    <>
      <Box>
        <Box
          component="img"
          src={allImages[active]}
          onClick={() => setOpen(true)}
          sx={{
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: 2,
            cursor: "zoom-in",
          }}
        />

        {allImages.length > 1 && (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2,
              flexWrap: "wrap",
            }}
          >
            {allImages.map((img, index) => (
              <Box
                key={index}
                component="img"
                src={img}
                onClick={() => setActive(index)}
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 1,
                  border:
                    active === index ? "2px solid #000" : "1px solid #ddd",
                  transition: "all .2s",
                  "&:hover": {
                    borderColor: "#000",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#fff",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {allImages.length > 1 && (
            <>
              <IconButton
                onClick={() =>
                  setActive((active - 1 + allImages.length) % allImages.length)
                }
                sx={{
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  color: "#fff",
                  transform: "translateY(-50%)",
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                onClick={() => setActive((active + 1) % allImages.length)}
                sx={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  color: "#fff",
                  transform: "translateY(-50%)",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}

          <Box
            component="img"
            src={allImages[active]}
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Box>
      </Dialog>
    </>
  );
};

export default Images;
