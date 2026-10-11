import { z } from 'zod';
import { queueRequest } from '@openhax/adapter-codex';
import type { AgentSessionRef } from '@openhax/protocol';
import { HttpError } from './errors.ts';

export const collaborationTarget = z.strictObject({
  instanceId: z.string().uuid(),
  session: z.strictObject({
    provider: z.literal('codex'),
    sessionId: z.string().regex(/^[a-zA-Z0-9-]{10,100}$/),
  }),
});

export async function deliver(session: AgentSessionRef, message: string) {
  if (session.provider !== 'codex') throw new HttpError(400, 'Unsupported agent provider.');
  return queueRequest(session.sessionId, message);
}
