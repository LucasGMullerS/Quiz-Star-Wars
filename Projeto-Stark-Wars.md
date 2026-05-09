# Star Wars - Teste da Força

**Status:** Em desenvolvimento
**Caminho:** `Projetos/Desenvolvimento/Star-Wars-Force-Quiz/`
**Última atualização:** 2026-05-05

---

## Visão Geral

Quiz interativo de Star Wars que determina se o usuário está no lado Jedi, Sith ou Gray Jedi. Projeto pessoal do Lucas, com foco em efeitos visuais e sonoros imersivos.

---

## Tecnologias

- HTML5, CSS3, JavaScript (sem frameworks)
- Web Audio API (sons e música)
- Canvas API (estrelas em movimento)

---

## Funcionalidades Implementadas

### Intro e Crawl
- Tela de intro: "Há muito tempo, em uma galáxia muito, muito distante..."
- Logo STAR WARS com brilho pulsante
- Botão "PULAR ABERTURA >>" para skip
- Crawl de abertura estilo Star Wars (18s, perspectiva 3D)
- Música tema do Star Wars via Web Audio API (notas B♭, sem arquivos externos)

### Quiz
- 10 perguntas com 4 respostas cada
- Respostas embaralhadas (Fisher-Yates) — labels A/B/C/D seguem a ordem embaralhada
- Pontuação Jedi vs Sith
- Atalhos de teclado: A, B, C, D
- Navegação por teclado

### Barra de Progresso (Sabre de Luz)
- **Cabo (Hilt) + Lâmina** (implementado em 2026-05-05)
- Cabo com: pommel, grip listrado, switch vermelho, emitter
- Lâmina com `border-radius: 4px` (arredondada nas duas pontas)
- Altura alinhada: cabo 24px + lâmina 24px
- Largura cresce conforme progresso (1/10 até 10/10)
- Cores dinâmicas (mudam a cada resposta):
  - **Azul** (≥60% Jedi)
  - **Vermelho** (≥60% Sith)
  - **Roxo** (empate exato: 1x1, 2x2, 3x3, 4x4, 5x5 — "Sensitiva à Força")
- Efeito de brilho (CSS `drop-shadow` + `box-shadow`)
- Animação de pulso interno (`bladePulse`)

### Efeitos Visuais e Sonoros
- Starfield: 200 estrelas em movimento no canvas (velocidade warp durante o quiz)
- Flash de transição nas respostas (azul para Jedi, vermelho para Sith)
- Tela de resultado com **imagens de sabres de luz** (bluelightsaber.png para Jedi, evillightsaber.png para Sith) — implementado em 2026-05-05
- Compartilhamento (Web Share API ou clipboard fallback)
- Totalmente responsivo (desktop, tablet, mobile)

---

## Estrutura de Arquivos

```
Star-Wars-Force-Quiz/
├── index.html      # Estrutura principal
├── style.css       # Estilos e animações
├── script.js       # Lógica do quiz, sons, canvas
└── log-conversa-2026-05-04.md  # Log de conversa anterior
```

---

## Pendências e Melhorias

- [x] **Substituir ícones de resultado por imagens de sabres de luz** — Concluído (bluelightsaber.png e evillightsaber.png)
- [ ] Revisar `script.js` para garantir que `playLightsaberSound()` e `playAnswerSound()` estejam usando Web Audio API corretamente
- [ ] Testar em dispositivos móveis

---

## Correções Recentes (2026-05-05)

1. **Bug `textContent` vs `innerHTML`** — `resultIcon.textContent` com tags `<img>` não renderizava; corrigido para `innerHTML` com emoji temporário
2. **Timeout do crawl** — estava 10s no JS, corrigido para 19s (18s CSS + 1s margem)
3. **CSS do hilt/cabo removido** — código CSS do cabo do sabre foi removido junto com a remoção do HTML
4. **Regras duplicadas no CSS** — removidas duplicatas de `.lightsaber.jedi`, `.lightsaber.sith`, etc.
5. **Seletor `.lightsaber-blade` órfão** — corrigido, agora está definido corretamente

---

## Anotações Técnicas

- Música do Star Wars: função `playStarWarsTheme()` gera as notas B♭ via Web Audio API oscillator
- Crawl: animação CSS `crawlUp` com `perspective: 400px` e `rotateX(25deg)`
- Embaralhamento: Fisher-Yates no `shuffleArray()`, labels A/B/C/D reposicionados dinamicamente
- Gray Jedi: dispara quando `jediCount === 5 && sithCount === 5`

---

## Log de Conversa

Detalhes da sessão anterior salvos em: 

### Sessão 2026-05-06 (Parte 2)
- **Cor simplificada no 5x5**: Usa bluelightsaber.png com filtro CSS  para ficar roxa
- **Removidos botões de escolha de cor** — a cor roxa via filtro é aplicada direto no resultado 5x5
- **Limpeza de CSS**: removidos estilos .color-choice, .btn-color, .saber-purple-icon (não usados)
- **Lógica confirmada**: 10 perguntas total, então empate exato no final = sempre 5x5
### Sessão 2026-05-06
- **Imagens dos sabres no resultado**: Substituído emojis por imagens reais:
  - bluelightsaber.png para Jedi (lado bom)
  - evillightsaber.png para Sith (lado ruim)
  - Ambas as imagens lado a lado para empate exato (Sensitiva à Força)
- **Lâmina roxa em empates**: Corrigido updateLightsaber() para identificar jediScore === sithScore e aplicar classe balance (roxo)
- **Resultado SENSITIVA À FORÇA**: Adicionado caso especial no showResult() para empates exatos (1x1, 2x2, 3x3, 4x4, 5x5)
- **CSS atualizado**: Adicionados estilos .balance para lâmina, título, divisor e background effect (todos roxos)

`log-conversa-2026-05-04.md`
