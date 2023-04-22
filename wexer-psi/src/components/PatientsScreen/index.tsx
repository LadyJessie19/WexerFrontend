import PatientReg from './PatientReg'
import PatientsList from './PatientsList'
import './style.css'

const PatientsScreen = () => {
  return (
    <>
        <main>
            <div id='mainHeader'>
                <h3>Meus pacientes</h3>
            </div>
            <PatientsList />
            {/* <PatientReg /> */}
        </main>
    </>
  )
}

export default PatientsScreen