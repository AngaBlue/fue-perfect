import {
  AllOn,
  BrugMaterials,
  BrugOptions,
  DentalState,
  ImplantOptions,
  SinusLift,
  Technic,
  Wortel,
} from './data'
import {
  Box,
  Checkbox,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

import styles from './content.module.scss'

export default function Form({
  state,
  setState,
}: {
  state: DentalState
  setState: Dispatch<SetStateAction<DentalState>>
}) {
  const ChangeTechniken = useCallback(
    (e: any) => {
      setState({ ...state, technic: e.target.value })
    },
    [state.technic],
  )

  // const ChangeTechniken = (e: any) => {
  //   setState({ ...state, technic: e.target.value })
  //   console.log('>>>', state.technic)
  // }
  return (
    <div>
      <SimpleGrid columns={[1, null, 2, 3, 4]} spacing={4}>
        <Box>
          <FormLabel>Techniek</FormLabel>
          <Select
            value={state.technic}
            onChange={(e) => {
              ChangeTechniken(e)
            }}
          >
            {Technic.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Select>

          <FormLabel mt={6}>Bone graft</FormLabel>
          <Checkbox ml={3} size="sm" colorScheme="green" value="">
            € 275
          </Checkbox>
        </Box>

        <Box>
          <FormLabel>Extractie</FormLabel>
          <NumberInput min={1} max={32} step={1} precision={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
      </SimpleGrid>
      <div className={styles.tooth_content}>
        <div className={styles.tooth_buttons}></div>
      </div>
    </div>
  )
}
