# Imagem base do Node.js
FROM node:20-alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências 
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o restante do código
COPY . .

# URL da API utilizada pelo frontend
ARG NEXT_PUBLIC_API_URL=http://localhost:5000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Constrói a aplicação Next.js
RUN npm run build

# Define a porta
EXPOSE 3000

# Permite acesso externo ao servidor
ENV HOSTNAME="0.0.0.0"

# Inicia a aplicação
CMD ["npm", "start"]