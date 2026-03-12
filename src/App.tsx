import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  User, 
  Heart, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Star, 
  ArrowRight, 
  ArrowLeft,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Info,
  Home,
  Grid,
  Send,
  CheckCircle2,
  Leaf,
  Truck,
  ShieldCheck,
  PencilRuler,
  Package
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products, categories, Product, Screen } from './types';

// --- Components ---

const Navbar = ({ onNavigate, currentScreen }: { onNavigate: (s: Screen) => void, currentScreen: Screen }) => (
  <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
    <nav className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
      <button className="lg:hidden text-primary p-2">
        <Menu size={24} />
      </button>
      
      <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
        <h1 className="text-2xl font-extrabold tracking-tighter text-primary">أصالة</h1>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
        <button onClick={() => onNavigate('home')} className={`hover:text-primary transition-colors ${currentScreen === 'home' ? 'text-primary' : ''}`}>الرئيسية</button>
        <button onClick={() => onNavigate('shop')} className={`hover:text-primary transition-colors ${currentScreen === 'shop' ? 'text-primary' : ''}`}>المتجر</button>
        <button onClick={() => onNavigate('story')} className={`hover:text-primary transition-colors ${currentScreen === 'story' ? 'text-primary' : ''}`}>قصتنا</button>
        <button onClick={() => onNavigate('contact')} className={`hover:text-primary transition-colors ${currentScreen === 'contact' ? 'text-primary' : ''}`}>تواصل معنا</button>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-primary/10 rounded-full transition-colors hidden sm:flex">
          <Heart size={20} />
        </button>
        <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
          <ShoppingBag size={20} />
          <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
        </button>
        <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
          <User size={20} />
        </button>
        <div className="hidden md:block h-6 w-px bg-primary/20 mx-2"></div>
        <button className="text-xs font-bold text-primary">AR</button>
      </div>
    </nav>
  </header>
);

const BottomNav = ({ onNavigate, currentScreen }: { onNavigate: (s: Screen) => void, currentScreen: Screen }) => (
  <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background-light border-t border-primary/10 z-50 px-4 py-2 flex justify-between items-center shadow-2xl">
    <button onClick={() => onNavigate('home')} className={`flex flex-1 flex-col items-center gap-1 ${currentScreen === 'home' ? 'text-primary' : 'text-slate-400'}`}>
      <Home size={20} />
      <span className="text-[10px] font-bold">الرئيسية</span>
    </button>
    <button onClick={() => onNavigate('shop')} className={`flex flex-1 flex-col items-center gap-1 ${currentScreen === 'shop' ? 'text-primary' : 'text-slate-400'}`}>
      <Grid size={20} />
      <span className="text-[10px] font-medium">الأقسام</span>
    </button>
    <button className="flex flex-1 flex-col items-center gap-1 text-slate-400">
      <Heart size={20} />
      <span className="text-[10px] font-medium">المفضلة</span>
    </button>
    <button className="flex flex-1 flex-col items-center gap-1 text-slate-400">
      <ShoppingBag size={20} />
      <span className="text-[10px] font-medium">السلة</span>
    </button>
    <button className="flex flex-1 flex-col items-center gap-1 text-slate-400">
      <User size={20} />
      <span className="text-[10px] font-medium">حسابي</span>
    </button>
  </div>
);

