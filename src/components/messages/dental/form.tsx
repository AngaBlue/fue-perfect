// Chakra and React Hook
import {
  Box,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'
import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react'
// Import Data
import { DentalState, Technic } from './data'

// Import Techniek Components
import AllOnCom from './technics/AllOnCom'
import BrugCom from './technics/BrugCom'
import ImplantaatCom from './technics/ImplantaatCom'
import SinusliftCom from './technics/SinusliftCom'
import WortelkanaalCom from './technics/WortelkanaalCom'
// Styles
import styles from './content.module.scss'

// ** Main **
export default function Form({
  state,
  setState,
}: {
  state: DentalState
  setState: Dispatch<SetStateAction<DentalState>>
}) {
  // ChangeHandler Techniek in Selector
  const changeTechniken: ChangeEventHandler<HTMLSelectElement> = (e) =>
    setState({ ...state, technic: e.target.value })
  // Select Componentin Selector
  const SelectTechniek = useCallback(() => {
    switch (state.technic) {
      case 'Implantaat':
        return <ImplantaatCom state={state} setState={setState} />
        break
      case 'Brug':
        return <BrugCom state={state} setState={setState} />
        break
      case 'Sinuslift':
        return <SinusliftCom state={state} setState={setState} />
        break
      case 'All-on':
        return <AllOnCom state={state} setState={setState} />
        break
      case 'Wortelkanaal behandeling':
        return <WortelkanaalCom state={state} setState={setState} />
        break
      default:
        break
    }
  }, [state.technic])

  return (
    <div>
      <SimpleGrid columns={[1, null, 2, 3, 4]} spacing={4}>
        <Box>
          <FormLabel>Techniek</FormLabel>
          <Select value={state.technic} onChange={changeTechniken}>
            {Technic.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </Select>
          <>{SelectTechniek()}</>
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
