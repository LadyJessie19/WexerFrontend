import { useState } from 'react'
import '../style.css'
import Pagination from './Pagination'
import ModalWelcome from '../ModalWelcome'
import { Link } from 'react-router-dom'
import ButtonTinyWatch from '../../../reusable/Buttons/ButtonsTiny/ButtonTinyWatch'
import '../../../reusable/Buttons/styleButtons.css'
import SearchInputWexer from '../../../reusable/SearchInputWexer'

const Patients = () => {
  const [pages, setPages] = useState(1)

  const onPageChange = (newPage:number) => {
    setPages(newPage)
  }
  return (
    <div className="dFlex">
      <div id='backPatients'>
          <div id="headerPatients">
          <ModalWelcome/>
          <div>
            <SearchInputWexer />
          </div>
          </div>
          <div >
            <table id="tablePatients">
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td className='colorBlue'>Código</td>
                    <td className='colorBlue'>Nome</td>
                    <td className='colorBlue'>CPF</td>
                    <td>&nbsp;</td>
                  </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><Link to="/prontuario"><ButtonTinyWatch/></Link> </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><Link to="/prontuario"><ButtonTinyWatch/></Link> </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><Link to="/prontuario"><ButtonTinyWatch/></Link> </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><Link to="/prontuario"><ButtonTinyWatch/></Link> </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><Link to="/prontuario"><ButtonTinyWatch/></Link> </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><Link to="/prontuario"><ButtonTinyWatch/></Link> </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
      <Pagination currentPage={pages} totalPages={4} onPageChange={onPageChange}/>
    </div>
  )
}

export default Patients