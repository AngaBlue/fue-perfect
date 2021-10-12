import { Box } from '@chakra-ui/layout'
import { Customer } from '../data/form'

export default function Preview(props: { customer: Customer }) {
  const { customer } = props;
  return (
    <Box>
      Hello {customer.name},
      <br />
      You wanted to do the process in {customer.country}...
    </Box>
  )
}
