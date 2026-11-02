# av.lokmankilic

Av. Lokman Kılıç'ın tanıtım ve yazı sitesi. [Astro](https://astro.build) ile yapılmış statik bir sitedir: veritabanı ve yönetim paneli yoktur, her şey bu klasördeki dosyalardan üretilir.

## Çalıştırma

```bash
npm install        # ilk kurulumda bir kez
npm run dev        # http://localhost:4321 adresinde canlı önizleme
npm run build      # yayın için dist/ klasörünü üretir
```

## Yapı

```
src/
  data/site.ts            Adres, telefon, e-posta, çalışma alanları (tek yerden düzenlenir)
  content/
    ekip/*.md             Avukat profilleri (şimdilik yalnızca lokman-kilic.md)
    yazilar/*.md          Yazılar; her dosya bir yazıdır
  pages/
    index.astro           Ana sayfa (tanıtım, hakkımda, çalışma alanları, son yazılar, iletişim)
    yazilar/index.astro   Tüm yazılar
    yazilar/[id].astro    Tek yazı sayfası
    ekip.astro            Ekip sayfası (birden fazla avukat olunca menüye kendiliğinden gelir)
  layouts/Base.astro      Üst menü, alt bilgi, yazı tipleri
  components/Iletisim.astro
  styles/global.css       Renkler ve genel biçim
public/
  foto/                   Fotoğraflar
```

## Yeni yazı eklemek

`src/content/yazilar/` içine yeni bir `.md` dosyası aç. Dosya adı adres olur (`ise-iade-davasi.md` → `/yazilar/ise-iade-davasi`). Üst kısım şöyle olmalı:

```md
---
baslik: "Yazının başlığı"
ozet: "Listede görünecek bir-iki cümlelik özet."
tarih: 2026-11-15
alan: "İş Hukuku"
taslak: true
---

Yazının gövdesi buraya. Alt başlıklar ## ile.
```

`taslak: true` olan yazılar yalnızca `npm run dev` ile görünür, yayına alınan siteye girmez. Yazı hazır olunca o satırı sil.

## Yeni avukat eklemek

`src/content/ekip/` içine `ad-soyad.md` şeklinde bir dosya aç; örnek olarak `lokman-kilic.md` dosyasını kopyalayıp düzenlemek yeterli. Fotoğrafı `public/foto/` altına koy. İkinci avukat eklendiğinde üst menüde "Ekip" bağlantısı ve `/ekip` sayfası kendiliğinden açılır. Yazıların `yazar` alanına bu dosyanın adını yazarsan yazı sayfasında o avukat görünür.

## Yayına almak

Site statik olduğu için ücretsiz barındırma yeterlidir. En kolay yol:

1. Bu klasörü bir GitHub deposuna gönder.
2. [Cloudflare Pages](https://pages.cloudflare.com), [Netlify](https://netlify.com) veya [Vercel](https://vercel.com) üzerinde depoyu bağla. Çatı olarak Astro'yu kendiliğinden tanır (build komutu `npm run build`, çıktı klasörü `dist`).
3. Alan adını (`lokmankilic.av.tr`) aynı panelden bağla.
4. `astro.config.mjs` içindeki `site` adresi zaten `https://lokmankilic.av.tr` olarak ayarlı.

Bundan sonra her `git push` siteyi otomatik günceller.

## Reklam yasağı hatırlatması

Avukat web siteleri TBB Reklam Yasağı Yönetmeliği'ne tabidir. Sitede karşılaştırma, başarı vaadi, müvekkil referansı ve benzeri ifadelerden kaçınılmalı; yazılar bilgilendirme çerçevesinde kalmalıdır.
