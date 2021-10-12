import { EmailIcon, ExternalLinkIcon, LockIcon } from '@chakra-ui/icons';
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Link,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { MailProviders } from '../data/constants';
import { defaultProvider } from '../data/form';

export default function Credentials(props: {
  state: typeof defaultProvider
  setState: Dispatch<SetStateAction<typeof defaultProvider>>
}) {
  const { state, setState } = props
  return (
    <>
      <SimpleGrid columns={4} spacing={10}>
        <Box>
          <FormLabel>Email Provider</FormLabel>
          <RadioGroup
            value={state.provider}
            onChange={p => setState({ ...state, provider: p })}
          >
            <Stack>
              {Object.values(MailProviders).map(p => (
                <Radio key={p} value={p}>
                  {p}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        </Box>
        <Box>
          <FormLabel>Email Address</FormLabel>
          <InputGroup size="md">
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              placeholder="example"
              type="email"
              value={state.email}
              onChange={e => setState({ ...state, email: e.target.value })}
            />
            <InputRightAddon
              children={`@${state.provider.toLowerCase()}.com`}
            />
          </InputGroup>
        </Box>
        <Box>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type="password"
              value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
            />
          </InputGroup>
        </Box>
      </SimpleGrid>
      <Box h={8} py={2}>
        {state.provider === MailProviders.GMAIL && (
          <Text>
            Please ensure that you have enabled unsafe applications in your{' '}
            <Link
              href="https://myaccount.google.com/lesssecureapps"
              isExternal
              color="teal.500"
            >
              Google Settings <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </Text>
        )}
      </Box>
    </>
  )
}
