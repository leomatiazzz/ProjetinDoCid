// Localização: src/app/api/register/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define o caminho para o nosso ficheiro de base de dados
const dbPath = path.join(process.cwd(), 'data', 'users.json');

// Função para ler os utilizadores do ficheiro
function readUsers() {
  try {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Se o ficheiro não existir ou estiver vazio, retorna um array com o admin
    return [{ "usuario": "admin", "email": "admin@example.com", "senha": "123" }];
  }
}

// Função para escrever os utilizadores no ficheiro
function writeUsers(users: any) {
  // Garante que a pasta 'data' existe antes de escrever
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

export async function POST(req: Request) {
  const { usuario, email, senha } = await req.json();

  if (!usuario || !email || !senha) {
    return NextResponse.json({ error: 'Campos em falta' }, { status: 400 });
  }

  const users = readUsers();

  // Verifica se o utilizador ou email já existe
  const userExists = users.find((u: any) => u.email === email || u.usuario === usuario);
  if (userExists) {
    return NextResponse.json({ error: 'Utilizador ou email já registado' }, { status: 409 });
  }

  // Adiciona o novo utilizador
  users.push({ usuario, email, senha });
  writeUsers(users);

  return NextResponse.json({ status: 'ok' }, { status: 201 });
}
