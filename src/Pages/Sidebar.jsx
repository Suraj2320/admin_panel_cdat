import { Box, Flex, IconButton, Image, VStack, Button } from '@chakra-ui/react';
import { BellIcon, SettingsIcon, Icon } from '@chakra-ui/icons';
import Registration from './Registration';
import admin from './admin.png';
import cdat_logo from './cdat_logo.png'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      // Navigate to the panel page
      navigate('/panel');
    };


    return (
        <Flex direction="column" h="100vh">
            {/* Navbar */}
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                p="4"
                bg="alphawhite"
                boxShadow="md"
            >
                {/* Left side */}
                <Flex>
                    <Image
                        src={cdat_logo}
                        alt="Logo"
                        boxSize="80px"
                        ml="60px"
                    />
                     <Image  src="https://css-tricks.com/wp-content/uploads/2012/10/threelines.png"  alt="Logo"
                        boxSize="80px"
                        ml="90px"/>
                </Flex>

                {/* Right side */}
                <Flex align="center">
                    <IconButton
                        aria-label="Notifications"
                        variant="ghost"
                        icon={<BellIcon />}
                        mr="4"
                    />
                    <Image src={admin} alt="Admin Image" boxSize="40px" borderRadius="full" />
                   
                </Flex>
            </Flex>

            {/* Main content */}
            <Flex flex="1">
                {/* Sidebar */}
                <Box as="aside" w="250px" bg="alphawhite" p="4">
                    <Flex justifyContent="center">
                       
                       
                        <VStack spacing="6" align="stretch">
                        <Button variant="ghost" _hover={{ color: 'pink' }} onClick={handleClick}>
      <img
        src="https://cdn.icon-icons.com/icons2/3522/PNG/512/dashboard_icon_221153.png"
        alt=""
        style={{ width: '30px', marginRight: '5px' }}
      />
      Dashboard
    </Button>
                            <Button variant="ghost" _hover={{ color: 'pink' }} onClick={()=>navigate("/sidebar")}>
                                <img src="https://www.pngkit.com/png/full/805-8050584_meeting-logo-png-meeting-icon-png.png" alt="" style={{ width: '30px', marginRight: '5px' }} />
                                Meeting
                            </Button>
                        </VStack>



                    </Flex>
                    {/* Sidebar content */}
                </Box>

                {/* Main content section */}
                <Box flex="1" p="4">
                    {/* Add your main content here */}
                    <Registration />
                </Box>
            </Flex>
        </Flex>
    );
};

export default AdminDashboard;