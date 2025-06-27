from pathlib import Path

readme_content = """
# 🛡️ Wayne Security - Sistema de Gerenciamento Interno

Este projeto é um sistema de segurança desenvolvido com **FastAPI**, **MongoDB** e **ReactJS**, inspirado no universo da Wayne Enterprises.

---

## 🚀 Tecnologias Utilizadas

### Backend
- Python 3.12+
- FastAPI
- MongoDB (Atlas ou local)
- JWT (autenticação segura)

### Frontend
- ReactJS (Vite ou CRA)
- Axios
- React Router DOM

---

## 📁 Estrutura do Projeto


---

## 🧪 Como rodar localmente

### 🔧 Backend (FastAPI)

1. Acesse a pasta do backend:

```bash
cd wayne-security

2. Crie um ambiente virtual e ative:

python -m venv venv
venv\\Scripts\\activate  # Windows
source venv/bin/activate  # Linux/macOS

3. Instale as dependências:

pip install -r requirements.txt

4. Crie um arquivo .env:
MONGO_URI=seu_mongodb_aqui
SECRET_KEY=uma_chave_super_secreta

5. Rode o servidor:

uvicorn main:app --reload

🖥️ Frontend (React)
1. Acesse a pasta do frontend:

cd wayne-frontend

2. Instale as dependências:

npm install

3. Rode o app:

npm run dev

Testa funcionalidade:
Usuário: admin
Senha: batman123

Funcionalidades
Login com autenticação JWT

Registro e login de usuários

Painel com estatísticas (dashboard)

CRUD de recursos (veículos, equipamentos etc.)

Proteção de rotas no frontend

Layout responsivo com tema Wayne Enterprises

Segurança

Senhas criptografadas com bcrypt

Token JWT protegido

CORS ativado apenas para localhost:3000

To-Do Futuro

Editar e deletar recursos

Validação de token no frontend

Testes automatizados

Interface mobile com menu colapsável

Desenvolvedor
Feito por Natanael carvalho dos santos como projeto de conclusão do curso na Infinity School 🚀
