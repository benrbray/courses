dev:
  pnpm run dev

#### FALL 2026 #############################################

# semesters
mod fall2026 "./sites/2026fall"
# mod spring2026 "./sites/2027spring"

############################################################

############################################################

build:
  just fall2026 build

preview:
  just fall2026 preview

publish:
  pnpm run build
  rm -rf docs
  cp -r dist docs
  touch docs/.nojekyll