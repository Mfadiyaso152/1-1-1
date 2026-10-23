import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans" dir="rtl">
      {/* Top Black Navigation Bar */}
      <header className="w-full bg-[#1e2022] h-14 flex items-center px-4 sticky top-0 z-40">
        <div 
          className="w-full max-w-[410px] mx-auto flex items-center justify-between"
          style={{ direction: 'ltr' }}
        >
          {/* Spacer on the left */}
          <div />

          {/* Search & Menu Icon on the RIGHT side */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="p-1 cursor-pointer text-[#a0a8b2] hover:text-white transition-colors focus:outline-none"
            aria-label="فتح القائمة والبحث"
          >
            <svg 
              width="32" 
              height="22" 
              viewBox="0 0 32 22" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top horizontal bar */}
              <line x1="2" y1="4" x2="20" y2="4" stroke="#a0a8b2" strokeWidth="2.5" strokeLinecap="round" />
              {/* Second horizontal bar */}
              <line x1="2" y1="12" x2="14" y2="12" stroke="#a0a8b2" strokeWidth="2.5" strokeLinecap="round" />
              {/* Magnifying glass circle attached */}
              <circle cx="20" cy="12" r="4.2" stroke="#a0a8b2" strokeWidth="2.5" />
              {/* Magnifying glass diagonal handle */}
              <line x1="23.2" y1="15.2" x2="27" y2="19" stroke="#a0a8b2" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-Screen Dark Overlay Menu matching IMG_8239 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#141414] flex flex-col justify-between"
            style={{ direction: 'ltr' }}
          >
            {/* Top Close Button (top-left matching screenshot) */}
            <div className="p-6">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-2 focus:outline-none"
                aria-label="إغلاق"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Center Social Media Circular Buttons (exact order and colors as IMG_8239) */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* 1. YouTube */}
                <button
                  type="button"
                  aria-label="YouTube"
                  className="w-13 h-13 rounded-full bg-[#eb4e1b] hover:bg-[#d94415] active:scale-95 transition-all flex items-center justify-center text-white shadow-lg cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>

                {/* 2. Instagram */}
                <button
                  type="button"
                  aria-label="Instagram"
                  className="w-13 h-13 rounded-full bg-[#eb4e1b] hover:bg-[#d94415] active:scale-95 transition-all flex items-center justify-center text-white shadow-lg cursor-pointer"
                >
                  <svg className="w-6 h-6 stroke-white fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
                  </svg>
                </button>

                {/* 3. X (Twitter) */}
                <button
                  type="button"
                  aria-label="X"
                  className="w-13 h-13 rounded-full bg-[#eb4e1b] hover:bg-[#d94415] active:scale-95 transition-all flex items-center justify-center text-white shadow-lg cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>

                {/* 4. Facebook */}
                <button
                  type="button"
                  aria-label="Facebook"
                  className="w-13 h-13 rounded-full bg-[#eb4e1b] hover:bg-[#d94415] active:scale-95 transition-all flex items-center justify-center text-white shadow-lg cursor-pointer"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.77 0-1.474.195-1.892.515-.55.421-.723 1.123-.723 2.52v.945h4.152l-.658 3.667h-3.494v7.98h-4.66z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-16" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[410px] mx-auto px-4 pb-12 pt-6">
        {/* Page Title */}
        <h1 className="text-center text-[#0b6479] text-[25px] font-bold tracking-tight mb-6">
          تفاصيل بطاقة السائق
        </h1>

        {/* Main Details Card */}
        <div className="bg-white border border-[#d2d8dc] rounded-[4px] px-6 py-7 shadow-xs">
          
          {/* Section 1: بيانات المنشأة/الفرد */}
          <section className="mb-6 text-right">
            <h2 className="text-[#0b6479] text-[20px] font-bold mb-6">
              بيانات المنشأة/الفرد
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  الاسم
                </p>
                <div className="text-black text-[17px] font-bold leading-snug">
                  <div>منصور مشبي</div>
                  <div>هيازع عسيري</div>
                </div>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  رقم هوية المنشأة
                </p>
                <p className="text-black text-[17px] font-bold tracking-normal">
                  7035133078
                </p>
              </div>
            </div>
          </section>

          {/* Teal Divider */}
          <div className="w-full h-[1px] bg-[#6899a3]/60 my-6" />

          {/* Section 2: معلومات الترخيص الرئيسي */}
          <section className="mb-6 text-right">
            <h2 className="text-[#0b6479] text-[20px] font-bold mb-6">
              معلومات الترخيص الرئيسي
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  رقم الترخيص
                </p>
                <div className="text-black text-[17px] font-bold leading-tight">
                  <div>11/0002769</div>
                  <div>70</div>
                </div>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  نوع الترخيص/النشاط
                </p>
                <div className="text-black text-[17px] font-bold leading-snug">
                  <div>نقل البضائع</div>
                  <div>على الطرق</div>
                  <div>البرية</div>
                </div>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  المدينة
                </p>
                <p className="text-black text-[17px] font-bold">
                  الرياض
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  تاريخ الإصدار
                </p>
                <div className="text-black text-[17px] font-bold leading-tight">
                  <div>2024/02/1</div>
                  <div>3</div>
                </div>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  تاريخ الإنتهاء
                </p>
                <div className="text-black text-[17px] font-bold leading-tight">
                  <div>2027/02/1</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </section>

          {/* Teal Divider */}
          <div className="w-full h-[1px] bg-[#6899a3]/60 my-6" />

          {/* Section 3: بطاقة السائق */}
          <section className="text-right">
            <h2 className="text-[#0b6479] text-[20px] font-bold mb-6">
              بطاقة السائق
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  رقم البطاقة
                </p>
                <p className="text-black text-[17px] font-bold tracking-normal">
                  33.00652147
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  هوية السائق
                </p>
                <p className="text-black text-[17px] font-bold tracking-normal">
                  2538676582
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  الاسم الأول
                </p>
                <p className="text-black text-[17px] font-bold">
                  احمد
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  اسم العائلة
                </p>
                <p className="text-black text-[17px] font-bold">
                  لحوس
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  تاريخ إصدار البطاقة
                </p>
                <p className="text-black text-[17px] font-bold tracking-normal">
                  2026-07-22
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  تاريخ إنتهاء البطاقة
                </p>
                <p className="text-black text-[17px] font-bold tracking-normal">
                  2027-07-22
                </p>
              </div>

              <div>
                <p className="text-[#858f99] text-[13px] font-normal mb-1">
                  نوع البطاقة
                </p>
                <div className="text-black text-[17px] font-bold leading-snug">
                  <div>نقل البضائع</div>
                  <div>على الطرق</div>
                  <div>البرية</div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Back Button (غير مفعل فقط شكل كما طلب المستخدم بالضبط) */}
        <div className="mt-8 mb-8">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full h-11 border border-[#1b80f7] text-[#1b80f7] font-semibold text-[17px] rounded-lg bg-white flex items-center justify-center cursor-default pointer-events-none select-none shadow-xs"
          >
            رجوع
          </button>
        </div>
      </main>
    </div>
  );
}
