import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Links = ['Home', 'Education', 'Skill', 'Project'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Menu>
                <MenuButton>
                    <Avatar size='sm' name='Muhammad Afrizal' src='https://pbs.twimg.com/profile_images/1394480605534973952/cSHUgOsJ_400x400.jpg' />{' '}
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link href='https://www.linkedin.com/in/muh-afrizal-nur-47b4a6228/' isExternal>
                            LinkedIn
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href='https://github.com/afrizal0' isExternal>
                            GitHub
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              >
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
