import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import department from './department.png'
import meeting from './meeting.png'
// import meeting from './Images/meeting.png'


const data = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 15 },
    { name: "Mar", value: 8 },
    { name: "Apr", value: 20 },
    { name: "May", value: 12 },
    { name: "Jun", value: 18 },
];

const App = () => {
    return (
        <Box p={4} bg="gray.200 " h="160vh"  >
            <Flex justifyContent="space-between" alignItems="flex-start" mb={4}>
                <Box borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" bg="white" width="430px" height="140px">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex alignItems="center" >
                            {/* <Icon as={RiCalendar2Line} boxSize={16} mr={12} /> */}
                            <Heading as="h3" fontSize="md" fontWeight="bold">
                                Total Meetings
                            </Heading>

                        </Flex>

                        <img src={meeting} alt="Icon" width="60" height="60" style={{ position: 'absolute', top: '5px', right: '5px' }} />
                    </Flex>
                    {/* Your content for total meetings */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" boxSize={16} mr={12}>
                        12,503
                    </Heading>
                </Box>

                <Box borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" bg="white" width="430px" height="140px">
                    <Flex justifyContent="space-between" alignItems="center">
                        <Flex alignItems="center" >
                            {/* <Icon as={AiOutlineTeam} boxSize={16} mr={12} /> */}
                            <Heading as="h3" fontSize="md" fontWeight="bold">
                                Total Departments
                            </Heading>
                        </Flex>
                        <img src={department} alt="Icon" width="60" height="60" style={{ position: 'absolute', top: '5px', right: '5px' }} />
                    </Flex>
                    {/* Your content for total departments */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" boxSize={16} mr={12}>
                        9,503
                    </Heading>
                </Box>
            </Flex>










            <Box borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" bg="white" width="100%" height="260px">
                <Heading as="h2" fontSize="xl" fontWeight="bold" mb={4} marginLeft="-75%">
                    Today's Schedule
                </Heading>
                <Flex justifyContent="space-between" alignItems="center" mb={4} bg="#D3D3D3" height="150px" borderRadius="md" mt="30px">
                    <Box
                        // border="1px solid gray"
                        borderRadius="4px"
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
                        p={4}
                        height="100%"
                        width="33%"
                    >
                        <Heading as="h3" fontSize="md" fontWeight="bold" mb={2} height="98px">
                            Total Meetings
                        </Heading>
                        {/* Your content for total meetings today */}
                        <Heading as="h2" fontSize="xl" fontWeight="bold" mt="-55px" color="teal">
                            30
                        </Heading>
                    </Box>
                    <Box
                        // border="1px solid gray"
                        borderRadius="4px"
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
                        p={4}
                        height="100%"
                        width="33%"
                    >
                        <Heading as="h3" fontSize="md" fontWeight="bold" mb={2} height="98px">
                            Departments
                        </Heading>
                        {/* Your content for departments today */}
                        <Heading as="h2" fontSize="xl" fontWeight="bold" mt="-55px" color="teal">
                            10
                        </Heading>
                    </Box>
                    <Box
                        // border="1px solid gray"
                        borderRadius="4px"
                        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
                        p={4}
                        height="100%"
                        width="33%"
                    >
                        <Heading as="h3" fontSize="md" fontWeight="bold" mb={2} height="98px" width="83%">
                            Participants
                        </Heading>
                        {/* Your content for participants today */}
                        <Heading as="h2" fontSize="xl" fontWeight="bold" mt="-55px" color="teal">
                            1,503
                        </Heading>
                    </Box>
                </Flex>
            </Box>


























            <Flex justifyContent="space-between" alignItems="center" mb={4}>
                <Box
                    borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" mt="25px" bg="white" width="25%" height="140px"
                >
                    <Heading as="h3" fontSize="md" fontWeight="bold" mb={2}>
                        Total Action Points
                    </Heading>
                    {/* Your content for total action points */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="25px">
                        10
                    </Heading>
                </Box>
                <Box
                    borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" mt="25px" bg="white" width="25%" height="140px"
                >
                    <Heading as="h3" fontSize="md" fontWeight="bold" mb={2}>
                        Total Compliances
                    </Heading>
                    {/* Your content for total compliant */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="25px">
                        100
                    </Heading>
                </Box>
                <Box
                    borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" mt="25px" bg="white" width="25%" height="140px"
                >
                    <Heading as="h3" fontSize="md" fontWeight="bold" mb={2}>
                        Action Points
                    </Heading>
                    {/* Your content for action points */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="25px">
                        200
                    </Heading>
                </Box>
                <Box
                    borderWidth="2px" borderColor="white" borderRadius="md" p={4} boxShadow="md" position="relative" mt="25px" bg="white" width="22%" height="140px"
                >
                    <Heading as="h3" fontSize="md" fontWeight="bold" mb={2}>
                        Completed
                    </Heading>
                    {/* Your content for completed */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="25px">
                        200
                    </Heading>
                </Box>
            </Flex>


            <Box bg='white' borderRadius="md" height="40%" width="100%" mt="10%">
                <Heading as="h2" fontSize="xl" fontWeight="bold" mb={4} marginLeft="-70%">
                    Meeting Overview
                </Heading>
                <LineChart width={900} height={400} data={data} >
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                <Flex justifyContent="space-between" alignItems="flex-start" mb={4}>
                    <Box borderColor="white" borderRadius="md" p={4} position="relative" bg="white" width="450px" height="140px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Heading as="h5" fontSize="md" fontWeight="bold" boxSize={16} mr={11} mt="30px">
                            1,50,308
                        </Heading>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Flex alignItems="center">
                                <Heading as="h3" fontSize="md" fontWeight="bold" textAlign="center">
                                    Total Meetings of this year
                                </Heading>
                            </Flex>
                        </Flex>
                        {/* Your content for total meetings */}
                    </Box>

                    <Box borderColor="white" borderRadius="md" p={4} position="relative" bg="white" width="460px" height="140px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Heading as="h5" fontSize="md" fontWeight="bold" boxSize={16} mr={11} mt="30px">
                            3,70,506
                        </Heading>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Flex alignItems="center">
                                <Heading as="h3" fontSize="md" fontWeight="bold" textAlign="center">
                                    Total Participants of the Year
                                </Heading>
                            </Flex>
                        </Flex>
                        {/* Your content for total departments */}
                    </Box>
                </Flex>

            </Box>


            {/* Pendact section  */}

            <Box

  width="290px"
  h="90vh"
  display="flex"
  alignItems="center"
  justifyContent="center"
  flexDirection="column"
  marginLeft="105%"
  marginTop="-120%"
  boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
  border="1px solid #ccc"
  borderRadius="4px"
  padding="8px"
  bg=" #EEEEEE,"


>

    <Heading as="h2" fontSize="xl" fontWeight="bold" mb={4} marginLeft="-60%" mt="-50px" >Pendency</Heading>
  <Box
    bg="#D3D3D3"
    borderRadius="15px"
    
    width="250px"
    height="110px"
    marginBottom="8px"
    border="1px solid #ccc"
   
    boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
  >
     <Heading as="h3" fontSize="md" fontWeight="bold" mt="10px">
                        Total Pending Action Points
                    </Heading>
                    {/* Your content for total action points */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="15px">
                        1,503
                    </Heading>
  </Box>



  <Box
     bg="#D3D3D3"
    borderRadius="15px"
    width="250px"
    height="110px"
    marginBottom="8px"
    border="1px solid #ccc"
    boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
  >
   <Heading as="h5" fontSize="md" fontWeight="bold" mb={2} mt="10px">
  High Priority
</Heading>
                    {/* Your content for total action points */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="-5px">
                        503
                    </Heading>
  </Box>

  <Box
     bg="#D3D3D3"
     borderRadius="15px"
     width="250px"
    height="110px"
    marginBottom="8px"
    border="1px solid #ccc"
    boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
  >
     <Heading as="h3" fontSize="md" fontWeight="bold" mb={2} mt="20px">
                        Normal Priority 
                    </Heading>
                    {/* Your content for total action points */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="15px">
                        800
                    </Heading>
  </Box>

  <Box
     bg="#D3D3D3"
     borderRadius="15px"
     width="250px"
    height="110px"
    border="1px solid #ccc"
    boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
  >
    <Heading as="h3" fontSize="md" fontWeight="bold" mb={2 } mt="20px">
                      Low Priority
                    </Heading>
                    {/* Your content for total action points */}
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mt="15px">
                        800
                    </Heading>
  </Box>
</Box>




        </Box>
    );
};

export default App;