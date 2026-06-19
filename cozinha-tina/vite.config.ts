import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O Railway injeta a porta via $PORT. O `preview` precisa escutar em 0.0.0.0
// e aceitar o host publico que o Railway atribui ao servico.
const port = Number(process.env.PORT) || 4173

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    host: true,
    port,
    // O dominio do Railway muda por deploy; liberar todos os hosts evita o
    // bloqueio "host not allowed" do vite preview sem precisar fixar o dominio.
    allowedHosts: true,
  },
})
