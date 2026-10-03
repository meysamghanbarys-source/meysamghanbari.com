const publicationTitles: Record<string, [string, string]> = {
  'secrecy-analysis-pinching-antenna-systems': ['Pinching-Antenna Secrecy Analysis | Meysam Ghanbari', 'Pinching-Antenna Secrecy Analysis | Meysam Ghanbari'],
  'advancing-oam-fso-pointing-errors-space-terrestrial-links': ['OAM Optical Links and Pointing Errors | Meysam Ghanbari', 'OAM Optical Links and Pointing Errors | Meysam Ghanbari'],
  'all-optical-multi-hop-inter-satellite-relaying-m-pam': ['All-Optical Inter-Satellite Relaying | Meysam Ghanbari', 'رله تمام‌نوری بین‌ماهواره‌ای | میثم قنبری'],
  'future-communications-narrow-beams-pointing-errors-alignment-limits': ['Narrow Beams and Pointing Errors: Survey | Meysam Ghanbari', 'پرتوهای باریک و خطای نشانه‌روی | میثم قنبری'],
  'city-scale-quantum-timing-wireless-synchronization-quantum-hubs': ['City-Scale Quantum Timing and Hubs | Meysam Ghanbari', 'زمان‌بندی کوانتومی در مقیاس شهر | میثم قنبری'],
  'joint-tracking-polarization-alignment-satellite-qkd': ['Satellite QKD Tracking and Polarization | Meysam Ghanbari', 'رهگیری و هم‌ترازی قطبش در QKD ماهواره‌ای | میثم قنبری'],
  'terahertz-coverage-fixed-wing-uavs': ['Terahertz Coverage for Fixed-Wing UAVs | Meysam Ghanbari', 'پوشش تراهرتز پهپاد بال‌ثابت | میثم قنبری'],
  'optimal-beamwidth-uav-to-hap-fso-pointing-inaccuracies': ['UAV-to-HAP FSO Beamwidth Optimization | Meysam Ghanbari', 'بهینه‌سازی پهنای پرتو FSO بین UAV و HAP | میثم قنبری'],
  'integrated-optical-receiver-communication-fine-tracking-inter-satellite': ['Integrated Optical Receiver for OISL | Meysam Ghanbari', 'گیرنده نوری یکپارچه برای لینک بین‌ماهواره‌ای | میثم قنبری'],
  'progressively-attenuated-multi-branch-reception-inter-haps': ['Inter-HAPS Multi-Branch Optical Reception | Meysam Ghanbari', 'گیرنده نوری چندشاخه برای لینک بین HAPS | میثم قنبری'],
  'power-neutral-information-energy-transfer-inter-satellite-fso-stokes': ['Power-Neutral Inter-Satellite FSO | Meysam Ghanbari', 'انتقال هم‌زمان اطلاعات و انرژی در FSO | میثم قنبری'],
  'ai-assisted-outdoor-optical-networks-camera-sensing-localization': ['AI Camera Sensing in Optical Networks | Meysam Ghanbari', 'حسگری دوربین در شبکه نوری با هوش مصنوعی | میثم قنبری'],
  'hierarchical-deep-learning-turbulence-pointing-error-multi-aperture-fso': ['AI Estimation of Turbulence and Pointing | Meysam Ghanbari', 'تخمین تلاطم و خطای نشانه‌روی با AI | میثم قنبری'],
  'deep-learning-surrogate-cir-reactive-molecular-diffusion-advection': ['Deep Learning for Molecular CIR Prediction | Meysam Ghanbari', 'پیش‌بینی پاسخ کانال مولکولی با AI | میثم قنبری'],
  'cv-quantum-communications-angular-rejection-filtering': ['Angular Filtering for CV Quantum Links | Meysam Ghanbari', 'فیلتر زاویه‌ای در ارتباطات کوانتومی CV | میثم قنبری'],
  'optical-irs-assisted-relay-los-qkd': ['Optical IRS Relay for QKD Links | Meysam Ghanbari', 'رله IRS نوری برای لینک QKD | میثم قنبری'],
  'meteorological-conditions-performance-optimization-miso-fso': ['Weather Effects in MISO FSO Systems | Meysam Ghanbari', 'اثر هواشناسی بر لینک‌های MISO FSO | میثم قنبری'],
  'ber-mixed-underwater-owc-fso-relaying-pointing-error': ['BER in Underwater OWC–FSO Relaying | Meysam Ghanbari', 'تحلیل BER در رله OWC–FSO زیرآبی | میثم قنبری'],
  'outage-uav-mixed-underwater-fso-pointing-errors': ['Outage in UAV–Underwater FSO Links | Meysam Ghanbari', 'احتمال قطع در لینک UAV–FSO زیرآبی | میثم قنبری']
};

export const publicationSeoTitle = (slug: string, lang: 'en' | 'fa') =>
  publicationTitles[slug]?.[lang === 'fa' ? 1 : 0];
