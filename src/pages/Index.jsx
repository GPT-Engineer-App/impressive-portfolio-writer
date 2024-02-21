import { Box, Container, Heading, Text, Stack, VStack, HStack, Image, Button, Link, Divider, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaFileAlt } from "react-icons/fa";

const Index = () => {
  // Portfolio sections
  const Header = () => {
    return (
      <Box as="header" bg="teal.500" color="white" py={10}>
        <Container maxW="container.lg">
          <VStack spacing={2} alignItems="flex-start">
            <Heading as="h1" size="xl">
              Jane Doe
            </Heading>
            <Text fontSize="xl">Content Writer & Storyteller</Text>
            <HStack spacing={4}>
              <Link href="mailto:jane.doe@example.com" isExternal>
                <Icon as={FaEnvelope} w={6} h={6} />
              </Link>
              <Link href="https://linkedin.com/in/janedoe" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} />
              </Link>
              <Link href="https://twitter.com/janedoe" isExternal>
                <Icon as={FaTwitter} w={6} h={6} />
              </Link>
              <Link href="https://github.com/janedoe" isExternal>
                <Icon as={FaGithub} w={6} h={6} />
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>
    );
  };

  const About = () => {
    return (
      <Container maxW="container.lg" py={10}>
        <VStack spacing={4} alignItems="flex-start">
          <Heading as="h2" size="lg">
            About Me
          </Heading>
          <Text fontSize="md">I'm Jane Doe, a passionate content writer with over 5 years of experience in creating engaging stories for various mediums. I specialize in crafting compelling narratives, blog posts, and editorial content that resonate with audiences. With a keen eye for detail and a creative mind, I bring ideas to life through my words.</Text>
          <Button leftIcon={<FaFileAlt />} colorScheme="teal" variant="outline">
            Download Resume
          </Button>
        </VStack>
      </Container>
    );
  };

  const Portfolio = () => {
    return (
      <Container maxW="container.lg" py={10}>
        <VStack spacing={4} alignItems="flex-start">
          <Heading as="h2" size="lg">
            Portfolio
          </Heading>
          <Divider />
          {/* Portfolio items here, could be mapped from an array of portfolio items */}
          <Stack spacing={8} w="full" direction={{ base: "column", md: "row" }}>
            <Box w="full">
              <Image src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcG9ydGZvbGlvJTIwc2FtcGxlfGVufDB8fHx8MTcwODUzOTA1N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Writing Sample" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>
                The Art of Storytelling
              </Heading>
              <Text fontSize="sm">An exploration into the techniques that make stories memorable and impactful.</Text>
            </Box>
            <Box w="full">
              <Image src="https://images.unsplash.com/photo-1615220367990-1940567341f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwd3JpdGluZyUyMHNhbXBsZXxlbnwwfHx8fDE3MDg1MzkwNTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Content Writing Sample" borderRadius="md" />
              <Heading as="h3" size="md" mt={2}>
                Effective Content Marketing
              </Heading>
              <Text fontSize="sm">A comprehensive guide to creating content that drives engagement and sales.</Text>
            </Box>
          </Stack>
        </VStack>
      </Container>
    );
  };

  const Footer = () => {
    return (
      <Box as="footer" bg="gray.100" color="gray.700" py={6}>
        <Container maxW="container.lg" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</Text>
        </Container>
      </Box>
    );
  };

  // Combine all sections for the index page
  return (
    <Box>
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </Box>
  );
};

export default Index;
