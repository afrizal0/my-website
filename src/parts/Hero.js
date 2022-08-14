import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcDownload } from 'react-icons/fc';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 24 }}
        >
          <Heading
            fontWeight={900}
            fontSize={{ base: '4xl', sm: '6xl', md: '8xl' }}
            lineHeight={'100%'}
            as={'h1'}
          >
            Afrizal
          </Heading>
          <Text
            color={useColorModeValue('gray.500', 'gray.300')}
            lineHeight={2}
          >
            An Indonesian. Generalist. Interest in backend Development, machine
            learning and mathematics. Ex Software Engineering student. Currently
            studying mathematics.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button rounded={'full'} px={6}>
              <FcDownload />
              Portfolio
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
