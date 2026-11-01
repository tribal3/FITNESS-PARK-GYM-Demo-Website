import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
export type Lang = 'ar' | 'en'

const en = {
  meta: {
    title: 'FITNESS PARK GYM — Ladies’ & Mixed Gym in Amman, Jordan',
    description:
      'Fitness Park Gym — a ladies’ and mixed gym in Amman, Jordan. Explore training options, facilities and membership enquiries. Independent website concept by TRIBAL³.',
  },
  langLabel: 'Language',
  nav: {
    home: 'Home',
    about: 'About Us',
    experiences: 'Our Facilities',
    training: 'Training',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore Our Gym',
    contact: 'Contact Us',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Amman · Jordan',
    titleTop: 'Your Fitness Journey',
    titleAccent: 'Starts Here.',
    text: 'Train with purpose, build strength, and take the next step toward a healthier lifestyle.',
    ratingLabel: 'Google reviews',
    optionsValue: 'Ladies & Mixed',
    optionsLabel: 'Training environments',
    locationValue: 'Wasfi At-Tall St.',
    locationLabel: 'Amman, Jordan',
    imageAlt: 'Dark, atmospheric gym floor with cardio equipment',
  },
  marquee: ['Strength', 'Discipline', 'Consistency', 'Energy'],
  about: {
    eyebrow: 'About Fitness Park',
    index: '01',
    title: 'A fitness destination in Amman, built around your goals.',
    text: 'Fitness Park Gym is a fitness destination in Amman designed to help individuals pursue their fitness goals in a motivating environment. Whether you prefer a ladies’ fitness experience or a mixed-gym environment, explore the options available and find the training experience that suits you.',
    points: [
      'Ladies’ and mixed-gym options in one destination',
      'A motivating atmosphere for everyday training',
      'Centrally located on Wasfi At-Tall Street, Amman',
    ],
    cardTitle: 'Fitness on your terms',
    cardText: 'Two environments, one focus: helping you keep showing up.',
    imageAlt: 'Dumbbell rack on a modern gym training floor',
    caption: 'Concept visual — not the gym',
  },
  experiences: {
    eyebrow: 'The Experience',
    index: '02',
    title: 'Two ways to train. One standard.',
    text: 'Choose the environment that fits your comfort and your goals — both built around the same idea of showing up and getting stronger.',
    ladies: {
      label: 'Ladies’ Gym',
      tag: 'For women',
      desc: 'A welcoming fitness environment for women who want to focus on strength, wellness and personal fitness goals.',
      tags: ['Strength & wellness', 'Train at your own pace', 'A comfortable, focused setting'],
      cta: 'Ask About Ladies’ Gym',
      imageAlt: 'Woman training with weights in a gym',
    },
    mixed: {
      label: 'Mixed Gym',
      tag: 'Mixed training',
      desc: 'An energetic training environment for individuals looking to improve strength, fitness and overall performance.',
      tags: ['Strength & fitness', 'Energetic training floor', 'For all fitness levels'],
      cta: 'Ask About Mixed Gym',
      imageAlt: 'Bright gym interior with strength and cardio equipment',
    },
    note: 'Presentation copy only. Please contact the gym directly to confirm facilities, access policies and schedules.',
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the goals you actually have.',
    text: 'From building strength to improving endurance, find a direction for your training and take it one session at a time.',
    items: [
      {
        title: 'Strength Training',
        desc: 'Build and maintain strength with focused resistance training.',
        icon: 'dumbbell',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Work on stamina and cardiovascular fitness at your own pace.',
        icon: 'heart',
      },
      {
        title: 'Personal Fitness Goals',
        desc: 'Training shaped around what you want to achieve.',
        icon: 'target',
      },
      {
        title: 'Fitness Guidance',
        desc: 'Ask about guidance on training safely and consistently.',
        icon: 'compass',
      },
    ],
    note: 'General fitness categories — contact the gym to confirm current programs and availability.',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '04',
    title: 'Inside the training floor.',
    text: 'A look at the atmosphere, equipment and energy of a modern gym.',
    note: 'Reference imagery — stock photography used for this concept, not photographs of Fitness Park Gym.',
    alts: [
      'Modern gym training floor',
      'Strength training with a barbell',
      'Gym interior with strength equipment',
      'Woman training with focus',
      'Dumbbell rack',
      'Core and floor training',
      'Battle rope conditioning',
      'Outdoor running for endurance',
      'Mat-based fitness training',
    ],
    view: 'View image',
    close: 'Close',
    prev: 'Previous image',
    next: 'Next image',
  },
  why: {
    eyebrow: 'Why Fitness Park',
    index: '05',
    title: 'Built for the long run.',
    text: 'No noise, no shortcuts — just a place to train, a location that works for you and options that fit your routine.',
    items: [
      {
        title: 'A convenient Amman location',
        desc: 'On Wasfi At-Tall Street at Abraj Al-Mihaniyah Towers, easy to reach from across the city.',
      },
      {
        title: 'Options for different preferences',
        desc: 'A ladies’ gym and a mixed-gym environment under one destination.',
      },
      {
        title: 'A motivating atmosphere',
        desc: 'An environment built around energy, focus and showing up for yourself.',
      },
      {
        title: 'Room to work toward your goals',
        desc: 'Train toward personal fitness goals at your own rhythm.',
      },
    ],
    ratingCaption: 'From the gym’s public Google listing.',
    ratingLabel: 'Google Reviews',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'Contact us to confirm today’s opening hours.',
    text: 'A quick call or WhatsApp message is the fastest way to check before you visit.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '06',
    title: 'Come train with us.',
    text: 'Questions about the gym, membership or which option fits you? Reach out on WhatsApp or give us a call.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
    },
    locationTitle: 'Find us on Wasfi At-Tall Street',
    locationText: 'Abraj Al-Mihaniyah Towers, Amman. Open the listing in Google Maps for turn-by-turn directions.',
    locationChip: 'Landmark',
    form: {
      title: 'Membership Enquiry',
      subtitle: 'Fill in your details and the enquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '07X XXX XXXX',
      interest: 'Interested In',
      interestLadies: 'Ladies’ Gym',
      interestMixed: 'Mixed Gym',
      message: 'Message',
      messagePlaceholder: 'Tell us what you’re looking for (optional)',
      send: 'Send Enquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your enquiry is ready',
      successText: 'WhatsApp should have opened with your message ready to send. If it didn’t, use the button below.',
      sendAnother: 'Send another enquiry',
      privacy: 'For this demo, your details are not stored — they are only placed into a WhatsApp message.',
    },
  },
  footer: {
    tagline: 'Ladies’ and mixed gym in Amman. A fitness destination built around showing up and getting stronger.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'About this site',
    demo: 'Independent website concept by TRIBAL³. All sample content and imagery are for demonstration purposes.',
    notAffiliated: 'Not affiliated with or authorized by Fitness Park Gym.',
    credit: 'Concept & design — TRIBAL³',
  },
  whatsappMessages: {
    general: 'Hello Fitness Park Gym, I found your website and would like to ask about membership.',
    ladies: 'Hello Fitness Park Gym, I would like to ask about the ladies’ gym.',
    mixed: 'Hello Fitness Park Gym, I would like to ask about the mixed gym.',
    join: 'Hello Fitness Park Gym, I would like to join. Could you share the available membership options?',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

const ar: typeof en = {
  meta: {
    title: 'فتنس بارك جيم — جيم للسيدات وجيم مختلط في عمّان، الأردن',
    description:
      'فتنس بارك جيم — جيم للسيدات وجيم مختلط في عمّان، الأردن. تعرّف على خيارات التدريب والمرافق واستفسارات العضوية. تصميم موقع مستقل من TRIBAL³.',
  },
  langLabel: 'اللغة',
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    experiences: 'مرافقنا',
    training: 'التدريب',
    gallery: 'معرض الصور',
    contact: 'تواصل معنا',
  },
  actions: {
    join: 'انضم إلينا',
    call: 'اتصل الآن',
    whatsapp: 'راسلنا على واتساب',
    directions: 'احصل على الاتجاهات',
    explore: 'اكتشف نادينا',
    contact: 'تواصل معنا',
    retry: 'فتح واتساب',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    scroll: 'مرّر للاستكشاف',
  },
  hero: {
    badge: 'عمّان · الأردن',
    titleTop: 'رحلتك نحو اللياقة',
    titleAccent: 'تبدأ من هنا',
    text: 'تدرّب بهدف، وابنِ قوتك، وابدأ خطوتك نحو حياة أكثر صحة ونشاطاً.',
    ratingLabel: 'تقييم Google',
    optionsValue: 'سيدات ومختلط',
    optionsLabel: 'بيئات التدريب',
    locationValue: 'شارع وصفي التل',
    locationLabel: 'عمّان، الأردن',
    imageAlt: 'صالة رياضية داكنة بأجواء مميزة وأجهزة كارديو',
  },
  marquee: ['قوة', 'التزام', 'استمرارية', 'طاقة'],
  about: {
    eyebrow: 'عن فتنس بارك',
    index: '01',
    title: 'وجهة للياقة في عمّان، مبنية حول أهدافك.',
    text: 'فتنس بارك جيم وجهة للياقة البدنية في عمّان، صُممت لمساعدة الأفراد على متابعة أهدافهم الرياضية في بيئة محفّزة. سواء كنتِ تفضّلين تجربة رياضية خاصة بالسيدات أو بيئة الجيم المختلط، استكشف الخيارات المتاحة واختر التجربة التدريبية التي تناسبك.',
    points: [
      'خيارات لجيم السيدات والجيم المختلط في مكان واحد',
      'أجواء محفّزة للتدريب اليومي',
      'موقع مركزي على شارع وصفي التل في عمّان',
    ],
    cardTitle: 'لياقتك على طريقتك',
    cardText: 'بيئتان، وهدف واحد: أن تستمر في الحضور والتقدّم.',
    imageAlt: 'رفّ دمبل في صالة تدريب حديثة',
    caption: 'صورة توضيحية — ليست للنادي',
  },
  experiences: {
    eyebrow: 'التجربة',
    index: '02',
    title: 'طريقتان للتدريب. مستوى واحد.',
    text: 'اختر البيئة التي تناسب راحتك وأهدافك — وكلتاهما قائمة على الفكرة نفسها: الالتزام والتقدّم.',
    ladies: {
      label: 'جيم السيدات',
      tag: 'للنساء',
      desc: 'بيئة رياضية مرحّبة للسيدات الراغبات في التركيز على القوة والعافية وأهداف اللياقة الشخصية.',
      tags: ['القوة والعافية', 'تدرّبي على راحتك', 'بيئة مريحة ومركّزة'],
      cta: 'استفسري عن جيم السيدات',
      imageAlt: 'سيدة تتدرب بالأوزان في صالة رياضية',
    },
    mixed: {
      label: 'الجيم المختلط',
      tag: 'تدريب مختلط',
      desc: 'بيئة تدريب مفعمة بالطاقة للأفراد الراغبين في تحسين القوة واللياقة والأداء العام.',
      tags: ['القوة واللياقة', 'أجواء تدريب مفعمة بالطاقة', 'لمختلف مستويات اللياقة'],
      cta: 'استفسر عن الجيم المختلط',
      imageAlt: 'صالة رياضية مشرقة بأجهزة قوة وكارديو',
    },
    note: 'هذا النص تعريفي فقط. يرجى التواصل مع النادي مباشرة للتأكد من المرافق وسياسات الدخول والمواعيد.',
  },
  training: {
    eyebrow: 'التدريب',
    index: '03',
    title: 'تدريب لأهدافك الحقيقية.',
    text: 'من بناء القوة إلى تحسين التحمّل، اعثر على اتجاه لتدريبك وواصل حصة بعد حصة.',
    items: [
      {
        title: 'تمارين القوة',
        desc: 'ابنِ قوتك وحافظ عليها من خلال تدريب مقاومة مركّز.',
        icon: 'dumbbell',
      },
      {
        title: 'تمارين القلب والتحمل',
        desc: 'اعمل على تحمّلك ولياقتك القلبية بالوتيرة التي تناسبك.',
        icon: 'heart',
      },
      {
        title: 'الأهداف الشخصية للياقة',
        desc: 'تدريب يُبنى حول ما تسعى لتحقيقه.',
        icon: 'target',
      },
      {
        title: 'الإرشاد الرياضي',
        desc: 'استفسر عن الإرشاد للتدريب بأمان واستمرارية.',
        icon: 'compass',
      },
    ],
    note: 'فئات لياقة عامة — تواصل مع النادي للتأكد من البرامج المتاحة حالياً.',
  },
  gallery: {
    eyebrow: 'معرض الصور',
    index: '04',
    title: 'داخل صالة التدريب.',
    text: 'لمحة عن الأجواء والأجهزة والطاقة في صالة رياضية حديثة.',
    note: 'صور مرجعية — صور من مكتبات الصور لهذا العرض، وليست صوراً لفتنس بارك جيم.',
    alts: [
      'صالة تدريب حديثة',
      'تدريب قوة بالبار',
      'داخل النادي مع أجهزة القوة',
      'سيدة تتدرب بتركيز',
      'رفّ الدمبل',
      'تدريب للجسم والجذع',
      'تدريب بالحبال',
      'جري في الهواء الطلق للتحمّل',
      'تمرين على الأرضية',
    ],
    view: 'عرض الصورة',
    close: 'إغلاق',
    prev: 'الصورة السابقة',
    next: 'الصورة التالية',
  },
  why: {
    eyebrow: 'لماذا فتنس بارك',
    index: '05',
    title: 'مصمّم للمدى الطويل.',
    text: 'بلا ضجيج ولا اختصارات — مكان للتدريب، وموقع يناسبك، وخيارات تلائم روتينك.',
    items: [
      {
        title: 'موقع مناسب في عمّان',
        desc: 'على شارع وصفي التل في أبراج المهنية، يسهل الوصول إليه من مختلف أنحاء المدينة.',
      },
      {
        title: 'خيارات تناسب تفضيلات مختلفة',
        desc: 'جيم للسيدات وبيئة جيم مختلط في الوجهة نفسها.',
      },
      {
        title: 'أجواء محفّزة',
        desc: 'بيئة قائمة على الطاقة والتركيز والالتزام بنفسك.',
      },
      {
        title: 'مساحة للعمل على أهدافك',
        desc: 'تدرّب نحو أهدافك الشخصية بالوتيرة التي تناسبك.',
      },
    ],
    ratingCaption: 'من قائمة النادي العامة على Google.',
    ratingLabel: 'تقييمات Google',
  },
  hours: {
    eyebrow: 'أوقات الدوام',
    title: 'يرجى التواصل معنا للتأكد من أوقات الدوام.',
    text: 'الاتصال أو رسالة واتساب هي أسرع طريقة للتأكد قبل زيارتك.',
  },
  contact: {
    eyebrow: 'تواصل',
    index: '06',
    title: 'تدرّب معنا.',
    text: 'لديك سؤال عن النادي أو العضوية أو الخيار المناسب لك؟ راسلنا على واتساب أو اتصل بنا.',
    labels: {
      address: 'العنوان',
      phone: 'الهاتف',
      whatsapp: 'واتساب',
      directions: 'الاتجاهات',
    },
    locationTitle: 'تجدنا على شارع وصفي التل',
    locationText: 'أبراج المهنية، عمّان. افتح الموقع في خرائط Google للحصول على الاتجاهات خطوة بخطوة.',
    locationChip: 'علامة مميزة',
    form: {
      title: 'استفسار عن العضوية',
      subtitle: 'أدخل بياناتك وسيُفتح الاستفسار في واتساب جاهزاً للإرسال.',
      name: 'الاسم الكامل',
      namePlaceholder: 'اسمك',
      phone: 'رقم الهاتف',
      phonePlaceholder: '07X XXX XXXX',
      interest: 'مهتم بـ',
      interestLadies: 'جيم السيدات',
      interestMixed: 'الجيم المختلط',
      message: 'الرسالة',
      messagePlaceholder: 'أخبرنا بما تبحث عنه (اختياري)',
      send: 'أرسل الاستفسار',
      required: '* حقول مطلوبة',
      errorName: 'يرجى إدخال اسمك الكامل.',
      errorPhone: 'يرجى إدخال رقم هاتفك.',
      errorPhoneInvalid: 'يرجى إدخال رقم هاتف صحيح.',
      errorInterest: 'يرجى اختيار أحد الخيارين.',
      successTitle: 'استفسارك جاهز',
      successText: 'يُفترض أن واتساب قد فُتح مع رسالتك جاهزة للإرسال. إن لم يحدث ذلك، استخدم الزر أدناه.',
      sendAnother: 'إرسال استفسار آخر',
      privacy: 'في هذا العرض التجريبي لا تُحفظ بياناتك، بل تُدرج فقط في رسالة واتساب.',
    },
  },
  footer: {
    tagline: 'جيم للسيدات وجيم مختلط في عمّان. وجهة للياقة قائمة على الالتزام والتقدّم.',
    explore: 'استكشف',
    contact: 'التواصل',
    legal: 'عن هذا الموقع',
    demo: 'تصميم موقع مستقل من TRIBAL³. جميع المحتويات والصور نماذج لأغراض العرض فقط.',
    notAffiliated: 'غير تابع رسمياً لفتنس بارك جيم وغير معتمد منه.',
    credit: 'الفكرة والتصميم — TRIBAL³',
  },
  whatsappMessages: {
    general: 'مرحباً فتنس بارك جيم، وجدت موقعكم وأود الاستفسار عن العضوية.',
    ladies: 'مرحباً فتنس بارك جيم، أود الاستفسار عن جيم السيدات.',
    mixed: 'مرحباً فتنس بارك جيم، أود الاستفسار عن الجيم المختلط.',
    join: 'مرحباً فتنس بارك جيم، أود الانضمام. هل يمكنكم مشاركة خيارات العضوية المتاحة؟',
  },
  floatingWhatsapp: 'تواصل عبر واتساب',
}

export const copy = { ar, en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  isRtl: boolean
  t: Copy
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'fp-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ar'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'ar' ? stored : 'ar'
  } catch {
    return 'ar'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    root.dataset.lang = lang
    document.title = copy[lang].meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy[lang].meta.description)

    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage can be unavailable in private modes — default stays usable */
    }
  }, [lang, dir])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'ar' ? 'en' : 'ar')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      isRtl: dir === 'rtl',
      t: copy[lang],
      setLang,
      toggleLang,
    }),
    [lang, dir, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
