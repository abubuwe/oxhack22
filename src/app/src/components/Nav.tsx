import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    HStack,
    useColorMode,
    Center,
    Image
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { ConnectWalletButton } from "./ConnectWalletButton"
import { DarkModeSwitch } from './DarkModeSwitch';
  
  const Links = [{label: 'Explore', href: '/explore'}, {label: 'My Accolades', href: '/accolades'}];
  
  const NavLink: React.FC<{to: string}> = ({ to, children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={to}>
      {children}
    </Link>
  );
  
  export const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4}>
          <Flex as="header" h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
               <Image
                      // rounded={'lg'}
                      height={'48px'}
                      width={'48px'}
                      objectFit={'cover'}
                      src={'/favicon.ico'}
                    />  
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link.label} to={link.href}>{link.label}</NavLink>
                ))}
              </HStack>
            </HStack>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                {/* <ConnectWalletButton /> */}
                <DarkModeSwitch/>
  
                {/* <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu> */}
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }