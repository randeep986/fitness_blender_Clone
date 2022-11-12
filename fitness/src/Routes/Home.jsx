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
<Box w="50%" h="auto" bg="RGBA(0, 0, 0, 0.16)" m="10px" mt="-0px">

<Center>
<Box width="400px" mt="50px">
<Text fontSize="40px" ml="60px"> Workout Videos</Text>
<Text textAlign={"center"}>Exercise with certified personal trainers whether you’re at home or on the road.

</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/workouts-720.webp"></Image>
</Box>
<Box w="50%" h="600px" mt="20px">

<Center>
<Box width="400px" mt="30px">
<Text fontSize="40px" ml="90px"> Programs</Text>
<Text  textAlign={"center"}>Professionally designed programs take the guesswork out of exercising.

</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/programs-720.webp"></Image>
</Box>
</Flex>

<Flex>

<Box w="50%" h="540px" mt="20px" bg="black">

<Center>
<Box width="400px" mt="30px" >
<Text fontSize="40px" ml="60px" color="white"> Wellness Articles
</Text>
<Text  textAlign={"center"} color="white">Research-backed articles to help you care for your body and mind.
</Text>
<Text color="#2C5282" ml="140px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image src="https://cloudfront.fitnessblender.com/assets/img/homepage/articles-720.webp"></Image>
</Box>



<Box w="50%" h="540px" mt="20px" bg="RGBA(0, 0, 0, 0.16)" ml="20px">

<Center>
<Box width="400px" mt="30px">
<Text fontSize="40px" ml="70px"> Healthy Recipies</Text>
<Text  textAlign={"center"}>Fuel your day with recipes by Registered Dietitians and professional chefs.



</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image mt="20px" src="https://cloudfront.fitnessblender.com/assets/img/homepage/recipes-720.webp"></Image>
</Box>


</Flex>


<Box   mt="20px" ml="20px" bg="#EDFDFD">

<Center>
<Box width="400px" mt="30px">
<Text fontSize="40px" ml="60px"> Healthy Recipies</Text>
<Text  textAlign={"center"}>Fuel your day with recipes by Registered Dietitians and professional chefs.



</Text>
<Text color="#2C5282" ml="120px">
<Link >Find a Workout</Link>
</Text>
</Box>
</Center>

    <Image mt="20px" src="https://cloudfront.fitnessblender.com/assets/img/homepage/community-2160.webp"></Image>
</Box>

<Header/>

</>


        
    )
}