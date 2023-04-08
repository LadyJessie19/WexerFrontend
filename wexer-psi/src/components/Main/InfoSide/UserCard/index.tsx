

const UserCard = () => {
  return (
    <div className="sideCard">
      <div>
        <h4>Identificação do paciente</h4>
      </div>
      <div>
        <div>
          <img src="/side-section/user.svg" width={'14px'} />
          <span>  Paciente</span>
          <p>Ana Ester Resende</p>
        </div>
        <div>
          <img src="/side-section/date.svg" width={'14px'} />
          <span> Nascimento</span>
          <p>10/09/2000</p>
        </div>
        <div>
          <img src="/side-section/bag.svg" width={'14px'} />
          <span> Profissão</span>
          <p>Designer</p>
        </div>
        <div>
          <img src="/side-section/doc.svg" width={'14px'} />
          <span> Escolaridade</span>
          <p>Superior incompleto</p>
        </div>                
      </div>
    </div>
  )
}

export default UserCard