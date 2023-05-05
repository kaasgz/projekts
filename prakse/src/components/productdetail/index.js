import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Product, ProductImage } from "../../styles/Products";
import IncDec from "../ui";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SlideTransition(props) {
    return <Slide direction="down" {...props} />
  }
const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: theme.spacing(4),
  }));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    lineHeight: 1.5,
  }));

export default function ProductDetail({ open, onClose, product }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Dialog
        TransitionComponent={SlideTransition}
        variant="permanant"
        open={open}
        fullScreen
        >
            <DialogTitle
            sx={{
                background: Colors.secondary,
              }}>
                <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"space-between"}>
                   {product.name}
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column':'row'}>
                    <Product sx={{mr: 4}}>
                        <ProductImage src={product.image}/>
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1">
                            #aabb8899881
                        </Typography>
                        <Typography variant="subtitle1">
                            Avalibality: 5 in stock
                        </Typography>
                        <Typography sx={{lineHeight:2}} variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant="body">
                            {product.description}
                            {product.description}
                            {product.description}
                        </Typography>
                        <Box
                        sx={{mt:4}} 
                        display={"flex"} 
                        alignItems={"center"}
                        justifyContent={"space-between"}>
                        <IncDec/>
                        <Button variant="contained">
                            Add to cart
                        </Button>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{ 
                                mt: 4, 
                                color: Colors.light 
                                }}>
                        <FavoriteIcon sx={{ mr: 2 }} />
                            Add to wishlist
                        </Box>
                        <Box
                        sx={{mt: 4, color: Colors.dove_gray}}>
                    <a href="https://www.facebook.com/"><FacebookIcon sx={{mr: 1 }}/></a>
                    <a href="https://twitter.com/"><TwitterIcon sx={{mr: 1 }}/></a>
                    <a href="https://www.instagram.com/"><InstagramIcon sx={{mr: 1 }}/></a>
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}