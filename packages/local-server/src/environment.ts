import { join } from 'node:path';
import { homedir } from 'node:os';
import { Environments } from '../../../skills/openhax-workspace/scripts/environments.ts';
export {
  capabilities,
  type Capability,
} from '../../../skills/openhax-workspace/scripts/environments.ts';
export const environments = new Environments(
  process.env.OPENHAX_RUNTIME_DIR,
  process.env.OPENHAX_CACHE_DIR ?? join(homedir(), '.cache/openhax'),
);
