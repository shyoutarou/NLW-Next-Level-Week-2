import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem()
{
    return (
        <article className="teacher-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/66930143?s=460&u=9a46318c1563414a627c432d89b8ae53bf359430&v=4" alt="Shyoutarou Shyou" />
          <div>
            <strong>Shyoutarou Shyou</strong>
            <span>Youtuber</span>
          </div>
        </header>
        <p>
           Como ganhar $$$ no Youtube.
        <br /><br />
           Prof. de Youtube curiosidades, politica, games.
        </p>
  
        <footer>
          <p>
            Preço/Hora
            <strong>R$ 5000,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
    )
}

export default TeacherItem;