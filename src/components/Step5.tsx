import ThankYou from '../assets/images/icon-thank-you.svg'


const Step5 = () => {

  return (
    <section className=''>
      <div className="thank-you">
        <div className="circle">
          <img src={ThankYou} alt="" />
        </div>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free
      to email us at support@loremgaming.com.</p>
      </div>
    </section>
  )
}

export default Step5
