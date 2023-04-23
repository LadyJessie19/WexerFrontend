import { useState } from 'react';
import '../../../../../../Modals/styleModals.css';
import '../../../../../../reusable/Buttons/styleButtons.css'

import ButtonSection from '../../../../../../reusable/Buttons/MedRecButtons/ButtonSection';
import ButtonCreate from '../../../../../../reusable/Buttons/ButtonCreate';
import ButtonCancel from '../../../../../../reusable/Buttons/ButtonCancel';
import ButtonTinyClose from '../../../../../../reusable/Buttons/ButtonsTiny/ButtonTinyClose';

function ModalSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <ButtonSection onClick={handleModal} />
      {isOpen && (
        <>
          <div className="backgroundModal" onClick={handleModal}></div>
          <div className="contentModal">
            <div className='dFlex spaBet'>
                <h2>Nova Sessão</h2>
                <ButtonTinyClose onClick={handleModal}/>
            </div>
            <div className='dFlex gap1 centerStart mb1'>
                <span className='greenCircle fontL'>1</span> <span className='fontBold'>Dados Gerais</span> 
            </div>
            <div className='dFlex gap1 mb1'>
                <div>
                    <label className='dFlex flexCol'>
                        Data*
                        <input className='input' value={'2023-01-24'} type="date"/>
                    </label>
                </div>
                <div>
                    <label className='dFlex flexCol'>
                        Hora de inicio*
                        <input className='input' value={'12:00'} type="time"/>
                    </label>
                </div>
                <div>
                    <label className='dFlex flexCol'>
                        Hora fim*
                        <input className='input' value={'13:00'} type="time"/>
                    </label>
                </div>
            </div>
            <hr />
            <div className='dFlex gap1 centerStart mb1'>
                <span className='greenCircle fontL'>2</span>  <span className='fontBold'>Sessão</span>
            </div>
            <div className='mb1'>
                <div className='mb1'>
                    <label className='dFlex flexCol startCenter'>
                        Titulo*
                        <input placeholder='Digite' className='input' type="text" />
                    </label>
                </div>
                <div>
                    <label className='dFlex flexCol startCenter'>
                        Resumo da sessão*
                        <textarea placeholder='Text' className='textarea'></textarea>
                    </label>
                </div>
            </div>
            <div className='dFlex spaBet'>
                <div>
                    <small>*Campos Obrigatórios</small>
                </div>
                <div className='dFlex'>
                    <ButtonCancel />
                    <ButtonCreate />
                </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ModalSection;
