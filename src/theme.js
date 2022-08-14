import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    fonts: {
        heading: `'Poppins', sans-serif`
    }
}

const Theme = extendTheme({config})
export default Theme