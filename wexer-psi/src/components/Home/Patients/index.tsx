import { useEffect, useState } from "react";
import "../style.css";
import Pagination from "./Pagination";
import ModalWelcome from "../ModalWelcome";
import { Link } from "react-router-dom";
import ButtonTinyWatch from "../../../reusable/Buttons/ButtonsTiny/ButtonTinyWatch";
import "../../../reusable/Buttons/styleButtons.css";
import SearchInputWexer from "../../../reusable/SearchInputWexer";
import { getPatient } from "../../../services/functions";

const Patients = () => {
  const patientObj = {
    name: '',
    birthdate: '',
    profession: '',
    schooling: '',
    personalAnnotations: '',
    _id: ''
  }

  const [pages, setPages] = useState(1);
  const [patient, setPatient] = useState(patientObj);

  const onPageChange = (newPage: number) => {
    setPages(newPage);
  };

  const getUser = async () => {
    const id = localStorage.getItem("patient_id");
    const currentPatient = await getPatient(id);
    return setPatient(currentPatient.data);
  };
  
  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <div className="dFlex">
      <div id="backPatients">
        <div id="headerPatients">
          <ModalWelcome />
          <div>
            <SearchInputWexer />
          </div>
        </div>
        <div>
          <table id="tablePatients">
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="colorBlue">Código</td>
                <td className="colorBlue">Nome</td>
                <td className="colorBlue">Profissão</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{patient._id}</td>
                <td>{patient.name}</td>
                <td>{patient.profession}</td>
                <td>
                  <Link to="/prontuario">
                    <ButtonTinyWatch />
                  </Link>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>2812</td>
                <td>Ana Maria</td>
                <td>885.012.130-00</td>
                <td>
                  <Link to="/prontuario">
                    <ButtonTinyWatch />
                  </Link>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>2812</td>
                <td>Ana Maria</td>
                <td>885.012.130-00</td>
                <td>
                  <Link to="/prontuario">
                    <ButtonTinyWatch />
                  </Link>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>2812</td>
                <td>Ana Maria</td>
                <td>885.012.130-00</td>
                <td>
                  <Link to="/prontuario">
                    <ButtonTinyWatch />
                  </Link>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>2812</td>
                <td>Ana Maria</td>
                <td>885.012.130-00</td>
                <td>
                  <Link to="/prontuario">
                    <ButtonTinyWatch />
                  </Link>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>2812</td>
                <td>Ana Maria</td>
                <td>885.012.130-00</td>
                <td>
                  <Link to="/prontuario">
                    <ButtonTinyWatch />
                  </Link>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        currentPage={pages}
        totalPages={4}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Patients;