const ProductCard = ({ product, onClick }: { product: Product, onClick: () => void, key?: string }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group flex flex-col h-full bg-white rounded-xl border border-primary/5 overflow-hidden shadow-sm hover:shadow-md transition-all"
  >
    <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
      <img 
        src={product.image} 
        alt={product.name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <button className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:text-primary">
        <Heart size={16} />
      </button>
      <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/40 backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <button 
            onClick={onClick}
            className="w-full bg-white text-luxury-text py-2 rounded-lg font-bold shadow-lg text-sm border border-primary/20 hover:bg-secondary transition-colors"
          >
            عرض التفاصيل
          </button>
          <button className="w-full bg-helper text-white py-2 rounded-lg font-bold shadow-lg text-sm flex items-center justify-center gap-1">
            <MessageCircle size={16} />
            تواصل عبر واتساب
          </button>
        </div>
      </div>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h4 className="font-bold text-lg mb-1">{product.name}</h4>
      <p className="text-primary font-extrabold mt-auto">{product.price.toLocaleString()} د.م.</p>
    </div>
  </motion.div>
);

// --- Screens ---

const HomeScreen = ({ onNavigate, onProductClick }: { onNavigate: (s: Screen) => void, onProductClick: (p: Product) => void, key?: string }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {/* Hero Section */}
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.6), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9tSybKgyBugS7fQByUPmHw6UdHD4oRDof9PPqVn4rtC-FyXUFiNZinpeRbIZ28TR8wy-WZiJVWBkWF0yvLlZ259kij600OqD7mWOvWU2ossleJOa0_rfdfkcbEyY8uOG5ot7wDa2s8oTd1GOIA1c4CYvIrSIs-TUbcInk1xknujM1Ipy0sJ93wKDxWg0nWQR2wXDKcqGibdrZgU4N8LL_2khkXjUKT_ZnnwQxLuPfJoGLo_j60nidegZ1drgK6tCt017yhTdj42-C')` 
        }}
      />
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start text-white">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block px-4 py-1 bg-primary/30 backdrop-blur-sm border border-primary/50 rounded-full text-sm font-semibold tracking-widest mb-2">تشكيلة خريف 2024</span>
          <h2 className="text-5xl md:text-7xl font-black leading-tight">أناقة مغربية خالدة</h2>
          <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">قفاطين وجلابات مصممة بعناية تجمع بين أصالة الحرفة المغربية وأناقة العصر.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => onNavigate('shop')} className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">تصفح المجموعة</button>
            <button className="bg-helper hover:bg-helper/90 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center gap-2">
              <MessageCircle size={20} />
              تواصل معنا عبر واتساب
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Categories Section */}
    <section className="py-16 bg-background-light moroccan-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer min-w-[100px]">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-all p-1">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
              </div>
              <span className="font-bold text-sm tracking-wide">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* New Arrivals */}
    <section className="py-16 container mx-auto px-4">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="text-3xl font-bold mb-2">أحدث صيحات الموضة</h3>
          <p className="text-slate-500">اكتشفي التصاميم الجديدة لهذا الموسم</p>
        </div>
        <button onClick={() => onNavigate('shop')} className="text-primary font-bold flex items-center gap-2 group">
          عرض الكل
          <ArrowLeft size={20} className="transition-transform group-hover:translate-x-[-4px]" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
        ))}
      </div>
    </section>

    {/* Promotional Banner */}
    <section className="py-12 container mx-auto px-4">
      <div className="relative h-[400px] rounded-3xl overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtn8YlMfGlZc15T_ICAYvqs4f0RXYW6VEq55XmUucrXtPcdP_czWn0XaJdbktjHqH6TxCMXR1iSnxLujrJWSC4Fa39SI3wAQ2-JNeL1jooWmNMvGOB6rHwTp3pQd6IiO0Gosl5SGnkBaI6-ZUayJV_YKqexujLjv8sqFI3PGOr7sryHcRVFWbCoz8P2L92DGYD-ClSoXr9Iy_DI6jvDnOLIKqUCQFDdVWYoMIbdtfKFwNbifK6oozIGE-nbp3x50ykoha-pHRh_Pk7')` 
          }}
        />
        <div className="relative h-full flex flex-col justify-center px-12 text-white space-y-4">
          <h3 className="text-4xl font-black">مجموعة الزفاف الملكية</h3>
          <p className="text-xl max-w-lg opacity-90">تألقي في ليلة العمر بتصاميم مستوحاة من التراث الملكي المغربي العريق.</p>
          <div>
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold">اكتشفي المجموعة</button>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-primary/5 moroccan-pattern">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12">ماذا تقول عميلاتنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'مريم العلوي', text: 'الجودة فوق الخيال، التفاصيل دقيقة جداً والشحن كان سريعاً. القفطان جعلني ملكة الحفل!' },
            { name: 'سارة بناني', text: 'أفضل تجربة تسوق لملابس مغربية عصرية. الجلابة مريحة وأنيقة في نفس الوقت.' },
            { name: 'ياسمين تازي', text: 'خدمة العملاء ممتازة وساعدوني في اختيار المقاس المناسب بدقة. سأكرر الطلب بالتأكيد.' }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
              <div className="text-primary mb-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="italic text-slate-600 mb-6">"{t.text}"</p>
              <h5 className="font-bold">- {t.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
);

