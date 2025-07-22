// Localização: src/app/api/login/route.ts (ATUALIZADO)

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
    // Isto garante que o login de 'admin' continue a funcionar como um fallback
    return [{ "usuario": "admin", "email": "admin@example.com", "senha": "123" }];
  }
}

export async function POST(req: Request) {
  // O nome do campo no formulário de login é 'username', mas no nosso ficheiro é 'usuario'.
  // Vamos usar 'username' para manter a consistência com o que o formulário envia.
  const { username, password } = await req.json();

  const users = readUsers();

  // Procura pelo utilizador no nosso "banco de dados"
  // A validação agora verifica se o 'usuario' no ficheiro corresponde ao 'username' do formulário
  // e se a 'senha' corresponde à 'password'.
  const userFound = users.find(
    (u: any) => u.usuario === username && u.senha === password
  );

  if (userFound) {
    // Retorna sucesso se encontrar o utilizador
    return NextResponse.json({ status: 'ok', user: { username: userFound.usuario } }, { status: 200 });
  }

  // Retorna erro se não encontrar
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
