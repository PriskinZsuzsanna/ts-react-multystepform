import { Data, ErrorObj, PlusServices } from '../types/types'
import FooterDesktop from './FooterDesktop'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'

type MainProps = {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  userdata: Data,
  setUserdata: React.Dispatch<React.SetStateAction<Data>>
  success: boolean,
  saveUserInput: (e: React.ChangeEvent) => void
  saveUserChoice: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  saveExpiration: () => void
  saveAddOns: (e: React.ChangeEvent) => void
  plusServices: PlusServices,
  setPlusServices: React.Dispatch<React.SetStateAction<PlusServices>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
  changePage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  checkUserInput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  error: ErrorObj
  setError: React.Dispatch<React.SetStateAction<ErrorObj>>,
  checkPlan(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  planError: boolean
}

const Main = ({ page, setPage, userdata, setUserdata, success, saveUserInput, saveUserChoice,
  saveExpiration, setSuccess, changePage, saveAddOns, plusServices, setPlusServices, checkUserInput, error,
  setError, checkPlan, planError,}: MainProps) => {
  return (
    <main style={{ position: 'relative' }}>
      {
        page == 1 && (
          <Step1 userdata={userdata}
            saveUserInput={(e: React.ChangeEvent) => saveUserInput(e)}
            error={error}
            setError={setError}
          />
        )
      }
      {
        page == 2 && (
          <Step2 userdata={userdata}
            saveUserChoice={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => saveUserChoice(e)}
            saveExpiration={saveExpiration}
            planError={planError}/>
        )
      }
      {
        page == 3 && (
          <Step3 userdata={userdata}
            saveAddOns={(e: React.ChangeEvent) => saveAddOns(e)}
            plusServices={plusServices} />
        )
      }
      {
        page == 4 && (
          !success ?
            <Step4
              userdata={userdata}
              setPage={setPage}

            /> : <Step5 />
        )
      }

      <FooterDesktop page={page} success={success} setSuccess={setSuccess}
        changePage={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changePage(e)}
        userdata={userdata} setUserdata={setUserdata}
        setPlusServices={setPlusServices}
        checkUserInput={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkUserInput(e)}
        checkPlan={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkPlan(e)}
      />
    </main>
  )
}

export default Main
