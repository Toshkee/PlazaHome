#!/bin/sh
# Pravi WOFF2 font sa samo onim znakovima koje sajt koristi (latinica + č ć š ž đ
# i tipografski znaci). Treba fonttools (pyftsubset).
#   Albert Sans: težine 300–600 (tanki veliki naslovi, tekst, dugmad).
# Pokreće se ručno kad se izvorni font ili skup znakova promijeni: npm run font
set -eu

DIR="assets/source/fonts"
TMP="$(mktemp -d)"
mkdir -p src/fonts

# U+0020-007E osnovna latinica, U+00A0 tvrdi razmak, U+00A9 ©, U+00B7 ·,
# Ć ć Č č Đ đ Š š Ž ž, crtice, navodnici „ “ ” ‘ ’, tri tačke, tačka za listu.
UNICODES="U+0020-007E,U+00A0,U+00A9,U+00B7,U+0106-0107,U+010C-010D,U+0110-0111,U+0160-0161,U+017D-017E,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026"
FEATURES="kern,liga,calt,ccmp,locl,mark,mkmk,tnum"

# Težina ograničena na 300–600 (light, normal, medium, semibold).
python3 -I -m fontTools.varLib.instancer "$DIR/AlbertSans[wght].ttf" wght=300:600 -o "$TMP/instance.ttf"
pyftsubset "$TMP/instance.ttf" --unicodes="$UNICODES" --layout-features="$FEATURES" --flavor=woff2 --output-file="src/fonts/albert-sans-subset.woff2"
echo "Font: src/fonts/albert-sans-subset.woff2 ($(wc -c < src/fonts/albert-sans-subset.woff2) bajtova)"

rm -rf "$TMP"
