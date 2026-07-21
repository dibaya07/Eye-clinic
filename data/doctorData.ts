export interface HeroData {
  title: string;
  badge: string;
  subtitle: string;
  doctorName: string;
  doctorTitle: string;
  doctorQualifications: string;
  doctorImage: string;
  ctaBook: string;
  ctaWhatsapp: string;
  ctaCall: string;
  emergencyNotice: string;
}

export interface DoctorData {
  name: string;
  qualifications: string;
  role: string;
  experience: string;
  biography: string;
  specializations: string[];
  consultationFee: string;
  image: string;
  awards: string[];
}

export interface StatisticItem {
  label: string;
  value: number;
  suffix: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  isPopular?: boolean;
}

export interface ConditionItem {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  treatments: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  benefit: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  condition: string;
  review: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClinicData {
  name: string;
  address: string;
  mapEmbedUrl: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  timings: string;
  sundayTimings: string;
  emergencyInfo: string;
  appointmentBannerTitle: string;
  appointmentBannerText: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  siteUrl: string;
}

export interface SocialLinks {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export const hero: HeroData = {
  badge: "Premium Eye Care Experience",
  title: "Restoring Clarity to Your World with Clinical Precision",
  subtitle: "Clear Vision Eye Hospital offers premium micro-surgical ophthalmology treatments. Led by senior consultant Dr. Arjun Sharma, we combine fifteen years of surgical mastery with the world's most advanced laser diagnostic systems.",
  doctorName: "Dr. Arjun Sharma",
  doctorTitle: "Chief Consultant Eye Specialist & Cataract Surgeon",
  doctorQualifications: "MBBS, MS (Ophthalmology)",
  doctorImage: "https://picsum.photos/seed/doctor_hero_portrait/650/800",
  ctaBook: "Book Consultation",
  ctaWhatsapp: "Chat on WhatsApp",
  ctaCall: "Call Now",
  emergencyNotice: "24/7 Eye Trauma & Emergency Referral Helpline: +91 98765 43210"
};

export const doctor: DoctorData = {
  name: "Dr. Arjun Sharma",
  qualifications: "MBBS, MS (Ophthalmology)",
  role: "Founder & Chief Ophthalmic Surgeon",
  experience: "15+ Years of Clinical Excellence",
  biography: "Dr. Arjun Sharma is a nationally recognized micro-incision cataract and refractive surgeon with over 15 years of surgical excellence in premier private hospitals. Having completed his medical training and postgraduate degree in Ophthalmology from leading national universities, he pursued advanced clinical fellowships in premium Intraocular Lens (IOL) micro-implants and computer-guided glaucoma interventions. Dr. Sharma has pioneered seamless, stitchless phacoemulsification techniques, performing more than 8,500 successful eye surgeries with a near-perfect safety record. He remains committed to raising the standard of premium, individualized vision care in India.",
  specializations: [
    "Micro-incision Cataract Surgery (MICS / Phaco)",
    "Premium Multifocal, Trifocal & Toric IOL Implants",
    "Computerized OCT-Guided Glaucoma Screening",
    "Diabetic Retinopathy Management & Retinal Laser Therapy",
    "Advanced Refractive Vision Correction (Custom LASIK)",
    "Pediatric Ophthalmology & Strabismus Care",
    "Dry Eye Intense Pulse Light (IPL) Therapy",
    "Computer Vision Syndrome (CVS) Interventions"
  ],
  consultationFee: "₹500",
  image: "https://picsum.photos/seed/drsharmabio/600/700",
  awards: [
    "Ophthalmic Surgeon of the Year Award (National Eye Forum)",
    "Pioneer in Micro-incision Cataract Micro-implants",
    "Distinguished Alumni Award for Community Eye Health Care"
  ]
};

export const statistics: StatisticItem[] = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Patients Treated", value: 25000, suffix: "+" },
  { label: "Successful Surgeries", value: 8500, suffix: "+" },
  { label: "Happy Patients Rate", value: 99.4, suffix: "%" }
];

export const services: ServiceItem[] = [
  {
    id: "comp-checkup",
    title: "Comprehensive Eye Checkup",
    description: "Multi-layered diagnostic vision, refraction, corneal, and retina profiling to capture complete visual health markers.",
    iconName: "Eye",
    isPopular: true
  },
  {
    id: "cataract-consult",
    title: "Cataract Consultation",
    description: "Thorough computer-aided biometric scoping of the crystalline lens to plan custom, sutureless vision restoration paths.",
    iconName: "FileText"
  },
  {
    id: "cataract-surgery",
    title: "Cataract Surgery",
    description: "Premium, stitchless Micro-incision Cataract Surgery (MICS) using world-class hydrophobic foldable lenses (Multifocal/Toric).",
    iconName: "Activity",
    isPopular: true
  },
  {
    id: "glaucoma-screen",
    title: "Glaucoma Screening",
    description: "Non-contact applanation tonometry combined with optic nerve head scans (OCT) to detect and protect visual nerve fields.",
    iconName: "Shield"
  },
  {
    id: "retina-exam",
    title: "Retina Examination",
    description: "High-definition dilated fundus investigations tracking macular health, diabetic changes, and peripheral retinal stability.",
    iconName: "Camera"
  },
  {
    id: "pediatric-care",
    title: "Pediatric Eye Care",
    description: "Kid-friendly squint and refractive screening to prevent lazy eye (amblyopia) and support healthy childhood visual development.",
    iconName: "Baby"
  },
  {
    id: "dry-eye",
    title: "Dry Eye Treatment",
    description: "Advanced tear-film diagnostics and targeted medical therapies to restore natural lubrication and end chronic irritation.",
    iconName: "Droplets"
  },
  {
    id: "cvs-treatment",
    title: "Computer Vision Syndrome",
    description: "Anti-fatigue vision therapies, ergonomical consulting, and custom-blue light lenses tailored for digital professionals.",
    iconName: "Monitor"
  },
  {
    id: "spectacle-prescription",
    title: "Spectacle Prescription",
    description: "Ultramodern computerized subjective and objective refractions to provide highly accurate custom spectacle solutions.",
    iconName: "Glasses"
  },
  {
    id: "contact-lens-consult",
    title: "Contact Lens Consultation",
    description: "Corneal curvature topography assessment to evaluate tear compliance and eye suitability for wear options.",
    iconName: "Search"
  },
  {
    id: "contact-lens-fitting",
    title: "Contact Lens Fitting",
    description: "Hands-on diagnostic insertion, trial checks, and hygiene guidance for soft, toric, multifocal, or rigid gas permeable lenses.",
    iconName: "Layers"
  },
  {
    id: "vision-testing",
    title: "Vision Testing",
    description: "Standardized visual acuity scoring under optimal illumination for driver licenses, physical certifications, or routine checks.",
    iconName: "CheckSquare"
  },
  {
    id: "infection-treatment",
    title: "Eye Infection Treatment",
    description: "Rapid clinical sampling and tailored therapeutic prescriptions for conjunctivitis, styes, and deep corneal ulcers.",
    iconName: "HeartPulse"
  }
];

export const conditions: ConditionItem[] = [
  {
    id: "cond-cataract",
    title: "Cataract",
    description: "Gradual clouding of the eye's natural crystalline lens, leading to blurred, dim, or double vision that limits daily living.",
    symptoms: ["Gradual blurriness", "Glare & halos around lights at night", "Faded color perception", "Frequent glass prescription changes"],
    treatments: "Ultra-precise micro-incision phacoemulsification with custom foldable IOL lens implants (completed in just 10-15 minutes)."
  },
  {
    id: "cond-glaucoma",
    title: "Glaucoma",
    description: "A group of eye conditions causing progressive optic nerve damage, often driven by elevated internal fluid pressure (the silent thief of sight).",
    symptoms: ["Loss of peripheral visual field (tunnel vision)", "Subtle dull headaches", "Rainbow halos around bulbs", "Sudden sharp eye pain (acute type)"],
    treatments: "Intraocular pressure monitoring, custom eye-drops, selective laser trabeculoplasty (SLT), or advanced micro-drainage surgeries."
  },
  {
    id: "cond-dry-eye",
    title: "Dry Eyes",
    description: "Chronic lack of adequate surface moisture due to poor tear quantity or high tear evaporation, highly common in air-conditioned spaces.",
    symptoms: ["Gritty or burning sensation", "Reflex watery eyes", "Stringy mucus around eyes", "Eye fatigue after brief screen reading"],
    treatments: "Lubricating drops, punctual plug blockades, warm expression therapies, and intense pulse light (IPL) gland rejuvenations."
  },
  {
    id: "cond-allergy",
    title: "Eye Allergy",
    description: "Inflammatory ocular surface reaction triggered by airborne pollen, pet dander, dust, or mold spores, causing severe itching.",
    symptoms: ["Intense eye itching", "Redness & puffiness of eyelids", "Watery or stringy discharge", "Sensitivity to light (photophobia)"],
    treatments: "Antihistamine drops, mast cell stabilizers, cold compresses, and avoiding trigger agents."
  },
  {
    id: "cond-conjunctivitis",
    title: "Conjunctivitis",
    description: "Highly contagious bacterial, viral, or chemical inflammation of the transparent conjunctival membrane covering the sclera (commonly called Pink Eye).",
    symptoms: ["Severe pink or red eyeball color", "Thick crusty discharge in mornings", "Constant foreign body sensation", "Swollen tender eyelids"],
    treatments: "Targeted broad-spectrum antibiotic drops, antiviral agents, and strict touch/hygiene isolation protocols."
  },
  {
    id: "cond-refractive",
    title: "Refractive Errors",
    description: "Structural eye shape anomalies (length or corneal curvature) preventing light rays from focusing directly onto the retina.",
    symptoms: ["Near-sightedness (Myopia)", "Far-sightedness (Hyperopia)", "Distorted vision (Astigmatism)", "Age-related reading issues (Presbyopia)"],
    treatments: "Precision customized prescription eyeglasses, premium contact lenses, or permanent Laser Vision Correction (LASIK / PRK)."
  },
  {
    id: "cond-cvs",
    title: "Computer Vision Syndrome",
    description: "Ocular and physical discomfort experienced after prolonged digital screen use (phones, tablets, computer monitors).",
    symptoms: ["Dry irritated eyes", "Neck and shoulder strain", "Temporary blurred distance vision", "Ocular exhaustion & fatigue"],
    treatments: "The 20-20-20 rule training, custom blue-light filtering glasses, screen workstation optimization, and customized dry-eye therapies."
  },
  {
    id: "cond-retinal",
    title: "Retinal Disorders",
    description: "Pathologies affecting the light-sensitive sensory layer at the back of the eye, presenting direct risk of irreversible vision loss.",
    symptoms: ["Sudden increase in floaters or flashes", "Wavy or distorted straight lines", "Dark shadows in peripheral vision", "Loss of central focus"],
    treatments: "High-resolution OCT diagnostic scanning, intravitreal micro-injections, retinal photocoagulation lasers, or vitreo-retinal surgery."
  },
  {
    id: "cond-diabetic",
    title: "Diabetic Eye Disease",
    description: "Ocular micro-vascular damage caused by chronically high blood sugar, leading to bleeding, swelling, or retinal detachment.",
    symptoms: ["Fluctuating vision clarity", "Spots or dark strings floating around", "Washout of contrast and colors", "Blind spots in visual fields"],
    treatments: "Strict glycemic control partnership, micro-vascular retinal laser sealing, and anti-VEGF therapeutic injections."
  },
  {
    id: "cond-pediatric",
    title: "Children's Eye Problems",
    description: "Visual abnormalities in infants and young children, such as misaligned eyes (squint) or refractive amblyopia, which can become permanent if neglected.",
    symptoms: ["Squinting or head tilting", "Rubbing eyes frequently", "Sitting too close to the television", "Poor academic concentration"],
    treatments: "Pediatric spectacles, custom corrective eye patching, vision exercises, or precise microscopic squint-muscle alignment surgery."
  }
];

export const equipment: EquipmentItem[] = [
  {
    id: "eq-digital-exam",
    name: "Digital Slit Lamp & Vision Profiler",
    description: "High-definition optical microscope with integrated digital capture to analyze ocular anterior segments with micro-millimeter precision.",
    benefit: "Allows patients to see their own eye conditions on-screen, boosting visual understanding and accurate diagnostic mapping.",
    image: "https://picsum.photos/seed/slitlamp/600/400"
  },
  {
    id: "eq-oct-scan",
    name: "Optical Coherence Tomography (OCT Scan)",
    description: "Ultra-advanced non-invasive 3D imaging technology that captures cross-sectional micro-layers of the retina and optic nerve heads.",
    benefit: "Detects glaucoma, macular degeneration, and diabetic retinopathy months before standard visual symptoms appear.",
    image: "https://picsum.photos/seed/octscan/600/400"
  },
  {
    id: "eq-fundus-camera",
    name: "Digital Retinal Fundus Camera",
    description: "High-resolution wide-field imaging system designed to capture full-color records of the central and peripheral retinal layers.",
    benefit: "Creates clear, permanent visual history records to accurately track subtle vascular or macular shifts over time.",
    image: "https://picsum.photos/seed/funduscamera/600/400"
  },
  {
    id: "eq-auto-refractor",
    name: "Computerized Auto Refractometer",
    description: "Advanced diagnostic laser device measuring visual light-bending capability in fractions of a second.",
    benefit: "Provides an incredibly fast, precise, and completely objective baseline for custom contact lens and glass prescriptions.",
    image: "https://picsum.photos/seed/autorefractor/600/400"
  }
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Schedule & Pre-Register",
    description: "Book your slot smoothly online, via our secure WhatsApp link, or by phone. We allocate generous time for comprehensive care."
  },
  {
    step: "02",
    title: "Diagnostic Profiling",
    description: "Our certified technicians perform key preliminary scans including auto-refraction, non-contact intraocular pressure checks, and computerized visual maps."
  },
  {
    step: "03",
    title: "Surgeon Consultation",
    description: "Dr. Arjun Sharma conducts a detailed digital slit-lamp examination, discusses your diagnostics in simple terms, and details custom choices."
  },
  {
    step: "04",
    title: "Targeted Treatment",
    description: "Receive precision treatments—be it an advanced digital glass prescription, tailored medical therapies, or a 10-minute micro-incision phaco surgery."
  },
  {
    step: "05",
    title: "Structured Aftercare",
    description: "Benefit from scheduled post-op follow-ups, recovery monitoring, and 24/7 patient helpline access to secure your long-term optimal vision."
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Ramesh Chandran",
    location: "Retired Government Officer, Bangalore",
    rating: 5,
    condition: "Cataract Surgery (Both Eyes)",
    review: "I had developed advanced cataracts in both eyes and was terrified of surgery. Dr. Arjun Sharma explained the stitchless phaco procedure with incredible warmth. The surgery was absolutely painless and took only 12 minutes! Today I can read newspapers and drive at night without any glasses. The hospital's premium care is unmatched.",
    date: "June 14, 2026"
  },
  {
    id: "test-2",
    name: "Priyanka Mehta",
    location: "Senior Software Engineer, Mumbai",
    rating: 5,
    condition: "Severe Dry Eye & Computer Vision Syndrome",
    review: "Working 10+ hours on laptops made my eyes constantly red, burning, and exhausted. I visited Dr. Sharma for a comprehensive review. He customized my blue-light filtering lenses and started targeted dry eye therapy. The improvement is massive. My daily eye strain has vanished completely, allowing me to focus comfortably.",
    date: "July 02, 2026"
  },
  {
    id: "test-3",
    name: "Dr. Suresh Nair",
    location: "Consultant Cardiologist, Kochi",
    rating: 5,
    condition: "Early Glaucoma Management",
    review: "As a practicing physician, I demand absolute clinical excellence. The automated OCT and tonometry diagnostics at Clear Vision Eye Hospital are top-notch. Dr. Arjun's clinical approach to my early-stage glaucoma has been exceptionally precise, focused on saving my visual fields. I recommend this hospital to all medical colleagues.",
    date: "May 18, 2026"
  }
];

