import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Globe, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "公司成立",
    description: "InnoTech 正式成立，专注于桌面级激光切割/雕刻设备的开发与销售",
  },
  {
    year: "2022",
    title: "市场突破",
    description: "凭借用户友好的激光切割机迅速获得市场认可，跻身行业前列",
  },
  {
    year: "2023",
    title: "产品扩展",
    description: "推出 CO₂ 激光机、光纤激光器及多款周边设备，形成完整生态系统",
  },
  {
    year: "2024",
    title: "技术创新",
    description: "获得 12 项世界首创发明，荣获红点、iF 等国际设计大奖",
  },
  {
    year: "2025",
    title: "全球布局",
    description: "在美国硅谷设立总部，开启国际化扩展新阶段",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "创新驱动",
    description: "持续投入研发，推动技术革新，为用户带来更优质的产品体验",
  },
  {
    icon: Award,
    title: "品质至上",
    description: "严格把控产品质量，每一个细节都追求卓越",
  },
  {
    icon: Users,
    title: "用户至上",
    description: "深入了解用户需求，提供全方位的解决方案和服务支持",
  },
  {
    icon: Globe,
    title: "全球视野",
    description: "立足中国，布局全球，为世界各地的创客提供支持",
  },
];

export const metadata = {
  title: "关于我们 - InnoTech",
  description: "了解 InnoTech 的发展历程、核心价值观和企业使命",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                关于 InnoTech
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                InnoTech 是全球领先的数字化创作工具品牌，专注于激光切割与雕刻设备的研发与制造。我们的使命是让创造变得更简单，帮助人们在物理世界中实现创意。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                联系我们
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="团队工作场景"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">12+</div>
              <div className="text-blue-200">世界首创发明</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">国家销售网络</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100K+</div>
              <div className="text-blue-200">全球用户</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5</div>
              <div className="text-blue-200">国际设计大奖</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              核心价值观
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们始终坚持以用户为中心，以创新为动力，以品质为保障
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              从初创公司成长为全球领先的激光设备制造商
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200 hidden lg:block"></div>
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative lg:flex lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2 lg:px-8">
                    <div
                      className={`bg-white p-6 rounded-2xl shadow-lg ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="text-blue-600 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            加入我们的社区
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            与全球创客一起，探索激光切割的无限可能
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            了解更多
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}