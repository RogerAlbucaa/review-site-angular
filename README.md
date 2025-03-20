# FromSoftware Games Review Collection

Uma aplicação Angular moderna que apresenta um catálogo curado dos jogos da FromSoftware, com foco na série Souls e títulos relacionados.

## 🎮 Funcionalidades Implementadas

- Design responsivo com grid de jogos
- Sistema de favoritos com persistência local
- Visualização detalhada de cada jogo
- Navegação intuitiva com rotas
- Interface temática dark/gold
- Carregamento sob demanda (lazy loading)
- Componentes standalone
- Animações suaves de hover e transição
- Suporte a imagens de capa verticais e horizontais
- Botão de favoritar com animação
- Footer com ano dinâmico

## 🛠 Tecnologias Utilizadas

- Angular 19.1.0
- RxJS
- TypeScript
- SCSS
- Material Icons
- Local Storage API

## 💾 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/review-site-angular.git

# Entre no diretório
cd review-site-angular

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

## 📱 Layout Responsivo

O site foi desenvolvido com uma abordagem mobile-first e apresenta:
- Grid responsivo de jogos
- Imagens otimizadas para diferentes resoluções
- Interface adaptativa para diferentes tamanhos de tela
- Componentes reutilizáveis

## 🔄 Gerenciamento de Estado

- Sistema de favoritos utilizando Local Storage
- Serviço centralizado para dados dos jogos
- Interface tipada para melhor manutenção

## 🎨 Design System

- Variáveis CSS customizadas
- Paleta de cores temática (Dark Souls)
- Tipografia consistente com Cinzel
- Ícones do Material Design
- Animações e transições suaves

## 📦 Estrutura do Projeto

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 🔗 APIs Gratuitas Recomendadas

- [RAWG Video Games Database API](https://rawg.io/apidocs) - API gratuita com limite de 20,000 requisições/mês
- [Steam Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API) - API gratuita para dados de jogos Steam
- [Internet Game Database (IGDB)](https://api-docs.igdb.com/) - 4 requisições por segundo no plano gratuito

## 🎨 Recursos de Design

- [Game UI Database](https://www.gameuidatabase.com/) - Referências de UI de jogos
- [Firebase](https://firebase.google.com/) - Backend gratuito (até certo limite)
- [Cloudinary](https://cloudinary.com/) - Hospedagem de imagens gratuita
- [unDraw](https://undraw.co/) - Ilustrações gratuitas
- [Material Icons](https://fonts.google.com/icons) - Ícones gratuitos

## 📚 Bibliotecas Úteis

```bash
# Estilização
npm install @angular/material @angular/cdk
npm install tailwindcss postcss autoprefixer
npm install @ngrx/store @ngrx/effects # Para gerenciamento de estado

# Animações
npm install gsap

# Utilitários
npm install date-fns
npm install ngx-skeleton-loading
```
