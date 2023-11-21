// src/components/TabelaUsuarios.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css'

export default function EmployeeTable() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/funcionarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Setor</th>
          <th>Função</th>
          <th>Ramal</th>
          <th>Celular Loja</th>
          <th>Celular Particular</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nome}</td>
            <td>{usuario.funcao.setor.nome}</td>
            <td>{usuario.funcao.nome}</td>
            <td>{usuario.ramal}</td>
            <td>{usuario.telefone_corporativo || '-'}</td>
            <td>{usuario.telefone_particular || '-'}</td>
            <td>{usuario.cidade.nome}</td>
            <td>
              <button>Matricule-se</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};