// src/components/TabelaUsuarios.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css'

export default function EmployeeTable(){
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../../../public/json/example.json'); 
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
            <td>{usuario.setor}</td>
            <td>{usuario.funcao}</td>
            <td>{usuario.ramal}</td>
            <td>{usuario.celularLoja}</td>
            <td>{usuario.celularParticular || 'N/A'}</td>
            <td>{usuario.cidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};