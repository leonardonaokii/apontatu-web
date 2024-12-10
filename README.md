## Framework:
Foi decidido utilizar o react, visto que tem um bom desempenho graças ao Virtual DOM e a facilidade de componentização, 
sendo assim possível reutilizar diversas vezes as mesmas funções e recursos em diferentes partes do sistema.


## Estrutura:
Foi separado por responsabilidades, tendo na estrutura as pastas:
- **assets**: Arquivos estáticos.
- **components**: Componentes compartilhados pelas páginas.
- **hooks**: Hooks customs.
- **pages**: Páginas do site.
- **routes**: Configurações gerais de rota.
- **services**: Os serviços utilizados pelo site.
- **styles**: Estilos globais do site.
- **utils**: Funções comuns a vários componentes

## Algumas Libs utilizadas
- **styled-components**: Facilita na estilização dos componentes.
- **yup**: Validação de parâmetros.
- **js-cookie**: Gerenciamento de cookies.


### Pré-requisitos
- **Node v22.12.0**
- **Npm 10.9.0**

### Para iniciar o Frontend:
  1. Fazer o clone do projeto
  2. Abrir o terminal na pasta do arquivo
  3. Instalar as dependências com o comando "npm i"
  4. Rodar o comando "npm run dev"

Obs: O serviço da api está configurado para chamar a api local na porta 5148, da forma que está configurada no arquivo 
lauchsettings.json da api em dotnet do repositório: https://github.com/leonardonaokii/apontatu-api
