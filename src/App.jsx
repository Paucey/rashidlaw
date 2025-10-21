import { Box, Flex, Heading, Button, Image, Spacer } from "@chakra-ui/react";
import logo from './assets/images/asaflogo.png';
import BlogPosts from './BlogPosts.jsx';

export default function App() {
  return (
    <Box bg="brand.800" minH="100vh">
      {/* Header */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        p={4}
        bg="brand.700"
        boxShadow="sm"
      >
        <Flex align="center" gap="3">
          <Image src={logo} alt="Law Firm Logo" boxSize="50px" />
          <Heading as="h1" size="md" color="brand.900">
            Rashid Law
          </Heading>
        </Flex>

        <Spacer />

        <Flex gap="4">
          <Button variant="ghost" colorScheme="brand">About</Button>
          <Button variant="ghost" colorScheme="brand">Media</Button>
          <Button variant="ghost" colorScheme="brand">Contact</Button>
          <Button variant="ghost" colorScheme="brand">Areas</Button>
          <Button variant="ghost" colorScheme="brand">Blog</Button>
        </Flex>
      </Flex>

      {/* Top content */}
      <Box p={8} bg="brand.800">
        <Heading as="h2" size="lg" mb={4} color="white">
          Rashid Law: The Lawest Law
        </Heading>
        <Box maxW="600px" color="whiteAlpha.900">
          So much law, so little time.
        </Box>

        {/* Blog posts */}
        <BlogPosts />
      </Box>
    </Box>
  );
}
