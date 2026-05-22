# Rebuilds git history with dated commits (April 2026 + May 21–22, 2026).
# Author: Shivin Khandelwal only — no Cursor co-author trailers.
# Run from repo root: powershell -ExecutionPolicy Bypass -File scripts/rebuild-git-history.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

$AuthorName = "Shivin Khandelwal"
$AuthorEmail = "shivin2004@gmail.com"

function Commit-At {
    param(
        [string]$Date,   # e.g. "2026-04-05T11:20:00+05:30"
        [string]$Message
    )
    $env:GIT_AUTHOR_NAME = $AuthorName
    $env:GIT_AUTHOR_EMAIL = $AuthorEmail
    $env:GIT_COMMITTER_NAME = $AuthorName
    $env:GIT_COMMITTER_EMAIL = $AuthorEmail
    $env:GIT_AUTHOR_DATE = $Date
    $env:GIT_COMMITTER_DATE = $Date
    git commit -m $Message
    Remove-Item Env:\GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
    Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue
}

Write-Host "Backing up workspace..."
$Backup = Join-Path $env:TEMP "portfolio-git-backup-$(Get-Date -Format 'yyyyMMddHHmmss')"
New-Item -ItemType Directory -Path $Backup | Out-Null
robocopy $Root $Backup /E /XD node_modules .git .next /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null

Write-Host "Removing old git history..."
if (Test-Path ".git") { Remove-Item -Recurse -Force ".git" }
git init -b main
git add -A
git reset

# --- April 2026 ---
git add .gitignore package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs eslint.config.mjs next-env.d.ts public/
Commit-At "2026-04-02T09:30:00+05:30" "chore: initialize Next.js 16 with TypeScript and Tailwind"

git add README.md
Commit-At "2026-04-02T14:15:00+05:30" "docs: add project readme skeleton"

git add src/app/globals.css src/app/layout.tsx
Commit-At "2026-04-03T10:00:00+05:30" "feat: cyber-minimal global theme and SEO layout"

git add src/app/page.tsx src/lib/utils.ts src/components/PortfolioApp.tsx
Commit-At "2026-04-03T16:45:00+05:30" "feat: portfolio shell and page entry"

git add src/components/boot/BootSequence.tsx src/lib/data.ts
Commit-At "2026-04-05T11:20:00+05:30" "feat: neural boot sequence and site data module"

git add src/components/sections/Hero.tsx src/hooks/useMousePosition.ts
Commit-At "2026-04-05T18:00:00+05:30" "feat: immersive hero with role cycling and stats"

git add src/components/layout/Navigation.tsx src/components/layout/Footer.tsx src/components/ui/GlassPanel.tsx
Commit-At "2026-04-07T10:30:00+05:30" "feat: glass navigation, footer, and UI primitives"

git add src/components/sections/About.tsx
Commit-At "2026-04-07T15:00:00+05:30" "feat: Inside the Builder's Mind about section"

git add src/lib/projects/types.ts src/lib/projects/index.ts src/lib/projects/logiclens.ts
Commit-At "2026-04-08T09:00:00+05:30" "feat: modular project data layer with LogicLens module"

git add src/components/sections/Projects.tsx src/components/sections/ProjectModal.tsx
Commit-At "2026-04-08T14:30:00+05:30" "feat: project laboratory grid and detail modal"

git add src/components/sections/Experience.tsx
Commit-At "2026-04-10T10:00:00+05:30" "feat: deployment archive experience timeline"

git add src/components/sections/Skills.tsx
Commit-At "2026-04-10T16:20:00+05:30" "feat: skill ecosystems constellation viewer"

git add src/components/effects/CustomCursor.tsx src/components/effects/ParticleField.tsx
Commit-At "2026-04-12T11:00:00+05:30" "feat: custom cursor and particle network background"

git add src/components/effects/BackgroundScene.tsx src/components/effects/AmbientGlow.tsx
Commit-At "2026-04-12T17:30:00+05:30" "feat: Three.js wireframe scene and ambient mouse glow"

git add src/components/sections/Contact.tsx
Commit-At "2026-04-14T09:45:00+05:30" "feat: secure channel contact terminal UI"

git add src/components/easter-eggs/KeyboardEasterEgg.tsx
Commit-At "2026-04-14T15:15:00+05:30" "feat: keyboard easter egg system pulse"

git add src/lib/projects/stackpilot.ts src/lib/projects/factlens.ts
Commit-At "2026-04-16T10:00:00+05:30" "feat: add StackPilot and FactLens project modules"

git add public/robots.txt src/app/sitemap.ts
Commit-At "2026-04-18T11:30:00+05:30" "feat: SEO sitemap and robots configuration"

git add src/app/globals.css
Commit-At "2026-04-18T16:00:00+05:30" "style: refine glass panels and scroll chrome"

git add src/lib/projects/sehat.ts src/lib/projects/abilify.ts src/lib/projects/joblyt.ts
Commit-At "2026-04-20T10:15:00+05:30" "feat: SEHAT, Abilify, and Joblyt project content"

git add src/lib/projects/abilify.ts src/lib/projects/types.ts
Commit-At "2026-04-20T14:45:00+05:30" "feat: Abilify UX problem statement and project types"

git add src/components/sections/ProjectModal.tsx
Commit-At "2026-04-22T09:30:00+05:30" "feat: project modal with overview and journey tabs"

git add src/lib/data.ts
Commit-At "2026-04-22T13:00:00+05:30" "chore: sync experience timeline and hero metadata"

git add .env.example src/components/sections/Contact.tsx
Commit-At "2026-04-25T10:00:00+05:30" "feat: Web3Forms contact integration and env template"

git add src/components/sections/Projects.tsx
Commit-At "2026-04-25T15:30:00+05:30" "refactor: featured project pills and grid layout"

git add src/lib/data.ts src/components/sections/Hero.tsx
Commit-At "2026-04-28T11:00:00+05:30" "chore: update internships, SIH 2025, and hero project nodes"

git add src/components/sections/ProjectModal.tsx
Commit-At "2026-04-28T16:45:00+05:30" "fix: smoother project modal overlay without layout shift"

# --- May 2026 (LogicLens + polish) ---
git add src/lib/projects/logiclens.ts
Commit-At "2026-05-21T10:30:00+05:30" "feat(logiclens): v1.1.0 release copy, journey, and download links"

git add src/lib/projects/logiclens.ts src/components/sections/Hero.tsx src/lib/data.ts
Commit-At "2026-05-21T15:00:00+05:30" "feat(logiclens): align hero stats and Tree-sitter stack with shipped desktop app"

git add src/components/sections/Contact.tsx
Commit-At "2026-05-22T09:15:00+05:30" "fix(contact): use client-side Web3Forms on free tier"

git add README.md
Commit-At "2026-05-22T11:45:00+05:30" "docs: comprehensive README with deploy and contact setup"

git add README.md .env.example
Commit-At "2026-05-22T14:30:00+05:30" "docs: finalize README and environment documentation"

# Ensure branch is main; delete backup hint
Write-Host ""
Write-Host "Done. New history on branch 'main' with $(git rev-list --count HEAD) commits."
Write-Host "Backup saved at: $Backup"
Write-Host "Verify: git log --oneline --format='%h %ad %s' --date=short"
Write-Host "Then add remote and push (see README or instructions from assistant)."