export const gallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Ultra-Modern Diagnostic Suite",
    category: "Diagnostics",
    image: "https://picsum.photos/seed/clinic_suite/800/600"
  },
  {
    id: "gal-2",
    title: "Micro-Surgical Operation Theater (OT)",
    category: "Surgical Care",
    image: "https://picsum.photos/seed/operatingtheater/800/600"
  },
  {
    id: "gal-3",
    title: "Premium Patient consultation Lounge",
    category: "Patient Comfort",
    image: "https://picsum.photos/seed/consultlounge/800/600"
  },
  {
    id: "gal-4",
    title: "Advanced Slit Lamp Evaluation Lab",
    category: "Diagnostics",
    image: "https://picsum.photos/seed/slitlamplab/800/600"
  },
  {
    id: "gal-5",
    title: "Spacious Hospitality Reception Center",
    category: "Hospitality",
    image: "https://picsum.photos/seed/receptioncenter/800/600"
  },
  {
    id: "gal-6",
    title: "Comprehensive Optics & Lens Studio",
    category: "Optics",
    image: "https://picsum.photos/seed/opticsstudio/800/600"
  }
];

export const faq: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does a modern Cataract surgery take and is it painful?",
    answer: "A modern Micro-incision Cataract Surgery (MICS) at our hospital takes just 10 to 15 minutes. It is performed under high-quality numbing anesthetic eye drops—so there are absolutely no injections, no stitches, and no pain. Most patients walk home within an hour of surgery."
  },
  {
    id: "faq-2",
    question: "Do you charge extra for premium Intraocular Lenses (IOL) like Multifocal or Toric?",
    answer: "Our basic ₹500 consultation fee covers Dr. Arjun Sharma's full evaluation. If cataract surgery is indicated, the cost depends strictly on the premium foldable lens you choose (Monofocal, Multifocal, or Astigmatism-correcting Toric). We provide clear, transparent counseling without any hidden charges."
  },
  {
    id: "faq-3",
    question: "What is your consultation fee and do I need a prior appointment?",
    answer: "Our standard consultation fee is ₹500. While we do accept walk-in patients for emergencies, we strongly advise booking a prior appointment online, over phone, or via WhatsApp. This helps us ensure that your wait time is minimal and we can allocate sufficient time for your complete diagnostics."
  },
  {
    id: "faq-4",
    question: "Do you support cashless treatments with medical insurance/TPA policies?",
    answer: "Yes, Clear Vision Eye Hospital is fully empaneled with all major medical insurance providers, corporate TPAs, and government healthcare schemes. Our dedicated insurance desk will manage all authorization paperwork for you to ensure a stress-free cashless surgical experience."
  },
  {
    id: "faq-5",
    question: "How frequently should I get my eyes checked if I use screens heavily?",
    answer: "For software engineers, digital creators, and heavy screen users, we recommend a comprehensive visual profiling and dry-eye checkup once every year. If you experience burning sensations, redness, or headaches, you should schedule a checkup immediately to prevent ocular strain."
  }
];

