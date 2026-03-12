export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
}

export type Screen = 'home' | 'shop' | 'detail' | 'story' | 'contact';

export const products: Product[] = [
  {
    id: '1',
    name: 'قفطان "زمرد" الفاخر',
    price: 2450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFXz6sPwDYe-TYiXhTvSQDCGwPdM02G9ONx2y2vbmJvAzRKruJv-fCWp_j4rL0s6F4xoTqd5WOk1z_l_netlk245cBx2LyIKBvz5kMASvesKkpa7J93h5qQ8-swNsmijUx76S--dui8RjuEgqLZMo5bbKPncP8vUxljZRHJ-obEZll31x9NxQdgeq-RfoUXuSwSXEHifoUH8y3KOTQHU4EnSgeHNSJtz8ir6YrskSroFF95xF89EGKBHxyKMSdEYy4JH8HV8kweomA',
    category: 'قفاطين',
    description: 'قفطان مغربي أصيل مصمم بعناية فائقة، يجمع بين الأصالة والحداثة. يتميز بتطريز "المعلم" التقليدي يدوياً بخيوط الصقلي الذهبية الرفيعة على حرير طبيعي فاخر.'
  },
  {
    id: '2',
    name: 'جلابة "ياقوت" مخملية',
    price: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGIj-xhzh5M-XQbv48Owz3JfqoY55T94PsMKoSiGv7k7yafa8bdWD3RTQfGcr6Ony66pRjDKjW9Y78DYRXnDYpaJwroMlGv_mB5tqRUCBO4cWlbp5p62sdvseZ7ll9Wj8AecNsaR2E7UCJxvN4mpB4y3d3tMMG593xXAXDv58_BqkUXiPM3aojghdo2AfguzxRz_2j14pzZJax3NAJ2EuwALZIPgCBM5Kdj8WRaeU8gPHp6Z5igEcxJkCDIHJdEwBbm3iZX0LUtCC9',
    category: 'جلابات',
    description: 'جلابة مغربية عصرية مصنوعة من أجود أنواع المخمل، تتميز بتصميم مريح وأنيق يناسب الإطلالات اليومية والمناسبات الخاصة.'
  },
  {
    id: '3',
    name: 'تكشيطة "نور" للعروس',
    price: 5800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsPaZ_BhCXOUOy9tzF4VUOGH1lpqgtCGEIXs_cIawG4S5OmijfBu6hnaoc8z_spuUxWE5U9vZDTEc4A2tNhpv5J4o18j-iFnwoXoSQeHkAnIp9ZGLr4Mr7nU3Xj2oXPJF9Q4qQftLxnXydVi2VcHl9GbRcHy2ii36QS9V8GVJr2rk_phErqHgMIIG7XeCBSB3_xObA0zJUMzGLX6zaMPdYa0Yt2Rnn2tPuSZcmZoViXs1DX_9xHINuEB082_tAL8Ue5yPix2vsEfMZ',
    category: 'تكاشيط',
    description: 'تكشيطة ملكية للعروس، مطرزة بالكامل بخيوط الذهب والأحجار الكريمة، تعكس فخامة التراث المغربي في ليلة العمر.'
  },
  {
    id: '4',
    name: 'قفطان "شروق" عصري',
    price: 1950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPyKj29TZJDZVpt0U2gmHOQSwowxcnJPiNscjqpvGIf44cOa-9Ea-iB2ya3SuYwg3pMSxvt_D5ioi1AkXk7xlJK5cjfJO4LPFgQ-_z7JFQEc1VVQoD1S9mVLATLAoMlD08vp5hEaymaHpFJGb9O-KPpjsZd7-94NQC8donJdz1-kA11Ekxn0y4FJtHDocIzP8iDT25tD8MCmGTz7hsW2ggubxkLOfW0F6BJQQpQAJJUrrTTKlizrKONHH2UckvnRkS0VzWfFI837RF',
    category: 'قفاطين',
    description: 'تصميم عصري يجمع بين خفة القماش وأناقة التطريز اليدوي، مثالي للمناسبات الصيفية والاحتفالات الراقية.'
  },
  {
    id: '5',
    name: 'تكشيطة "فاس" الزرقاء',
    price: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg5fNMEVejo07IhhiHqCdEvJGXjO3aZLqDRJRcIrrRXUOucFs5PpL1JyIRgi7RGwHspgORJHLPxi9UV2_8zePWERiBzxW2zKnDHBs2wCmZsHokZUmOOduDUw-Kse9CFMEKfnJOHdiVWPtu9IEgefeuqLPz6pyXAcD_9U_21W6yTRsIo6n0eebRojYqmsOSZYd3G40jFe4-OtfMLwD5hG1q-8_9OPtdli4fuJGH-vl425nzElwh1dG0d-xc62XmOEmgsgI901GbFFyD',
    category: 'تكاشيط',
    description: 'تكشيطة تقليدية بلون أزرق ملكي، تتميز بتطريزات دقيقة تعكس مهارة الصانع التقليدي بمدينة فاس.'
  },
  {
    id: '6',
    name: 'قفطان العروس العاجي',
    price: 3200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASKNGvSGwtzcMQ4M6LHX902hdbDigUae-6Yy0YAN-2xscim52M7ndCeJBV64Fq6yoJiUbG1WQEuGZvS_tM0JGgDGAjaifadbHkg-U5OcE2Jr5L_VjKLwTCA7IJr4YWTVY2iDtGCryMUIwvEJgUO957rEKUFLm8oGBJ5PKo0im4BoU4zZTzgSqlyqD-9GZ3tvCAJegDi1JbB5leyP3nAe9UGBVC4grg8dOLeYx7szVBVy2ThUDBTYltnxo7uPRn1ctMElAPRT2V-HDL',
    category: 'قفاطين',
    description: 'قفطان بلون عاجي ساحر، مطرز بخرز فضي دقيق، يمنح العروس إطلالة ملائكية وفخمة.'
  }
];

