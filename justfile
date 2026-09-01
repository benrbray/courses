dev:
  pnpm run dev

build:
  pnpm run build

preview: build
  pnpm run preview

publish:
  pnpm run build
  rm -rf docs
  cp -r dist docs
  touch docs/.nojekyll