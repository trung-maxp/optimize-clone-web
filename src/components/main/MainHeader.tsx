import React, { useState } from 'react';
import { UserPlus, Trophy, ChevronDown, ChevronUp } from '../../components/icons'

interface MainContentHeaderProps {
    className?: string;
}

const MainContentHeader: React.FC<MainContentHeaderProps> = ({ className = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const shortContent = `Ufabet (ยูฟ่าเบท) ทางเข้าเข้าสู่ระบบโดยตรง ได้รับการจัดเตรียมโดยเว็บไซต์ทางการของ Ufabet เว็บไซต์หลักของ Ufabet Ufabet ก่อตั้งขึ้นในปี 2009 และที่อยู่ทางเข้าใช้งานผ่านมือถือและเดสก์ท็อปจะมีการเปลี่ยนแปลงอยู่บ่อยครั้ง โดยที่อยู่เข้าสู่ระบบล่าสุด ลิงก์สมัครสมาชิก และระบบสมาชิกอย่างเป็นทางการของ Ufabet สามารถดูได้ที่ด้านล่าง`;

    const expandedContent = `${shortContent}

Ufabet (ยูฟ่าเบท) เป็นแพลตฟอร์มการพนันออนไลน์ที่ได้รับการยอมรับอย่างกว้างขวาง โดยมีตัวเลือกการแทงมากมาย รวมถึงการพนันกีฬาและเกมคาสิโน Ufabet (ยูฟ่าเบท) มีต้นกำเนิดในเอเชียและเป็นที่นิยมอย่างมากในประเทศไทย แพลตฟอร์มนี้ได้รับความนิยมเนื่องจากการครอบคลุมกีฬาที่ครบถ้วนและเกมคาสิโนต่างๆ เช่น สล็อต Ufabet (ยูฟ่าเบท) แพลตฟอร์มการพนันชั้นนำนี้ก่อตั้งขึ้นในปี 2009 การมีตัวเลือกการแทงกีฬาที่หลากหลายของ UFABET (ยูฟ่าเบท) เป็นหนึ่งในปัจจัยหลักที่ทำให้แตกต่างจากคู่แข่ง

การก่อตั้ง Ufabet (ยูฟ่าเบท) ได้เปลี่ยนแปลงโลกของการพนัน แพลตฟอร์มนี้มีอัตราต่อรองที่แข่งขันได้ ตลาดการแทงที่หลากหลาย และการบริการลูกค้าที่ยอดเยี่ยม ทำให้เป็นตัวเลือกที่น่าสนใจสำหรับนักแทงทั่วโลก UFABET (ยูฟ่าเบท) มีสิ่งที่ตอบโจทย์ทุกคน ไม่ว่าจะเป็นแฟนบาสเก็ตบอล รักบี้ เทนนิส หรือกีฬาอื่นๆ นักแทงมีโอกาสในการวางแทงอยู่เสมอ โดยสามารถสำรวจดิวิชัน ทัวร์นาเมนต์ และการแข่งขันที่หลากหลายจากทั่วโลก UFABET (ยูฟ่าเบท) รองรับความต้องการของแฟนกีฬาทุกคน ด้วยการเสนออีเวนต์ที่หลากหลาย รวมถึงการแข่งขันในประเทศและการแข่งขันระดับนานาชาติที่มีชื่อเสียง

แพลตฟอร์มนำเสนอเกมคาสิโนออนไลน์ที่หลากหลายพร้อมธีมที่น่าดึงดูดและรางวัลโปรเกรสซีฟ รวมถึงเกมโต๊ะดั้งเดิม เช่น แบล็คแจ็ค รูเล็ต บาคาร่า และสล็อตแมชชีนสมัยใหม่ ผู้เล่นสามารถเข้าถึงเกมประเภทต่างๆ ผ่าน ทางเข้าล่าสุดของ UFABET (ยูฟ่าเบท) ในขณะที่ เว็บแม่ของ UFABET (ยูฟ่าเบท) มีทรัพยากรเพิ่มเติม นักเดิมพันทั่วโลกจำเป็นต้องเข้าถึงเว็บตรงของ Ufabet (ยูฟ่าเบท) และทางเข้าเฉพาะสำหรับเกมประเภทต่างๆ แทนที่จะเล่นผ่านเอเย่นต์

ผู้เล่นระดับสูงจะได้รับการดูแลเป็นพิเศษผ่านโปรแกรม VIP ของ Ufabet (ยูฟ่าเบท) โปรแกรมนี้มอบประสบการณ์การเล่นเกมที่หรูหราและเป็นส่วนตัวสำหรับผู้เล่นระดับสูง ลูกค้า VIP จะได้รับการบริการชั้นยอด ตั้งแต่ผู้จัดการบัญชีเฉพาะบุคคลไปจนถึงโปรโมชั่นและโบนัสที่ปรับให้เหมาะสม การให้บริการแบบเฉพาะเจาะจงช่วยเพิ่มประสบการณ์การเล่นเกมและทำให้ผู้เล่น VIP รู้สึกพิเศษ

UFABET (ยูฟ่าเบท) ดำเนินการภายใต้ใบอนุญาตที่ถูกต้องตามกฎหมาย เพื่อให้แน่ใจว่าเป็นไปตามมาตรฐานทางกฎหมายและข้อบังคับในภูมิภาคที่เปิดให้บริการ องค์กรต่างๆ เช่น Malta Gaming Authority เป็นผู้ควบคุมแพลตฟอร์มโดยการออกใบอนุญาต ในขณะที่ BMM Testlabs และ Gaming Associates เป็นผู้รับรองความยุติธรรมและความสมบูรณ์ของระบบเกมของ UFABET (ยูฟ่าเบท) GoDaddy Verified and Secure รับรองว่าเว็บไซต์ของแพลตฟอร์มนั้นปลอดภัย โดยปกป้องข้อมูลผู้ใช้ผ่านการเข้ารหัสและโปรโตคอลความปลอดภัยอื่นๆ สิ่งนี้ทำให้แพลตฟอร์มคงไว้ซึ่งมาตรฐานด้านความปลอดภัย ความยุติธรรม และความโปร่งใสในระดับสูง สถานะที่ได้รับใบอนุญาตของแพลตฟอร์มยังช่วยสร้างความมั่นใจให้กับผู้ใช้ว่า UFABET (ยูฟ่าเบท) เป็นหน่วยงานที่เชื่อถือได้และอยู่ภายใต้การควบคุมในอุตสาหกรรมการพนันออนไลน์`;

    return (
        <header className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
            {/* Main Title */}
            <h1
                id="main-content-title"
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight"
            >
                UFABET ยูฟ่าเบท ทางเข้าหลัก เว็บตรง Ufabet เข้าสู่ระบบมือถือ
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md w-full sm:w-auto"
                    onClick={() => console.log('Register clicked')}
                >
                    <UserPlus className="w-4 h-4" />
                    <span>สมัครสมาชิก</span>
                </button>

                <button
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md w-full sm:w-auto"
                    onClick={() => console.log('Live score clicked')}
                >
                    <Trophy className="w-4 h-4" />
                    <span>ผลบอล</span>
                </button>
            </div>

            {/* Content Text */}
            <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {isExpanded ? expandedContent : shortContent}
                </p>
            </div>



            {/* Responsive Image */}
            {isExpanded && (
                <div className="mb-6 pt-8">
                    <picture>
                        <source
                            media="(max-width: 480px)"
                            srcSet="/image/bg-pic-1-small.avif"
                        />
                        <source
                            media="(max-width: 800px)"
                            srcSet="/image/bg-pic-1-medium.avif"
                        />
                        <img
                            className="w-full h-auto rounded-lg shadow-md"
                            src="/image/bg-pic-1-big.avif"
                            alt="เดิมพันบน UFABET (ยูฟ่าเบท)"
                            loading="lazy"
                        />
                    </picture>
                </div>
            )}

            {/* Show More/Less Button */}
            <div className="flex justify-center">
                <button
                    onClick={toggleExpanded}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 group"
                    tabIndex={0}
                    aria-label={isExpanded ? "อ่านน้อยลง" : "อ่านเพิ่มเติม"}
                >
                    {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
                    )}
                </button>
            </div>


        </header>
    );
};

export default MainContentHeader;