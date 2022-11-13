import { Box, Button, Center, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

export default function Home()
{
    return (
        <>
            <Box bg="#0987A0" h="auto">
<Flex>
<Box w="400px" pt={"160px"} ml='170px'>

<Text color="white" fontSize="40px">
Feel Great. <br />
Body and Mind.

</Text>
<Text color="white" mt="10px" fontSize="20px"   fontWeight='100'>
Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.
</Text>
<Button bg="#212121" color="white" mt="20px"  borderRadius="none" padding="20px 30px">JOIN NOW</Button>

</Box>
<Spacer/>
<Box><Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/team-720.webp" borderRadius="50%" w="75%" ml="80px">

</Image>
</Box>
</Flex>
            </Box>
{/* <----second box-------> */}

<Box bg="#FED7E2" height="580px" margin="10px" alignItems="center">
<Center>
<Box width="400px" mt="30px" >

<Text fontSize="40px" color="black" textAlign={"center"} mt="20px">
Introducing</Text> <Flex><Text fontSize="40px" ml="70" mt="-5px">
<b>FB</b> <span color="#0288D1">Plus</span> Passes
</Text></Flex>
<Text textAlign={"center"}  mt="10px">Passes give you full access to everything FB Plus has to offer, without a long-term subscription. Choose a pass that fits your budget and your schedule.</Text>
<Button ml="130px" mt="30px" bg="#212121" color="white" p="20px 30px">BUY A PASS</Button>

</Box>


</Center>
<Center>
<Flex><Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/passes-720.webp"></Image></Flex>
</Center>

</Box>

{/* <--------------------------third box---------------------------------> */}
<Flex>
<Box w="50%" h="auto" bg="#f0f4f6" m="10px" mt="-0px" mb="170px" ml="10px">

<Center>
<Box width="400px" mt="50px" >
<Text fontSize="40px" ml="50px"> Workout Videos</Text>
<Text textAlign={"center"} fontSize="16px">Exercise with certified personal trainers whether you’re at home or on the road.

</Text>
<Text color="#2C5282"  textAlign={"center"} paddingBottom="15px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"></Image>
</Box>
<Box w="50%" h="530px"  bg="#f9fcfd" m="10px" mt="0px" ml="0px"  >

<Center>
<Box width="400px"  mt="40px" >
<Text fontSize="40px" ml="90px"> Programs</Text>
<Text  textAlign={"center"}>Professionally designed programs take the guesswork out of exercising.

</Text>
<Text color="#2C5282" ml="120px" paddingBottom="15px" >
<Link   >Browse All Programs</Link>
</Text>
</Box >
</Center>

    <Image paddingBottom="-10px"  src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"></Image>
</Box>
</Flex>

<Flex>

<Box w="50%" h="542px" mt="-160px" bg="black" ml="10px">

<Center>
<Box width="400px" mt="50px" >
<Text fontSize="40px" ml="60px" color="white"> Wellness Articles
</Text>
<Text  textAlign={"center"} color="white" fontSize="16px">Research-backed articles to help you care for your body and mind.
</Text>
<Text color="#2C5282" ml="130px"  pt="10px">
<Link >Learn from Experts</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"></Image>
</Box>



<Box w="50%" h="530px" mt="-160px" bg="#d8d9da" ml="10px" mr="10px">

<Center>
<Box width="400px" mt="50px" >
<Text fontSize="40px" ml="70px"> Healthy Recipies</Text>
<Text  textAlign={"center"}>Fuel your day with recipes by Registered Dietitians and professional chefs.



</Text>
<Text color="#2C5282" ml="150px" pt="10px">
<Link >Find a Recipe</Link>
</Text>
</Box>
</Center>

    <Image mt="20px" src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"></Image>
</Box>


</Flex>


<Box   mt="10px" ml="10px" bg="#effbff" mr="10px" >

<Center>
<Box width="500px" mt="30px">
<Text fontSize="40px" ml="70px" pb="10px"> Supportive Community</Text>
<Text   pl="60px" textAlign="center" >Stay motivated and engaged with a little help from a supportive community of other members.



</Text>
<Text color="#2C5282" ml="120px" textAlign="center" pr="40px" pt="20px">
<Link >Become a Member</Link>
</Text>
</Box>
</Center>

    <Image  src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"></Image>
</Box>

<Header/>

</>


        
    )
}