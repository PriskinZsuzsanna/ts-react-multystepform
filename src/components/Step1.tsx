import { Data, ErrorObj } from '../types/types'
import './Main.css'

type Step1Props = {
  userdata: Data
  saveUserInput: (e: React.ChangeEvent) => void
  error: ErrorObj
  setError: React.Dispatch<React.SetStateAction<ErrorObj>>,
}

const Step1 = ({ userdata, saveUserInput, error, setError }: Step1Props) => {

  return (
    <section>
      <header>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.
        </p>
      </header>

      <div className="form">
        <div className="label-error">
          <label htmlFor="name">Name</label>
          {error.ename && (
            <p className='error-message'>This field is required</p>
          )}
        </div>
        <input className={error.ename ? 'error' : ''} type="text" id='name' placeholder='e.g. Stephen King' name='name' value={userdata.name} onChange={saveUserInput} onFocus={() => setError(old => ({ ...old, ename: false }))} required />

        <div className="label-error">
          <label htmlFor="email">Email Address</label>
          {error.eemail && (
            <p className='error-message'>This field is required</p>
          )}
        </div>
        <input className={error.eemail ? 'error' : ''} type="email" id='email' placeholder='e.g. stephenking@lorem.com' name='email' value={userdata.email} onChange={saveUserInput} onFocus={() => setError(old => ({ ...old, eemail: false }))} required />

        <div className="label-error">
          <label htmlFor="phone">Phone Number</label>
          {error.ephone && (
            <p className='error-message'>This field is required</p>
          )}
        </div>
        <input className={error.ephone ? 'error' : ''} type="text" id='phone' placeholder='e.g. +1 234 567 890' name='phone' value={userdata.phone} onChange={saveUserInput} onFocus={() => setError(old => ({ ...old, ephone: false }))} required />

      </div>

    </section>
  )
}

export default Step1
