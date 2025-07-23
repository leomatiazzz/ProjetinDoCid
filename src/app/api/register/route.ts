import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "users.json");

type User = {
  usuario: string;
  email: string;
  senha: string;
};

function readUsers(): User[] {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [{ usuario: "admin", email: "admin@example.com", senha: "123" }];
  }
}

function writeUsers(users: User[]) {
  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

export async function POST(req: Request) {
  const { usuario, email, senha } = await req.json();

  if (!usuario || !email || !senha) {
    return NextResponse.json({ error: "Campos em falta" }, { status: 400 });
  }

  const users = readUsers();

  const userExists = users.find(
    (u: User) => u.email === email || u.usuario === usuario
  );
  if (userExists) {
    return NextResponse.json(
      { error: "Utilizador ou email já registado" },
      { status: 409 }
    );
  }

  users.push({ usuario, email, senha });
  writeUsers(users);

  return NextResponse.json({ status: "ok" }, { status: 201 });
}
