import { useState } from 'react'
import './App.css'
import FooterMobile from './components/FooterMobile'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { Data, PlusServices, ErrorObj } from './types/types'
import { useEffect } from 'react'

function App() {

  const [page, setPage] = useState<number>(1)
  const [userdata, setUserdata] = useState<Data>({
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
  const [success, setSuccess] = useState<boolean>(false)
  const [plusServices, setPlusServices] = useState<PlusServices>({
    online: false,
    storage: false,
    profile: false
  })
  const [error, setError] = useState<ErrorObj>({
    ename: false,
    eemail: false,
    ephone: false
  })

  const [planError, setPlanError] = useState<boolean>(false)

  const changePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if ((e.target as Element).className == 'number') {
      setPage(parseInt((e.target as Element).id))
    } else if ((e.target as Element).className == 'btn-secondary') {
      setPage(prevPage => prevPage - 1)
    } else {
      page == 4 ? setPage(4) : setPage(prevPage => prevPage + 1)
    }

    if (success) setSuccess(success => !success)
  }

  const checkUserInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setError({
      ename: false,
      eemail: false,
      ephone: false
    })

    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (userdata.name == '') {
      setError(oldErrors => ({...oldErrors, ename: true}))
    }
    if (userdata.email == '' || pattern.test(userdata.email) == false) {
      setError(oldErrors => ({...oldErrors, eemail: true}))
    }
    if (userdata.phone == '') {
      setError(oldErrors => ({...oldErrors, ephone: true}))
    }

    if(userdata.name != '' && userdata.email != '' && userdata.phone != '') changePage(e)

  }

  const checkPlan = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
    if (userdata.plan.planName != '') {
      setPlanError(false)
      checkUserInput(e)
    } else {
      setPlanError(true)
    }
  }


  const saveUserInput = (e: React.ChangeEvent): void => {
    const name = (e.target as Element).getAttribute("name") || '';
    const value = (e.target as HTMLInputElement).value;
    setUserdata({ ...userdata, [name]: value })
  }

  const saveUserChoice = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const name = (e.target as Element).getAttribute('id') || '';
    const planName = (e.target as Element).getAttribute('data-id');
    const planPrice = (e.target as Element).getAttribute('data-price');
    setUserdata({ ...userdata, [name]: { planName: planName, planPrice: planPrice } })
    setPlanError(false)
  }

  const saveExpiration = (): void => {
    setUserdata({ ...userdata, monthly: !userdata.monthly })
  }

  const saveAddOns = (e: React.ChangeEvent): void => {
    const addOnName = (e.target as Element).getAttribute('data-id') || ''
    const addOnPrice = (e.target as Element).getAttribute('data-price') || ''
    const addOn = {
      addOnName: addOnName,
      addOnPrice: addOnPrice
    }

    const unique = userdata.addOns.filter(object => object.addOnName == addOnName).length == 0
    unique ?
      setUserdata({ ...userdata, addOns: [...userdata.addOns, addOn] }) :
      setUserdata({ ...userdata, addOns: userdata.addOns.filter(i => i.addOnName != addOnName) })

    toggleAddOns(addOnName)
  }

  const toggleAddOns = (str: string): void => {
    if (str == 'online service') setPlusServices({ online: !plusServices.online, storage: plusServices.storage, profile: plusServices.profile })
    if (str == 'larger storage') setPlusServices({ online: plusServices.online, storage: !plusServices.storage, profile: plusServices.profile })
    if (str == 'customizable profile') setPlusServices({ online: plusServices.online, storage: plusServices.storage, profile: !plusServices.profile })

  }

  useEffect(() => {
    console.log(error)
  }, [error])


  useEffect(() => {
    if (page == 1) setSuccess(false)
  }, [page])

  return (
    <div className='container'>
      <Sidebar page={page} changePage={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changePage(e)}
        checkUserInput={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkUserInput(e)}/>
      <Main
        page={page}
        setPage={setPage}
        userdata={userdata}
        setUserdata={setUserdata}
        success={success}
        saveUserInput={(e: React.ChangeEvent) => saveUserInput(e)}
        saveUserChoice={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => saveUserChoice(e)}
        saveExpiration={saveExpiration}
        saveAddOns={(e: React.ChangeEvent) => saveAddOns(e)}
        plusServices={plusServices}
        setPlusServices={setPlusServices}
        setSuccess={setSuccess}
        changePage={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changePage(e)}
        checkUserInput={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkUserInput(e)}
        error={error} setError={setError}
        checkPlan={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkPlan(e)}
        planError={planError}
      />
      <FooterMobile page={page} success={success} setSuccess={setSuccess}
        changePage={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => changePage(e)}
        userdata={userdata} setUserdata={setUserdata}
        setPlusServices={setPlusServices}
        checkUserInput={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkUserInput(e)}
        checkPlan={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => checkPlan(e)}
      />
    </div>
  )
}

export default App
