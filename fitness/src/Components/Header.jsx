import { Box, Divider, Flex, Image, Popover, Text,Spacer } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
export default function Header()
{
    return (
    < Box bg="#212432"  height="500px" pl="80px" pr="180px"  pt="30px" fontSize="13px">
        <Flex>
        <Box  width={"210px"} mt="25px" ml="40px"
            >
               <Link to="/"><Image width={"85%"}  src="https://cloudfront.fitnessblender.com/assets/img/logos/fb-logo-dark.svg" alt=""/>
               
               </Link>  </Box>
            <Spacer></Spacer>
            <Box w="20%">
            
            <Image src="" alt=""/></Box>
            <Box ml="50px" mt="30px">
                <Text color="white" fontWeight="bold" mt="20px">WORKOUTS</Text>
                <Text color="#a7aabb"  mt="20px">WORKOUT VIDEOS</Text>
                <Text color="#a7aabb"  mt="20px">CUSTOM WORKOUTS</Text>
                <Text fontWeight="bold" color="white"  mt="20px">PROGRAMS</Text>
                <Text color="#a7aabb"  mt="20px">WORKOUT PROGRAMS</Text>
                <Text color="#a7aabb"  mt="20px">MEAL PLANS</Text>
                <Text color="#a7aabb"  mt="20px">PILOT PROGRAMS</Text>
                <Text color="#a7aabb"  mt="20px">ROUTINES</Text>
            </Box>
            <Box ml="50px" mt="30px">
            <Text color="white" fontWeight="bold" mt="20px">HEALTHY LIVINGS</Text>
                <Text color="#a7aabb"  mt="20px">FITNESS</Text>
                <Text color="#a7aabb"  mt="20px">HEALTH </Text>
                
                <Text color="#a7aabb"  mt="20px">NUTRITION</Text>
                <Text color="#a7aabb"  mt="20px">HEALTHY RECIPIES</Text>
                <Text color="#a7aabb"  mt="20px">EXPERTS</Text>
                
            </Box>
            <Box ml="50px" mt="30px">
            <Text color="white" fontWeight="bold" mt="20px">ABOUT</Text>
                <Text color="#a7aabb"  mt="20px">CAREERS</Text>
                
                <Text color="#a7aabb"  mt="20px">TUTORIALS</Text>
                <Text color="#a7aabb"  mt="20px">OUR TEAMS</Text>
                <Text color="#a7aabb"  mt="20px">B2B OPTIONS</Text>
            </Box>
            <Box ml="50px" mt="30px"><Text color="white" fontWeight="bold" mt="20px">MEMBERSHIPS</Text>
            <Text color="white" fontWeight="bold" mt="20px">BLOG</Text>
            <Text color="white" fontWeight="bold" mt="20px">COMMUNITY</Text>
            <Text color="white" fontWeight="bold" mt="20px">FB PLUS</Text>
            <Text color="white" fontWeight="bold" mt="20px">CONTACT</Text>
            <Text color="white" fontWeight="bold" mt="20px">FAQ</Text>
            <Text color="white" fontWeight="bold" mt="20px">STORE</Text></Box>
        </Flex>
        <Divider mt="20px" orientation='horizontal' pt="20px" />
        <Text color="#a7aabb">Copyright © 2022 Fitness Blender. All rights reserved.  Terms of Use Privacy Policy</Text>
        </Box >
    )
}