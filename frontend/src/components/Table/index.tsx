import axios from "axios";
import React, { useEffect, useState } from "react";

type User = {
  id: number,
  name: string,
  age: number,
}

type TableProps = {
  loadingAtt: {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
}


function Table({ loadingAtt }: TableProps) {
  const [users, setUsers] = useState<User[]>([]);
  const { loading } = loadingAtt;

  useEffect(() => {
    axios.get<User[]>('http://localhost:3001/users')
      .then((data) => setUsers(data.data));
  }, [loading]);

  return(
    <div className="w-full flex flex-col justify-center items-center pt-5 pb-96 bg-slate-300">
      <h2 className="text-slate-800 text-2xl">
        Usuários
      </h2>
      {
        loading ? <h1>Carregando...</h1> : (
          <table className="table-auto border border-collapse w-3/4 mt-5 text-center">
          <thead className="bg-[rgb(23,53,110)] text-slate-50">
            <tr>
              <th className="table-border">Id</th>
              <th className="table-border">Nome</th>
              <th className="table-border">Idade</th>
            </tr>
          </thead>
          <tbody>
              {
                users.map((user) => (
                  <tr key={user.id} className="bg-slate-200">
                    <td className="table-border">{user.id}</td>
                    <td className="table-border">{user.name}</td>
                    <td className="table-border">{user.age}</td>
                  </tr>
                ))
              }
          </tbody>
      </table>
        )
      }
    </div>
  );
}

export default Table;