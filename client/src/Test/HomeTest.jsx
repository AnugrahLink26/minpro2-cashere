import { Box } from "@chakra-ui/react";
import { ProfileCard } from "./ProfileCards";
import { HomeNotLoginTest } from "./HomeNotLoginTest";


export function HomeTest() {
    const token = localStorage.getItem("token")
    
    return (
        <Box>
            {
                token ? <ProfileCard /> : <HomeNotLoginTest />
            }
        </Box>
    )
}
