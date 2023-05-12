import { Box, Flex, IconButton, Image, VStack, Button, useBreakpointValue } from '@chakra-ui/react';
import { BellIcon, SettingsIcon } from '@chakra-ui/icons';
import Registration from './Registration';
import admin from './admin.png';
import Admin from './Admin';
import cdat_logo from './cdat_logo.png';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const sidebarWidth = useBreakpointValue({ base: '100%', md: '250px' });

    const navigate = useNavigate();


    return (
        <Flex direction="column" minH="100vh">
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
                    <Image src={cdat_logo} alt="Logo" boxSize="80px" ml={{ base: '20px', md: '60px' }} />
                </Flex>

                <Image src="https://css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="Logo"
                    boxSize="80px"
                    ml="-70%" />

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
                <Box as="aside" w={sidebarWidth} bg="alphawhite" p="4">
                    <Flex justifyContent="center">
                        <VStack spacing="6" align="stretch">
                            <Button variant="ghost" _hover={{ color: 'pink' }}>
                                <Image
                                    src="https://cdn.icon-icons.com/icons2/3522/PNG/512/dashboard_icon_221153.png"
                                    alt=""
                                    boxSize={{ base: '20px', md: '30px' }}
                                    mr="5px"
                                />
                                Dashboard
                            </Button>
                            <Button variant="ghost" _hover={{ color: 'pink' }} onClick={()=>navigate("/sidebar")}>
                                <Image
                                    src="https://www.pngkit.com/png/full/805-8050584_meeting-logo-png-meeting-icon-png.png"
                                    alt=""
                                    boxSize={{ base: '20px', md: '30px' }}
                                    mr="5px"
                                />
                                Meeting
                            </Button>
                        </VStack>
                    </Flex>
                </Box>

                {/* Main content section */}
                <Admin />
            </Flex>
        </Flex>
    );
};

export default AdminDashboard;
