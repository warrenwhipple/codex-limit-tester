# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository is designed to test the capabilities of the OpenAI Codex containerized agent. It's a simple Node.js project with minimal structure.

## Development Commands

### Testing

Run all tests

```bash
npm test
```

## Code Structure

- The project uses ES modules (`type: "module"` in package.json)
- Source code is in the `src` directory
- Main entry point is `src/index.mjs`
- Tests are colocated with code, for a source file `src/some-file.mjs`, tests should be in `src/some-file.test.mjs`
- Tests are written using the `node:test` module
