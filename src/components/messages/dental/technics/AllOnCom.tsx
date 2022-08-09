import { AllOn, DentalState } from '../data'
import { Box, FormLabel, Select } from '@chakra-ui/react'
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

export default function AllOnCom({
  state,
  setState,
}: {
  state: DentalState
  setState: Dispatch<SetStateAction<DentalState>>
}) {
  const changeAllOnOptions: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setState({ ...state, allOn: e.target.value })

  return (
    <Box>
      <FormLabel mt={6}>Opties</FormLabel>
      <Select mt={6} onChange={changeAllOnOptions}>
        {AllOn.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </Select>
    </Box>
  )
}
