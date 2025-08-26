// src/App.jsx
import React, { useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";

import ProductForm from "./components/ProductForm";
import ListarProdutos from "./components/ListarProdutos";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {!user ? (
        <div className="flex flex-col items-center gap-4 mt-20">
          <h1 className="text-2xl font-bold">Controle de Vencimentos</h1>
          <button
            onClick={handleLogin}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Entrar com Google
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Controle de Vencimentos</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sair
            </button>
          </div>

          {/* Formulário de Cadastro */}
          <ProductForm onAdd={handleAdd} />

          {/* Lista de Produtos */}
          <ListarProdutos
            products={products}
            onDelete={handleDelete}
            onConfirmarPerda={handleConfirmarPerda}
          />
        </div>
      )}
    </div>
  );
}
