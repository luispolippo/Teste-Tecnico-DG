import React from "react";

function Table() {
  return(
    <div className="w-full flex flex-col justify-center items-center pt-5 pb-96 bg-slate-300">
      <h2 className="text-slate-800 text-2xl">
        Usuários
      </h2>
      <table className="table-auto border border-collapse w-3/4 mt-5 text-center">
        <thead className="bg-[rgb(23,53,110)] text-slate-50">
          <tr>
            <th className="table-border">Nome</th>
            <th className="table-border">Idade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-border">Guilherme Polippo</td>
            <td className="table-border">28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;