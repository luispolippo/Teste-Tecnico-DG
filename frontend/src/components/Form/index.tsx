import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";

type FormType = {
  name: string,
  birthDate: string,
}

type FormProps = {
  loadingAtt: {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001'

function Form({ loadingAtt }: FormProps) {
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const { loading, setLoading } = loadingAtt

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
    setLoading(true);
    await axios.post(`${BASE_URL}/users`, data);
    setLoading(false);
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
          data-testid="name-input"
        />
      </div>

      <div className="input-wrapper">
        <label className="text-slate-800">Data de nascimento:</label>
        <input
          type="date"
          className="input w-60 md:w-36 pr-1"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          data-testid="birthDate-input"
        />
      </div>
      {
        loading ? <h1>Carregando...</h1> : (
          <button
            className="bg-green-600 mt-2 px-3 py-1 rounded-sm text-slate-50 disabled:bg-gray-300"
            disabled={buttonDisabled}
            data-testid="form-button"
          >
              Salvar
          </button>
        )
      }
    </form>
  );
}

export default Form;