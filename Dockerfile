# Image for the compose stack (docker-compose.yml). unity-swarm-reviewer's
# Sandbox Runner builds it from the PR head; the same container serves the
# page and hosts lint/test/build checks via `docker exec`.
# glibc base: avoids musl native-binary issues in Rollup/Vitest.
FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 4173
CMD ["node", "scripts/serve.mjs"]
