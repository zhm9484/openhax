# Browser SDK

`@openhax/sdk` provides framework-independent browser helpers for application instance identity,
selected workspace and workspace-specific agent session bindings. Refresh restores the current
instance; new and copied pages start unbound. `target(workspaceId)` returns a detached routing
snapshot for a submission.

The SDK also exposes shared pairing and material APIs. It has no generic scene reader, action
dispatcher or user-input schema. The SDK depends only on protocol types. See
[canonical architecture](../../docs/canonical/architecture.md) for lifecycle and storage behavior.
