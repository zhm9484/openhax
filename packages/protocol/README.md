# Protocol

`@openhax/protocol` supplies portable TypeScript types for workspaces, apps, app instances, agent
session references, collaboration targets, revisions, mutation IDs/results and feedback anchors. No
React, Node.js, agent or domain-engine imports.

These are shared references, not a complete app integration API. Context, operations and explicit
user inputs are currently defined by each app. Common capability discovery and workflow control
remain reserved.

See [canonical architecture](../../docs/canonical/architecture.md) and
[local API](../../docs/canonical/local-api.md).
