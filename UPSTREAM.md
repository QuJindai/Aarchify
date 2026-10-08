# Upstream provenance

This repository is a public mirror/copy initialized from the public upstream repository:

- Upstream: https://github.com/tt-a1i/archify
- Upstream default branch: `main`
- Source snapshot commit: `920543baa1c6137803c5b45a69d8977152773d35`
- Source snapshot tree: `aa7317cd048e950f1138be365ddc0d3ca3595192`
- Mirrored on: 2026-09-07

The upstream `LICENSE` and other attribution/notice files are preserved unchanged in the mirrored source tree. This provenance file is additive and does not replace or modify the upstream license.

## Mirror deployment and validation (2026-10-09)

- Production site: https://aarchify.vercel.app/
- Hosting: Vercel project `aarchify` in team `qujindai` (Hobby), Git repository `QuJindai/Aarchify`.
- Build root: `docs/`; this site is static HTML/JS/CSS and does not require server-side environment secrets.
- Production branch: `main`. Pull requests are built as previews; only reviewed changes on `main` become production.
- Access: production is public; preview deployments retain Vercel Authentication.
- Current mirror contains the upstream source at the immutable snapshot identified above; updating production does **not** imply that upstream's current latest release has been imported.

### CI contracts specific to a source mirror

The published update manifest under `docs/skill-updates/archify/stable.json` names **upstream** releases, not releases of this mirror. Therefore mirror CI validates the manifest's upstream provenance, while the strict local Release-tag / archive parity check remains enabled only for the canonical upstream repository.

The DeepSeek Harness packaging contract uses the upstream immutable tag `archify-dsh-v0.1.0`. Each isolated mirror CI runner that tests this release fetches that exact tag from the upstream repository before running the tests. Tests are **not** bypassed because the mirror did not import historical tags.

GitHub Pages has not been enabled for this repository. The `deploy-pages` job is confined to the canonical upstream repository; this mirror's deployment uses the Vercel Git integration. Static site readiness is verified by `site-preflight`, which checks the landing page and every published example artifact against its validation receipt.

### Operator verification

1. Confirm pull-request CI and DSH distribution acceptance have passed.
2. Merge the tested commit to `main`.
3. Verify Vercel shows `READY` for the exact merged commit with deployment target `production`.
4. Inspect `/` and `/gallery/artifacts/agent-tool-call.workflow.html` on the production domain.
5. Keep the last known-good deployment for rollback. Do not promote a failed preview or expose credentials in logs.
