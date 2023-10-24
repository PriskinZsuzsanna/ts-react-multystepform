import { Data, PlusServices } from "../types/types"

type Step3Props = {
  userdata: Data,
  saveAddOns: (e: React.ChangeEvent) => void
  plusServices: PlusServices
}

const Step3 = ({ userdata, saveAddOns, plusServices}: Step3Props) => {

  return (
    <section className='section-3'>
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        {
          userdata.plan.planName == '' && (
            <div className="plan-error">
              <p>Choose a plan first!</p>
            </div>
          )
        }
      </header>

      <div className="add-ons">
        <div className={plusServices.online ? 'active add-on' : 'add-on'}>
          <div className='add-on-service'>
            <input type="checkbox" id="check1" name='addOns' data-id='online service' data-price='1' onChange={saveAddOns} checked={plusServices.online}/>
            <div>
              <label htmlFor="check1">Online service</label>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          <div className="price">
            <p className='add-on-price'>{userdata.monthly ? '+$1/mo' : '+$10/yr'}</p>
          </div>
        </div>
      </div>

      <div className="add-ons">
        <div className={plusServices.storage ? 'active add-on' : 'add-on'}>
          <div className='add-on-service'>
            <input type="checkbox" id="check2" name='addOns' data-id='larger storage' data-price='2' onChange={saveAddOns} checked={plusServices.storage} />
            <div>
              <label htmlFor="check2">Larger storage</label>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div className="price">
            <p className='add-on-price'>{userdata.monthly ? '+$2/mo' : '+$20/yr'}</p>
          </div>
        </div>
      </div>

      <div className="add-ons">
        <div className={plusServices.profile ? 'active add-on' : 'add-on'}>
          <div className='add-on-service'>
            <input type="checkbox" id="check3" name='addOns' data-id='customizable profile' data-price='2' onChange={saveAddOns} checked={plusServices.profile}/>
            <div>
              <label htmlFor="check3">Customizable Profile</label>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          <div className="price">
            <p className='add-on-price'>{userdata.monthly ? '+$2/mo' : '+$20/yr'}</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Step3
