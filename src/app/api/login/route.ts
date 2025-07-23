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

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const users = readUsers();

  const userFound = users.find(
    (u: User) => u.usuario === username && u.senha === password
  );

  if (userFound) {
    return NextResponse.json(
      { status: "ok", user: { username: userFound.usuario } },
      { status: 200 }
    );
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
