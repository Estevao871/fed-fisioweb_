# Vida em Movimento — Frontend

Site institucional e sistema de gestão da clínica de fisioterapia **Vida em Movimento**.
Cobre o caminho completo do paciente: o primeiro contato pelo site, o agendamento da avaliação, o prontuário eletrônico e a evolução sessão a sessão.

> Frontend em **Angular 20**. O backend (Spring Boot + MongoDB) fica em um repositório separado.

---

## Sumário

- [O que o sistema faz](#o-que-o-sistema-faz)
- [Tecnologias](#tecnologias)
- [Como rodar](#como-rodar)
- [Configuração da API](#configuração-da-api)
- [Perfis e rotas](#perfis-e-rotas)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Design system](#design-system)
- [Convenções do projeto](#convenções-do-projeto)
- [Backend](#backend)

---

## O que o sistema faz

### Site (página inicial)
- Apresentação da clínica: especialidades, tratamentos por região do corpo, como funciona o tratamento e sobre a fisioterapeuta
- Animações: modelos 3D em partículas (Three.js) e um caminho que se desenha conforme a página rola (explicado em [`docs/animacao-caminho.md`](docs/animacao-caminho.md))
- Formulário **"Solicite uma Avaliação"**: cria um contato (lead) que aparece no painel da recepção; a clínica retorna em até 24h
- O formulário registra de onde a pessoa veio (ex.: "Interesse: Joelho") para a recepção já saber o assunto

### Login (`/login`)
- Escolha do perfil (Fisioterapeuta, Recepção ou Paciente) e entrada com e-mail e senha
- Um mesmo usuário pode ter **vários perfis**; ele entra no painel do perfil escolhido
- **Lembrar de mim**: mantém a sessão aberta mesmo depois de fechar o navegador
- Mensagens para senha errada, perfil sem acesso, excesso de tentativas e falta de conexão
- Os links do site já abrem com o perfil marcado (`/login?perfil=paciente`)

### Recepção / Admin
- **Novos contatos**: leads vindos do site, com busca e agendamento da avaliação
- **Avaliações**: agenda de avaliações com filtro por data e confirmação de chegada
- **Todos os agendamentos**: lista agrupada por paciente, com filtros, reagendamento e cancelamento
- **Gestão de usuários**: criar, editar (inclusive vários perfis por pessoa), ativar/desativar e redefinir senha

### Fisioterapeuta
- Agenda do dia e calendário mensal
- Meus pacientes, com progresso calculado pelas sessões realizadas
- Avaliações pendentes e concluídas (com edição)
- Prontuário eletrônico: ficha de avaliação, evolução por sessão (dor, mobilidade, exercícios) e histórico completo

### Paciente
- Sessões agendadas e histórico do tratamento
- A conta é criada automaticamente quando o lead vira paciente; a recepção define a senha e repassa

### Fluxo principal

```
Contato pelo site (lead)
  → Recepção agenda a avaliação
    → Paciente chega → recepção confirma a chegada
      → Fisioterapeuta faz a avaliação → ficha clínica preenchida
        → Sessões agendadas
          → A cada sessão: evolução registrada
```

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | Angular 20, componentes standalone (sem NgModules) |
| Linguagem | TypeScript 5.8 |
| Estilo | SCSS por componente + variáveis CSS globais (design system próprio) |
| HTTP | `HttpClient` com interceptors (token JWT e tratamento de erro) |
| 3D | Three.js (modelos `.glb` em partículas) |
| Ícones | Material Symbols Outlined |
| Fontes | Hanken Grotesk · Bricolage Grotesque · Instrument Serif (Google Fonts) |
| Estado | Local em cada componente, com `Observable` (sem NgRx) |

---

## Como rodar

**Pré-requisitos:** Node.js 20+ e o backend rodando em `http://localhost:8080` (ou aponte para a API publicada — veja abaixo).

```bash
# 1. Clonar
git clone https://github.com/Estevao871/fed-fisioweb_.git
cd fed-fisioweb_

# 2. Instalar as dependências
npm install

# 3. Rodar em desenvolvimento
npm start
# → http://localhost:4200
```

### Build de produção

```bash
npm run build
# Arquivos gerados em dist/fisiolife/
```

---

## Configuração da API

| Arquivo | Uso | URL |
|---|---|---|
| `src/environments/environment.ts` | Desenvolvimento (`npm start`) | `http://localhost:8080/api` |
| `src/environments/environment.prod.ts` | Produção (`npm run build`) | `https://srv-fisioterapia.onrender.com/api` |

Para usar a API publicada durante o desenvolvimento, troque o `apiUrl` do `environment.ts`.

---

## Perfis e rotas

| Rota | Quem acessa |
|---|---|
| `/` | Público (site) |
| `/login` | Público |
| `/dashboard/recepcionista` | `recepcionista` e `admin` |
| `/dashboard/fisioterapeuta` | `fisioterapeuta` |
| `/dashboard/paciente` | `paciente` |

- Sem login, qualquer painel redireciona para `/login`.
- O admin não tem painel próprio: entra pelo da recepção.
- Quem tem mais de um perfil pode abrir qualquer um dos painéis que tem.

---

## Estrutura de pastas

```
src/
├── app/
│   ├── core/
│   │   ├── api.service.ts         ← único serviço HTTP (todos os endpoints)
│   │   ├── auth.service.ts        ← login/logout, token, perfis, "lembrar de mim"
│   │   ├── auth.guard.ts          ← protege as rotas por login e perfil
│   │   ├── auth.interceptor.ts    ← envia o token em toda requisição
│   │   ├── error.interceptor.ts   ← sessão expirada (401) volta para o login
│   │   ├── models.ts              ← interfaces do domínio
│   │   └── validators.ts          ← validação de e-mail e telefone
│   ├── pages/
│   │   ├── landing-page/          ← site
│   │   ├── login-page/
│   │   ├── recepcionista-dashboard/
│   │   ├── fisioterapeuta-dashboard/
│   │   └── paciente-dashboard/
│   └── components/
│       ├── especialidades-section/   ┐
│       ├── beneficios-section/       │ seções do site
│       ├── sobre-section/            │
│       ├── contato-section/          ┘ (chamada final + rodapé)
│       ├── particle-model/           ← modelos 3D em partículas (Three.js)
│       ├── contact-form-dialog/      ← modal "Solicite uma Avaliação"
│       ├── appointments-table/       ← agendamentos agrupados por paciente
│       ├── agenda-calendar/          ← calendário mensal da fisio
│       ├── medical-record-dialog/    ← prontuário (avaliação + evolução + histórico)
│       ├── scheduling-dialog/        ← novo agendamento
│       ├── reschedule-dialog/        ← reagendamento com horários livres
│       ├── patient-sessions-dialog/  ← agendar sessões do paciente
│       ├── user-management-panel/    ← gestão de usuários
│       ├── create-user-dialog/
│       └── role-picker/              ← seleção de vários perfis
├── assets/                        ← logo, ilustrações (.webp) e modelos 3D (.glb)
├── environments/
├── styles/_breakpoints.scss       ← breakpoints do guia de estilo
└── styles.scss                    ← design system global (variáveis e classes)
docs/
└── animacao-caminho.md            ← como funciona a animação do "Como funciona"
```

---

## Design system

O visual segue o **Guia de Estilo** do projeto de design. Todas as medidas e cores ficam como variáveis no topo de `src/styles.scss` — **use a variável em vez de escrever o valor solto**.

| Item | Valores |
|---|---|
| Cores | roxo `--purple-600` (#7545C8) · roxo profundo `--purple-800` (#442178) · texto `--gray-900` · fundo `--gray-50` |
| Fontes | `--font-sans` (texto) · `--font-display` (títulos) · `--font-accent` (palavra em itálico, classe `.accent`) |
| Botões (pílula) | `.btn-xl` 56 · `.btn-lg` 48 · `.btn` 44 · `.btn-sm` 42 · `.btn-xs` 40 |
| Campos | altura 48 (painéis) · `.input-lg` 52 (login) · raio 14 · `.input-search` 44 |
| Raios | 7 checkbox · 12 ícone · 14 campo · 20 card · 24 card de número · 28 modal · 999 botões |
| Espaçamentos | `--space-1` a `--space-6` = 4 · 8 · 12 · 16 · 20 · 28 |

**Breakpoints** (em `src/styles/_breakpoints.scss`):

```scss
@use 'breakpoints' as bp;

@media (max-width: bp.$site-mobile) { /* site no celular (< 860) */ }
```

| Variável | Quando muda |
|---|---|
| `bp.$site-menu` | menu do site vira botão (< 1180) |
| `bp.$site-mobile` | site no celular (< 860) |
| `bp.$login-mobile` | login no celular (< 900) |
| `bp.$fisio-mobile` / `bp.$paciente-mobile` | painéis da fisio e do paciente (< 820) |
| `bp.$recep-mobile` | painel da recepção (< 760) |

---

## Convenções do projeto

- Componentes **standalone**, um SCSS por componente.
- Todo acesso à API passa pelo `ApiService` e retorna `Observable` (nunca `.toPromise()`).
- Paginação feita no servidor segue o formato `Page` do Spring (`content`, `totalElements`, `totalPages`, `number`, `size`).
- Seções grandes do site viram componentes próprios em `components/*-section` — mantém o arquivo da landing pequeno.
- Imagens novas em `.webp` (as ilustrações caíram de ~1,5 MB para ~30–50 KB).
- Animações respeitam a opção **"reduzir movimento"** do sistema operacional.

---

## Backend

API REST em Spring Boot + MongoDB (repositório separado). Principais grupos de endpoints:

```
/api/auth           → login
/api/sessoes        → sessões, presença, remarcação e evolução
/api/avaliacoes     → avaliações clínicas (iniciar, finalizar, editar)
/api/pacientes      → pacientes (paginado) e agendamento de sessões
/api/leads          → contatos vindos do site
/api/agendamentos   → horários disponíveis
/api/usuarios       → contas, perfis, status e redefinição de senha
```

Regras validadas no backend: fins de semana bloqueados no agendamento e no máximo 6 pacientes por horário.

---

## Licença

Projeto privado. Todos os direitos reservados.
