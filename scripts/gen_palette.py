#!/usr/bin/env python3
"""
Generate the R2 Agência Digital color palette illustration.
Pixel-perfect, exact hex values. No AI hallucinations.
"""
from PIL import Image, ImageDraw, ImageFont
import sys, os

W, H = 1200, 700
img = Image.new("RGB", (W, H), "#FFFFFF")
draw = ImageDraw.Draw(img)

# ─────────────── helpers ───────────────
def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def swatch(x, y, w, h, color, border=None):
    draw.rounded_rectangle([x, y, x+w, y+h], radius=8, fill=hex2rgb(color))
    if border:
        draw.rounded_rectangle([x, y, x+w, y+h], radius=8, outline=hex2rgb(border), width=1)

def label(x, y, text, color="#18181B", size=18, bold=False):
    try:
        if bold:
            font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", size)
        else:
            font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)
    except:
        font = ImageFont.load_default()
    draw.text((x, y), text, fill=hex2rgb(color), font=font)

# ─────────────── Brand strip (top) ───────────────
draw.rectangle([0, 0, W, 160], fill=hex2rgb("#FFFFFF"))
label(40, 18, "R2 Agência Digital — Design System", "#18181B", 26, bold=True)
label(40, 58, "Color Tokens", "#FF5722", 16)

# Brand 500
swatch(40, 88, 270, 52, "#FF5722")
label(40, 146, "brand.500  #FF5722  Cor primária", "#18181B", 13)

# Brand 600
swatch(330, 88, 270, 52, "#FF3D00")
label(330, 146, "brand.600  #FF3D00  Hover vibrante", "#18181B", 13)

# Gradient (drawn as two-stop gradient manually)
grad_x, grad_y, grad_w, grad_h = 620, 88, 540, 52
for i in range(grad_w):
    t = i / grad_w
    r2 = int((1-t)*0xFF + t*0xFF)
    g2 = int((1-t)*0x6B + t*0x3D)
    b2 = 0
    draw.rectangle([grad_x+i, grad_y, grad_x+i, grad_y+grad_h], fill=(r2, g2, b2))
draw.rounded_rectangle([grad_x, grad_y, grad_x+grad_w, grad_y+grad_h], radius=8)
label(620, 146, "brand.gradient  #FF6B00 -> #FF3D00  Gradiente oficial", "#18181B", 13)

# Divider
draw.rectangle([0, 168, W, 170], fill=hex2rgb("#E4E4E7"))

# ─────────────── LEFT: Light Mode ───────────────
draw.rectangle([0, 170, W//2, H], fill=hex2rgb("#F4F4F5"))
label(40, 185, "☀️  LIGHT THEME", "#18181B", 20, bold=True)
label(40, 214, "Superfícies e fundos para fundo claro", "#71717A", 13)

light_tokens = [
    ("#FFFFFF", "light.50", "Fundo principal"),
    ("#F4F4F5", "light.100", "Superfície elevada"),
    ("#E4E4E7", "light.200", "Card background"),
    ("#D4D4D8", "light.300", "Bordas"),
]
for i, (color, token, desc) in enumerate(light_tokens):
    cx = 40 + i * 140
    swatch(cx, 238, 120, 90, color, border="#D4D4D8")
    label(cx, 336, token, "#3F3F46", 12, bold=True)
    label(cx, 353, color, "#71717A", 11)
    label(cx, 369, desc, "#A1A1AA", 11)

# Light typography preview
draw.rounded_rectangle([40, 400, W//2 - 40, 520], radius=12, fill=hex2rgb("#FFFFFF"), outline=hex2rgb("#E4E4E7"), width=1)
label(60, 415, "Texto principal em Light Theme", "#18181B", 15, bold=True)
label(60, 445, "Texto secundário — #3F3F46", "#3F3F46", 13)
label(60, 468, "Texto auxiliar — #71717A", "#71717A", 12)
# Orange button pill
draw.rounded_rectangle([60, 488, 220, 514], radius=20, fill=hex2rgb("#FF5722"))
label(88, 494, "Acessar Painel", "#FFFFFF", 13, bold=True)

# ─────────────── RIGHT: Dark Mode ───────────────
draw.rectangle([W//2, 170, W, H], fill=hex2rgb("#09090B"))
label(W//2 + 40, 185, "🌙  DARK THEME", "#FAFAFA", 20, bold=True)
label(W//2 + 40, 214, "Superfícies e fundos para fundo escuro", "#71717A", 13)

dark_tokens = [
    ("#09090B", "dark.950", "Fundo principal"),
    ("#121215", "dark.900", "Superfície elevada"),
    ("#18181C", "dark.850", "Card background"),
    ("#2D2D36", "dark.700", "Bordas"),
]
for i, (color, token, desc) in enumerate(dark_tokens):
    cx = W//2 + 40 + i * 140
    swatch(cx, 238, 120, 90, color, border="#3F3F4A")
    label(cx, 336, token, "#A1A1AA", 12, bold=True)
    label(cx, 353, color, "#71717A", 11)
    label(cx, 369, desc, "#52525B", 11)

# Dark typography preview
draw.rounded_rectangle([W//2 + 40, 400, W - 40, 520], radius=12, fill=hex2rgb("#121215"), outline=hex2rgb("#2D2D36"), width=1)
label(W//2 + 60, 415, "Texto principal em Dark Theme", "#FAFAFA", 15, bold=True)
label(W//2 + 60, 445, "Texto secundário — #A1A1AA", "#A1A1AA", 13)
label(W//2 + 60, 468, "Texto auxiliar — #71717A", "#71717A", 12)
draw.rounded_rectangle([W//2 + 60, 488, W//2 + 220, 514], radius=20, fill=hex2rgb("#FF5722"))
label(W//2 + 88, 494, "Acessar Painel", "#FFFFFF", 13, bold=True)

# Center divider line
draw.rectangle([W//2 - 1, 170, W//2 + 1, H], fill=hex2rgb("#FF5722"))

# Footer
draw.rectangle([0, H-36, W, H], fill=hex2rgb("#FF5722"))
label(40, H-27, "R2 Agência Digital Design System — Color Tokens v1.0", "#FFFFFF", 13)

out = "assets/color-palette.png"
img.save(out, "PNG", optimize=True, quality=95)
print(f"Saved: {out}  ({os.path.getsize(out)//1024}KB)")
