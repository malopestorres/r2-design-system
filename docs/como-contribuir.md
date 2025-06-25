# Guia de Contribuição — R2 Digital Design System

Obrigado pelo interesse em contribuir com o `@r2digital/design-system`!

---

## 🛠️ Checklist de Pull Request

Antes de abrir uma PR, certifique-se de que:

1. **Testes Unitários:** Todos os testes dos componentes criados foram adicionados em `src/components/__tests__/`.
2. **Tipagem Estrita:** Nenhum tipo `any` foi utilizado. Props expostas devem ter interfaces claras.
3. **Acessibilidade:** Elementos interativos possuem atributos ARIA corretos (`aria-label`, `role`, `tabIndex`).
4. **Verificação de Build:**
   ```bash
   npm run lint
   npm run typecheck
   npm run test
   ```

---

## 📦 Padrão de Commits

Utilizamos o padrão **Conventional Commits**:
- `feat(ui)`: Novo componente ou variante.
- `fix(tokens)`: Correção de valor de token ou variável CSS.
- `docs`: Atualização de documentação ou roadmap.
- `chore`: Alterações em pipelines ou dependências.
