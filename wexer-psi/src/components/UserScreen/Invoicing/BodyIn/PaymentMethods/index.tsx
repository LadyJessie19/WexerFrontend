const PaymentMethods = () => {
  return (
    <>
        <div className="greyCard">
        <div className="bannerBody">
          <p>Meios de pagamento</p>
        </div>
        <div className="contentCard creditCard">
          <div className="dFlex ">
            <img src="/invoicing/credit-card-img.svg" />
          </div>
          <div>
            <button className="btnGreen">Alterar cartão</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentMethods