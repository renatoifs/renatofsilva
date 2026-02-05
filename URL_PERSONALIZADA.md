# URL Personalizada para o Site - Instruções

## Situação Atual
**URL Atual**: `https://faculty-renato.preview.emergentagent.com`

Este é um URL temporário/preview fornecido pela plataforma Emergent.

---

## Opções para URL Personalizada

### Opção 1: Solicitar Custom URL na Emergent (Mais Simples)

**Como Funcionar:**
1. Contactar suporte Emergent
2. Solicitar um URL personalizado no formato:
   - `https://renato-silva.emergentagent.com`
   - `https://renatoferreiradasilva.emergentagent.com`
   - Ou similar

**Vantagens:**
- ✅ Sem custos adicionais
- ✅ Mantém hospedagem na Emergent
- ✅ SSL/HTTPS automático
- ✅ Sem configuração técnica necessária

**Como Fazer:**
1. Abrir ticket de suporte na Emergent
2. Pedir: "Custom URL for my project prof-porto"
3. Sugerir: `renato-silva` ou `renatoferreiradasilva`

---

### Opção 2: Domínio Próprio Profissional (Recomendado)

#### A. Domínio Comercial (.pt ou .com)

**URLs Possíveis:**
- `www.renatosilva.pt`
- `www.renatoferreiradasilva.pt`
- `www.renatosilva.com`

**Passos:**

