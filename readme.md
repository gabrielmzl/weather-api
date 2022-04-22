# Weather API

<br>
> Api de clima feita em NodeJS com express e puppeteer

<br>

## 💻 Pré-requisitos

* Ter o [NodeJs](https://nodejs.org/) instalado

<br>

## 🚀 Instalando e iniciando a API

- Clone o repositório
- Instale as dependências com `npm install`
- Inicie o servidor com `npm run dev`

Será iniciado um servidor em <http://localhost:3000>

<br>

## Rotas

| URL | Método | Descrição |
| -------- | ------------- | --------- |
| `/api/lugar` | GET | Procura informações sobre o clima do lugar

Onde `lugar` vai ser qual cidade ou país que você quer obter informações sobre o clima.

#### Exemplo

| URL | Método |
| -------- | ------------- |
| `/api/piracicaba` | GET 

Retorna:

```json
  {
    "temperatura": "31",
    "chuva": "0%",
    "umidade": "32%",
    "vento": "14 km/h",
    "data": "sexta-feira, 15:00",
    "local": "Piracicaba, SP",
    "status": "Sol"
  }
```
