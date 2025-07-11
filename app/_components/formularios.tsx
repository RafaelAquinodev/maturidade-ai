"use client";

export default function UserForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nome completo
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Digite seu nome completo"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Digite seu e-mail"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Telefone (WhatsApp)
        </label>
        <input
          type="tel"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Cargo / Função
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ex: Gerente de TI"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Empresa
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nome da empresa"
        />
      </div>
    </form>
  );
}
