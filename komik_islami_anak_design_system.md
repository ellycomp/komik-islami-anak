---
name: "Komik Islami Anak — Design System"
description: "Sistem desain ceria, minimalis, dan ramah anak untuk perpustakaan komik digital Islami PWA usia 5–12 tahun dengan palet hijau Islami, krem hangat, putih bersih, dan aksen kuning lembut."
---

## Overview

**Komik Islami Anak** adalah perpustakaan komik digital Islami berbentuk aplikasi PWA (*Progressive Web App*) untuk anak usia 5–12 tahun (tingkat SD) beserta pengelola konten (*administrator*).

Antarmuka mengusung gaya **modern, ceria, dan minimalis ramah anak**: ruang napas yang lega, sudut membulat lembut seperti halaman buku cerita bergambar, serta target sentuh yang besar dan jelas agar mudah digunakan oleh anak-anak secara mandiri di ponsel. Seluruh teks antarmuka menggunakan **Bahasa Indonesia** yang hangat, santun, dan mudah dipahami anak SD.

## Colors

Palet warna berakar pada **Hijau Islami** yang menenangkan dan penuh keberkahan sebagai warna utama, dipadukan dengan latar **Krem Hangat** dan permukaan kartu **Putih Bersih** agar nyaman di mata saat membaca komik dalam waktu lama, serta aksen **Kuning Lembut** untuk penanda bintang, lencana kategori, dan sorotan ceria.

- **Primary (Hijau Islami):** Digunakan untuk tombol aksi utama, navigasi aktif, dan elemen identitas merek.
- **Secondary (Kuning Lembut):** Digunakan untuk lencana usia/kategori, bintang favorit, dan sorotan edukatif.
- **Surface (Putih & Krem):** Latar belakang krem hangat (`#FEF9EC`) dengan kartu putih bersih (`#FFFFFF`) untuk hierarki yang jelas tanpa terasa kaku.

```yaml
colors:
  accent: "#F4C430"
  success: "#1B7A4B"
  warning: "#D97706"
  light:
    primary: "#006037"
    on-primary: "#FFFFFF"
    primary-container: "#1B7A4B"
    on-primary-container: "#ACFFC8"
    secondary: "#755B00"
    on-secondary: "#FFFFFF"
    secondary-container: "#FCCC38"
    on-secondary-container: "#6F5600"
    tertiary: "#8B3840"
    on-tertiary: "#FFFFFF"
    tertiary-container: "#A94F57"
    on-tertiary-container: "#FFE8E8"
    error: "#BA1A1A"
    on-error: "#FFFFFF"
    error-container: "#FFDAD6"
    on-error-container: "#93000A"
    background: "#FEF9EC"
    on-background: "#1D1C14"
    surface: "#FEF9EC"
    surface-dim: "#DEDACD"
    surface-bright: "#FEF9EC"
    surface-container-lowest: "#FFFFFF"
    surface-container-low: "#F8F3E6"
    surface-container: "#F2EEE1"
    surface-container-high: "#EDE8DB"
    surface-container-highest: "#E7E2D6"
    on-surface: "#1D1C14"
    surface-variant: "#DAE5DA"
    on-surface-variant: "#3F4941"
    outline: "#6F7A70"
    outline-variant: "#BEC9BE"
    inverse-surface: "#323128"
    inverse-on-surface: "#F5F0E4"
    inverse-primary: "#80D9A1"
    shadow: "#000000"
    scrim: "#000000"
  dark:
    primary: "#80D9A1"
    on-primary: "#00391E"
    primary-container: "#1B7A4B"
    on-primary-container: "#ACFFC8"
    secondary: "#F0C12C"
    on-secondary: "#3D2E00"
    secondary-container: "#D2A501"
    on-secondary-container: "#503D00"
    tertiary: "#FFB2B6"
    on-tertiary: "#5D1520"
    tertiary-container: "#A94F57"
    on-tertiary-container: "#FFE8E8"
    error: "#FFB4AB"
    on-error: "#690005"
    error-container: "#93000A"
    on-error-container: "#FFDAD6"
    background: "#15140C"
    on-background: "#E7E2D6"
    surface: "#15140C"
    surface-dim: "#15140C"
    surface-bright: "#3B3930"
    surface-container-lowest: "#0F0E08"
    surface-container-low: "#1D1C14"
    surface-container: "#212018"
    surface-container-high: "#2C2A22"
    surface-container-highest: "#37352C"
    on-surface: "#E7E2D6"
    surface-variant: "#3F4941"
    on-surface-variant: "#BEC9BE"
    outline: "#88948A"
    outline-variant: "#3F4941"
    inverse-surface: "#E7E2D6"
    inverse-on-surface: "#323128"
    inverse-primary: "#006D3F"
    shadow: "#000000"
    scrim: "#000000"
```

