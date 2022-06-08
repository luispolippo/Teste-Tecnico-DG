import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

type FormType = {
  name: string,
  birthDate: string,
}

function Form() {
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (name.length && birthDate.length) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, birthDate]); 

  const clearStates = () => {
    setName('');
    setBirthDate('');
  }

  const sendForm = async (data: FormType) => {
    await axios.post('http://localhost:3001/users', data);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = { name, birthDate };
    clearStates();
    sendForm(data);
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 py-10 w-full border bg-slate-100"
    >
      <div className="input-wrapper">
        <label className="text-slate-800">Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <label className="text-slate-800">Data de nascimento:</label>
        <input
          type="date"
          className="input w-60 md:w-36 pr-1"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>

      <button
        className="bg-green-600 mt-2 px-3 py-1 rounded-sm text-slate-50 disabled:bg-gray-300"
        disabled={buttonDisabled}
      >
          Salvar
      </button>
    </form>
  );
}

export default Form;