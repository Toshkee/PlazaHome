#!/bin/sh
# Pravi hero video za web i kadar za poster iz izvornog snimka.
# Pokreće se ručno kad se izvorni snimak promijeni (treba ffmpeg): npm run video
set -eu

SRC="assets/source/instagram/hero-video.mp4"
OUT_DIR="public/video"
POSTER="assets/source/generated/hero-poster.jpg"

mkdir -p "$OUT_DIR" "$(dirname "$POSTER")"

# Bez zvuka: video se pušta utišan, a audio traka bi samo dodala težinu.
ffmpeg -v error -y -i "$SRC" -an \
  -c:v libx264 -preset slow -crf 28 -profile:v high -pix_fmt yuv420p \
  -movflags +faststart "$OUT_DIR/hero-720.mp4"

# Prvi kadar je poster, da nema skoka kad video krene.
ffmpeg -v error -y -i "$OUT_DIR/hero-720.mp4" -frames:v 1 -q:v 1 "$POSTER"

echo "Video: $OUT_DIR/hero-720.mp4, poster: $POSTER"
