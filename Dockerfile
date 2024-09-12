# Usa a imagem base do Node.js versão slim
FROM node:20.5.1-slim

# Instala curl para suportar a instalação de features
RUN apt-get update && apt-get install -y curl

# Define o usuário 'node' para evitar rodar o container como root
USER node

# Define o diretório de trabalho dentro do container
WORKDIR /home/node/app

# Comando padrão ao iniciar o container (chama o script start.sh)
CMD [".docker/start.sh"]
