#!/bin/sh
# Pravi WOFF2 fontove sa samo onim znakovima koje sajt koristi (latinica + č ć š ž đ
# i tipografski znaci). Treba fonttools (pyftsubset).
#   Instrument Sans: težine 400–500, bez ose širine (tekst i dugmad).
#   Instrument Serif: regular i italic (veliki naslovi).
# Pokreće se ručno kad se izvorni font ili skup znakova promijeni: npm run font
set -eu

DIR="assets/source/fonts"
TMP="$(mktemp -d)"

# U+0020-007E osnovna latinica, U+00A0 tvrdi razmak, U+00A9 ©, U+00B7 ·,
# Ć ć Č č Đ đ Š š Ž ž, crtice, navodnici „ “ ” ‘ ’, tri tačke, tačka za listu.
UNICODES="U+0020-007E,U+00A0,U+00A9,U+00B7,U+0106-0107,U+010C-010D,U+0110-0111,U+0160-0161,U+017D-017E,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026"
FEATURES="kern,liga,calt,ccmp,locl,mark,mkmk"

subset() {
  pyftsubset "$1" --unicodes="$UNICODES" --layout-features="$FEATURES" --flavor=woff2 --output-file="$2"
  echo "Font: $2 ($(wc -c < "$2") bajtova)"
}

# Širina fiksna na 100, težina ograničena na 400–500 (normal i medium).
python3 -I -m fontTools.varLib.instancer "$DIR/InstrumentSans[wdth,wght].ttf" wdth=100 wght=400:500 -o "$TMP/instance.ttf"
subset "$TMP/instance.ttf" "src/fonts/instrument-sans-subset.woff2"

subset "$DIR/InstrumentSerif-Regular.ttf" "src/fonts/instrument-serif-subset.woff2"
subset "$DIR/InstrumentSerif-Italic.ttf" "src/fonts/instrument-serif-italic-subset.woff2"

rm -rf "$TMP"
