import './FooterMobile.css'
import { Data, PlusServices } from '../types/types'

type FooterProps = {
  page: number,
  success: boolean,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
  changePage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void
  userdata: Data
  setUserdata: React.Dispatch<React.SetStateAction<Data>>
  setPlusServices: React.Dispatch<React.SetStateAction<PlusServices>>
  checkUserInput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  checkPlan(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const FooterMobile = ({ page,  success, setSuccess, changePage, userdata, setUserdata, setPlusServices, 
  checkUserInput, checkPlan }: FooterProps) => {

  const confirmOrder = () => {
    setSuccess(true)
    console.log(userdata)
    setUserdata({
      name: '',
      email: '',
      phone: '',
      plan: {
        planName: '',
        planPrice: ''
      },
      monthly: true,
      addOns: []
    })
    setPlusServices({
      online: false,
      storage: false,
      profile: false
    })
  }


  return (
    !success && (
      <footer className='footer-mobile'>
        {page == 1 && (
          <button onClick={(e) => checkUserInput(e)} className='btn-primary'>Next Step</button>
        )}
        {page == 2 && (
          <>
            <button onClick={(e) => changePage(e)} className='btn-secondary'>Go Back</button>
            <button onClick={(e) => checkPlan(e)} className='btn-primary'>Next Step</button>
          </>
        )}
        {page == 3 && (
          <>
            <button onClick={(e) => changePage(e)} className='btn-secondary'>Go Back</button>
            <button onClick={(e) => changePage(e)} className='btn-primary'>Next Step</button>
          </>
        )}
        {page == 4 && (
          <>
            <button onClick={(e) => changePage(e)} className='btn-secondary'>Go Back</button>
            <button onClick={confirmOrder} className='btn-primary btn-purple'>Confirm</button>
          </>
        )}
      </footer>
    )
  )
}

export default FooterMobile
