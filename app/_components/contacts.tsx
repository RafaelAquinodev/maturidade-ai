"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Contact = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  tamanho: string;
  createdAt: string;
};

export default function ContactsPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const formatarTelefone = (telefone: string) => {
    const numeros = telefone.replace(/\D/g, "");

    if (numeros.length === 11) {
      return numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    }

    if (numeros.length === 10) {
      return numeros.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    }

    return telefone;
  };

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) throw new Error("Erro ao buscar contatos");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError("Falha ao carregar contatos");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  if (loading) return <p>Carregando contatos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Lista de Contatos</h1>

      {contacts.length === 0 ? (
        <p>Nenhum contato encontrado.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="border p-4 rounded-md shadow-sm bg-white text-gray-800"
            >
              <p>
                <strong className="font-semibold">Nome:</strong> {contact.nome}
              </p>
              <p>
                <strong className="font-semibold">Email:</strong>{" "}
                {contact.email}
              </p>
              <p>
                <strong className="font-semibold">Telefone:</strong>{" "}
                {formatarTelefone(contact.telefone)}
              </p>
              <p>
                <strong className="font-semibold">Cargo:</strong>{" "}
                {contact.cargo}
              </p>
              <p>
                <strong className="font-semibold">Tamanho da empresa:</strong>{" "}
                {contact.tamanho}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-8">
        <button
          onClick={() => router.push("/")}
          type="submit"
          className="w-full md:w-auto px-6 py-3 font-semibold text-white rounded-md bg-blue-600 hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed "
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
