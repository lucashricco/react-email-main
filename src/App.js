import { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === ''){
      alert("Preencha o campo NOME!");
    }else if(email === ''){
      alert("Preencha o campo EMAIL!");
    }else if(message === ''){
      alert("Preencha o campo MENSAGEM!");
    }else{

      const templateParams = {
        from_name: name,
        email: email,
        message: message

      }

      //lembar de configurar o serviço do emailjs quando for utilizar, pois desativei o serviço
      emailjs.send("", "", templateParams, "") //aqui vão as configurações necessárias para o envio do email
      .then((response) => {
        alert("MENSAGEM ENVIADA COM SUCESSO!")
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')

      }, (erro) => {
        console.log("ERRO", erro)
      })
    }

    
  }

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;
