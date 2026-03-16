import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  Heart,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { PRODUCTS, type Product } from './constants';

// --- Types ---
type View = 'home' | 'shop' | 'product' | 'cart' | 'checkout' | 'order-success' | 'wishlist' | 'contact' | 'about';

interface CartItem extends Product {
  quantity: number;
}

// --- Components ---

const Navbar = ({ 
  currentView, 
  setView, 
  cartCount,
  wishlistCount,
  onOpenMenu 
}: { 
  currentView: View; 
  setView: (v: View) => void; 
  cartCount: number;
  wishlistCount: number;
  onOpenMenu: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="flex items-center gap-4">
        <button onClick={onOpenMenu} className="p-2 hover:bg-black/5 rounded-full lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <button onClick={() => setView('home')} className={cn("hover:text-primary transition-colors", currentView === 'home' && "text-primary")}>الرئيسية</button>
          <button onClick={() => setView('shop')} className={cn("hover:text-primary transition-colors", currentView === 'shop' && "text-primary")}>المتجر</button>
          <button onClick={() => setView('about')} className={cn("hover:text-primary transition-colors", currentView === 'about' && "text-primary")}>عن الماركة</button>
          <button onClick={() => setView('contact')} className={cn("hover:text-primary transition-colors", currentView === 'contact' && "text-primary")}>اتصل بنا</button>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => setView('home')}>
        <h1 className="text-2xl lg:text-3xl font-serif font-bold tracking-tighter text-foreground">
          KARIMA <span className="text-primary">BAY</span>
        </h1>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <button onClick={() => setView('wishlist')} className="p-2 hover:bg-black/5 rounded-full relative">
          <Heart className={cn("w-5 h-5", wishlistCount > 0 && "fill-primary text-primary")} />
          {wishlistCount > 0 && (
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {wishlistCount}
            </span>
          )}
        </button>
        <button onClick={() => setView('cart')} className="p-2 hover:bg-black/5 rounded-full relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

const Footer = ({ setView }: { setView: (v: View) => void }) => (
  <footer className="bg-[#1e1a14] text-white pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <h2 className="text-2xl font-serif font-bold tracking-tighter">
          KARIMA <span className="text-primary">BAY</span>
        </h2>
        <p className="text-white/60 text-sm leading-relaxed">
          نحن نؤمن بأن الموضة هي تعبير عن الهوية. تصاميمنا تجمع بين عراقة التراث المغربي ولمسات الحداثة العالمية لتمنحك إطلالة ملكية في كل مناسبة.
        </p>
        <div className="flex gap-4">
          <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-full transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-full transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="p-2 bg-white/5 hover:bg-primary/20 rounded-full transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-serif mb-6 text-primary">روابط سريعة</h3>
        <ul className="space-y-4 text-sm text-white/60">
          <li><button onClick={() => setView('home')} className="hover:text-white transition-colors">الرئيسية</button></li>
          <li><button onClick={() => setView('shop')} className="hover:text-white transition-colors">المتجر</button></li>
          <li><button onClick={() => setView('about')} className="hover:text-white transition-colors">قصتنا</button></li>
          <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors">تواصل معنا</button></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-serif mb-6 text-primary">خدمة العملاء</h3>
        <ul className="space-y-4 text-sm text-white/60">
          <li><a href="#" className="hover:text-white transition-colors">سياسة الشحن</a></li>
          <li><a href="#" className="hover:text-white transition-colors">الاستبدال والاسترجاع</a></li>
          <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
          <li><a href="#" className="hover:text-white transition-colors">تتبع الطلب</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-serif mb-6 text-primary">تواصل معنا</h3>
        <ul className="space-y-4 text-sm text-white/60">
          <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> الدار البيضاء، المغرب</li>
          <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +212 600 000 000</li>
          <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> info@karimabay.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
      <p>© {new Date().getFullYear()} Karima Bay Mode. جميع الحقوق محفوظة.</p>
    </div>
  </footer>
);

const ProductCard = ({ 
  product, 
  onClick, 
  isWishlisted, 
  onToggleWishlist 
}: { 
  product: Product; 
  onClick: () => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (e: React.MouseEvent) => void;
  key?: React.Key;
}) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-white mb-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      
      <button 
        onClick={onToggleWishlist}
        className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-all z-10"
      >
        <Heart className={cn("w-4 h-4 transition-colors", isWishlisted ? "fill-primary text-primary" : "text-foreground/40")} />
      </button>

      {product.isNew && (
        <span className="absolute top-4 right-4 bg-primary text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
          جديد
        </span>
      )}
      {product.isSoldOut && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
          <span className="text-white text-sm font-bold uppercase tracking-widest border border-white/30 px-4 py-2 rounded-full">
            نفذت الكمية
          </span>
        </div>
      )}
      <div className="absolute inset-x-4 bottom-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-full bg-white/90 backdrop-blur-md text-foreground py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
          عرض التفاصيل
        </button>
      </div>
    </div>
    <div className="space-y-1 text-center">
      <p className="text-[10px] text-primary uppercase tracking-widest font-bold">{product.category}</p>
      <h3 className="text-lg font-serif font-medium">{product.name}</h3>
      <p className="text-sm font-medium text-foreground/60">{product.price} د.م</p>
    </div>
  </motion.div>
);

