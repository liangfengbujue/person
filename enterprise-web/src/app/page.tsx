import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Layers, Users, Award, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "安全可靠",
    description: "封闭式设计，多重安全保护，为家庭与商用场景提供安心可靠的体验",
  },
  {
    icon: Zap,
    title: "高性能",
    description: "高功率输出，高速切割，大幅提升创作效率，满足专业需求",
  },
  {
    icon: Layers,
    title: "多功能",
    description: "支持多种材质切割雕刻，从木材、金属到皮革、织物均可处理",
  },
  {
    icon: Users,
    title: "生态完善",
    description: "免费自研软件，海量素材教程，活跃的创作者社区支持",
  },
  {
    icon: Award,
    title: "品质认证",
    description: "产品荣获红点、iF等国际设计大奖，品质有保障",
  },
  {
    icon: Globe,
    title: "全球服务",
    description: "全球社区与本地支持，提供产品演示、培训与售后服务",
  },
];

const products = [
  {
    name: "Pro Laser X1",
    description: "80W CO₂ 激光切割机，旗舰级性能，适合大型木工项目",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    category: "专业级",
  },
  {
    name: "Creator M2",
    description: "多功能创作机，激光雕刻、切割、刀切一体化",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    category: "多功能",
  },
  {
    name: "Portable S1",
    description: "40W 半导体激光，封闭式设计，家庭入门首选",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    category: "入门级",
  },
  {
    name: "Industrial F2",
    description: "60W MOPA 光纤 + 40W 半导体，金属与非金属全能",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    category: "工业级",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                创客首选品牌
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                让创意成为现实
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                致力于为创客、教育及小型企业提供桌面级、安全易用的激光切割与雕刻设备，让每个人都能实现创意梦想。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  探索产品
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                  alt="激光雕刻机产品展示"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
                <div className="text-3xl font-bold text-blue-600">80W</div>
                <div className="text-gray-600 text-sm">最大功率输出</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              12项世界首创发明，荣获多项国际设计大奖，为您提供卓越的产品与服务
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              热门产品
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从入门到专业，我们提供全系列激光设备，满足不同场景需求
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    了解详情
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              查看全部产品
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                创新驱动，品质至上
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                我们是全球领先的数字化创作工具品牌，专注于激光切割与雕刻设备的研发与制造。
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">12项世界首创发明</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">红点、iF等国际设计大奖</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">全球创作者社区支持</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                了解更多关于我们
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-blue-100">世界首创发明</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">国家销售网络</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">100K+</div>
                <div className="text-gray-600">全球用户</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <div className="text-gray-600">国际设计大奖</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            准备好开启您的创意之旅了吗？
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            立即联系我们，了解更多产品信息，或预约产品演示
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              联系我们
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              浏览产品
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}