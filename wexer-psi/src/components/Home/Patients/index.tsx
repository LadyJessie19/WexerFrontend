import { useState } from 'react'
import '../style.css'
import Pagination from './Pagination'
import ModalWelcome from '../ModalWelcome'
import { Link } from 'react-router-dom'
import ButtonTinyWatch from '../../../reusable/Buttons/ButtonsTiny/ButtonTinyWatch'
import '../../../reusable/Buttons/styleButtons.css'

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
            <input type="search" placeholder='Pesquisar' />
            <input type="submit" value="Filtrar" />
          </div>
          <div id="tablePatients">
            <table>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>Código</td>
                    <td>Nome</td>
                    <td>CPF</td>
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