1. **Registar Domínio** (escolher um registrar):
   - **Portugal**: [DNS.PT](https://www.dns.pt) (oficial .pt)
   - **Internacional**: Namecheap, GoDaddy, Google Domains
   - **Custo**: ~€10-15/ano para .pt

2. **Deploy do Site** (escolher plataforma):
   
   **Opção A: Vercel (Recomendado)**
   ```bash
   # Instalar Vercel CLI
   npm install -g vercel
   
   # No diretório /app/frontend
   cd /app/frontend
   vercel login
   vercel --prod
   ```
   - SSL automático (Let's Encrypt)
   - Deploy em minutos
   - Free tier suficiente
   
   **Opção B: Netlify**
   ```bash
   # No diretório /app/frontend
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

3. **Conectar Domínio**:
   - Na Vercel/Netlify: adicionar custom domain
   - No registrar DNS: configurar records:
     ```
     Type: A
     Name: @
     Value: [IP fornecido por Vercel/Netlify]
     
     Type: CNAME
     Name: www
     Value: [domínio fornecido]
     ```

**Custo Total**: ~€10-15/ano (só o domínio, hosting gratuito)

---

#### B. Subdomínio Institucional (Mais Profissional)

**URL Possível:**
- `renato.fmed.up.pt`
- `renatosilva.med.up.pt`

**Passos:**

1. **Contactar IT da FMUP**:
   - Pedir subdomínio do domínio institucional
   - Fornecer IP/CNAME do servidor

2. **Vantagens**:
   - ✅ Credibilidade institucional
   - ✅ Sem custos
   - ✅ Associação clara com FMUP

3. **Desvantagens**:
   - ⚠️ Depende da aprovação institucional
   - ⚠️ Processo pode demorar
   - ⚠️ Pode ter restrições técnicas

---

## Resumo de Opções e Custos

| Opção | URL Exemplo | Custo | Facilidade | Profissionalismo |
|-------|-------------|-------|------------|------------------|
| **Emergent Custom** | `renato-silva.emergentagent.com` | Grátis | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Domínio .pt** | `renatosilva.pt` | €10-15/ano | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Institucional** | `renato.fmed.up.pt` | Grátis | ⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## Recomendação

**Para máximo profissionalismo:**
1. **Curto prazo**: Pedir URL custom Emergent (imediato)
2. **Médio prazo**: Registar `renatosilva.pt` e fazer deploy próprio
3. **Longo prazo**: Negociar subdomínio institucional `renato.fmed.up.pt`

**Melhor Opção Única**: Registar **renatosilva.pt** + Deploy Vercel
- Profissional
- Controlo total
- Custo mínimo (€10-15/ano)
- Rápido de configurar (1-2 horas)

---

## Passos Detalhados: Deploy com Domínio Próprio

### 1. Registar Domínio

**Via DNS.PT (Domínio .pt)**:
1. Ir a: https://www.dns.pt
2. Pesquisar: `renatosilva.pt`
3. Se disponível, registar (€10-15/ano)
4. Completar registo e verificação

### 2. Preparar Código para Deploy

```bash
# No servidor atual
cd /app/frontend

# Garantir que .env está correto
cat .env
# REACT_APP_BACKEND_URL deve apontar para backend de produção

# Build de produção
yarn build
```

### 3. Deploy em Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /app/frontend
vercel --prod

# Seguir instruções no terminal
# Escolher: Create new project
# Framework: Create React App (detectado automaticamente)
# Build command: yarn build
# Output directory: build
```

### 4. Configurar Domínio Custom

**Na Vercel Dashboard**:
1. Ir ao projeto
2. Settings > Domains
3. Add Domain: `renatosilva.pt` e `www.renatosilva.pt`
4. Copiar DNS records fornecidos

**No Registrar DNS (DNS.PT)**:
1. Painel de controlo do domínio
2. DNS Management
3. Adicionar records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21 (exemplo Vercel)
   
   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```

### 5. Aguardar Propagação DNS

- Tempo: 5 minutos a 48 horas (normalmente 1-2 horas)
- Verificar: `nslookup renatosilva.pt`

### 6. Configurar Backend

**Se backend também precisa de domínio:**

Option A: Usar Railway/Render (similar a Vercel para backend)
```bash
cd /app/backend

# Deploy no Railway
railway login
railway init
railway up
```

Option B: Manter backend na Emergent, só frontend no Vercel

---

## Backend Considerations

**Opção Recomendada**: Backend na Emergent, Frontend no Vercel

**Configuração**:
```bash
# /app/frontend/.env
REACT_APP_BACKEND_URL=https://prof-porto-backend.emergentagent.com
```

**Alternativa**: Deploy tudo junto
- Frontend e Backend no mesmo Vercel project
- Usar Vercel Serverless Functions para API

---

## Checklist de Deploy

### Antes do Deploy:
- [ ] Código funcional em local/staging
- [ ] Variáveis de ambiente configuradas
- [ ] Build de produção testado
- [ ] Credenciais admin alteradas
- [ ] Database backup feito

### Durante Deploy:
- [ ] Domínio registado
- [ ] DNS configurado
- [ ] Deploy feito (Vercel/Netlify)
- [ ] Custom domain conectado
- [ ] SSL/HTTPS verificado

### Depois do Deploy:
- [ ] Site acessível via novo URL
- [ ] Todas as páginas funcionando
- [ ] API calls a funcionar
- [ ] Forms a enviar emails
- [ ] CMS acessível (/admin/login)
- [ ] Mobile testado
- [ ] Analytics configurado (opcional)

---

## Contactos para Ajuda

### Emergent Support:
- Para URL custom na plataforma Emergent
- Para questões de hosting

### DNS.PT:
- Website: https://www.dns.pt
- Email: info@dns.pt
- Para registo de domínio .pt

### IT FMUP:
- Para subdomínio institucional
- Contactar via canais internos da faculdade

---

## Timeline Estimada

| Tarefa | Tempo Estimado |
|--------|----------------|
| Registar domínio | 30 min - 1 dia (verificação) |
| Deploy Vercel | 30 min - 1 hora |
| Configurar DNS | 5 min |
| Propagação DNS | 1-24 horas |
| **Total** | **1-2 dias** |

---

**Última atualização**: 5 Fevereiro 2026
**Próximo passo sugerido**: Registar `renatosilva.pt` e iniciar deploy Vercel
