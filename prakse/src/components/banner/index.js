import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

export default function Banner(){
    const theme= useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md')); //true=mobile

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/boots.webp"></BannerImage>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Boots
                </BannerTitle>
                <BannerDescription variant="subtitle">
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
            </BannerDescription>
            <BannerShopButton color="primary">Shop now</BannerShopButton>
            </BannerContent>
           
            
        </BannerContainer>
        
    );
}