// Navigation items
export const navItems = [
  { label: '产品', href: '#products', hasDropdown: true },
  { label: '应用指南', href: '#applications', hasDropdown: true },
  { label: '解决方案', href: '#solutions', hasDropdown: true },
  { label: '活动', href: '#events', hasDropdown: true },
  { label: '技术文章', href: '#articles', hasDropdown: false },
  { label: '新闻', href: '#news', hasDropdown: true },
  { label: '关于我们', href: '#about', hasDropdown: true },
];

export const utilityLinks = [
  { label: 'my Murata', href: '#my-murata' },
  { label: '主要据点信息', href: '#locations' },
  { label: '联系我们', href: '#contact' },
];

// Hero slides data
export const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&h=600&fit=crop',
    title: '电动汽车功率半导体',
    subtitle: '技术指南',
    description: '技术趋势变化带来的挑战及解决方案提案：\n• 吸收电容器\n• 树脂模塑热敏电阻',
    ctaText: '下载',
    ctaUrl: '#download',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555664424-778a69022365?w=1920&h=600&fit=crop',
    title: '村田参展CES 2026',
    subtitle: '活动',
    description: '展示最新电子元器件技术和解决方案',
    ctaText: '了解更多',
    ctaUrl: '#ces',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=600&fit=crop',
    title: '高精度6DoF惯性传感器',
    subtitle: '新产品',
    description: '面向工业设备的SCH16T-K20实现产品化\n助力长期使用下的稳定自定位与姿态控制',
    ctaText: '查看详情',
    ctaUrl: '#sensor',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1920&h=600&fit=crop',
    title: '低传输损耗LCP柔性基板',
    subtitle: '技术创新',
    description: '村田初次实现中空结构的低传输损耗LCP柔性基板商品化\n实现介电常数（Dk）低于2.0，为6G发展作出贡献',
    ctaText: '技术详情',
    ctaUrl: '#lcp',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=1920&h=600&fit=crop',
    title: '1210英寸多层片式陶瓷电容器',
    subtitle: '产品发布',
    description: '开始量产市面首款1210英寸尺寸、额定电压1.25kV、\n具备C0G特性的15nF多层片式陶瓷电容器',
    ctaText: '产品规格',
    ctaUrl: '#capacitor',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&h=600&fit=crop',
    title: 'NTC热敏电阻NCU03系列',
    subtitle: '产品阵容扩充',
    description: '扩充适用于高可靠性用途的0201英寸NTC热敏电阻\n为电路板的高密度化和小型化做贡献',
    ctaText: '查看系列',
    ctaUrl: '#thermistor',
  },
];

// News data
export const newsItems = [
  {
    id: '1',
    date: '2025/12/19',
    title: '村田 面向工业设备的高精度6DoF惯性传感器"SCH16T-K20"实现产品化 助力长期使用下的稳定自定位与姿态控制',
    url: '#news1',
  },
  {
    id: '2',
    date: '2025/12/18',
    title: '村田 参展CES 2026',
    url: '#news2',
  },
  {
    id: '3',
    date: '2025/12/10',
    title: '村田初次实现中空结构的低传输损耗LCP柔性基板商品化～实现介电常数（Dk）低于2.0，为6G发展作出贡献～',
    url: '#news3',
  },
  {
    id: '4',
    date: '2025/12/02',
    title: '村田开始量产市面首款1210英寸（3.2×2.5mm）尺寸、额定电压1.25kV、具备C0G特性的15nF多层片式陶瓷电容器',
    url: '#news4',
  },
  {
    id: '5',
    date: '2025/11/12',
    title: '村田 扩充适用于高可靠性用途的0201英寸（0.6×0.3×0.3 mm）NTC热敏电阻"NCU03系列"的产品阵容～为电路板的高密度化和小型化做贡献～',
    url: '#news5',
  },
];

// Product categories
export const productCategories = [
  { id: '1', name: '电容器', url: '#capacitors' },
  { id: '2', name: '电感器 (线圈)', url: '#inductors' },
  { id: '3', name: '静噪元件/EMI静噪滤波器/TVS二极管（ESD保护装置）', url: '#emi' },
  { id: '4', name: '电阻器', url: '#resistors' },
  { id: '5', name: '热敏电阻（温度传感器、电流控制）', url: '#thermistors' },
  { id: '6', name: '传感器', url: '#sensors' },
  { id: '7', name: '时钟元件 (晶体谐振器/陶瓷谐振器)', url: '#timing' },
  { id: '8', name: '光学应用产品', url: '#optical' },
];

// Solutions data
export const solutions = [
  {
    id: '1',
    title: 'RFID solution',
    description: 'For fashion, retail, healthcare, and manufacturing industries',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
    url: '#rfid',
  },
  {
    id: '2',
    title: '汽车电子解决方案',
    description: '为新一代汽车提供关键电子元器件',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop',
    url: '#automotive',
  },
  {
    id: '3',
    title: 'IoT解决方案',
    description: '支持智能设备的连接与通信',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    url: '#iot',
  },
];

// Footer links
export const footerLinks = {
  products: [
    { label: '产品', href: '#products' },
    { label: '解决方案', href: '#solutions' },
    { label: '应用指南', href: '#applications' },
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'PDF产品目录', href: '#catalog' },
    { label: '视频资料库', href: '#videos' },
    { label: '主要据点信息', href: '#locations' },
    { label: '库存检索', href: '#stock' },
  ],
  news: [
    { label: '产品・活动新闻', href: '#news' },
    { label: '技术文章', href: '#articles' },
    { label: 'my Murata', href: '#my-murata' },
    { label: '展会信息', href: '#events' },
    { label: '在线研讨会', href: '#webinars' },
    { label: '特集', href: '#special' },
  ],
};

export const legalLinks = [
  { label: '使用条款', href: '#terms' },
  { label: '社交媒体运营方针', href: '#social-policy' },
  { label: '隐私政策', href: '#privacy' },
  { label: '其他公司商标', href: '#trademarks' },
  { label: '网站地图', href: '#sitemap' },
];
