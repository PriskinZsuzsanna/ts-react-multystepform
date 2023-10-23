import './Main.css'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'
import { Data } from '../types/types'

type Step2Props = {
  userdata: Data,
  saveUserChoice: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  saveExpiration: () => void
  planError: boolean
}

const Step2 = ({ userdata, saveUserChoice, saveExpiration, planError, }: Step2Props) => {

  return (
    <section className=''>
      <header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        {
          planError && (
            <div className="plan-error">
              <p>Please choose a plan!</p>
            </div>
          )
        }
      </header>

      <div className="plans">
        <div className="plan-selection">
          <div className={userdata.plan.planName == 'arcade' ? 'plan active' : 'plan'} id='plan' data-id='arcade' data-price='9' onClick={(e) => saveUserChoice(e)}>
            <div className="icon">
              <img src={Arcade} alt="" />
            </div>
            <div className="text">
              <h2>Arcade</h2>
              {userdata.monthly ? (
                <p>$9/mo</p>
              ) : (
                <>
                  <p>$90/yr</p>
                  <small className='free'>2 month free</small>
                </>
              )}
            </div>
          </div>

          <div className={userdata.plan.planName == 'advanced' ? 'plan active' : 'plan'} id='plan' data-id='advanced' data-price='12' onClick={(e) => saveUserChoice(e)}>
            <div className="icon">
              <img src={Advanced} alt="" />
            </div>
            <div className="text">
              <h2>Advanced</h2>
              {userdata.monthly ? (
                <p>$12/mo</p>
              ) : (
                <>
                  <p>$120/yr</p>
                  <small className='free'>2 month free</small>
                </>
              )}
            </div>
          </div>

          <div className={userdata.plan.planName == 'pro' ? 'plan active' : 'plan'} id='plan' data-id='pro' data-price='15' onClick={(e) => saveUserChoice(e)}>
            <div className="icon">
              <img src={Pro} alt="" />
            </div>
            <div className="text">
              <h2>Pro</h2>
              {userdata.monthly ? (
                <p>$15/mo</p>
              ) : (
                <>
                  <p>$150/yr</p>
                  <small className='free'>2 month free</small>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="options">
          <h3 className='active'>Monthly</h3>
          <div className="toggle" onClick={saveExpiration}>
            <div className={userdata.monthly ? 'monthly ball' : 'yearly ball'} ></div>
          </div>
          <h3>Yearly</h3>
        </div>
      </div>
    </section>
  )
}

export default Step2
