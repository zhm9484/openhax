# Protocol

`@openhax/protocol` provides portable TypeScript types for workspaces, apps, app instances, agent
session references, collaboration targets, revisions, mutation IDs/results and feedback anchors. No
React, Node.js, agent or domain-engine imports.

These types define shared references. Each app defines its own context, operations and explicit user
inputs. Common capability discovery and workflow control are not implemented.

See [canonical architecture](../../docs/canonical/architecture.md) and
[local API](../../docs/canonical/local-api.md).