## Typography

Tipografi menggabungkan **Boogaloo** untuk judul besar yang ramah dan ekspresif seperti sampul buku cerita anak, dengan **Capriola** (*rounded sans-serif*) untuk seluruh teks isi, tombol, dan label agar huruf terbuka mudah dibaca oleh anak usia 5–12 tahun. **Space Mono** digunakan untuk penomoran halaman komik, durasi, atau kode kategori pada dasbor admin.

```yaml
typography:
  display-lg:
    fontFamily: "Boogaloo"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 48px
    letterSpacing: 0px
  display-lg-mobile:
    fontFamily: "Boogaloo"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0px
  headline-lg:
    fontFamily: "Boogaloo"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 38px
    letterSpacing: 0px
  headline-md:
    fontFamily: "Boogaloo"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 30px
    letterSpacing: 0px
  headline-sm:
    fontFamily: "Boogaloo"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  title-lg:
    fontFamily: "Capriola"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  title-md:
    fontFamily: "Capriola"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  body-lg:
    fontFamily: "Capriola"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-md:
    fontFamily: "Capriola"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Capriola"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0.1px
  label-md:
    fontFamily: "Capriola"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.2px
  label-sm:
    fontFamily: "Space Mono"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.2px
```

## Layout & Spacing

Aplikasi dirancang **mobile-first** (390px) dengan navigasi bawah (*bottom navigation bar*) sederhana berisi 3–4 menu utama berikon besar dan label jelas untuk anak SD. Pada layar tablet/desktop (seperti Dashboard Administrator), tata letak beradaptasi menggunakan *grid* responsif dengan lebar maksimal 1200px. Skala spasi menggunakan kelipatan **4px / 8px**.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 40px
  page-margin: 16px
```

## Elevation & Depth

Hierarki visual dibangun melalui **lapisan tonal permukaan** (*tonal layers*) antara latar krem hangat (`surface`) dan kartu putih bersih (`surface-container-lowest`), dipadukan dengan garis tepi lembut (`outline-variant`) dan bayangan sangat halus berwarna hijau gelap transparan agar terasa ringan dan ramah anak tanpa efek kaca buram (*no backdrop-blur*).

## Shapes

Sudut membulat besar dan ramah (*rounded-lg* hingga *rounded-xl*) menjadi ciri utama kartu komik, tombol, dan kotak pencarian sehingga seluruh elemen terasa aman, empuk, dan menyenangkan bagi anak-anak.

```yaml
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 16px
  lg: 20px
  xl: 28px
  full: 9999px
```

## Motion & Micro-interaction

Gerakan bersifat ringan, cepat, dan menyenangkan seperti membalik halaman buku cerita. Umpan balik sentuhan tombol merespons dalam `120ms`, sedangkan perpindahan panel atau modal masuk dalam `240ms` dengan kurva perlambatan yang lembut.

```yaml
motion:
  state-change:
    duration: 120ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 240ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

- **Nada suara:** Hangat, ceria, membangkitkan rasa ingin tahu, dan santun khas edukasi Islami anak (contoh: *"Yuk, baca kisah teladan hari ini!"*, *"Belum ada komik favorit, yuk simpan cerita kesukaanmu!"*).
- **Kapitalisasi:** *Sentence case* untuk kalimat sapaan dan deskripsi; *Title Case* singkat untuk judul komik dan nama kategori.
- **Label tombol:** Selalu gunakan kata kerja yang jelas bagi anak SD (*"Baca Sekarang"*, *"Simpan Favorit"*, *"Lanjut Baca"*, *"Terbitkan Komik"*).
- **Aturan Ilustrasi:** Seluruh ilustrasi menampilkan karakter kartun anak Muslim yang konsisten, ekspresif, ceria, dan orisinal (tidak menyerupai karakter berhak cipta), serta **tidak pernah menggambarkan wujud fisik Nabi Muhammad SAW maupun nabi-nabi lainnya** (gunakan simbol cahaya, kaligrafi, arsitektur masjid, atau alam sebagai gantinya).

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html` — `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html` — `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Chip** → `@components/chip.html` — `chip-action`, `chip-input`, `chip-with-icon`
- **Input Field** → `@components/input-field.html` — `input-field-text`, `input-field-icon`
- **Tabs** → `@components/tabs.html` — `tabs-horizontal`, `tabs-with-icon`
