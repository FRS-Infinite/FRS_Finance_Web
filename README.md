# FRS Finance Web

Plataforma web de gerenciamento financeiro pessoal da FRS Infinite.

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/)

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/FRS-Infinite/FRS_Finance_Web.git
   cd FRS_Finance_Web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` com as variáveis da API do Supabase:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

4. Execute o projeto:
   ```bash
   npm run dev
   ```

## 🧾 .gitignore

Este projeto ignora os seguintes diretórios para evitar subir arquivos desnecessários:

```
node_modules/
.next/
.env*
```

## 📌 Observações

- **Não versionar `node_modules` nem `.next`**: eles são recriados automaticamente com `npm install` e `next build`.
- Em caso de problemas com arquivos grandes no GitHub, verifique se o histórico foi limpo corretamente ou use Git LFS.

---

Feito com 💡 por FRS Infinite 🚀