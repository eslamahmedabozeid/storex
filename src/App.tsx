import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Zap, Leaf, Wallet, Shield, Star, Clock, MapPin,
  TrendingUp, Smartphone, Check, Menu, X,
  Instagram, Facebook, MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

// ============ ANIMATION WRAPPER ============
function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============ APP STORE BUTTONS ============
function AppStoreButtons({ size = 'lg', className = '' }: { size?: 'sm' | 'lg'; className?: string }) {
  const { t } = useLanguage();
  const h = size === 'lg' ? 'h-14' : 'h-10';
  const iconSize = size === 'lg' ? 28 : 20;
  return (
    <div className={`flex gap-3 ${className}`}>
      <a
        href="https://apps.apple.com/eg/app/storex-online-shopping/id6446810765"
        target="_blank"
        rel="noopener noreferrer"
        className={`${h} bg-[#1A1A1A] rounded-xl px-4 flex items-center gap-3 hover:bg-black transition-colors active:scale-[0.98]`}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.92.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-start">
          <div className={`text-white/60 ${size === 'lg' ? 'text-[10px]' : 'text-[8px]'}`}>{t.appStore.downloadOn}</div>
          <div className={`text-white font-semibold ${size === 'lg' ? 'text-sm' : 'text-xs'}`}>{t.appStore.appStore}</div>
        </div>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.sahl.storexclientandroid&hl=ar&gl=EG"
        target="_blank"
        rel="noopener noreferrer"
        className={`${h} bg-[#1A1A1A] rounded-xl px-4 flex items-center gap-3 hover:bg-black transition-colors active:scale-[0.98]`}
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="white">
          <path d="M3 20.5v-17c0-.71.73-1.17 1.34-.83l15 8.5c.6.34.6 1.18 0 1.52l-15 8.5c-.61.34-1.34-.12-1.34-.83z" />
        </svg>
        <div className="text-start">
          <div className={`text-white/60 ${size === 'lg' ? 'text-[10px]' : 'text-[8px]'}`}>{t.appStore.getItOn}</div>
          <div className={`text-white font-semibold ${size === 'lg' ? 'text-sm' : 'text-xs'}`}>{t.appStore.googlePlay}</div>
        </div>
      </a>
    </div>
  );
}

