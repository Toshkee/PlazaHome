#!/bin/sh
# Pravi jedan WOFF2 sa samo onim znakovima koje sajt koristi (latinica + č ć š ž đ
# i tipografski znaci), težine 400–500, bez ose širine. Treba fonttools (pyftsubset).
# Pokreće se ručno kad se izvorni font ili skup znakova promijeni: npm run font
set -eu

SRC="assets/source/fonts/InstrumentSans[wdth,wght].ttf"
TMP="$(mktemp -d)"
OUT="src/fonts/instrument-sans-subset.woff2"

# Širina fiksna na 100, težina ograničena na 400–500 (normal i medium).
python3 -I -m fontTools.varLib.instancer "$SRC" wdth=100 wght=400:500 -o "$TMP/instance.ttf"

# U+0020-007E osnovna latinica, U+00A0 tvrdi razmak, U+00A9 ©, U+00B7 ·,
# Ć ć Č č Đ đ Š š Ž ž, crtice, navodnici „ “ ” ‘ ’, tri tačke, tačka za listu.
pyftsubset "$TMP/instance.ttf" \
  --unicodes="U+0020-007E,U+00A0,U+00A9,U+00B7,U+0106-0107,U+010C-010D,U+0110-0111,U+0160-0161,U+017D-017E,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026" \
  --layout-features="kern,liga,calt,ccmp,locl,mark,mkmk" \
  --flavor=woff2 --output-file="$OUT"

rm -rf "$TMP"
echo "Font: $OUT ($(wc -c < "$OUT") bajtova)"
