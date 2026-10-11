/// <reference lib="dom" />
import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { createVideo } from './browser-helpers.ts';
import type { ExportJob } from '../packages/video-domain/src/schema.ts';

test('closing and reloading recover the export for its exact revision without starting another job', async ({
  page,
  request,
}) => {
  const project = await createVideo(request, 'Export recovery');
  const base = `/api/workspaces/${project.workspaceId}/apps/video-editor/exports`;
  const job: ExportJob = {
    id: randomUUID(),
    revisionId: project.revisionId,
    state: 'rendering',
    progress: 0,
    stage: 'Rendering',
  };
  let starts = 0;
  await page.route(`**${base}`, async (route) => {
    expect(route.request().postDataJSON()).toEqual({ revisionId: project.revisionId });
    starts++;
    await route.fulfill({ json: job });
  });
  await page.route(`**${base}/${job.id}`, (route) => route.fulfill({ json: job }));
  await page.goto(`/apps/video-editor/w/${project.workspaceId}`);
  await expect(page.locator('.preview-loading')).toHaveCount(0);
  await page.getByRole('button', { name: 'Export', exact: true }).click();
  await page.getByRole('button', { name: 'Export video', exact: true }).click();
  await expect(page.locator('.export-dialog')).toContainText('Rendering…');
  await page.getByRole('button', { name: 'Close export' }).click();
  await page.getByRole('button', { name: 'Export', exact: true }).click();
  await expect(page.locator('.export-dialog')).toContainText('Rendering…');
  expect(starts).toBe(1);
  await page.reload();
  job.state = 'complete';
  job.progress = 1;
  job.url = '/finished-test-video.mp4';
  await page.getByRole('button', { name: 'Export', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Download video' })).toHaveAttribute('href', job.url);
  expect(starts).toBe(1);
  await page.getByRole('button', { name: 'Close export' }).click();
  const changed = await request.post(
    `/api/workspaces/${project.workspaceId}/apps/video-editor/revisions`,
    {
      data: {
        baseRevision: project.revisionId,
        requestId: randomUUID(),
        label: 'A different version',
        document: { ...project.revision.document, name: 'Next video version' },
      },
    },
  );
  expect(changed.ok()).toBe(true);
  await page.reload();
  await expect(page.locator('.preview-loading')).toHaveCount(0);
  await page.getByRole('button', { name: 'Export', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Export video', exact: true })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Download video' })).toHaveCount(0);
});
