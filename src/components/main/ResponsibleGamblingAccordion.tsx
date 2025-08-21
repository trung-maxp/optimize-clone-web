import { useState } from 'react';

const ResponsibleGamblingAccordion = () => {
  const [isMainOpen, setIsMainOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [subAccordions, setSubAccordions] = useState({
    resources: false,
    support: false
  });

  const toggleSubAccordion = (key: 'resources' | 'support') => {
    setSubAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const mainContent = "Ufabet ใช้มาตรการหลายอย่างเพื่อส่งเสริมการพนันอย่างมีความรับผิดชอบ แสดงให้เห็นถึงความมุ่งมั่นที่แข็งแกร่งในการดูแลความปลอดภัยและความเป็นอยู่ที่ดีของผู้เล่น แพลตฟอร์มมีเครื่องมือที่ช่วยให้ผู้เล่นสามารถจัดการและควบคุมกิจกรรมการเดิมพันของตน เพื่อให้พวกเขาสามารถเพลิดเพลินกับการเดิมพันได้โดยไม่ส่งผลกระทบในทางลบต่อชีวิต รวมถึงการให้ข้อมูลที่ชัดเจนเกี่ยวกับความเสี่ยงที่เกี่ยวข้องกับการพนันและการให้ความช่วยเหลือสำหรับลูกค้าที่กำลังประสบปัญหา";

  const expandedContent = "แนวทางของ Ufabet ได้ตั้งมาตรฐานใหม่ในอุตสาหกรรมการพนันออนไลน์ โดยกระตุ้นให้แพลตฟอร์มอื่นๆ ให้ความสำคัญกับความปลอดภัยของผู้เล่น Ufabet ได้รับใบอนุญาตจากคณะกรรมการการพนัน ซึ่งรับประกันว่าดำเนินการภายใต้กฎระเบียบที่เข้มงวดที่ออกแบบมาเพื่อปกป้องผู้เล่นและส่งเสริมการเล่นอย่างยุติธรรม ความพยายามเหล่านี้ทำให้ Ufabet เป็นหนึ่งในแพลตฟอร์มการเดิมพันออนไลน์ที่น่าเชื่อถือและปลอดภัยที่สุด";

  return (
    <div className="pt-12">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        {/* Main Accordion Header */}
        <button
          onClick={() => setIsMainOpen(!isMainOpen)}
          className="w-full text-left p-6 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
        >
          <div className="flex items-start justify-between">
            <h2 className="text-xl font-bold text-gray-800 pr-4 leading-relaxed">
              Ufabet มีมาตรการอะไรบ้างในการส่งเสริมการเล่นพนันอย่างมีความรับผิดชอบ?
            </h2>
          </div>
        </button>

        {/* Main Accordion Content */}
        <div className={`transition-all duration-300 ease-in-out ${isMainOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-6 pb-6">
            {/* Main Content */}
            <div className="text-gray-700 leading-relaxed">
              <p className="mb-4">
                {mainContent}
                {isExpanded && ` ${expandedContent}`}
              </p>

              {/* Read More Button */}
              {!isExpanded && (
                <div className="flex justify-center items-center mb-6">
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="flex items-center justify-center p-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                    aria-label="อ่านเพิ่มเติม"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Sub-accordions - Show only when expanded */}
            {isExpanded && (
              <div className="space-y-4 mt-6">
                {/* Sub-accordion 1: Resources for new players */}
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSubAccordion('resources')}
                    className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-800 pr-4">
                        Ufabet มีแหล่งข้อมูลหรือแหล่งความรู้สำหรับผู้เล่นพนันมือใหม่หรือไม่?
                      </h4>
                      <div className={`transition-transform duration-300 ${subAccordions.resources ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out ${subAccordions.resources ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-4 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        ใช่, Ufabet มีแหล่งข้อมูลการศึกษาให้กับนักเดิมพันใหม่ ช่วยให้พวกเขาเข้าใจคำศัพท์เกี่ยวกับกีฬาและกติกาของกีฬาต่างๆ ได้ดีขึ้น การสนับสนุนของ Ufabet มีให้บริการผ่านการบริการลูกค้าตลอด 24 ชั่วโมง ซึ่งเจ้าหน้าที่จะตอบคำถามและชี้แจงข้อสงสัยของผู้เล่นใหม่ Ufabet มั่นใจว่านักเดิมพันได้รับข้อมูลที่ครบถ้วนและมีความมั่นใจในการตัดสินใจเดิมพันด้วยการให้คำแนะนำ ซึ่งช่วยเสริมสร้างชื่อเสียงของแพลตฟอร์มในฐานะแพลตฟอร์มที่น่าเชื่อถือและปลอดภัยสำหรับการเดิมพันออนไลน์.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub-accordion 2: Customer support contact */}
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSubAccordion('support')}
                    className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-800 pr-4">
                        ผู้ใช้สามารถติดต่อฝ่ายสนับสนุนลูกค้าของ Ufabet ได้อย่างไร?
                      </h4>
                      <div className={`transition-transform duration-300 ${subAccordions.support ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div className={`transition-all duration-300 ease-in-out ${subAccordions.support ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-4 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        ผู้ใช้สามารถติดต่อฝ่ายสนับสนุนลูกค้าของ UFABET ได้ผ่านช่องทางต่าง ๆ รวมถึงโทรศัพท์, Line และอีเมล โดยทีมสนับสนุนพร้อมให้บริการตลอด 24 ชั่วโมงเพื่อตอบข้อสงสัย. ผู้ใช้ได้รับการรับประกันการสนับสนุนเมื่อใดก็ตามที่ต้องการ โดยเฉพาะผู้เล่นมือใหม่ ผู้ใช้ต้องเพิ่ม Line{' '}
                        <a
                          href="https://lin.ee/yR7IqBv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          @UFABETSH
                        </a>
                        {' '}หรือโทร{' '}
                        <a
                          href="tel:0927363782"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          +66927363782
                        </a>
                        {' '}เพื่อการสื่อสารโดยตรง Ufabet รับประกันว่าผู้ใช้สามารถเข้าถึงการสนับสนุนลูกค้าได้ตลอดเวลา เพื่อขอความช่วยเหลือทันทีในกรณีที่พบปัญหาหรือมีคำถามขณะใช้งานแพลตฟอร์ม ข้อสงสัยและคำถามทั้งหมดเกี่ยวกับการเดิมพันหรือคำศัพท์และกติกาที่ไม่คุ้นเคยจะได้รับการดูแลผ่านฝ่ายสนับสนุนลูกค้าที่เชื่อถือได้ของ Ufabet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGamblingAccordion;