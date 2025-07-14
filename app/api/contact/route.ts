import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET() {
  try {
    const contatos = await prisma.contact.findMany();
    return NextResponse.json(contatos);
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar contatos" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Recebido no backend:", data);

  try {
    const lead = await prisma.contact.create({
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        cargo: data.cargo,
        tamanho: data.tamanho,
      },
    });

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return NextResponse.json({ error: "Erro ao salvar" }, { status: 500 });
  }
}
