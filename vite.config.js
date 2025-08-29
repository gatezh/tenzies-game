import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_REPOSITORY is in format "owner/repo"
// In local dev you might want base="/", but in GH Actions it runs in GITHUB_ACTIONS env.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);

// https://vite.dev/config/
export default defineConfig({
  base: isGithubActions && repoName ? `/${repoName}/` : "/",
  plugins: [react()],
})
