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
          Tamanho da Empresa (número de funcionários)
        </label>
        <select
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          defaultValue=""
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="ate-50">Até 50 funcionários</option>
          <option value="51-200">51 a 200 funcionários</option>
          <option value="201-500">201 a 500 funcionários</option>
          <option value="501-1000">501 a 1000 funcionários</option>
          <option value="acima-1000">Acima de 1000 funcionários</option>
        </select>
      </div>
      <button
        disabled
        className="w-full md:w-auto px-6 py-3 font-semibold text-white rounded-md 
             bg-blue-600 hover:bg-blue-700 transition 
             disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Enviar
      </button>
    </form>
  );
}
