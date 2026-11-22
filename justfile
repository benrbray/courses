dev:
  pnpm run dev

#### FALL 2026 #############################################

build-2026fall:
  pnpm run --filter 2026fall build

preview-2026fall: build-2026fall
  pnpm run --filter 2026fall preview

#### SPRING 2027 ###########################################

build-2027fall:
  pnpm run --filter 2027fall build

preview-2027fall: build-2027fall
  pnpm run --filter 2027fall preview

############################################################

build: build-2026fall
preview: preview-2026fall

publish:
  pnpm run build
  rm -rf docs
  cp -r dist docs
  touch docs/.nojekyll