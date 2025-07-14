"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
type FormData = {
  nome: string;
  email: string;
  telefone: string;
  cargo: string;
  tamanho: string;
};

export default function UserForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Enviando dados:", data);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      alert("Formulário enviado com sucesso!");
      router.push("/contatos");
    } catch (err) {
      alert("Erro ao enviar formulário");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nome completo
        </label>
        <input
          {...register("nome", { required: "Nome é obrigatório" })}
          placeholder="Digite seu nome completo"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.nome && (
          <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          {...register("email", { required: "E-mail é obrigatório" })}
          placeholder="Digite seu e-mail"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Telefone (WhatsApp)
        </label>
        <input
          type="tel"
          {...register("telefone", { required: "Telefone é obrigatório" })}
          placeholder="(00) 00000-0000"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.telefone && (
          <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Cargo / Função
        </label>
        <input
          {...register("cargo", { required: "Cargo é obrigatório" })}
          placeholder="Ex: Gerente de TI"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.cargo && (
          <p className="text-red-500 text-sm mt-1">{errors.cargo.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Tamanho da Empresa (número de funcionários)
        </label>
        <select
          {...register("tamanho", { required: "Selecione o tamanho" })}
          defaultValue=""
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
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
        {errors.tamanho && (
          <p className="text-red-500 text-sm mt-1">{errors.tamanho.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-6 py-3 font-semibold text-white rounded-md bg-blue-600 hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
