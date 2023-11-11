FROM oven/bun as base
WORKDIR /usr/src/microservice1

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM install as prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production

FROM base as release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/microservice1/src/index.ts .
COPY --from=prerelease /usr/src/microservice1/package.json .

USER bun
EXPOSE 6161
ENTRYPOINT [ "bun", "run", "index.ts" ]