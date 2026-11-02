// Sitenin tek yerden yönetilen bilgileri.
// Adres, telefon, e-posta gibi şeyler değiştiğinde yalnızca burayı düzenle.

export const site = {
  title: 'av.lokmankilic',
  description:
    'Av. Lokman Kılıç — İstanbul Barosu. İş, ceza, sözleşmeler, gayrimenkul ve icra hukuku alanlarında avukatlık hizmeti; güncel hukuki gelişmelere ilişkin bilgilendirici yazılar.',
  lang: 'tr',

  baro: 'İstanbul Barosu',
  sicilNo: '85028',

  adres: 'Osmaniye Mah. Şirin Sk. No: 20/3, Canbey Plaza, Bakırköy / İstanbul',
  adresHarita:
    'https://www.google.com/maps/search/?api=1&query=Osmaniye+Mah.+%C5%9Eirin+Sk.+No:20%2F3+Canbey+Plaza+Bak%C4%B1rk%C3%B6y+%C4%B0stanbul',
  telefon: '0534 334 86 76',
  telefonTel: '+905343348676',
  eposta: 'av.lokmankilic@gmail.com',

  // Çalışma alanları: ana sayfadaki kartlar bu listeden üretilir.
  calismaAlanlari: [
    {
      ad: 'İş Hukuku',
      aciklama:
        'İşe iade, kıdem ve ihbar tazminatı, fazla mesai ve diğer işçilik alacakları, iş sözleşmesinin feshi.',
    },
    {
      ad: 'Ceza Hukuku',
      aciklama:
        'Soruşturma ve kovuşturma aşamalarında şüpheli, sanık ve müşteki vekilliği; suç duyurusu ve itiraz süreçleri.',
    },
    {
      ad: 'Sözleşmeler Hukuku',
      aciklama:
        'Sözleşme hazırlanması ve incelenmesi, sözleşmeden doğan alacak ve tazminat davaları, fesih ve cezai şart uyuşmazlıkları.',
    },
    {
      ad: 'Gayrimenkul Hukuku',
      aciklama:
        'Kira uyuşmazlıkları ve tahliye, tapu iptal ve tescil, ortaklığın giderilmesi, kat mülkiyeti kaynaklı davalar.',
    },
    {
      ad: 'İcra Hukuku',
      aciklama:
        'İlamlı ve ilamsız icra takipleri, itiraz ve itirazın iptali davaları, haciz ve tahliye işlemleri.',
    },
  ],
};