const ShopScreen = ({ onProductClick }: { onProductClick: (p: Product) => void, key?: string }) => {
  const [filter, setFilter] = useState('الكل');
  
  const filteredProducts = filter === 'الكل' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-12 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <h2 className="text-3xl font-bold">تصفح التشكيلة</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
          {['الكل', 'قفاطين', 'جلابات', 'تكاشيط'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-white border border-primary/10 text-slate-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const DetailScreen = ({ product, onBack }: { product: Product, onBack: () => void, key?: string }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="pb-24">
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md p-4 flex items-center justify-between border-b border-primary/10">
        <button onClick={onBack} className="p-2 hover:bg-primary/10 rounded-full">
          <ArrowRight size={24} />
        </button>
        <h2 className="text-lg font-bold">تفاصيل المنتج</h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-primary/10 rounded-full"><Heart size={20} /></button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="space-y-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">تشكيلة ملكية</span>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} د.م.</span>
              <span className="text-xl text-slate-400 line-through">{(product.price * 1.2).toLocaleString()} د.م.</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wide">المقاس</h3>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border-2 font-bold transition-all ${selectedSize === size ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-600'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-3 uppercase tracking-wide">الكمية</h3>
              <div className="flex items-center w-32 bg-slate-100 rounded-lg p-1">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="size-8 flex items-center justify-center rounded-md bg-white shadow-sm">
                  <X size={16} className="rotate-45" />
                </button>
                <span className="flex-1 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="size-8 flex items-center justify-center rounded-md bg-white shadow-sm">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full py-4 bg-[#25D366] text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-transform active:scale-95">
              <MessageCircle size={24} />
              <span>اطلب عبر واتساب</span>
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 border border-primary/20 bg-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
                <Instagram size={18} className="text-pink-600" />
                <span>إنستغرام</span>
              </button>
              <button className="py-3 border border-primary/20 bg-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
                <Facebook size={18} className="text-blue-600" />
                <span>فيسبوك</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-3 mb-4">
              <Info size={20} className="text-primary" />
              <h3 className="font-bold">الوصف</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
              <Leaf size={24} className="text-primary mb-2" />
              <h4 className="text-xs font-bold text-slate-500 mb-1">نوع القماش</h4>
              <p className="text-sm font-bold">حرير شيفون فاخر</p>
            </div>
            <div className="p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
              <PencilRuler size={24} className="text-primary mb-2" />
              <h4 className="text-xs font-bold text-slate-500 mb-1">التطريز</h4>
              <p className="text-sm font-bold">يدوي بخيوط الذهب</p>
            </div>
            <div className="p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
              <Truck size={24} className="text-primary mb-2" />
              <h4 className="text-xs font-bold text-slate-500 mb-1">التوصيل المتوقع</h4>
              <p className="text-sm font-bold">3 - 5 أيام عمل</p>
            </div>
            <div className="p-4 rounded-xl border border-primary/10 flex flex-col items-center text-center">
              <ShieldCheck size={24} className="text-primary mb-2" />
              <h4 className="text-xs font-bold text-slate-500 mb-1">تعليمات العناية</h4>
              <p className="text-sm font-bold">تنظيف جاف فقط</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StoryScreen = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24">
    <div className="relative h-[60vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(0deg, rgba(29, 25, 21, 0.9) 0%, rgba(29, 25, 21, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXODGYB_0MTb0V3PvRafR8B98-QV-d-s9b4Xx64iWNQRQAFzde3W1t1NOroldmOUEbSzgPGWMPHyUE1_W-fI2olgh0nebQ21Xc3kyZRJBO1w54sMGtFkFxhVYkWk9hj7_ghMQjmcHu2tkUH25bo2iZy5cBwwhb9Pbf9u-7rSOrcdbczNTo482AX1S6fs84uRBfP7Y33AZX0_VfR6uOmcUVBoP-nz1WATWs21jWXsWzMCRmv8eTmR-6DmsfIKIwyJCseXHcqufuVMxI")` 
        }}
      />
      <div className="relative h-full flex flex-col justify-end p-8 container mx-auto">
        <span className="font-bold tracking-[0.2em] text-xs uppercase text-primary/90 mb-2">منذ ١٩٨٥</span>
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">تراثنا الأصيل ينبض في كل غرزة</h1>
      </div>
    </div>

    <section className="px-4 py-16 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-primary">حرفية مغربية تتوارثها الأجيال</h2>
      <p className="text-slate-700 text-lg leading-relaxed">
        نحن علامة تجارية مغربية تؤمن بأن الموضة ليست مجرد لباس، بل هي سرد لتاريخنا العريق. نجمع بين مهارة الحرفيين التقليديين وأرقى أنواع الأقمشة لنقدم لكم قطعاً تجسد الأصالة والحداثة في آن واحد.
      </p>
    </section>

    <section className="px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
      <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
        <PencilRuler size={40} className="text-primary mb-4" />
        <h3 className="text-xl font-bold mb-3">الدقة في التفاصيل</h3>
        <p className="text-slate-600">نعتمد على "المعلم" المغربي الذي يتقن فنون التطريز اليدوي (الطرز) والخرز، لنضمن أن كل قطعة هي لوحة فنية فريدة.</p>
      </div>
      <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
        <Package size={40} className="text-primary mb-4" />
        <h3 className="text-xl font-bold mb-3">أجود الأقمشة</h3>
        <p className="text-slate-600">نختار بعناية فائقة الحرير الطبيعي، والكتان، والمخمل الملكي، لنمنحك تجربة مريحة وفخمة تدوم طويلاً.</p>
      </div>
    </section>

    <section className="px-4 py-16 container mx-auto flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3etZtqlqIL1UjJr6UnpQV6LUKB51a2vcJ3zQpjJ14y2OqpgYr_RdBnaeSavn6yvKdmcmGfE6l8I7exgrKw6J6zujUp7H9_ygN569ZMMKG3GjMd2NYlBEBCAytNCs0QdZHn5liBcBUG0DyFMpwn0HAdrUPkGqn_YBFXHho59PhKW2tW3JsSiIdRexQgUZQptUt_96OPCsqwQ3MgKMvCXyoLAZM2OiQTRnmO367isfhyylL5uF4RObvCMxkq_qV-_oVY59SIVa92MSC" 
          alt="Artisan" 
          className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">بصمة الحرفي</h2>
        <p className="text-slate-700 text-lg leading-relaxed">
          في ورشاتنا بقلب مدينة فاس العتيقة، يعمل حرفيونا بشغف لا متناهي. كل خيط يتم نسجه يروي قصة صبر وإتقان، محاولين الحفاظ على هذه الحرفة من الاندثار وتقديمها للعالم بصورة عصرية.
        </p>
      </div>
    </section>
  </motion.div>
);

const ContactScreen = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-24 py-12 container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">يسعدنا تواصلك معنا</h2>
      <p className="text-slate-600 max-w-lg mx-auto">يرجى ملء النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن. نحن هنا للإجابة على جميع استفساراتك.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-sm font-bold">الاسم الكامل</label>
            <input className="w-full h-12 px-4 rounded-xl border border-primary/20 bg-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="أدخل اسمك" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold">البريد الإلكتروني</label>
            <input className="w-full h-12 px-4 rounded-xl border border-primary/20 bg-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="example@mail.com" type="email" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold">الرسالة</label>
            <textarea className="w-full p-4 rounded-xl border border-primary/20 bg-background-light focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-32 resize-none" placeholder="كيف يمكننا مساعدتك؟" />
          </div>
          <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            إرسال الرسالة
            <Send size={18} />
          </button>
        </form>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold border-r-4 border-primary pr-4">معلومات الاتصال</h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold">واتساب والهاتف</p>
              <p className="text-slate-600" dir="ltr">+212 522 000 000</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold">البريد الإلكتروني</p>
              <p className="text-slate-600">contact@assala.ma</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-bold">الموقع</p>
              <p className="text-slate-600">الدار البيضاء، شارع الزرقطوني، المغرب</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold border-r-4 border-primary pr-4">تابعنا على</h3>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Instagram size={24} />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Facebook size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="bg-background-light border-t border-primary/10 pt-16 pb-24 lg:pb-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-primary">أصالة</h2>
        <p className="text-slate-500 leading-relaxed">نجسد الفخامة المغربية في كل غرزة، لنمنحك تجربة فريدة تجمع بين الماضي والحاضر.</p>
        <div className="flex gap-4">
          <button className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"><Instagram size={20} /></button>
          <button className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"><Facebook size={20} /></button>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-6">روابط سريعة</h4>
        <ul className="space-y-4 text-slate-500">
          <li><button className="hover:text-primary transition-colors">عن أصالة</button></li>
          <li><button className="hover:text-primary transition-colors">تتبع الطلب</button></li>
          <li><button className="hover:text-primary transition-colors">سياسة الاستبدال</button></li>
          <li><button className="hover:text-primary transition-colors">دليل المقاسات</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-6">التصنيفات</h4>
        <ul className="space-y-4 text-slate-500">
          <li><button className="hover:text-primary transition-colors">تشكيلة العرائس</button></li>
          <li><button className="hover:text-primary transition-colors">القفاطين التقليدية</button></li>
          <li><button className="hover:text-primary transition-colors">الملابس اليومية</button></li>
          <li><button className="hover:text-primary transition-colors">الهدايا</button></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-6">تواصل معنا</h4>
        <ul className="space-y-4 text-slate-500">
          <li className="flex items-center gap-3">
            <MapPin size={18} className="text-primary" />
            <span>الدار البيضاء، شارع الزرقطوني</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <span>+212 522 000 000</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-primary" />
            <span>contact@assala.ma</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <p>© 2024 أصالة للموضة. جميع الحقوق محفوظة.</p>
      <div className="flex gap-6">
        <button className="hover:text-primary">الشروط والأحكام</button>
        <button className="hover:text-primary">سياسة الخصوصية</button>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('detail');
    window.scrollTo(0, 0);
  };

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-background-light selection:bg-primary/20">
      <Navbar onNavigate={navigate} currentScreen={currentScreen} />
      
      <main className="min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          {currentScreen === 'home' && (
            <HomeScreen key="home" onNavigate={navigate} onProductClick={handleProductClick} />
          )}
          {currentScreen === 'shop' && (
            <ShopScreen key="shop" onProductClick={handleProductClick} />
          )}
          {currentScreen === 'detail' && selectedProduct && (
            <DetailScreen 
              key="detail" 
              product={selectedProduct} 
              onBack={() => navigate('shop')} 
            />
          )}
          {currentScreen === 'story' && (
            <StoryScreen key="story" />
          )}
          {currentScreen === 'contact' && (
            <ContactScreen key="contact" />
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <BottomNav onNavigate={navigate} currentScreen={currentScreen} />
    </div>
  );
}
