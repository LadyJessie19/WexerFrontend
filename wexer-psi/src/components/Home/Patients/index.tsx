import { useState } from 'react'
import '../style.css'
import Pagination from './Pagination'
import ModalWelcome from '../ModalWelcome'

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
            <button>Novo cadastro</button>
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
                  <td><button>Watch</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><button>Watch</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><button>Watch</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><button>Watch</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><button>Watch</button></td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>2812</td>
                  <td>Ana Maria</td>
                  <td>885.012.130-00</td>
                  <td><button>Watch</button></td>
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