export const categories = [
  { name: 'قفاطين', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgmiTu47IU-2doLWB3CRUZl3DJc-UE11ow16s6F9PVdwhhAHFOIdpfEpxK0j2iF83qnh9Ncwl8e65T4uMHTUSfdYEMO6F04vrVTIAiuYR6bF0XCA6glejCRqe7AhB8kREOrGWFYEo8kzHo2Hrk_uyMXbT2Z-U0klt3Y_nyP5qmGEvQlGcuYytyjpJXMExYlPzJ4F_LRonVtd2sZPsOc9Vw-HdyqeXRnituqQCvhZxjgJGaH_g25H_JbvxuEKC3-DyjF-1ml7_kO98m' },
  { name: 'جلابات', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnb6i0kiAdzTn8BUxr_cEQzycBdtKq9LW8LocCKmtZ1wx10ClNyE7z8oPnYtBCHhtOaBAUWPFIXvxIQCVii0-Gk0k2j3eScPuf91iSzBFEep0mHx72QFSyj9520Nb6uJ7jfzxt21N_7VG1xmBZiXRLzrmafJfV6aA7od_ZGN9OUNtjBXxSiUCns9ivFcUfQftFP6W6ki98-l4E9q9v8NmeGP8r-kKol81mvEYu8kwtCR_QTPXSDkmRWYdByp9RFcl_MuPee0j_wf6U' },
  { name: 'تكاشيط', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfLUUqePVhRZo2lphE1wx_UwEUq_CCQ3IzglfkDpcWo4kYpxphCPFx_WWXupb3xIAt4Ema7tGY7u5kz4Q7kGu4CXO9gQeyFNotLv4WAbYalCU4nMfqaXGdFoxUzr5QQoYsMzS9YKWn004zqDUSHAu_ckvGeWwZJvpOF2i1si0p251ucgU46LbKfaE5bpVRksTQS0gFzE5NbsjfvaJDo_hyzrKzmqX-5VS3F0y5uq2o_qd_vFU41eQMdHsAPEN8f50a9a0GaWTG5Fp5' },
  { name: 'بلاغي', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUIdlfc5GrhfFloqg96691bXcxu7yhoHUDa-3C6RvCLUeiDEWpPaL-xVorThg8YV91H0QVxSLMbRmgaqU8HyyhgbcgHd4GnoQIJKbcJ6trbp3Agmu7RhjCM3PatvuQ-_P-Bv0WUMdFGJGgz6g5ZogH7S6v1QT-874YRIJfAGvyGTPNLaDgbUqJ9VBUQjLTkKz-yFSTbmer0QPmPzL9Z8F2SFzSdF3yFBXu6po0atDSa-yPtcrU4Cf6LPqqGHptT_dyM3Q_Camm7Mip' },
  { name: 'إكسسوارات', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe-RXuKs1l2YZROEn-W6OlhEzjd8NPp3KR0M_Cp1QAfpkJ9J5i-Y-4lC86Se2kl8EM7OmThfIvGsyjyfDZbbMIVmpEY68LLmw3mxiuXiYsuZFmsouPgHKvrYG8iRRxORGIC5lXg-htYYiLs9O2BG96ADZ6Knaokmgqkieswx7ABrE1HfYiN5nT9xLdvXuNhg5eVXRqi8MQdT3c-QaYMFoAg9MhSNHZ-RhQLLAsi5u2xD70fuLTAmJICcKzsxTrMjT1rjCSAVpOm76n' }
];
