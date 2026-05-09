---
name: Star Wars Force Quiz
description: Quiz Star Wars com sabre (lâmina + cabo/hilt), bluelightsaber/evillightsaber, Sensitiva à Força (5x5), roxo via filtro CSS hue-rotate(270deg) no 5x5 (sem botões de escolha), roxo em empates exatos (ex: 2x2), sem cinza
type: project
date: 2026-05-08
---

# Star Wars - Teste da Força

Quiz interativo de Star Wars que determina se o usuário está no lado Jedi, Sith ou Sensitiva à Força.

## Funcionalidades
- 10 perguntas com 4 respostas cada (embaralhadas)
- Pontuação Jedi vs Sith
- Barra de progresso em formato de sabre de luz (**lâmina + cabo/hilt**)
- Música tema Star Wars via Web Audio API (sem arquivos externos)
- Crawl de abertura estilo Star Wars (18s, timeout 19s no JS)
- Efeitos visuais: starfield (200 estrelas), flash de transição
- Compartilhamento de resultado
- Atalhos de teclado: A, B, C, D

## Resultados
- **Jedi** (≥60% Jedi) → Sabre azul (`bluelightsaber.png`)
- **Sith** (≥60% Sith) → Sabre vermelho (`evillightsaber.png`)
- **Sensitiva à Força** (empate exato 5x5) → Sabre roxo, texto "SENSITIVA À FORÇA" (filtro `hue-rotate(270deg) saturate(2)` no `bluelightsaber.png`)
- **Equilibrado** (40-60%, não 5x5) → Sabre roxo (balance)

## Regra de Negócio Importante
- **Não usar cinza (gray-jedi)** — o meio termo é roxo (balance)
- **Empate 5x5** = "SENSITIVA À FORÇA" (não "Gray Jedi")
- **Sabre tem cabo (hilt)** — pommel, grip, switch, emitter
- **Barra roxa em empates exatos**: quando `jediScore === sithScore` (ex: 1x1, 2x2, 3x3, 4x4, 5x5), o sabre fica roxo imediatamente
- **No 5x5**: sabre roxo via filtro CSS (sem botões de escolha), cor NÃO afeta resultado

## Posicionamento do Cabo (Hilt) — NÃO RESOLVIDO
- **Problema reportado**: cabo (hilt) está "em cima da lâmina", deve ficar no começo (esquerda) da lâmina alinhado pela base
- **Tentativa 1**: `.lightsaber` alterado para `align-items: flex-end`
- **Tentativa 2**: `.lightsaber-blade` altura alterada de 10px para 20px (igual ao container)
- **Tentativa 3**: `.lightsaber` alterado para `flex-direction: row; justify-content: flex-start; align-items: flex-end`
- **Tentativa 4**: `.lightsaber-blade` revertido para 10px, `.lightsaber` com `align-items: flex-end`
- **Resultado**: usuário disse "não mudou" todas as vezes — problema persiste, requer investigação futura

## Estado Atual (2026-05-08 — ÚLTIMO)
- Projeto funcional com todas as funcionalidades
- **Alterações 2026-05-07 (Simplificação 5x5):**
  - No 5x5: sabre roxo via filtro CSS `hue-rotate(270deg) saturate(2)` na `bluelightsaber.png`
  - Botões de escolha de cor removidos (HTML e CSS limpos)
  - No 5x5 o sabre já aparece roxo automaticamente, sem escolha
  - Lógica: 10 perguntas total, então empate final = sempre 5x5
- **Alterações 2026-05-06:**
  - Imagens dos sabres no resultado: `bluelightsaber.png` (Jedi) e `evillightsaber.png` (Sith) substituem emojis
  - Empate exato (1x1, 2x2, 3x3, 4x4, 5x5) mostra AMBAS as imagens + título "SENSITIVA À FORÇA"
  - `updateLightsaber()` corrigido: `jediScore === sithScore` aplica classe `balance` (roxo) imediatamente
  - `showResult()` agora usa `isExactTie` para determinar `side = 'balance'`
  - CSS: adicionados `.lightsaber-blade.balance`, `.result-title.balance`, `.result-divider.balance`, `.result-bg-effect.balance` (todos roxos)
- **Posicionamento do cabo (hilt) — NÃO RESOLVIDO**: usuário disse "não mudou" após tentativas de CSS

## Estrutura do Sabre (Hilt + Blade)
### HTML (`index.html`)
```html
<div class="lightsaber" id="lightsaber">
    <!-- Cabo -->
    <div class="lightsaber-hilt">
        <div class="hilt-pommel"></div>
        <div class="hilt-grip"></div>
        <div class="hilt-switch"></div>
        <div class="hilt-emitter"></div>
    </div>
    <!-- Lâmina -->
    <div class="lightsaber-blade" id="lightsaber-blade">
        <div class="blade-glow"></div>
    </div>
</div>
```

### CSS (`style.css`) - Estado Atual
- `.lightsaber` — altura 20px, `align-items: flex-end` (tentativa de fix)
- `.lightsaber-hilt` — altura 10px, flex com pommel/grip/switch/emitter
- `.lightsaber-blade` — altura 10px (revertido de 20px)
- `.hilt-pommel` — contrapeso cinza
- `.hilt-grip` — empunhadura com listras
- `.hilt-switch` — botão vermelho brilhante
- `.hilt-emitter` — emissor com gradiente metal

## Tecnologias
- HTML5, CSS3, JavaScript puro
- Web Audio API (sons e música)
- Canvas API (estrelas)

## Arquivos
- `index.html` — estrutura principal (com hilt adicionado)
- `style.css` — estilos e animações (com hilt CSS, sem regras gray-jedi)
- `script.js` — lógica do quiz, sons, canvas
- `bluelightsaber.png` — imagem do sabre Jedi
- `evillightsaber.png` — imagem do sabre Sith
- `depositphotos_6185463-stock-illustration-green-light-saber.jpg` — imagem verde não utilizada
