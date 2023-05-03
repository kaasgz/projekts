import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer(){

    return(
       <Box
        sx={{
            background: Colors.footer,
            color: Colors.white,
            padding:{xs:4, md:10},
            paddingTop:12,
            paddingBottom:12,
            fontSize:{xs:'12px', md:'14px'}
            

        }}
       >
        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">About Us</FooterTitle>
                <Typography variant="caption2">
                Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
                incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud.
                </Typography>
                <Box sx={{
                    mt:4,
                    color: Colors.dove_gray
                }}>
                    <a href="https://www.facebook.com/"><FacebookIcon sx={{mr:1}}/></a>
                    <a href="https://twitter.com/"><TwitterIcon sx={{mr:1}}/></a>
                    <a href="https://www.instagram.com/"><InstagramIcon /></a>

                </Box>
            </Grid>
            <Grid item md={6} lg={2}>
                <FooterTitle variant="body1">Information</FooterTitle>
                <List>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            About Us
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Order Tracking
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Privacy &amp; Policy
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Terms &amp; Conditions
                        </Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={2}>
            <FooterTitle variant="body1">My account</FooterTitle>
            <List>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            Login
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            My Cart
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                            My Account
                        </Typography>
                    </ListItemText>
                    <ListItemText>
                        <Typography lineHeight={2} variant="caption2">
                           Wishlist
                        </Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">Newsletter</FooterTitle>
            <Stack>
                <SubscribeTf
                color="primary"
                label="Email adress"
                variant="standard"/>
                    <Button
                    startIcon={<SendIcon sx={{color: Colors.white}}/>}
                    sx={{mt:4, mb:4}}
                    variant="contained">
                       Subscribe 
                    </Button>
                
            </Stack>
              
            </Grid>
        </Grid>
       </Box>
    )
}