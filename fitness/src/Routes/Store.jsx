import { Box, Button, Center, Flex, Grid, Heading, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Cart from "./Cart";

export default function Store()
{
    const [store,setstoredata]=useState([])
    useEffect(()=>{
axios.get("https://mockapitestkiyaji.herokuapp.com/pass")
.then(res=>setstoredata(res.data))
    },[])

return ( <> 
<Box>
 <Box pl="30px" pr="30px" >

<Box ml="-30px" pt="70px"  bg="#EDF2F7" pl="70px" mr="-30px" pr="60px" pb="30px" mb="-30px">
<Heading fontSize="40px" fontWeight="400"  bg="#EDF2F7" pb="20px">FB Plus Passes</Heading>
    <Text color="#4e5262">
    Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule, and extend your access with another pass at any time. Multiple passes can be purchased at once for longer access.
Note: Passes cannot be used at the same time as a monthly or yearly FB Plus subscription.
    </Text>
    
</Box>
<Box h="700px" bg="#EDF2F7"  mt="30px" backgroundSize="cover" ml="-30px" mr="-30px"   pl="70px" pr="70px">
<SimpleGrid columns={[2, null, 4]} spacing='40px'>
{store.map((ele)=><Cart  key={ele.id} imageji={ele.image} price={ele.price} id={ele.id} time={ele.time}/> )}
</SimpleGrid>
</Box>

<Box h="600px">
<Box ml="150px" mr="150px" mt="80px">
<Flex>
<Image h="50%" w="50%" src="https://cloudfront.fitnessblender.com/assets/img/workout-complete/shirts-20200224.jpg"></Image>

<Box >
   <Heading ml="40px" fontSize="40px" fontWeight="400">Fitness Blender Gear</Heading> 
    <Text fontSize="20px" ml="40px" mt="20px"> NOVEMBER 2020 UPDATE</Text>
<Text ml="40px" mt="20px" lineHeight={"35px"} color="#718096">
New Fitness Blender gear and clothing are still in the works, but as you might suspect, COVID significantly impacted our original plans. Unfortunately, we still don't have a solid timeline we can share, but we'll keep you up-to-date as the situation changes.

We intend to re-launch starting with casual clothing, following up with gear and other apparel if all goes well. If you've already filled out the gear survey, thank you! If not, it only takes about two minutes and will let us know what is most important to you.
</Text>
<Text ml="20px" mt="30px" lineHeight={"35px"}  color="#718096">
We intend to re-launch starting with casual clothing, following up with gear and other apparel if all goes well. If you've already filled out the gear survey, thank you! If not, it only takes about two minutes and will let us know what is most important to you.
</Text>
</Box>
</Flex>
</Box>
<Box pb="130px" bg="#EBF8FF" backgroundSize="cover" mt="30px" ml="-30px" mr="-30px">
<Center>
<Box   color="black">
<Heading mt="30px" textAlign={"center"} fontSize="40px" pt="30px" fontWeight="300">Other Shopping Options</Heading>
<Text mt="30px" fontSize="16px" textAlign={"center"}>Explore Workout Programs, Meal Plans, and FB Plus memberships.</Text>
<Flex mt="30px"><Button ml="40px" w="180px" bg="#4299E1" fontSize="13px" color="white"borderRadius="none" pl="148px" pr="148px">PROGRAMS</Button><Button ml="20px" w="180px" bg="#4299E1" fontSize="13px" color="white"borderRadius="none" pl="148px" pr="148px">MEAL PLANS</Button><Button  w="180px" ml="20px" bg="#4299E1" fontSize="13px" color="white" borderRadius="none" pl="148px" pr="148px"> FB PLUS</Button></Flex>
</Box>
</Center>
</Box>
</Box>

    </Box>
</Box>
<Box mt="300px">
<Header/>
</Box>

</>
)
}