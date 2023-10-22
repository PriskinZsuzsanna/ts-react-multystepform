import { useEffect, useState } from "react"
import { Data } from "../types/types"


type Step4Props = {
  userdata: Data,
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const Step4 = ({ userdata,setPage }: Step4Props) => {

  const [shorthand, setShorhand] = useState<string>('')
  const [duration, setDuration] = useState<string>('')

  const getDuration = () => {
    setDuration(userdata.monthly ? 'monthly' : 'yearly');
    setShorhand(userdata.monthly ? 'mo' : 'yr');
  }

 
  
  const sum = (): number => {
    let planSum = parseInt(userdata.plan.planPrice)
    let addOnSum = 0
    userdata.addOns.map(obj => {
      addOnSum += parseInt(obj.addOnPrice)
    })
    return userdata.monthly ? planSum + addOnSum : 10 * (planSum + addOnSum)
  }

  const chartAt0UpperCase = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const changePlan = (n:number) => {
    setPage(n)
  }

  useEffect(() => {
    getDuration()
  }, [])

  return (
    <section className=''>
      <header>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <div className="basket-summary">
        <div className="choosen-plan">
          <div className="plan-text">
            {
              userdata.plan.planName ? (
                <h4>{chartAt0UpperCase(userdata.plan.planName)}({chartAt0UpperCase(duration)})</h4>
              ) : (
                <p onClick={() => changePlan(2)}>Please choose a plan!</p>
              )
            }
            <button onClick={() => changePlan(2)}>Change</button>
          </div>
          <div className="price">
            {userdata.plan.planName ? (
              <p>${userdata.monthly ? userdata.plan.planPrice : parseInt(userdata.plan.planPrice) * 10}/{shorthand}</p>
            ): (
              <p>$0</p>
            )}
          </div>
        </div>

        <hr />

        <div className="choosen-add-ons">
          {
            userdata.addOns.length == 0 && (
              <small  onClick={() => changePlan(3)}>Add more services</small>
            )
          }
                
          {userdata.addOns.map((o, idx) => (
            <div className="add-on-sum" key={idx}>
              <p>{chartAt0UpperCase(o.addOnName)}</p>
              <p>+${userdata.monthly ? o.addOnPrice : parseInt(o.addOnPrice) * 10}/{shorthand}</p>
            </div>
          ))}
          
        </div>
      </div>

      <div className="summary">
        <p>Total (per {userdata.monthly ? 'month' : 'year'})</p>
        {
          userdata.plan.planName ? (
            <p className="total-number">+$ {sum()}/{shorthand}</p>
          ) : (
            <p>$0</p>
          )
        }
      </div>
    </section>
  )
}

export default Step4
