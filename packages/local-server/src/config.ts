import { homedir } from 'node:os';
import { resolve } from 'node:path';
export const repositoryRoot = resolve(import.meta.dirname, '../../..');
export const dataRoot = resolve(process.env.OPENHAX_DATA_DIR ?? resolve(homedir(), '.openhax'));
export const port = Number(process.env.OPENHAX_PORT ?? 0);
if (!Number.isInteger(port) || (port !== 0 && (port < 1024 || port > 65535)))
  throw new Error('OPENHAX_PORT must be 0 (automatic) or between 1024 and 65535.');
