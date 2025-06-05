# Roadmap do Design System — R2 Agência Digital

Este documento descreve o planejamento público e a evolução do Design System interno da R2 Agência Digital (`@r2digital/design-system`).

---

## 🎯 Objetivos de Negócio

1. **Padronização Visual:** Garantir identidade consistente em todas as aplicações web da R2 (LPs, Dashboards, Portais de Clientes).
2. **Velocidade de Desenvolvimento:** Reduzir o tempo de entrega de novas telas em mais de 40% reutilizando componentes testados e acessíveis.
3. **Acessibilidade Nativa (a11y):** Atender os padrões WCAG 2.1 AA em todos os componentes de interface.

---

## 📅 Roadmap de Componentes

### Q1 2026 (Concluído ✅)
- [x] Arquitetura de Monorepo com npm workspaces
- [x] Pacote `@r2digital/tokens` com paleta de cores oficial da R2 Agência Digital
- [x] Componentes Base: `Button`, `Badge`, `Callout`, `Card`
- [x] Suporte a Dark Mode por variáveis CSS nativas

### Q2 2026 (Em Desenvolvimento 🚀)
- [ ] Componentes de Formulário: `Input`, `Select`, `Checkbox`, `RadioGroup`
- [ ] Overlay: `Modal`, `Drawer`, `Tooltip`, `Popover`
- [ ] Data Display: `Table`, `Avatar`, `Accordion`
- [ ] Integração de Storybook publicado via Vercel / Cloudflare Pages

### Q3 2026 (Planejado 🔮)
- [ ] Gerador automático de tokens Figma → Code via Figma Tokens API
- [ ] Suporte a Temas Dinâmicos por cliente
- [ ] Suite de testes visuais automatizados com Playwright + Storybook Test Runner
