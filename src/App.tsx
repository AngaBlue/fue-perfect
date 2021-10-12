import { EmailIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Divider,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  SimpleGrid,
  StylesProvider,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { usePersistedState } from './components/usePersistedState';
import { Countries } from './data/constants';
import { defaultCustomer, defaultProvider, HairType } from './data/form';
import ReactDOMServer from 'react-dom/server';
import theme from './theme';
import messages from './data/messages';
import Credentials from './components/Credentials';

export function App() {
  const [provider, setProvider] = usePersistedState('provider', defaultProvider)
  const [customer, setCustomer] = usePersistedState('customer', defaultCustomer)

  async function send() {
    console.log(ReactDOMServer.renderToStaticMarkup(message.content));
    provider.email += `@${provider.provider.toLowerCase()}.com`
    window.Main.sendMail(provider, customer, {
      subject: message.subject,
      content: ReactDOMServer.renderToStaticMarkup(message.content),
    })
  }

  useEffect(() => {
    window.Main.on('sendMailResponse', (...args: any) => {
      console.log(args)
    })
  }, [])

  const message = messages[0]({ customer })

  return (
    <ChakraProvider theme={theme}>
      <StylesProvider value={{}}>
        <Box p={4} pt={2}>
          <Heading mb={4}>Custom Mail App</Heading>
          <Credentials state={provider} setState={setProvider} />
          <Divider my={4} />
          <SimpleGrid columns={4} spacing={10}>
            <Box>
              <FormLabel>Customer First Name</FormLabel>
              <InputGroup>
                <Input
                  placeholder="John"
                  value={customer.firstname}
                  onChange={e =>
                    setCustomer({ ...customer, firstname: e.target.value })
                  }
                />
              </InputGroup>
            </Box>
            <Box>
              <FormLabel>Customer Last Name</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Smith"
                  value={customer.lastname}
                  onChange={e =>
                    setCustomer({ ...customer, lastname: e.target.value })
                  }
                />
              </InputGroup>
            </Box>
            <Box>
              <FormLabel>Customer Email Address</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  placeholder="example@mail.com"
                  type="email"
                  value={customer.email}
                  onChange={e =>
                    setCustomer({ ...customer, email: e.target.value })
                  }
                />
              </InputGroup>
            </Box>
            <Box>
              <FormLabel>Customer Country</FormLabel>
              <RadioGroup
                value={customer.country}
                onChange={country => setCustomer({ ...customer, country })}
              >
                <VStack align="left">
                  {Object.values(Countries).map(c => (
                    <Radio key={c} value={c}>
                      {c}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </Box>
            <Box>
              <FormLabel>Hair Type</FormLabel>
              <VStack align="left">
                {(Object.keys(HairType) as Array<keyof typeof HairType>).map(
                  v => (
                    <Checkbox
                      isChecked={customer.hair.type[v]}
                      key={v}
                      onChange={function () {
                        customer.hair.type[v] = !customer.hair.type[v]
                        setCustomer({ ...customer })
                      }}
                    >
                      {v}
                    </Checkbox>
                  )
                )}
              </VStack>
            </Box>
            <Box>
              <FormLabel>Hair Volume</FormLabel>
              <VStack align="left">
                {(Object.keys(HairType) as Array<keyof typeof HairType>).map(
                  v => (
                    <Checkbox
                      isChecked={customer.hair.volume[v]}
                      key={v}
                      onChange={function () {
                        customer.hair.volume[v] = !customer.hair.volume[v]
                        setCustomer({ ...customer })
                      }}
                    >
                      {v}
                    </Checkbox>
                  )
                )}
              </VStack>
            </Box>
          </SimpleGrid>
          <Button onClick={send} backgroundColor="teal.500" mt={4}>
            Send e-mail
          </Button>
          <Divider my={4} />
          <Heading mb={4} as="h2">
            Email Preview
          </Heading>
          <Box id="preview">{message.content}</Box>
        </Box>
      </StylesProvider>
    </ChakraProvider>
  )
}