// --- Pages ---

const HomePage = ({ setView, setSelectedProduct }: { setView: (v: View) => void; setSelectedProduct: (p: Product) => void }) => {
  const categories = [
    { name: 'قفاطين', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDA0mrtKtRqDYQzqwmO_qbQrHm63xRJhr0Fd9BX9vYHvy3t19nuiu_eqBJFNN3250Ez9NK5T2efkSxwmTk-4CsawYCbVnXYxLSo3CnPJauhPpzwiYkpOsKiYWd0TU5YXPl44cIYLZAHEdvxxTrkuc-cEd1g0ql9xFREkccGPquqkCkeW4dMoSBLyx_MKNUHybr_iWtbZBLSty5yKiwcuozhfKyoeBCnQyfet1qAAelxTWxf8f59CcYz83HZ3jCaX10zhwB8YdblvR5M' },
    { name: 'جلابات', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiXF_jw-y3T-oF1e9pSbu8o9qHzvJ0R2rURizM509aLNlKsJh2atWr8M3_ozO6bo3FaAA-T2z-clrb0hFq8RJ9xTDw0hNxTxOMgyeXCQBM9HyN2oj7rbaG5dGf_rrHH5eIji7oYIoRhjv4T8TdzyqUeugFbp5D9Z7-BkO7GwibNXfea3VPbKaoR9mbevym4fhD80Jh6IG1mx0z5klD-pZ1yNOFke-wtA2QiUmbrafIsA-mZLqwknaPcFx3NGKWOL0-arhCnTi3Qo3t' },
    { name: 'تكشيطة', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbX6dhNjwEmfp3X16trrSc9UJLUX53QZt4YfZO8SmHPb2oVhxY3kHdt03aN7jqDobMAzPHVNQMEJfN56iNPYbg7cRsubOEEtMiXDRHw_Prn8OGqkJFBn0ch62GhkMGyY0d2NJ4l4K77hjtAS2yCCLYKxIcm5BSyoQUXzrmkQsh4_uEB2cxaeAX9XmDxHdu6gRHc7ZXvj5eDwbHoWWPFmZSlFTGkzDuR1yIYjVt2a6gpmLYiOjnErjPnIw1NgwS3mnZzvaby0An1ZBf' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0mrtKtRqDYQzqwmO_qbQrHm63xRJhr0Fd9BX9vYHvy3t19nuiu_eqBJFNN3250Ez9NK5T2efkSxwmTk-4CsawYCbVnXYxLSo3CnPJauhPpzwiYkpOsKiYWd0TU5YXPl44cIYLZAHEdvxxTrkuc-cEd1g0ql9xFREkccGPquqkCkeW4dMoSBLyx_MKNUHybr_iWtbZBLSty5yKiwcuozhfKyoeBCnQyfet1qAAelxTWxf8f59CcYz83HZ3jCaX10zhwB8YdblvR5M" 
            className="w-full h-full object-cover brightness-[0.6]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs lg:text-sm uppercase tracking-[0.3em] font-bold text-primary"
          >
            مجموعة ربيع وصيف 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-8xl font-serif leading-tight"
          >
            أناقة مغربية <br /> <span className="italic">بلمسة عصرية</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button 
              onClick={() => setView('shop')}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
            >
              اكتشفي المجموعة
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-white/30 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full" />
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <p className="text-xs text-primary uppercase tracking-widest font-bold">التصنيفات</p>
            <h2 className="text-3xl lg:text-5xl font-serif">تسوقي حسب الفئة</h2>
          </div>
          <button onClick={() => setView('shop')} className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
            عرض الكل <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() => setView('shop')}
            >
              <img src={cat.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 right-8 left-8 flex justify-between items-end">
                <h3 className="text-2xl font-serif text-white">{cat.name}</h3>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs text-primary uppercase tracking-widest font-bold">وصلنا حديثاً</p>
          <h2 className="text-3xl lg:text-5xl font-serif">قطع مختارة بعناية</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm leading-relaxed">
            اكتشفي أحدث إبداعاتنا التي تجمع بين الفخامة والراحة، مصممة خصيصاً للمرأة التي تبحث عن التميز.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {PRODUCTS.filter(p => p.isNew).map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => {
                setSelectedProduct(product);
                setView('product');
              }} 
            />
          ))}
        </div>
      </section>

      {/* Signature Collection Banner */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto relative h-[500px] rounded-[2.5rem] overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXq_HFXwdawYwWYSowLPEFGZjCP1LBSX6r-54xL73hF9uNgWAhhzqvVRPLvUFcxQAGL_tMO0ZHNfZRnh4tRWb58L5_a7pU-Vyo7T896rVtobo0z5tmAgVIyfG7b6GiwLgtEKuxFoL9A5Ddn-lVUq7oqG6PBMvJ3vVh1lf5A0sdHkNe6s7c81ktrKyP0caUh_yHkumY5crWbuwVd5iIBvCTaZXOalZlkHIL-P0te8Wa716TaI-Kij2g47vjOL4ZjrDQd1oqpGTZgexY" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-6">
            <div className="max-w-2xl space-y-6 text-white">
              <h2 className="text-4xl lg:text-6xl font-serif">مجموعة "ياقوت" الملكية</h2>
              <p className="text-sm lg:text-lg text-white/80 leading-relaxed">
                استكشفي مجموعتنا الحصرية التي تجسد قمة الفخامة المغربية، حيث يلتقي الحرير الطبيعي مع التطريز اليدوي الذهبي.
              </p>
              <button onClick={() => setView('shop')} className="bg-white text-foreground px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                تسوقي المجموعة
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeGUQUzaeQPRC6xniQh0JgzcQ6QI8PS1xGnmBGbnjjkQrSFsFF-9Be1XWvHBZjCGjdvUgm3AtXOKfe3bxa3Cp49DI9wQEuOEpSG8NcOq_V4Q8LFg6cgJswIsy3PVAjnEsSwQvgiHPa0XehhS0D7qREVc8u3SN5hrsWMpNmsgb3uv_ZCVaiv_JxfxWkuQnadrNvdmcr562QQMyADH1hS9KnFb5YfipaJJDyjrU-A7trcmAmd5dc8b604wEZqbXJDcZpz69a68ecvTqk" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-[2rem] hidden lg:block text-white space-y-2">
            <p className="text-4xl font-serif">15+</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-80">سنة من الخبرة</p>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-xs text-primary uppercase tracking-widest font-bold">تراثنا</p>
          <h2 className="text-4xl lg:text-6xl font-serif leading-tight">حيث يلتقي التراث <br /> بالإبداع</h2>
          <p className="text-foreground/60 leading-relaxed">
            في Karima Bay، نحن لا نصمم الملابس فحسب، بل نحافظ على إرث ثقافي غني. كل غرزة تحكي قصة، وكل تصميم هو احتفاء بالمرأة المغربية وقوتها وأناقتها.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="font-serif text-xl">صناعة يدوية</h4>
              <p className="text-xs text-foreground/50">بأيدي أمهر الصناع التقليديين</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-xl">أقمشة فاخرة</h4>
              <p className="text-xs text-foreground/50">حرير طبيعي ومخمل أصيل</p>
            </div>
          </div>
          <button onClick={() => setView('about')} className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-primary transition-colors">
            اكتشفي قصتنا
          </button>
        </div>
      </section>
    </div>
  );
};

const ShopPage = ({ 
  setView, 
  setSelectedProduct,
  wishlist,
  onToggleWishlist
}: { 
  setView: (v: View) => void; 
  setSelectedProduct: (p: Product) => void;
  wishlist: string[];
  onToggleWishlist: (p: Product) => void;
}) => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['الكل', 'قفاطين', 'جلابات', 'تكشيطة', 'عبايات', 'فساتين'];

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;
    if (activeCategory !== 'الكل') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl lg:text-6xl font-serif">المجموعة الكاملة</h1>
        <p className="text-foreground/60 text-sm max-w-xl mx-auto">تصفحي تشكيلتنا الواسعة من الأزياء المغربية الفاخرة، المصممة لتناسب ذوقك الرفيع.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                activeCategory === cat ? "bg-primary text-white" : "bg-white text-foreground/60 hover:bg-black/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-80">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input 
            type="text" 
            placeholder="ابحثي عن قطعة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-black/5 rounded-full px-12 py-3 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-10 lg:gap-y-20">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={(e) => {
                e.stopPropagation();
                onToggleWishlist(product);
              }}
              onClick={() => {
                setSelectedProduct(product);
                setView('product');
              }} 
            />
          ))}
        </AnimatePresence>
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-20 text-center space-y-4">
            <p className="text-xl font-serif text-foreground/40">لم نجد أي نتائج لبحثك</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('الكل'); }} className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary">مسح الفلاتر</button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductDetailPage = ({ 
  product, 
  setView, 
  onAddToCart 
}: { 
  product: Product; 
  setView: (v: View) => void;
  onAddToCart: (p: Product) => void;
}) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <button onClick={() => setView('shop')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-12 hover:text-primary transition-colors">
        <ChevronRight className="w-4 h-4" /> العودة للمتجر
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Gallery */}
        <div className="space-y-6">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white">
            <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedImage(img)}
                className={cn(
                  "aspect-square rounded-xl overflow-hidden border-2 transition-all",
                  selectedImage === img ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs text-primary uppercase tracking-widest font-bold">{product.category}</p>
            <h1 className="text-4xl lg:text-5xl font-serif">{product.name}</h1>
            <p className="text-2xl font-medium text-primary">{product.price} د.م</p>
          </div>

          <p className="text-foreground/60 leading-relaxed">{product.description}</p>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest">المقاس</p>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold transition-all border",
                      selectedSize === size ? "bg-primary border-primary text-white" : "bg-white border-black/5 hover:border-primary"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest">الكمية</p>
              <div className="flex items-center gap-4 w-fit bg-white border border-black/5 rounded-xl p-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><Minus className="w-4 h-4" /></button>
                <span className="w-8 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-foreground text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" /> إضافة للسلة
            </button>
            <button className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" /> استفسار واتساب
            </button>
          </div>

          <div className="border-t border-black/5 pt-10 grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">نوع القماش</p>
              <p className="text-sm font-medium">{product.fabric}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">طريقة الصنع</p>
              <p className="text-sm font-medium">{product.craftsmanship}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = ({ 
  cart, 
  setView, 
  updateQuantity, 
  removeItem 
}: { 
  cart: CartItem[]; 
  setView: (v: View) => void;
  updateQuantity: (id: string, q: number) => void;
  removeItem: (id: string) => void;
}) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-6xl font-serif mb-16 text-center">حقيبة التسوق</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 space-y-8">
          <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-10 h-10 text-foreground/20" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-serif">حقيبتك فارغة حالياً</h2>
            <p className="text-foreground/60 text-sm">يبدو أنك لم تضفي أي قطع إلى حقيبتك بعد.</p>
          </div>
          <button onClick={() => setView('shop')} className="bg-primary text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest">
            ابدئي التسوق
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map(item => (
              <div key={item.id} className="flex gap-6 p-6 bg-white rounded-3xl border border-black/5">
                <div className="w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{item.category}</p>
                      <h3 className="text-lg font-serif">{item.name}</h3>
                      <p className="text-sm font-medium text-foreground/60">{item.price} د.م</p>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-foreground/20 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 w-fit bg-background rounded-xl p-1">
                    <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><Minus className="w-3 h-3" /></button>
                    <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-black/5 rounded-lg transition-colors"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-black/5 space-y-6">
              <h3 className="text-xl font-serif">ملخص الطلب</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-foreground/60">
                  <span>المجموع الفرعي</span>
                  <span>{subtotal} د.م</span>
                </div>
                <div className="flex justify-between text-foreground/60">
                  <span>الشحن</span>
                  <span>{shipping} د.م</span>
                </div>
                <div className="border-t border-black/5 pt-4 flex justify-between font-bold text-lg">
                  <span>الإجمالي</span>
                  <span className="text-primary">{total} د.م</span>
                </div>
              </div>
              <button onClick={() => setView('checkout')} className="w-full bg-foreground text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary transition-all">
                إتمام الطلب
              </button>
            </div>
            <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <p className="text-xs font-medium leading-relaxed">شحن مجاني للطلبات الأكثر من 3000 د.م</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
    <div className="text-center space-y-4 mb-20">
      <h1 className="text-4xl lg:text-6xl font-serif">تواصل معنا</h1>
      <p className="text-foreground/60 text-sm max-w-xl mx-auto">نحن هنا لمساعدتك والإجابة على جميع استفساراتك. لا تترددي في التواصل معنا.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-black/5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif">اتصلي بنا</h3>
            <p className="text-sm text-foreground/60">+212 600 000 000</p>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-black/5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif">راسلينا</h3>
            <p className="text-sm text-foreground/60">info@karimabay.com</p>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-black/5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif">الموقع</h3>
            <p className="text-sm text-foreground/60">الدار البيضاء، المغرب</p>
          </div>
          <div className="space-y-4 p-8 bg-white rounded-3xl border border-black/5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif">واتساب</h3>
            <p className="text-sm text-foreground/60">متاح 24/7</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 space-y-8">
        <h3 className="text-2xl font-serif">أرسلي رسالة</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">الاسم الكامل</label>
              <input type="text" className="w-full bg-background border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="أدخلي اسمك" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">البريد الإلكتروني</label>
              <input type="email" className="w-full bg-background border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="example@mail.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">الموضوع</label>
            <input type="text" className="w-full bg-background border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="كيف يمكننا مساعدتك؟" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">الرسالة</label>
            <textarea rows={4} className="w-full bg-background border-none rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="اكتبي رسالتك هنا..." />
          </div>
          <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all">
            إرسال الرسالة
          </button>
        </form>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="space-y-24 pb-24">
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0mrtKtRqDYQzqwmO_qbQrHm63xRJhr0Fd9BX9vYHvy3t19nuiu_eqBJFNN3250Ez9NK5T2efkSxwmTk-4CsawYCbVnXYxLSo3CnPJauhPpzwiYkpOsKiYWd0TU5YXPl44cIYLZAHEdvxxTrkuc-cEd1g0ql9xFREkccGPquqkCkeW4dMoSBLyx_MKNUHybr_iWtbZBLSty5yKiwcuozhfKyoeBCnQyfet1qAAelxTWxf8f59CcYz83HZ3jCaX10zhwB8YdblvR5M" className="w-full h-full object-cover brightness-[0.5]" referrerPolicy="no-referrer" />
      </div>
      <div className="relative z-10 text-center text-white px-6 space-y-4">
        <h1 className="text-5xl lg:text-8xl font-serif">قصة Karima Bay</h1>
        <p className="text-sm lg:text-lg text-white/60 uppercase tracking-[0.3em] font-bold">تراث يتجدد، وأناقة لا تنتهي</p>
      </div>
    </section>

    <section className="px-6 max-w-5xl mx-auto space-y-12 text-center">
      <h2 className="text-3xl lg:text-5xl font-serif">بدايتنا</h2>
      <p className="text-lg lg:text-2xl font-serif text-foreground/60 leading-relaxed italic">
        "بدأت رحلتنا من شغف عميق بالتطريز المغربي التقليدي، ورغبة في تقديم هذا الفن للعالم بأسلوب يحاكي العصر."
      </p>
      <div className="space-y-6 text-foreground/60 leading-relaxed text-sm lg:text-base max-w-3xl mx-auto">
        <p>
          تأسست Karima Bay Mode في قلب الدار البيضاء، المدينة التي تنبض بالحياة وتجمع بين الأصالة والحداثة. كان هدفنا منذ اليوم الأول هو إعادة تعريف القفطان المغربي، ليس فقط كزي للمناسبات، بل كقطعة فنية تعبر عن شخصية المرأة العصرية.
        </p>
        <p>
          نحن نؤمن بأن الفخامة تكمن في التفاصيل. لهذا السبب، نقضي مئات الساعات في اختيار الأقمشة، وتصميم الأنماط، والإشراف على كل غرزة تطريز يدوية. كل قطعة تخرج من مشغلنا هي نتيجة لتعاون بين مصممين مبدعين وحرفيين تقليديين توارثوا المهنة أباً عن جد.
        </p>
      </div>
    </section>

    <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-6 text-center p-12 bg-white rounded-[2.5rem] border border-black/5">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif">الأصالة</h3>
        <p className="text-sm text-foreground/60 leading-relaxed">نحافظ على جوهر التصميم المغربي التقليدي مع إضافة لمسات إبداعية مبتكرة.</p>
      </div>
      <div className="space-y-6 text-center p-12 bg-white rounded-[2.5rem] border border-black/5">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif">الجودة</h3>
        <p className="text-sm text-foreground/60 leading-relaxed">نستخدم فقط أجود أنواع الحرير والمخمل والأقمشة الطبيعية لضمان الراحة والديمومة.</p>
      </div>
      <div className="space-y-6 text-center p-12 bg-white rounded-[2.5rem] border border-black/5">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif">الاستدامة</h3>
        <p className="text-sm text-foreground/60 leading-relaxed">ندعم الحرف اليدوية المحلية ونلتزم بعمليات إنتاج أخلاقية تحترم الإنسان والبيئة.</p>
      </div>
    </section>
  </div>
);

const CheckoutPage = ({ 
  cart, 
  setView, 
  onComplete 
}: { 
  cart: CartItem[]; 
  setView: (v: View) => void;
  onComplete: () => void;
}) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-6xl font-serif mb-16 text-center">إتمام الطلب</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif">معلومات الشحن</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">الاسم الكامل</label>
                <input type="text" className="w-full bg-white border border-black/5 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="أدخلي اسمك" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-white border border-black/5 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="example@mail.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">رقم الهاتف</label>
                <input type="tel" className="w-full bg-white border border-black/5 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+212 600 000 000" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">المدينة</label>
                <input type="text" className="w-full bg-white border border-black/5 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all" placeholder="الدار البيضاء" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">العنوان بالتفصيل</label>
              <textarea rows={3} className="w-full bg-white border border-black/5 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="اسم الشارع، رقم البناية، الشقة..." />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif">طريقة الدفع</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-4 p-6 bg-white border border-primary rounded-2xl cursor-pointer">
                <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-primary focus:ring-primary" />
                <div className="flex-1">
                  <p className="text-sm font-bold">الدفع عند الاستلام</p>
                  <p className="text-xs text-foreground/40">ادفع نقداً عند استلام طلبك في منزلك.</p>
                </div>
              </label>
              <label className="flex items-center gap-4 p-6 bg-white border border-black/5 rounded-2xl cursor-not-allowed opacity-60">
                <input type="radio" name="payment" disabled className="w-4 h-4 text-primary focus:ring-primary" />
                <div className="flex-1">
                  <p className="text-sm font-bold">البطاقة البنكية (قريباً)</p>
                  <p className="text-xs text-foreground/40">الدفع الآمن عبر البطاقات البنكية.</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-black/5 space-y-6">
            <h3 className="text-xl font-serif">ملخص الطلب</h3>
            <div className="max-h-60 overflow-y-auto pr-2 space-y-4 no-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-sm font-serif">{item.name}</h4>
                    <p className="text-xs text-foreground/40">{item.quantity} × {item.price} د.م</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-black/5 pt-6 space-y-4 text-sm">
              <div className="flex justify-between text-foreground/60">
                <span>المجموع الفرعي</span>
                <span>{subtotal} د.م</span>
              </div>
              <div className="flex justify-between text-foreground/60">
                <span>الشحن</span>
                <span>{shipping} د.م</span>
              </div>
              <div className="border-t border-black/5 pt-4 flex justify-between font-bold text-lg">
                <span>الإجمالي</span>
                <span className="text-primary">{total} د.م</span>
              </div>
            </div>
            <button onClick={onComplete} className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-primary/90 transition-all">
              تأكيد الطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const WishlistPage = ({ 
  wishlist, 
  setView, 
  setSelectedProduct,
  onAddToCart,
  onRemoveFromWishlist
}: { 
  wishlist: string[]; 
  setView: (v: View) => void;
  setSelectedProduct: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onRemoveFromWishlist: (p: Product) => void;
}) => {
  const wishlistProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-6xl font-serif mb-16 text-center">المفضلة</h1>

      {wishlistProducts.length === 0 ? (
        <div className="text-center py-20 space-y-8">
          <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10 text-foreground/20" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-serif">قائمة مفضلاتك فارغة</h2>
            <p className="text-foreground/60 text-sm">لم تضفي أي قطع إلى قائمة مفضلاتك بعد.</p>
          </div>
          <button onClick={() => setView('shop')} className="bg-primary text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest">
            استكشفي المجموعة
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {wishlistProducts.map(product => (
            <div key={product.id} className="space-y-4">
              <ProductCard 
                product={product} 
                isWishlisted={true}
                onToggleWishlist={(e) => {
                  e.stopPropagation();
                  onRemoveFromWishlist(product);
                }}
                onClick={() => {
                  setSelectedProduct(product);
                  setView('product');
                }} 
              />
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-foreground text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
              >
                إضافة للسلة
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setView('cart');
  };

  const toggleWishlist = (product: Product) => {
    setWishlist(prev => 
      prev.includes(product.id) 
        ? prev.filter(id => id !== product.id) 
        : [...prev, product.id]
    );
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={view} 
        setView={setView} 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background p-10 flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-2xl font-serif font-bold">القائمة</h2>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-8 text-xl font-serif">
                <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className={cn("text-right hover:text-primary transition-colors", view === 'home' && "text-primary")}>الرئيسية</button>
                <button onClick={() => { setView('shop'); setIsMenuOpen(false); }} className={cn("text-right hover:text-primary transition-colors", view === 'shop' && "text-primary")}>المتجر</button>
                <button onClick={() => { setView('wishlist'); setIsMenuOpen(false); }} className={cn("text-right hover:text-primary transition-colors", view === 'wishlist' && "text-primary")}>المفضلة</button>
                <button onClick={() => { setView('about'); setIsMenuOpen(false); }} className={cn("text-right hover:text-primary transition-colors", view === 'about' && "text-primary")}>عن الماركة</button>
                <button onClick={() => { setView('contact'); setIsMenuOpen(false); }} className={cn("text-right hover:text-primary transition-colors", view === 'contact' && "text-primary")}>اتصل بنا</button>
              </div>
              <div className="mt-auto pt-10 border-t border-black/5 space-y-6">
                <div className="flex gap-4 justify-center">
                  <a href="#" className="p-3 bg-black/5 rounded-full"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-black/5 rounded-full"><Facebook className="w-5 h-5" /></a>
                  <a href="#" className="p-3 bg-black/5 rounded-full"><Twitter className="w-5 h-5" /></a>
                </div>
                <p className="text-center text-xs text-foreground/40">© {new Date().getFullYear()} Karima Bay Mode</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'home' && <HomePage setView={setView} setSelectedProduct={setSelectedProduct} />}
            {view === 'shop' && (
              <ShopPage 
                setView={setView} 
                setSelectedProduct={setSelectedProduct} 
                wishlist={wishlist}
                onToggleWishlist={toggleWishlist}
              />
            )}
            {view === 'wishlist' && (
              <WishlistPage 
                wishlist={wishlist} 
                setView={setView} 
                setSelectedProduct={setSelectedProduct}
                onAddToCart={addToCart}
                onRemoveFromWishlist={toggleWishlist}
              />
            )}
            {view === 'product' && selectedProduct && (
              <ProductDetailPage 
                product={selectedProduct} 
                setView={setView} 
                onAddToCart={addToCart}
              />
            )}
            {view === 'cart' && (
              <CartPage 
                cart={cart} 
                setView={setView} 
                updateQuantity={updateQuantity} 
                removeItem={removeItem} 
              />
            )}
            {view === 'checkout' && (
              <CheckoutPage 
                cart={cart} 
                setView={setView} 
                onComplete={() => {
                  setCart([]);
                  setView('order-success');
                }} 
              />
            )}
            {view === 'order-success' && (
              <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center space-y-8">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-serif">شكراً لطلبك!</h1>
                  <p className="text-foreground/60 leading-relaxed">تم استلام طلبك بنجاح. سنقوم بالتواصل معك قريباً لتأكيد تفاصيل الشحن والموعد المتوقع للتسليم.</p>
                </div>
                <button onClick={() => setView('home')} className="bg-primary text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest">
                  العودة للرئيسية
                </button>
              </div>
            )}
            {view === 'contact' && <ContactPage />}
            {view === 'about' && <AboutPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setView={setView} />
    </div>
  );
}
