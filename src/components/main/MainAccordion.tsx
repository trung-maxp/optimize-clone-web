import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from '../../components/icons'

interface AccordionProps {
  className?: string;
}

const MainAccordion: React.FC<AccordionProps> = ({ className = '' }) => {
  const [isMainExpanded, setIsMainExpanded] = useState(false);
  const [isSubExpanded, setIsSubExpanded] = useState(false);

  const toggleMain = () => {
    setIsMainExpanded(!isMainExpanded);
    // Reset sub accordion when main is collapsed
    if (isMainExpanded) {
      setIsSubExpanded(false);
    }
  };

  const toggleSub = () => {
    setIsSubExpanded(!isSubExpanded);
  };

  const mainContent = `เว็บตรง Ufabet คือเว็บไซต์อย่างเป็นทางการของ Ufabet ซึ่งเป็นผู้ให้บริการเดิมพันกีฬาและคาสิโนออนไลน์ที่ใหญ่ที่สุดในโลก เว็บไซต์นี้เปิดโอกาสให้ผู้ใช้เข้าถึงตัวเลือกการพนันที่หลากหลาย รวมถึงการเดิมพันกีฬา เช่น ฟุตบอล บาสเกตบอล เทนนิส และกีฬาอื่นๆ รวมถึงเกมคาสิโนยอดนิยมอย่าง โป๊กเกอร์ สล็อต บาคาร่า และรูเล็ต`;

  const mainExpandedContent = `${mainContent} เว็บแม่ของ Ufabet เป็นแหล่งที่มาหลักของบริการเดิมพันออนไลน์ หรือเป็นเว็บไซต์หลักในระบบนั่นเอง ไม่มีเอเย่นต์เข้ามาเกี่ยวข้องกับเว็บตรง Ufabet เว็บตรง Ufabet มีมาตรฐานความปลอดภัยสูงสุดในเรื่องความเป็นส่วนตัวและการปกป้องข้อมูลของผู้ใช้ ผู้เล่นและนักเดิมพันออนไลน์จะได้รับการรับรองว่าการเล่นเกมผ่านเว็บตรง Ufabet นั้นมีความยุติธรรม ปลอดภัย และให้รางวัลอย่างคุ้มค่า`;

  const subContent = `ทางเข้าเว็บตรง UFABET เป็นประตูหลักในการเข้าถึงบริการการพนันออนไลน์ต่างๆ ของ UFABET รวมถึงการเดิมพันฟุตบอล คาสิโน บาคาร่า สล็อต และอื่น ๆ ทางเข้าเว็บถูกออกแบบมาเพื่อมอบการเข้าสู่ระบบที่ปลอดภัยและมีประสิทธิภาพสำหรับผู้ใช้ เพื่อให้สามารถล็อกอินเข้าสู่บัญชีและเพลิดเพลินกับตัวเลือกการเดิมพันที่หลากหลาย

ผู้เยี่ยมชม UFABET มักจะเข้าสู่แพลตฟอร์มผ่านเว็บไซต์หรือใช้ลิงก์ทางเข้า URL ที่แท้จริงอาจแตกต่างกันไปเนื่องจากข้อจำกัดในภูมิภาคหรือการอัปเกรดเว็บไซต์ ควรใช้ URL ที่เชื่อถือได้จากแหล่งที่มาอย่างเป็นทางการ เช่น ทีมสนับสนุนของ UFABET หรือช่องทางอย่างเป็นทางการของพวกเขา ที่อยู่ IP ของ UFABET และผู้ใช้มีแนวโน้มที่จะพบข้อจำกัดตามตำแหน่งทางภูมิศาสตร์ UFABET มักจะอนุญาตการเข้าถึงเฉพาะจากประเทศหรือภูมิภาคที่กำหนดเท่านั้น ที่อยู่ IP ปัจจุบันของ UFABET คือ 183.628.56.13 แพลตฟอร์มการพนันนี้อนุญาตให้ผู้ใช้หรือผู้เล่นเข้าถึงเว็บไซต์ได้เฉพาะในกรณีที่มีอายุมากกว่า 18 ปี ที่อยู่ทางเข้าของ UFABET มีแนวโน้มที่จะเปลี่ยนแปลงเป็นประจำ ซึ่งเป็นเรื่องปกติสำหรับแพลตฟอร์มเกมออนไลน์เพื่อเพิ่มความปลอดภัยและการเข้าถึง การปรับเปลี่ยนเหล่านี้ทำขึ้นด้วยเหตุผลหลายประการ รวมถึงการปฏิบัติตามข้อบังคับหรือเพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต

ทางเข้าเว็บตรงของ Ufabet มีอัตราต่อรองฟุตบอลสดและการเพิ่มเดิมพัน Ufabet มอบอัตราต่อรองฟุตบอลสดที่แข่งขันได้เพื่อพัฒนาการเดิมพันออนไลน์ ผู้ใช้สามารถเลือกเดิมพันได้หลากหลาย เช่น ทีมที่ชนะการแข่งขัน การเดิมพันสูง/ต่ำ แฮนดิแคปเอเชีย ผู้ทำประตูแรก และการทายผลสกอร์ที่ถูกต้องบนแพลตฟอร์มนี้

การเดิมพันสดบน Ufabet จะเปลี่ยนอัตราต่อรองตามสถานการณ์ของการแข่งขัน นักเดิมพันจะได้ประโยชน์จากอัตราต่อรองที่เปลี่ยนแปลงตามสถานะของเกม ทำให้พวกเขาสามารถระบุโอกาสการเดิมพันที่ทำกำไรได้ขณะเกมดำเนินไป อัตราต่อรองเหล่านี้คำนวณโดยผู้เชี่ยวชาญที่พิจารณาฟอร์มของทีม อาการบาดเจ็บของผู้เล่น และผลงานที่ผ่านมา เพื่อให้แน่ใจว่ามีความยุติธรรมและแม่นยำ

เพิ่มอัตราต่อรองเป็นวิธีการเดิมพันที่ไม่เหมือนใคร ซึ่งช่วยให้ผู้ใช้สามารถทายผลสกอร์ที่ถูกต้องของการแข่งขันฟุตบอล โดยเริ่มต้นด้วยการเดิมพันขั้นต่ำเพียง 10 บาท นักเดิมพันสามารถเลือกตั้งแต่ 1 ถึงสูงสุด 12 แมตช์ในบิลเดิมพันเดียว การจ่ายเงินจะคำนวณโดยการคูณอัตราต่อรองของแต่ละแมตช์เข้าด้วยกัน ซึ่งให้โอกาสในการชนะจำนวนมากหากทายผลสกอร์ได้ถูกต้องทั้งหมด อย่างไรก็ตาม หากมีการทายผลสกอร์ผิดเพียงแมตช์เดียว การเดิมพันทั้งหมดจะถือว่าแพ้ ซึ่งคล้ายกับการแทงบอลสเต็ป`;

  return (
    <div className={`pt-12 ${className}`}>
      {/* Main Accordion */}
      <details className="bg-white rounded-lg shadow-lg overflow-hidden" open={isMainExpanded}>
        <summary
          className="cursor-pointer select-none"
          onClick={(e) => {
            e.preventDefault();
            toggleMain();
          }}
        >
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Ufabet เว็บตรง
            </h2>
            <div className="ml-4">
              {isMainExpanded ? (
                <ChevronUp className="w-6 h-6 text-gray-600" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600" />
              )}
            </div>
          </div>
        </summary>

        <div className="p-6">
          {/* Main Content */}
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 whitespace-pre-line">
            <strong>เว็บตรง Ufabet</strong> {isMainExpanded ? mainExpandedContent : mainContent}
          </p>

          {/* Show More Button for Main Content */}
          <div className="flex justify-center mb-6">
            <button
              onClick={toggleMain}
              className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 group"
              tabIndex={0}
              aria-label={isMainExpanded ? "อ่านน้อยลง" : "อ่านเพิ่มเติม"}
            >
              {isMainExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
              )}
            </button>
          </div>

          {/* Image - Only show when main is expanded */}
          {isMainExpanded && (
            <div className="mb-6 pt-8">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/image/bg-pic-2-small.avif"
                />
                <source
                  media="(max-width: 800px)"
                  srcSet="/image/bg-pic-2-medium.avif"
                />
                <img
                  className="w-full h-auto rounded-lg shadow-md"
                  src="/image/bg-pic-2-big.avif"
                  alt="เว็บตรงยูฟ่าเบท"
                  loading="lazy"
                />
              </picture>
            </div>
          )}

          {/* Sub Accordion - Only show when main is expanded */}
          {isMainExpanded && (
            <div className="mt-4">
              <details className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200" open={isSubExpanded}>
                <summary
                  className="cursor-pointer select-none"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSub();
                  }}
                >
                  <div className="flex items-center justify-between p-4 hover:bg-gray-100 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      ทางเข้าเว็บตรง Ufabet
                    </h3>
                    <div className="ml-4">
                      {isSubExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </div>
                </summary>

                {isSubExpanded && (
                  <div className="p-4 pt-0">
                    <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                      {subContent}
                    </p>
                  </div>
                )}
              </details>
            </div>
          )}
        </div>
      </details>
    </div>
  );
};

export default MainAccordion;