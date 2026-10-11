# Working on openhax

openhax means Open Human Agent Experience. It provides task-specific interaction scenes for people
and agents when language alone is not direct, precise or efficient enough. People explicitly select,
enter, mark and submit information; agents read context and operate through app APIs or source. Do
not infer user intent from passive clicks, pointer movement or viewing behavior. Workspaces are an
internal data/context concept, not the product's purpose or a requirement for one goal per
workspace.

Keep implementations clear, focused, and easy to change. Add abstractions, dependencies, and
infrastructure when they solve a concrete problem.

## Language and stack

- Write repository content in English, including documentation, comments, and UI copy. Communicate
  with the user in their preferred language.
- Use TypeScript for application, backend, and tooling logic; React + Vite for preset frontends; and
  Node.js for local services. Use HTML, CSS, JSON, and YAML where appropriate.
- Use pnpm and the versions declared in the workspace. Update the lockfile with dependency changes.

## Architecture

- Start with `docs/canonical/README.md`, then read the relevant canonical documents and source
  before making changes.
- Keep the protocol independent of UI frameworks, transports, agents, and domain engines. Put domain
  behavior in apps, agent-specific behavior in adapters, and system access in the backend.
- Allow both app operations and direct source editing. An engine's editor or editing SDK is
  optional.
- Design shared contracts around concrete collaboration use cases. Make references, revision
  handling, and operation results explicit without imposing a universal domain model.
- Keep scene context, operations and explicit input semantics app-owned. Distinguish the implemented
  identity/connection contract from the future goal of easier app integration; do not describe
  generic capability discovery or workflow control as implemented until it is verified.

## Documentation

- `docs/canonical/` is the authoritative documentation of the current project: implemented features,
  their design and behavior, architecture, interfaces, and operational conventions. Keep it concise
  so agents can quickly understand the system. Distinguish implemented behavior from reserved scope.
- `docs/non-canonical/` contains research, plans, proposals, and historical notes. These may be
  stale or superseded; use them as context, never as evidence of current behavior.
- For every project change, assess its documentation impact. This includes features, bug fixes,
  refactors, configuration, dependencies, commands, and directory changes, not just application
  code. Update affected canonical documents in the same task whenever the change alters the facts
  they describe or reveals a missing explanation. Significant changes must be reflected before
  completion.
- Update existing canonical documents and their links rather than creating competing descriptions.
  No documentation edit is needed when the current description remains accurate and sufficient.
- When a plan is implemented, document the verified result in canonical. Keep speculative or
  historical material in non-canonical; move superseded canonical content there if worth retaining.
- Verify documentation against source and observed behavior. If they disagree, investigate and
  correct the description; do not preserve an outdated claim because it is labeled canonical.

## Changes and verification

- When opening or updating an issue or PR, agents must put a `## Summary` section first in the body,
  with brief text and a clear visual explaining the problem and proposed or resulting behavior.
  Follow [Contributing](CONTRIBUTING.md#visual-summaries-for-issues-and-pull-requests) for visual
  summary guidance. Use only GitHub-renderable Markdown, including Mermaid, fenced code/diffs or
  Markdown images; do not use HTML. This includes blank issues and draft PRs; human contributors may
  use their judgment.
- Follow existing conventions, keep changes scoped to the task, and preserve unrelated user work.
- Keep documentation concise and accurate. Record durable decisions rather than temporary project
  status in these instructions.
- Run `pnpm check` after code or configuration changes. For documentation-only changes, check the
  affected files with Prettier. Fix issues caused by the change and report unrelated failures.
- Test meaningful behavior and failure cases when implementing features. Do not add placeholder
  tests or scaffolding solely to fill directories.
- Keep credentials, user projects, and generated media out of Git. Respect third-party licenses when
  adding dependencies or assets.
