export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  images: string[];
  isNew?: boolean;
  isSoldOut?: boolean;
  fabric: string;
  craftsmanship: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'قفطان "ياقوت" الملكي',
    price: 2500,
    category: 'قفاطين',
    description: 'تحفة فنية تجسد مهارة الصانع المغربي، قفطان "ياقوت" مصنوع من أجود أنواع الحرير الطبيعي، مطرز يدوياً بخيوط الصقلي الذهبية الرفيعة.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA0mrtKtRqDYQzqwmO_qbQrHm63xRJhr0Fd9BX9vYHvy3t19nuiu_eqBJFNN3250Ez9NK5T2efkSxwmTk-4CsawYCbVnXYxLSo3CnPJauhPpzwiYkpOsKiYWd0TU5YXPl44cIYLZAHEdvxxTrkuc-cEd1g0ql9xFREkccGPquqkCkeW4dMoSBLyx_MKNUHybr_iWtbZBLSty5yKiwcuozhfKyoeBCnQyfet1qAAelxTWxf8f59CcYz83HZ3jCaX10zhwB8YdblvR5M',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDA0mrtKtRqDYQzqwmO_qbQrHm63xRJhr0Fd9BX9vYHvy3t19nuiu_eqBJFNN3250Ez9NK5T2efkSxwmTk-4CsawYCbVnXYxLSo3CnPJauhPpzwiYkpOsKiYWd0TU5YXPl44cIYLZAHEdvxxTrkuc-cEd1g0ql9xFREkccGPquqkCkeW4dMoSBLyx_MKNUHybr_iWtbZBLSty5yKiwcuozhfKyoeBCnQyfet1qAAelxTWxf8f59CcYz83HZ3jCaX10zhwB8YdblvR5M',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXq_HFXwdawYwWYSowLPEFGZjCP1LBSX6r-54xL73hF9uNgWAhhzqvVRPLvUFcxQAGL_tMO0ZHNfZRnh4tRWb58L5_a7pU-Vyo7T896rVtobo0z5tmAgVIyfG7b6GiwLgtEKuxFoL9A5Ddn-lVUq7oqG6PBMvJ3vVh1lf5A0sdHkNe6s7c81ktrKyP0caUh_yHkumY5crWbuwVd5iIBvCTaZXOalZlkHIL-P0te8Wa716TaI-Kij2g47vjOL4ZjrDQd1oqpGTZgexY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeGUQUzaeQPRC6xniQh0JgzcQ6QI8PS1xGnmBGbnjjkQrSFsFF-9Be1XWvHBZjCGjdvUgm3AtXOKfe3bxa3Cp49DI9wQEuOEpSG8NcOq_V4Q8LFg6cgJswIsy3PVAjnEsSwQvgiHPa0XehhS0D7qREVc8u3SN5hrsWMpNmsgb3uv_ZCVaiv_JxfxWkuQnadrNvdmcr562QQMyADH1hS9KnFb5YfipaJJDyjrU-A7trcmAmd5dc8b604wEZqbXJDcZpz69a68ecvTqk'
    ],
    isNew: true,
    fabric: 'حرير طبيعي 100%',
    craftsmanship: 'تطريز يدوي ذهبي'
  },
  {
    id: '2',
    name: 'جلابة الحرير "زمرد"',
    price: 1850,
    category: 'جلابات',
    description: 'جلابة مغربية عصرية مصنوعة من الحرير الفاخر بلون أخضر زمردي، تتميز بتطريزات دقيقة تضفي لمسة من الرقي.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiXF_jw-y3T-oF1e9pSbu8o9qHzvJ0R2rURizM509aLNlKsJh2atWr8M3_ozO6bo3FaAA-T2z-clrb0hFq8RJ9xTDw0hNxTxOMgyeXCQBM9HyN2oj7rbaG5dGf_rrHH5eIji7oYIoRhjv4T8TdzyqUeugFbp5D9Z7-BkO7GwibNXfea3VPbKaoR9mbevym4fhD80Jh6IG1mx0z5klD-pZ1yNOFke-wtA2QiUmbrafIsA-mZLqwknaPcFx3NGKWOL0-arhCnTi3Qo3t',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCiXF_jw-y3T-oF1e9pSbu8o9qHzvJ0R2rURizM509aLNlKsJh2atWr8M3_ozO6bo3FaAA-T2z-clrb0hFq8RJ9xTDw0hNxTxOMgyeXCQBM9HyN2oj7rbaG5dGf_rrHH5eIji7oYIoRhjv4T8TdzyqUeugFbp5D9Z7-BkO7GwibNXfea3VPbKaoR9mbevym4fhD80Jh6IG1mx0z5klD-pZ1yNOFke-wtA2QiUmbrafIsA-mZLqwknaPcFx3NGKWOL0-arhCnTi3Qo3t'],
    fabric: 'حرير فاخر',
    craftsmanship: 'تطريز يدوي دقيق'
  },
  {
    id: '3',
    name: 'تكشيطة "نجمة" للسهرات',
    price: 4200,
    category: 'تكشيطة',
    description: 'تكشيطة مغربية فاخرة مكونة من قطعتين، مثالية للمناسبات الكبرى والأعراس، مطرزة بالكامل بلمسات فضية ساحرة.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbX6dhNjwEmfp3X16trrSc9UJLUX53QZt4YfZO8SmHPb2oVhxY3kHdt03aN7jqDobMAzPHVNQMEJfN56iNPYbg7cRsubOEEtMiXDRHw_Prn8OGqkJFBn0ch62GhkMGyY0d2NJ4l4K77hjtAS2yCCLYKxIcm5BSyoQUXzrmkQsh4_uEB2cxaeAX9XmDxHdu6gRHc7ZXvj5eDwbHoWWPFmZSlFTGkzDuR1yIYjVt2a6gpmLYiOjnErjPnIw1NgwS3mnZzvaby0An1ZBf',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBbX6dhNjwEmfp3X16trrSc9UJLUX53QZt4YfZO8SmHPb2oVhxY3kHdt03aN7jqDobMAzPHVNQMEJfN56iNPYbg7cRsubOEEtMiXDRHw_Prn8OGqkJFBn0ch62GhkMGyY0d2NJ4l4K77hjtAS2yCCLYKxIcm5BSyoQUXzrmkQsh4_uEB2cxaeAX9XmDxHdu6gRHc7ZXvj5eDwbHoWWPFmZSlFTGkzDuR1yIYjVt2a6gpmLYiOjnErjPnIw1NgwS3mnZzvaby0An1ZBf'],
    fabric: 'مخمل وحرير',
    craftsmanship: 'تطريز يدوي كامل'
  },
  {
    id: '4',
    name: 'قفطان "سما" العصري',
    price: 2100,
    category: 'قفاطين',
    description: 'تصميم عصري يجمع بين البساطة والفخامة، قفطان "سما" يتميز بقصة مريحة وألوان هادئة تناسب الاستخدام اليومي والمناسبات البسيطة.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBrVXbbtGV_kMWoihQjC475kWwBfY4RBLk1X2WJosfWiUTiXIegUKRUQk6sWfBn6BtBvPo8LqJuWiD3o6nbb2vFAO_Gdhd-D2jyL-crawMp7SvuNch9GFpbKo0DcadEDfPX55smN5N2dvK3mSP4VnwjympLjH6KsYGvNO6POfWnnpiC7irq1uhXawnrWDoZ_1yHfGGKmyIRwEJQ9xF7bgOvWwDckq81wcF7ZV2MQIxIWt7g6TYbAaPcYZXvqH5EStxKTgx8I3jiMR3',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBBrVXbbtGV_kMWoihQjC475kWwBfY4RBLk1X2WJosfWiUTiXIegUKRUQk6sWfBn6BtBvPo8LqJuWiD3o6nbb2vFAO_Gdhd-D2jyL-crawMp7SvuNch9GFpbKo0DcadEDfPX55smN5N2dvK3mSP4VnwjympLjH6KsYGvNO6POfWnnpiC7irq1uhXawnrWDoZ_1yHfGGKmyIRwEJQ9xF7bgOvWwDckq81wcF7ZV2MQIxIWt7g6TYbAaPcYZXvqH5EStxKTgx8I3jiMR3'],
    fabric: 'قطن وحرير',
    craftsmanship: 'تطريز ناعم'
  },
  {
    id: '5',
    name: 'عباية "نجد" الذهبية',
    price: 850,
    category: 'عبايات',
    description: 'عباية بتصميم كلاسيكي مستوحى من التراث، مصنوعة من نسيج الكتان الفاخر مع لمسات ذهبية رقيقة.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByHyFXRA6H2N4A1w3Fxv-Lq6SyZZGFNJCOuYqKNuv9F-chzfGDlURhFMW3Wz86JwfzplVzpJd_d2nB3YJUYj1Tyora2ymvHLTNsslX9LwYlPKbaFWl2nIO82jTVPmjDRGgmwqlfbAd_FKROd62bG6LTv08pNiNrHKzbSVyggubGIV7-nSx7NpuSgpKUTgH587hBcWGHmsjmM22BqRIXiBOxxgkrQNoDY4oLb2kcGZ_b7LEhIfuowqoNV7NubkJKqDfu-RJiX-TvfD',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuByHyFXRA6H2N4A1w3Fxv-Lq6SyZZGFNJCOuYqKNuv9F-chzfGDlURhFMW3Wz86JwfzplVzpJd_d2nB3YJUYj1Tyora2ymvHLTNsslX9LwYlPKbaFWl2nIO82jTVPmjDRGgmwqlfbAd_FKROd62bG6LTv08pNiNrHKzbSVyggubGIV7-nSx7NpuSgpKUTgH587hBcWGHmsjmM22BqRIXiBOxxgkrQNoDY4oLb2kcGZ_b7LEhIfuowqoNV7NubkJKqDfu-RJiX-TvfD'],
    fabric: 'كتان فاخر',
    craftsmanship: 'لمسات ذهبية'
  },
  {
    id: '6',
    name: 'فستان الصيف الهادئ',
    price: 450,
    category: 'فساتين',
    description: 'فستان صيفي خفيف بألوان باستيل ناعمة، مثالي للأيام المشمسة والنزهات الخارجية.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoa4lklBXDd61Ij1DakCy7YeJhgrHAwR3Xm0ckFQQzERaCjLmG66QWQ_O8lKGtDhyV5ipVrHSxK5uC8lVCqYOo-91_XvUVFIWpm-_9_isN1KdximW2ON66CBVs0Xhms_bWxxihuFV21hi-gg-xwIHyjR-CB35BnHrif32ci2DHcWIyOoJ7SWFp6IBbgKlSLyigBM1_P_QcEJ-srce42dSJ2pVPpf83Mnzfcxt8RkH4QKlSQ4T_vNwNM7-kYJf8fkGCoqrekyb1eY_y',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDoa4lklBXDd61Ij1DakCy7YeJhgrHAwR3Xm0ckFQQzERaCjLmG66QWQ_O8lKGtDhyV5ipVrHSxK5uC8lVCqYOo-91_XvUVFIWpm-_9_isN1KdximW2ON66CBVs0Xhms_bWxxihuFV21hi-gg-xwIHyjR-CB35BnHrif32ci2DHcWIyOoJ7SWFp6IBbgKlSLyigBM1_P_QcEJ-srce42dSJ2pVPpf83Mnzfcxt8RkH4QKlSQ4T_vNwNM7-kYJf8fkGCoqrekyb1eY_y'],
    isSoldOut: true,
    fabric: 'قطن خفيف',
    craftsmanship: 'خياطة عصرية'
  }
];
