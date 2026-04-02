import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const products = [
  {
    id: "pro-laser-x1",
    name: "Pro Laser X1",
    subtitle: "80W CO₂ 激光切割机",
    description: "旗舰级 CO₂ 切割器，功率强、加工面积大，适合大型木工、亚克力及批量制作项目。",
    price: "¥ 29,999",
    category: "专业级",
    features: [
      "80W CO₂ 激光功率",
      "600×600mm 加工面积",
      "高速切割 up to 1000mm/s",
      "闭环冷却系统",
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    id: "industrial-f2",
    name: "Industrial F2",
    subtitle: "双激光雕刻机",
    description: "融合 60W MOPA 光纤与 40W 半导体激光，兼具金属与非金属雕刻/切割能力，精度高。",
    price: "¥ 24,999",
    category: "工业级",
    features: [
      "60W 光纤 + 40W 半导体",
      "支持金属与非金属",
      "0.01mm 精度",
      "多种材质兼容",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: "creator-m2",
    name: "Creator M2",
    subtitle: "多功能创作机",
    description: "集激光雕刻、切割、刀切、喷墨打印于一体，适合手工爱好者、小型工作室与定制礼品制作。",
    price: "¥ 8,999",
    category: "多功能",
    features: [
      "四合一多功能",
      "20W 半导体激光",
      "智能自动对焦",
      "APP 远程控制",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    id: "portable-s1",
    name: "Portable S1",
    subtitle: "40W 半导体激光切割机",
    description: "封闭式设计 + 半导体激光头，操作安全、安装方便，非常适合家庭/初学者使用。",
    price: "¥ 4,999",
    category: "入门级",
    features: [
      "40W 半导体激光",
      "封闭式安全设计",
      "即插即用",
      "WiFi 无线连接",
    ],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
  },
  {
    id: "diode-d1",
    name: "Diode D1",
    subtitle: "便携式激光雕刻机",
    description: "轻巧便携，适合入门创客和学生使用，随时随地开启创意之旅。",
    price: "¥ 2,999",
    category: "入门级",
    features: [
      "5W 半导体激光",
      "仅 2.5kg 重量",
      "USB 供电",
      "手机 APP 控制",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
  },
  {
    id: "accessories-kit",
    name: "配件套装",
    subtitle: "完整配件解决方案",
    description: "包含防护眼镜、清洁工具、材料夹具等必备配件，一站式购齐。",
    price: "¥ 599",
    category: "配件",
    features: [
      "专业防护眼镜",
      "清洁工具套装",
      "材料夹具",
      "专用清洁液",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
];

const categories = ["全部", "专业级", "工业级", "多功能", "入门级", "配件"];

export const metadata = {
  title: "产品中心 - InnoTech",
  description: "浏览我们的全系列激光切割与雕刻设备，从入门到专业级，满足不同场景需求",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            产品中心
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从入门到专业，我们提供全系列激光设备，满足创客、教育及小型企业的各种需求
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <div className="text-gray-500 text-sm mb-3">
                    {product.subtitle}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      咨询购买
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            需要个性化定制？
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            我们的专业团队可以为您提供定制化解决方案，满足您的特殊需求
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            联系我们
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}