import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Yazılar: src/content/yazilar/ altındaki her .md dosyası bir yazıdır.
const yazilar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yazilar' }),
  schema: z.object({
    baslik: z.string(),
    ozet: z.string(),
    tarih: z.coerce.date(),
    alan: z.string(), // Örn. "İş Hukuku"
    yazar: z.string().default('lokman-kilic'), // src/content/ekip/ altındaki dosya adı
    taslak: z.boolean().default(false), // true ise yalnızca geliştirme modunda görünür
  }),
});

// Ekip: src/content/ekip/ altındaki her .md dosyası bir avukattır.
// Birden fazla avukat olduğunda /ekip sayfası ve menüdeki "Ekip" bağlantısı kendiliğinden açılır.
const ekip = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ekip' }),
  schema: z.object({
    ad: z.string(), // "Av. Lokman Kılıç"
    unvan: z.string().default('Avukat'),
    baro: z.string(),
    sicilNo: z.string().optional(),
    foto: z.string().optional(), // public/ altındaki yol, örn. "/foto/lokman-kilic.jpg"
    eposta: z.string().optional(),
    alanlar: z.array(z.string()).default([]),
    egitim: z
      .array(z.object({ kurum: z.string(), program: z.string(), donem: z.string() }))
      .default([]),
    sira: z.number().default(100), // Ekip sayfasındaki sıralama
  }),
});

export const collections = { yazilar, ekip };
