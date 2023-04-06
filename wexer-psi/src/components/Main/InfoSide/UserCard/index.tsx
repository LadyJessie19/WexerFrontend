

const UserCard = () => {
  return (
    <div id="userCard">
      <div>
        <h4>Identificação do paciente</h4>
      </div>
      <div>
        <div>
          <img src="/react.svg" width={'20px'} />
          <span>Paciente</span>
          <p>Ana Ester Resende</p>
        </div>
        <div>
          <img src="/react.svg" width={'20px'} />
          <span>Nascimento</span>
          <p>10/09/2000</p>
        </div>
        <div>
          <img src="/react.svg" width={'20px'} />
          <span>Profissão</span>
          <p>Designer</p>
        </div>
        <div>
          <img src="/react.svg" width={'20px'} />
          <span>Escolaridade</span>
          <p>Superior incompleto</p>
        </div>                
      </div>
    </div>
  )
}

export default UserCard