export const clinic: ClinicData = {
  name: "Clear Vision Eye Hospital",
  address: "123 Medical Plaza, City Center, India",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373531531584!3d-37.81362797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1614234556488!5m2!1sen!2sin",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "contact@clearvision.com",
  timings: "Monday–Saturday, 9:00 AM – 7:00 PM",
  sundayTimings: "Sunday: Closed (Emergency Referrals Only)",
  emergencyInfo: "Emergency Trauma & Eye Injury Care is available 24/7 on call.",
  appointmentBannerTitle: "Begin Your Journey to Pristine Visual Clarity",
  appointmentBannerText: "Schedule a comprehensive ophthalmic profile with Dr. Arjun Sharma. Our diagnostic suite and compassionate patient care will ensure a seamless experience."
};

export const seo: SEOData = {
  title: "Clear Vision Eye Hospital | Dr. Arjun Sharma - Cataract & Eye Specialist",
  description: "Experience premium eye care at Clear Vision Eye Hospital with senior ophthalmic surgeon Dr. Arjun Sharma. Specializing in micro-incision cataract surgery, glaucoma screening, retina exams, and advanced vision correction.",
  keywords: [
    "Cataract Surgery India",
    "Best Eye Hospital",
    "Dr. Arjun Sharma Ophthalmologist",
    "Micro-incision Phaco Surgery",
    "Glaucoma Screening",
    "Retina Scan",
    "Dry Eye Intense Pulse Light Therapy",
    "Laser Spectacle Removal",
    "Premium Multifocal Lens Implants"
  ],
  ogImage: "https://picsum.photos/seed/hospitalog/1200/630",
  siteUrl: "https://clearvisioneyehospital.example.com"
};

export const social: SocialLinks = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com"
};
