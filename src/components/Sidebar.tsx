import './Sidebar.css'
import { useEffect } from 'react'

type SidebarProps = {
    page: number,
    changePage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
     checkUserInput(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const Sidebar = ({ page, changePage, checkUserInput}: SidebarProps) => {

    useEffect(() => {

    }, [page])

    return (
        <aside>
            <section>
                <div className="step">
                    <div className={page == 1 ? 'active siderbar-step-number' : 'siderbar-step-number'}>
                        <button onClick={(e) => changePage(e)} className='number' id='1'>1</button>
                    </div>
                    <div className="siderbar-step-text">
                        <small>Step 1</small>
                        <p className='sidebar-page-title'>Your info</p>
                    </div>
                </div>

                <div className="step">
                    <div className={page == 2 ? 'active siderbar-step-number' : 'siderbar-step-number'}>
                        <button onClick={(e) => checkUserInput(e)} className='number' id='2'>2</button>
                    </div>
                    <div className="siderbar-step-text">
                        <small>Step 2</small>
                        <p className='sidebar-page-title'>Select plan</p>
                    </div>
                </div>

                <div className="step">
                    <div className={page == 3 ? 'active siderbar-step-number' : 'siderbar-step-number'}>
                        <button onClick={(e) => checkUserInput(e)} className='number' id='3'>3</button>
                    </div>
                    <div className="siderbar-step-text">
                        <small>Step 3</small>
                        <p className='sidebar-page-title'>Add-ons</p>
                    </div>
                </div>

                <div className="step">
                    <div className={page == 4 ? 'active siderbar-step-number' : 'siderbar-step-number'}>
                        <button onClick={(e) => checkUserInput(e)} className='number' id='4'>4</button>
                    </div>
                    <div className="siderbar-step-text">
                        <small>Step 4</small>
                        <p className='sidebar-page-title'>Summary</p>
                    </div>
                </div>

            </section>
        </aside>
    )
}

export default Sidebar
