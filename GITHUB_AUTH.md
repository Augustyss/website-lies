# GitHub Authenticatie Setup

GitHub accepteert geen wachtwoorden meer. Je moet een **Personal Access Token** gebruiken.

## Stap 1: Maak een Personal Access Token

1. Ga naar GitHub.com en log in
2. Klik op je profielfoto rechtsboven → **Settings**
3. Scroll naar beneden in het linker menu → **Developer settings**
4. Klik op **Personal access tokens** → **Tokens (classic)**
5. Klik **Generate new token** → **Generate new token (classic)**
6. Vul in:
   - **Note**: "Website Lies Development"
   - **Expiration**: Kies een periode (bijv. 90 dagen of No expiration)
   - **Select scopes**: Vink aan:
     - ✅ `repo` (alle repo permissies)
7. Klik **Generate token**
8. **BELANGRIJK**: Kopieer het token direct! Je ziet het maar 1 keer.

## Stap 2: Push naar GitHub

Run deze commando's (vervang `YOUR_TOKEN` met het token dat je net hebt gemaakt):

```bash
cd "/Users/bavosamyn/Library/Mobile Documents/com~apple~CloudDocs/website_lies"

# Voeg alle bestanden toe
git add .

# Maak eerste commit
git commit -m "Initial commit: Website voor Lies Christiaens"

# Zet branch naam op main
git branch -M main

# Voeg remote toe (als deze nog niet bestaat)
git remote add origin https://github.com/Augustyss/website-lies.git

# Push met token (vervang YOUR_TOKEN met je token)
git push -u origin main
```

Wanneer je om username gevraagd wordt:
- **Username**: `Augustyss` (of je GitHub username)
- **Password**: Plak hier je **Personal Access Token** (NIET je GitHub wachtwoord!)

## Alternatief: Gebruik GitHub CLI

Makkelijker alternatief:

```bash
# Installeer GitHub CLI (als je die nog niet hebt)
brew install gh

# Login met GitHub
gh auth login

# Dan push normaal:
git push -u origin main
```

## Alternatief: Gebruik SSH (Meest veilig)

Als je SSH keys hebt ingesteld:

```bash
# Verander remote URL naar SSH
git remote set-url origin git@github.com:Augustyss/website-lies.git

# Push
git push -u origin main
```

---

**Tip**: Als je vaak problemen hebt met authenticatie, gebruik GitHub CLI (`gh`) - dat is het makkelijkst!

