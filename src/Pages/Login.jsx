import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Image,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      // Navigate to the panel page
      navigate('/panel');
    };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100vw"
      minHeight="100vh"
      backgroundColor="gray.600"
      justifyContent="center"
      alignItems="center"
      px={{ base: "1rem", md: "2rem", lg: "4rem", xl: "6rem" }}
    >
      <Flex
        flexDirection="column"
        width="100%"
        backgroundColor="teagray.600"
        justifyContent="center"
        alignItems="center"
        py={{ base: "1rem", md: "2rem", lg: "4rem" }}
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="white" textAlign="center">
            Welcome!
          </Heading>

          <Box
            minW={{ base: "100%", md: "500px" }}
            maxW={{ base: "100%", md: "700px", lg: "800px", xl: "1000px" }}
          >
            <form>
              <Stack
                spacing={4}
                p={{ base: "1rem", md: "1.5rem", lg: "2rem", xl: "3rem" }}
                backgroundColor="white"
                boxShadow="md"
                borderRadius="15px"
              >
                <Heading as="h4" size="md" color="teal" textAlign="center">
                  Login
                </Heading>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height={{ base: "10vh", md: "15vh", lg: "20vh", xl: "25vh" }}
                >
                  <img
                    src="https://cdat.co.in/assets/img/cdat_logo-01.png"
                    alt="Your Image"
                    style={{ maxWidth: "70%", maxHeight: "60%" }}
                  />
                </Box>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="email" placeholder="Username" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
{showPassword ? "Hide" : "Show"}
</Button>
</InputRightElement>
</InputGroup>
<FormHelperText textAlign="left" width="100%">
<Link component="a" variant="h2">
forgot password?
</Link>
</FormHelperText>

</FormControl>

<Button
      borderRadius="15px"
      type="submit"
      variant="solid"
      colorScheme="white"
      color="white"
      backgroundColor="gray.600"
      width="full"
      onClick={handleClick}
    >
      Login
    </Button>
</Stack>
</form>
</Box>
</Stack>
</Flex>
</Flex>
);
};

export default App;
