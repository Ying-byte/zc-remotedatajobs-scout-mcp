#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remotedatajobs",
  boardId: "remotedatajobs-official",
  domain: "remotedatajobs.com",
  npmName: "zc-remotedatajobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
