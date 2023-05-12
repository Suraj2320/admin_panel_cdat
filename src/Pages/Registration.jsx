import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Flex, Heading, Select } from "@chakra-ui/react";

export default function Registration() {
    return (


        <Box bg="gray.200 " h="130vh" >
            <Heading as="h2" size="xl" color="teal" textAlign="center" style={{ padding: '20px' }}>
                Schedule Meeting
            </Heading>
            <Box maxWidth="1000px" mx="auto" backgroundColor="white" p={2} borderRadius="20px">
                <form>
                    <Stack spacing={4}>
                        <Flex direction={{ base: 'column', md: 'row' }}>
                            <FormControl mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
                                <FormLabel>Meeting created by</FormLabel>
                                <Select placeholder="Select" style={{ borderColor: 'black' }}>
  <option value="" disabled hidden>Select an option</option>
  <option value="sales">Sales</option>
  <option value="marketing">Marketing</option>
  <option value="finance">Finance</option>
  <option value="hr">Human Resources</option>
</Select>                            </FormControl>
                            <FormControl>
                                <FormLabel>Venue of Meeting</FormLabel>
                                <Select placeholder="Select" style={{ borderColor: 'black' }}>
  <option value="" disabled hidden>Select an option</option>
  <option value="sales">Sales</option>
  <option value="marketing">Marketing</option>
  <option value="finance">Finance</option>
  <option value="hr">Human Resources</option>
</Select>                            </FormControl>
                        </Flex>

                        <FormControl>
                            <FormLabel>Subject</FormLabel>
                            <Input placeholder="Enter subject" style={{ borderColor: 'black' }} />
                        </FormControl>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <FormControl>
                                <FormLabel>Start Date</FormLabel>
                                <Input type="date" style={{ borderColor: 'black' }} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Start Time</FormLabel>
                                <Input type="time" style={{ borderColor: 'black' }} />
                            </FormControl>
                        </Stack>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <FormControl>
                                <FormLabel>End Date</FormLabel>
                                <Input type="date" style={{ borderColor: 'black' }} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>End Time</FormLabel>
                                <Input type="time" style={{ borderColor: 'black' }} />
                            </FormControl>
                        </Stack>

                        <FormControl display="flex" alignItems="center">
                            <FormLabel marginRight="10px">Participants</FormLabel>
                            <Button backgroundColor="black" color="white" borderRadius="0" width="120px" height="35px" mt={2}>
                                Add More
                            </Button>
                        </FormControl>


                        <Flex direction={{ base: 'column', md: 'row' }}>

                            <FormControl mt={{ base: 4, md: 0 }} ml={{ md: 1 }}>
                                <FormLabel>Name of Department</FormLabel>
                                {/* <Select placeholder="Enter department name" style={{ borderColor: 'black' }} /> */}

                                <Select placeholder="Select" style={{ borderColor: 'black' }}>
  <option value="" disabled hidden>Select an option</option>
  <option value="sales">Sales</option>
  <option value="marketing">Marketing</option>
  <option value="finance">Finance</option>
  <option value="hr">Human Resources</option>
</Select>
                            </FormControl>
                            <FormControl mt={{ base: 4, md: 0 }} ml={{ md: 4 }}>
                                <FormLabel>Designation of the Officer</FormLabel>
                                {/* <Input placeholder="Enter designation" style={{ borderColor: 'black' }} /> */}

                                <Select placeholder="Select" style={{ borderColor: 'black' }}>
  <option value="" disabled hidden>Select an option</option>
  <option value="sales">Sales</option>
  <option value="marketing">Marketing</option>
  <option value="finance">Finance</option>
  <option value="hr">Human Resources</option>
</Select>
                            </FormControl>
                        </Flex>

                        <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
                            <FormLabel>Create Agenda</FormLabel>
                            <Button backgroundColor="black" color="white" borderRadius="0" width="120px" height="35px" ml={{ md: 4 }}>
                                Add More
                            </Button>
                        </Flex>

                        <FormControl>
                            <FormLabel>Choose File</FormLabel>
                            <Input type="file" style={{ borderColor: 'black' }} />
                        </FormControl>
                        <Stack direction="row" spacing={4}>
                            <Button colorScheme="red" width="180px">Submit</Button>
                            <Button backgroundColor="black" width="180px" colorScheme="white">Circulate</Button>
                        </Stack>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}
