import React from 'react'

const NewNoteBar = () => {
  return (
    <div id='newNoteBar'>
        <img src="/main/pencil.svg" />
        <input type="text" placeholder='Faça suas anotações pessoais aqui...' />
        <hr />
        <div id='buttonsNewNote'>
            <div className='buttonNewNote'>
                <img src="/main/health2.svg" width={'25px'} />
                <span>Sessão</span>
            </div>
            <div className='buttonNewNote'>
            <img src="/main/map2.svg" width={'25px'} />
                <span>Fato Relevante</span>
            </div>
            <div className='buttonNewNote'>
            <img src="/main/2.svg" width={'25px'} />
                <span>Anexo</span>
            </div>
            <div className='buttonNewNote'>
            <img src="/main/doc2.svg" width={'20px'} />
                <span>Avaliação Psicológica</span>
            </div>
        </div>
    </div>
  )
}

export default NewNoteBar