const NavBar = ({link1, link2, link3}:any) => {
  return (
    <div id="navBar">
        <img src="/main/Mask(2).svg" width={'9px'} />
        <span>Home</span>
        <span>|</span>
        <span>{link1}</span>
        <span>|</span>
        <span>{link2}</span>
        <span>|</span>
        <span>{link3}</span>
        <span>|</span>
        <span><strong>Avaliação:</strong>  Trânsito</span>
        <span>|</span>
        <span><strong>Cliente:</strong> Ana Maria</span>
        <span>|</span>
        <span><strong>CPF:</strong> 885.012.130-00</span>
    </div>
  )
}

export default NavBar