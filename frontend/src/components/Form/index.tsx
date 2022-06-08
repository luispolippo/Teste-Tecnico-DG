import React from "react";

function Form() {
  return (
    <form className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 py-10 w-full border bg-slate-100">
      <div className="input-wrapper">
        <label className="text-slate-800">Nome:</label>
        <input type="text" placeholder="Digite seu nome" className="input"/>
      </div>

      <div className="input-wrapper">
        <label className="text-slate-800">Data de nascimento:</label>
        <input type="date" className="input w-60 md:w-36 pr-1"/>
      </div>
    </form>
  );
}

export default Form;