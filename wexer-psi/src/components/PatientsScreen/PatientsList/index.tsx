const PatientsList = () => {
  return (
    <>
      <section>
        <div id="sectionHeader">
          <div>
            <button>Novo Cadastro</button>
          </div>
          <div>
            <input type="search" />
            <button type="submit">Filtrar</button>
            <div>
              <small>Filtro simples</small>
            </div>
          </div>
        </div>
        <div id="sectionBody">
          <table>
            <tr>
              <th>
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th>Código</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Guia</th>
              <th>Prontuário</th>
              <th>&nbsp;</th>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>28</td>
              <td>Ana Maria</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <button>Editar</button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>55</td>
              <td>Ana Clara</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <button>Editar</button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>2452</td>
              <td>Cesar Pinheiro</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <button>Editar</button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>42</td>
              <td>Carlos Eduardo</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <button>Editar</button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>2248</td>
              <td>Silvia Moreira</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <button>Editar</button>{" "}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="checkbox" />{" "}
              </td>
              <td>24</td>
              <td>Wander Martins</td>
              <td>885.012.130-00</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>
                {" "}
                <button>Editar</button>{" "}
              </td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default PatientsList;
