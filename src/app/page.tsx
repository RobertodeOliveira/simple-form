"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "yup";
import * as yup from "yup";

const formSchemaAdress = object({
  cep: string().min(1, "informe o Cep"),
  logradouro: string().min(8, "informe seu endereço").required(),
  numero: string().min(2, "informe um número válido").required(),
  complemento: string().required(),
  bairro: string().min(2, "informe um bairro").required(),
  cidade: string().min(1, "informe a cidade").required(),
  estado: string().min(1, "informe o estado").required(),
});

type FormData = yup.InferType<typeof formSchemaAdress>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(formSchemaAdress),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="p-4 bg-slate-400 w-6/12 m-auto mt-4 rounded-md">
      <h1 className="text-3xl pb-6 text-white text-center">Formulário</h1>
      <form className=" flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("cep", { required: true })}
          className="w-full mt-1 placeholder:text-sm"
          type="text"
          placeholder="CEP"
          name="cep"
        />
        {errors.cep && (
          <span className="text-sm text-red-800">{errors.cep.message}</span>
        )}
        <input
          {...register("logradouro")}
          className="w-full mt-3 placeholder:text-sm"
          type="text"
          placeholder="Logradouro"
          name="logradouro"
        />
        {errors.logradouro && (
          <span className="text-sm text-red-800">
            {errors.logradouro.message}
          </span>
        )}
        <input
          {...register("numero")}
          className="w-full mt-3 placeholder:text-sm"
          type="text"
          placeholder="Numero"
        />
        {errors.numero && (
          <span className="text-sm text-red-800">{errors.numero.message}</span>
        )}
        <input
          {...register("complemento")}
          className="w-full mt-3 placeholder:text-sm"
          type="text"
          placeholder="Complemento"
        />
        <input
          {...register("bairro")}
          className="w-full mt-3 placeholder:text-sm"
          type="text"
          placeholder="Bairro"
        />
        {errors.bairro && (
          <span className="text-sm text-red-800">{errors.bairro.message}</span>
        )}
        <input
          {...register("cidade")}
          className="w-full mt-3 placeholder:text-sm"
          type="text"
          placeholder="Cidade"
        />
        {errors.cidade && (
          <span className="text-sm text-red-800">{errors.cidade.message}</span>
        )}
        <input
          {...register("estado")}
          className="w-full mt-3 mb-4 placeholder:text-sm"
          type="text"
          placeholder="Estado"
        />
        {errors.estado && (
          <span className="text-sm text-red-800">{errors.estado.message}</span>
        )}
        <div className="mt-4 w-full flex justify-between">
          <button className="bg-white rounded-sm w-1/3" type="submit">
            Enviar
          </button>

          <button
            onClick={() => {
              reset();
            }}
            className="bg-white rounded-sm w-1/3"
            type="button"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  );
}
