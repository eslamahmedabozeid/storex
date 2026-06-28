export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      reviews: 'Reviews',
      downloadApp: 'Download the app',
    },
    appStore: {
      downloadOn: 'Download on the',
      appStore: 'App Store',
      getItOn: 'Get it on',
      googlePlay: 'Google Play',
    },
    hero: {
      badge: 'Groceries delivered in 30-60 minutes',
      title1: 'Your Groceries.',
      title2: 'Delivered Fast.',
      subtitle: 'Order fresh produce, daily essentials, and household items from your favorite stores in Cairo. Fast delivery, fair prices.',
      appRating: 'App Rating',
      downloads: 'Downloads',
      onTheWay: 'On the way!',
      mins: '8 mins',
      reviewsCount: '12,847 reviews',
    },
    trust: {
      delivery: { label: '30-60 Min Delivery', sub: 'Lightning fast' },
      fresh: { label: 'Farm Fresh Daily', sub: 'Quality guaranteed' },
      cod: { label: 'Cash on Delivery', sub: 'Pay when you get it' },
      returns: { label: 'Easy Returns', sub: 'No questions asked' },
    },
    howItWorks: {
      badge: 'Simple & Fast',
      title: 'How It Works',
      subtitle: 'Get your groceries delivered in three easy steps',
      steps: [
        {
          title: 'Browse & Shop',
          desc: 'Explore thousands of products from your favorite local stores. Fresh produce, snacks, household essentials, and more.',
        },
        {
          title: 'Add to Cart',
          desc: 'Add items to your cart with one tap. Enjoy exclusive app-only deals, bundle offers, and personalized recommendations.',
        },
        {
          title: 'Fast Delivery',
          desc: 'Sit back and relax. Your order arrives at your doorstep in 30-60 minutes. Track your delivery in real-time.',
        },
      ],
    },
    features: {
      badge: 'Why Choose StoreX',
      title1: 'Everything You Need,',
      title2: 'Delivered Fresh.',
      customerRating: 'Customer rating',
      items: [
        {
          title: '30-60 Minute Delivery',
          desc: 'From checkout to your door. Real-time tracking so you know exactly when your groceries arrive.',
        },
        {
          title: 'Freshness Guaranteed',
          desc: 'We source daily from local markets and farms. If it is not fresh, we will replace it for free.',
        },
        {
          title: 'Exclusive App Deals',
          desc: 'Unlock special discounts, bundle savings, and flash sales available only on the StoreX app.',
        },
        {
          title: 'Easy Reordering',
          desc: 'Reorder your weekly essentials in one tap. Save favorites and build shopping lists effortlessly.',
        },
      ],
    },
    stats: {
      downloads: 'App Downloads',
      rating: 'App Store Rating',
      deliveryTime: 'Avg. Delivery Time',
      products: 'Products Available',
    },
    reviews: {
      badge: 'Loved by Customers',
      title: 'What People Say',
      items: [
        {
          name: 'Ahmed H.',
          location: 'Heliopolis, Cairo',
          text: 'I use StoreX every week for my family groceries. The app is super fast and the delivery always arrives within 40 minutes. The Cash on Delivery option is perfect for me.',
        },
        {
          name: 'Mariam K.',
          location: 'Nasr City, Cairo',
          text: 'The freshest vegetables I have ever ordered online. Everything is carefully packed and the delivery riders are always polite. The reorder feature saves me so much time!',
        },
        {
          name: 'Omar S.',
          location: 'Maadi, Cairo',
          text: 'StoreX has become my go-to for everything from water bottles to baby diapers. The app deals are amazing and I love the real-time tracking. Highly recommended!',
        },
      ],
    },
    delivery: {
      title1: 'Fast Delivery',
      title2: 'Across Cairo',
      subtitle: 'From Heliopolis to Maadi, Nasr City to 6th of October. We have got Cairo covered.',
    },
    cta: {
      title1: 'Get Your Groceries',
      title2: 'in 30 Minutes',
      subtitle: 'Download the StoreX app now and get your first delivery free. Thousands of products, one simple app.',
      freeDelivery: 'Free first delivery',
      noCard: 'No credit card needed',
      cancelAnytime: 'Cancel anytime',
      scanTitle: 'Scan to download',
      scanSubtitle: 'Point your camera at the code',
    },
    footer: {
      tagline: "Cairo's favorite grocery delivery app. Fresh products, fast delivery, fair prices.",
      quickLinks: 'Quick Links',
      support: 'Support',
      download: 'Download',
      aboutUs: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      press: 'Press',
      helpCenter: 'Help Center',
      deliveryAreas: 'Delivery Areas',
      returnPolicy: 'Return Policy',
      termsOfService: 'Terms of Service',
      copyright: '© 2026 StoreX Grocery. Cairo, Egypt. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
    },
    lang: {
      switchToArabic: 'عربي',
      switchToEnglish: 'EN',
    },
  },
  ar: {
    nav: {
      features: 'المميزات',
      howItWorks: 'كيف يعمل',
      reviews: 'التقييمات',
      downloadApp: 'حمّل التطبيق',
    },
    appStore: {
      downloadOn: 'حمّل من',
      appStore: 'App Store',
      getItOn: 'متوفر على',
      googlePlay: 'Google Play',
    },
    hero: {
      badge: 'بقالة توصل في 30-60 دقيقة',
      title1: 'بقالتك.',
      title2: 'توصل بسرعة.',
      subtitle: 'اطلب منتجات طازجة واحتياجات يومية ومستلزمات منزلية من متاجرك المفضلة في القاهرة. توصيل سريع وأسعار مناسبة.',
      appRating: 'تقييم التطبيق',
      downloads: 'تحميل',
      onTheWay: 'في الطريق!',
      mins: '8 دقائق',
      reviewsCount: '12,847 تقييم',
    },
    trust: {
      delivery: { label: 'توصيل 30-60 دقيقة', sub: 'سرعة فائقة' },
      fresh: { label: 'طازج يومياً', sub: 'جودة مضمونة' },
      cod: { label: 'الدفع عند الاستلام', sub: 'ادفع عند وصول طلبك' },
      returns: { label: 'إرجاع سهل', sub: 'بدون أسئلة' },
    },
    howItWorks: {
      badge: 'بسيط وسريع',
      title: 'كيف يعمل',
      subtitle: 'احصل على بقالتك في ثلاث خطوات سهلة',
      steps: [
        {
          title: 'تصفّح وتسوّق',
          desc: 'استكشف آلاف المنتجات من متاجرك المحلية المفضلة. منتجات طازجة، وجبات خفيفة، مستلزمات منزلية، والمزيد.',
        },
        {
          title: 'أضف للسلة',
          desc: 'أضف المنتجات لسلتك بلمسة واحدة. استمتع بعروض حصرية للتطبيق، باقات توفير، وتوصيات مخصصة.',
        },
        {
          title: 'توصيل سريع',
          desc: 'استرخِ واطمئن. طلبك يصل لباب منزلك في 30-60 دقيقة. تتبّع توصيلك لحظة بلحظة.',
        },
      ],
    },
    features: {
      badge: 'لماذا StoreX',
      title1: 'كل ما تحتاجه،',
      title2: 'طازج وموصّل.',
      customerRating: 'تقييم العملاء',
      items: [
        {
          title: 'توصيل 30-60 دقيقة',
          desc: 'من الدفع إلى باب منزلك. تتبّع لحظي لتعرف متى تصل بقالتك بالضبط.',
        },
        {
          title: 'ضمان الطزاجة',
          desc: 'نورد يومياً من الأسواق والمزارع المحلية. إذا لم يكن طازجاً، نستبدله مجاناً.',
        },
        {
          title: 'عروض حصرية للتطبيق',
          desc: 'خصومات خاصة، باقات توفير، وعروض فلاش متاحة فقط على تطبيق StoreX.',
        },
        {
          title: 'إعادة طلب سهلة',
          desc: 'أعد طلب احتياجاتك الأسبوعية بلمسة واحدة. احفظ المفضلة وأنشئ قوائم تسوق بسهولة.',
        },
      ],
    },
    stats: {
      downloads: 'تحميل التطبيق',
      rating: 'تقييم App Store',
      deliveryTime: 'متوسط وقت التوصيل',
      products: 'منتج متاح',
    },
    reviews: {
      badge: 'محبوب من العملاء',
      title: 'ماذا يقول الناس',
      items: [
        {
          name: 'أحمد ح.',
          location: 'مصر الجديدة، القاهرة',
          text: 'أستخدم StoreX كل أسبوع لبقالة العائلة. التطبيق سريع جداً والتوصيل يصل دائماً خلال 40 دقيقة. الدفع عند الاستلام مثالي بالنسبة لي.',
        },
        {
          name: 'مريم ك.',
          location: 'مدينة نصر، القاهرة',
          text: 'أطازج خضروات طلبتها أونلاين. كل شيء معبأ بعناية والموصلون دائماً مهذبون. ميزة إعادة الطلب توفر عليّ وقتاً كثيراً!',
        },
        {
          name: 'عمر س.',
          location: 'المعادي، القاهرة',
          text: 'StoreX أصبح خياري الأول لكل شيء من زجاجات المياه إلى حفاضات الأطفال. عروض التطبيق رائعة وأحب التتبّع اللحظي. أنصح به بشدة!',
        },
      ],
    },
    delivery: {
      title1: 'توصيل سريع',
      title2: 'في كل القاهرة',
      subtitle: 'من مصر الجديدة إلى المعادي، مدينة نصر إلى 6 أكتوبر. نغطي القاهرة بالكامل.',
    },
    cta: {
      title1: 'احصل على بقالتك',
      title2: 'في 30 دقيقة',
      subtitle: 'حمّل تطبيق StoreX الآن واحصل على أول توصيل مجاناً. آلاف المنتجات، تطبيق واحد بسيط.',
      freeDelivery: 'أول توصيل مجاني',
      noCard: 'بدون بطاقة ائتمان',
      cancelAnytime: 'إلغاء في أي وقت',
      scanTitle: 'امسح للتحميل',
      scanSubtitle: 'وجّه الكاميرا نحو الرمز',
    },
    footer: {
      tagline: 'تطبيق توصيل البقالة المفضل في القاهرة. منتجات طازجة، توصيل سريع، أسعار مناسبة.',
      quickLinks: 'روابط سريعة',
      support: 'الدعم',
      download: 'تحميل',
      aboutUs: 'من نحن',
      careers: 'الوظائف',
      blog: 'المدونة',
      press: 'الصحافة',
      helpCenter: 'مركز المساعدة',
      deliveryAreas: 'مناطق التوصيل',
      returnPolicy: 'سياسة الإرجاع',
      termsOfService: 'شروط الخدمة',
      copyright: '© 2026 StoreX Grocery. القاهرة، مصر. جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
    },
    lang: {
      switchToArabic: 'عربي',
      switchToEnglish: 'EN',
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Language];