// ============ MAIN PAGE ============
export default function LandingPage() {
  const { t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileMenu]);

  const performScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSection = (sectionId: string, fromMobileMenu = false) => {
    if (fromMobileMenu) {
      pendingScrollRef.current = sectionId;
      setShowMobileMenu(false);
      return;
    }
    performScroll(sectionId);
  };

  const handleMobileMenuExit = () => {
    if (!pendingScrollRef.current) return;
    const sectionId = pendingScrollRef.current;
    pendingScrollRef.current = null;
    requestAnimationFrame(() => performScroll(sectionId));
  };

  const navLinks = [
    { id: 'features', label: t.nav.features },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'reviews', label: t.nav.reviews },
  ] as const;

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased">
      {/* ========== STICKY HEADER ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src="/images/image_logo_new.png" alt="StoreX" className="h-12 md:h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                className="text-sm font-medium text-[#666] hover:text-[#1A1A1A] transition-colors"
              >
                {label}
              </a>
            ))}
            <LanguageSwitcher />
            <AppStoreButtons size="sm" />
          </nav>

          {/* Mobile: language + menu */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button className="w-10 h-10 flex items-center justify-center" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence onExitComplete={handleMobileMenuExit}>
          {showMobileMenu && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-16 z-40 md:hidden bg-black/20"
                onClick={() => setShowMobileMenu(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 right-0 top-16 z-50 md:hidden bg-white border-t border-[#F0F0F0] shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
              >
                <div className="px-4 py-6 space-y-4">
                  {navLinks.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollToSection(id, true)}
                      className="block w-full text-start text-base font-medium py-2"
                    >
                      {label}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-[#F0F0F0]">
                    <p className="text-sm text-[#999] mb-3">{t.nav.downloadApp}</p>
                    <AppStoreButtons size="sm" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF8F0]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#E53935]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF8F00]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-center md:text-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 bg-[#FFEBEE] text-[#E53935] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  <Zap size={14} />
                  {t.hero.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              >
                {t.hero.title1}
                <br />
                <span className="text-[#E53935]">{t.hero.title2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#666] mt-5 max-w-lg mx-auto md:mx-0 md:ms-0 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              >
                <AppStoreButtons size="lg" />
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex items-center gap-6 justify-center md:justify-start text-sm text-[#666]"
              >
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-[#FB8C00] fill-[#FB8C00]" />
                  <span className="font-semibold text-[#1A1A1A]">4.9</span>
                  <span>{t.hero.appRating}</span>
                </div>
                <div className="w-px h-4 bg-[#E8E8E8]" />
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={16} className="text-[#2E7D32]" />
                  <span className="font-semibold text-[#1A1A1A]">50K+</span>
                  <span>{t.hero.downloads}</span>
                </div>
                <div className="w-px h-4 bg-[#E8E8E8]" />
                <div className="hidden sm:flex items-center gap-1.5">
                  <MapPin size={16} className="text-[#E53935]" />
                  <span>Cairo</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -60 : 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <img
                  src="/images/image_hero.jpeg"
                  alt="StoreX App"
                  className="w-[280px] md:w-[340px] lg:w-[300px] rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]"
                />
                {/* Floating badge */}
                {/* <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -start-4 md:-start-8 top-1/4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2"
                >
                  <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                    <Truck size={18} className="text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{t.hero.onTheWay}</p>
                    <p className="text-[10px] text-[#999]">{t.hero.mins}</p>
                  </div>
                </motion.div> */}

                {/* Rating badge */}
                {/* <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -end-2 md:-end-6 top-1/3 bg-white rounded-2xl shadow-lg p-3"
                >
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={12} className="text-[#FB8C00] fill-[#FB8C00]" />
                    ))}
                  </div>
                  <p className="text-[10px] text-[#999] mt-1">{t.hero.reviewsCount}</p>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section className="border-y border-[#F0F0F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Zap, ...t.trust.delivery },
              { icon: Leaf, ...t.trust.fresh },
              { icon: Wallet, ...t.trust.cod },
              { icon: Shield, ...t.trust.returns },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFEBEE] rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#E53935]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-[#999]">{item.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section id="how-it-works" className="scroll-mt-16 md:scroll-mt-20 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-16">
            <span className="text-[#E53935] text-sm font-semibold uppercase tracking-wider">{t.howItWorks.badge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">{t.howItWorks.title}</h2>
            <p className="text-[#666] mt-3 max-w-md mx-auto">{t.howItWorks.subtitle}</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: '01', img: '/images/step-browse.jpg', ...t.howItWorks.steps[0] },
              { num: '02', img: '/images/step-cart.jpg', ...t.howItWorks.steps[1] },
              { num: '03', img: '/images/step-deliver.jpg', ...t.howItWorks.steps[2] },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="text-center group">
                  <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-6">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                    />
                    <div className="absolute -top-3 -end-3 w-10 h-10 bg-[#E53935] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-[#666] mt-2 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section id="features" className="scroll-mt-16 md:scroll-mt-20 py-16 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Image */}
            <FadeIn>
              <div className="relative">
                <img
                  src="/images/fresh-groceries.jpg"
                  alt="Fresh groceries from StoreX"
                  className="rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] w-full"
                />
                {/* Overlay stat card */}
                <div className="absolute -bottom-6 -end-4 md:end-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                    <Check size={20} className="text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">4.9/5</p>
                    <p className="text-xs text-[#999]">{t.features.customerRating}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Features List */}
            <div>
              <FadeIn>
                <span className="text-[#E53935] text-sm font-semibold uppercase tracking-wider">{t.features.badge}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
                  {t.features.title1}
                  <br />
                  <span className="text-[#E53935]">{t.features.title2}</span>
                </h2>
              </FadeIn>

              <div className="mt-8 space-y-6">
                {[
                  { icon: Clock, ...t.features.items[0] },
                  { icon: Leaf, ...t.features.items[1] },
                  { icon: BadgePercent, ...t.features.items[2] },
                  { icon: Smartphone, ...t.features.items[3] },
                ].map((feat, i) => (
                  <FadeIn key={feat.title} delay={0.1 + i * 0.1}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-11 h-11 bg-[#FFEBEE] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E53935] transition-colors duration-300">
                        <feat.icon size={20} className="text-[#E53935] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1A1A1A]">{feat.title}</h3>
                        <p className="text-sm text-[#666] mt-1 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.5}>
                <div className="mt-8">
                  <AppStoreButtons size="lg" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS / SOCIAL PROOF ========== */}
      <section className="py-16 md:py-20 bg-[#E53935]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: t.stats.downloads },
              { value: '4.9', label: t.stats.rating },
              { value: '30min', label: t.stats.deliveryTime },
              { value: '10K+', label: t.stats.products },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-sm text-white/70 mt-1">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section id="reviews" className="scroll-mt-16 md:scroll-mt-20 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-[#E53935] text-sm font-semibold uppercase tracking-wider">{t.reviews.badge}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">{t.reviews.title}</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.items.map((review, i) => (
              <FadeIn key={review.name} delay={i * 0.1}>
                <div className="bg-[#FAFAFA] rounded-2xl p-6 h-full flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-[#FB8C00] fill-[#FB8C00]" />
                    ))}
                  </div>
                  <p className="text-[#444] text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-[#F0F0F0] flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFEBEE] rounded-full flex items-center justify-center">
                      <span className="text-[#E53935] font-bold text-sm">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-[#999]">{review.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DELIVERY HERO IMAGE ========== */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/delivery-hero.jpg"
          alt="StoreX delivery"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isRtl ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/60 via-black/30 to-transparent`} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-lg">
                {t.delivery.title1}
                <br />
                {t.delivery.title2}
              </h2>
              <p className="text-white/80 mt-3 max-w-md">{t.delivery.subtitle}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF8F0]">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {t.cta.title1}
              <br />
              <span className="text-[#E53935]">{t.cta.title2}</span>
            </h2>
            <p className="text-[#666] mt-4 text-lg max-w-lg mx-auto">
              {t.cta.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppStoreButtons size="lg" />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-[#666]">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-[#2E7D32]" />
                {t.cta.freeDelivery}
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-[#2E7D32]" />
                {t.cta.noCard}
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-[#2E7D32]" />
                {t.cta.cancelAnytime}
              </span>
            </div>
          </FadeIn>

          {/* QR Code hint */}
          <FadeIn delay={0.4}>
            <div className="mt-10 inline-flex items-center gap-4 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-6 py-4">
              <div className="w-16 h-16 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
              </div>
              <div className="text-start">
                <p className="font-semibold text-sm">{t.cta.scanTitle}</p>
                <p className="text-xs text-[#999]">{t.cta.scanSubtitle}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#1A1A1A] text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/image_logo_new.png" alt="StoreX" className="w-[50%] max-sm:w-[50%]" />
                {/* <span className="font-bold text-lg">StoreX</span> */}
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t.footer.quickLinks}</h4>
              <div className="space-y-2">
                {[t.footer.aboutUs, t.footer.careers, t.footer.blog, t.footer.press].map(link => (
                  <a key={link} href="#" className="block text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t.footer.support}</h4>
              <div className="space-y-2">
                {[t.footer.helpCenter, t.footer.deliveryAreas, t.footer.returnPolicy, t.footer.termsOfService].map(link => (
                  <a key={link} href="#" className="block text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t.footer.download}</h4>
              <AppStoreButtons size="sm" />
              <div className="flex items-center gap-3 mt-4">
                <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="https://wa.me/201000695651" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">{t.footer.copyright}</p>
            <div className="flex items-center gap-4 text-xs text-white/30">
              <a href="#" className="hover:text-white/60 transition-colors">{t.footer.privacyPolicy}</a>
              <a href="#" className="hover:text-white/60 transition-colors">{t.footer.termsOfService}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== WHATSAPP FAB ========== */}
      <motion.a
        href="https://wa.me/201000695651"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 end-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}

// Icon component for feature section
function BadgePercent({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </svg>
  );
}
