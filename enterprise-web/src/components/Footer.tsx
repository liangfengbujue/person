import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-bold text-white">InnoTech</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              专注于数字化创作工具的研发与制造，为创客、教育及小型企业提供高品质设备与服务。
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>contact@innotech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span>北京市海淀区科技园区</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">产品服务</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">激光雕刻机</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">切割设备</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">配件耗材</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition-colors">软件服务</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">企业介绍</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">发展历程</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">联系我们</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">加入我们</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} InnoTech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}