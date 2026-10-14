#!/bin/sh
# Pravi hero video za web i kadar za poster iz izvornog snimka.
# Pokreće se ručno kad se izvorni snimak promijeni (treba ffmpeg): npm run video
set -eu

SRC="assets/source/instagram/hero-video.mp4"
OUT_DIR="public/video"
POSTER="assets/source/generated/hero-poster.jpg"

mkdir -p "$OUT_DIR" "$(dirname "$POSTER")"

# Ton kao kod fotografija (GRADE u scripts/media.mjs): toplije i malo manje zasićeno. Ovdje se
# zagrijavaju samo sjene i srednji tonovi; množenje kanala kao kod fotografija bi nebo učinilo tirkiznim.
GRADE="colorbalance=rs=0.05:gs=0.02:bs=-0.03:rm=0.02:bm=-0.01,eq=saturation=0.9"

# Bez zvuka: video se pušta utišan, a audio traka bi samo dodala težinu.
# Izvorni snimak ima po 4 crna reda piksela gore i dolje (cropdetect); isijecamo ih.
ffmpeg -v error -y -i "$SRC" -an -vf "crop=720:1272:0:4,$GRADE" \
  -c:v libx264 -preset slow -crf 28 -profile:v high -pix_fmt yuv420p \
  -movflags +faststart "$OUT_DIR/hero-720.mp4"

# Prvi kadar je poster, da nema skoka kad video krene.
ffmpeg -v error -y -i "$OUT_DIR/hero-720.mp4" -frames:v 1 -q:v 1 "$POSTER"

echo "Video: $OUT_DIR/hero-720.mp4, poster: $POSTER"
