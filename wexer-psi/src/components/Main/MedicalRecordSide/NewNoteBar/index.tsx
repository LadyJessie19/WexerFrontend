import React from 'react'

const NewNoteBar = () => {
  return (
    <div id='newNoteBar'>
        <input type="text" placeholder='Faça suas anotações pessoais aqui...' />
        <hr />
        <div id='buttonsNewNote'>
            <div className='buttonNewNote'>
                <img src="/vite.svg" width={'40px'} />
                <span>Sessão</span>
            </div>
            <div className='buttonNewNote'>
                <img src="/vite.svg" width={'40px'} />
                <span>Fato Relevante</span>
            </div>
            <div className='buttonNewNote'>
                <img src="/vite.svg" width={'40px'} />
                <span>Anexo</span>
            </div>
            <div className='buttonNewNote'>
                <img src="/vite.svg" width={'40px'} />
                <span>Avaliação Psicológica</span>
            </div>
        </div>
    </div>
  )
}

export default NewNoteBar