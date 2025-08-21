import React from 'react';

interface ResponsiveImageProps {
    src: string;
    alt: string;
    smallSrc?: string;
    mediumSrc?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, smallSrc, mediumSrc }) => {
    return (
        <picture className="block pt-8">
            {smallSrc && (
                <source media="(max-width: 480px)" srcSet={smallSrc} />
            )}
            {mediumSrc && (
                <source media="(max-width: 800px)" srcSet={mediumSrc} />
            )}
            <source media="" srcSet={src} />
            <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain"
                loading="lazy"
            />
        </picture>
    );
};

const RegistrationGuide: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <ol className="space-y-8 list-decimal list-inside">
                <li className="text-gray-800">
                    <strong className="font-bold text-gray-900">ใส่ชื่อผู้ใช้และรหัสผ่านที่ต้องการ</strong>
                    <span className="ml-1">: ตามด้วยหมายเลขโทรศัพท์</span>
                </li>

                <li className="text-gray-800">
                    <strong className="font-bold text-gray-900">รอรับ OTP (รหัสผ่านใช้ครั้งเดียว)</strong>
                    <span className="ml-1">: จากนั้นคลิกเพื่อดำเนินการลงทะเบียนเป็นสมาชิก</span>

                    <ResponsiveImage
                        src="https://ufshseo-cdn.mybet789.com/aws-s3/สมัครสมาชิก.avif"
                        alt="สมัครสมาชิก UFABET"
                        smallSrc="https://ufshseo-cdn.mybet789.com/aws-s3/สมัครสมาชิก-small.avif"
                        mediumSrc="https://ufshseo-cdn.mybet789.com/aws-s3/สมัครสมาชิก-medium.avif"
                    />
                </li>

                <li className="text-gray-800">
                    <strong className="font-bold text-gray-900">ใส่หมายเลขบัญชีธนาคาร</strong>
                    <span className="ml-1">: หรือหมายเลขกระเป๋าเงิน TrueMoney เพื่อยืนยันตัวตน</span>

                    <ResponsiveImage
                        src="https://ufshseo-cdn.mybet789.com/aws-s3/ข้อมูลบัญชีธนาคาร.avif"
                        alt="ข้อมูลบัญชีธนาคาร"
                        smallSrc="https://ufshseo-cdn.mybet789.com/aws-s3/ข้อมูลบัญชีธนาคาร-small.avif"
                        mediumSrc="https://ufshseo-cdn.mybet789.com/aws-s3/ข้อมูลบัญชีธนาคาร-medium.avif"
                    />
                </li>

                <li className="text-gray-800">
                    <strong className="font-bold text-gray-900">ทำการฝากเงินครั้งแรก</strong>
                    <span className="ml-1">: ตามจำนวนทศนิยมที่ระบุบนเว็บไซต์ ดำเนินการต่อเพื่อเริ่มเล่นได้ทันทีหลังจากเสร็จสิ้น</span>

                    <ResponsiveImage
                        src="https://ufshseo-cdn.mybet789.com/aws-s3/ยอดเงินฝาก.avif"
                        alt="ยอดเงินฝาก"
                        smallSrc="https://ufshseo-cdn.mybet789.com/aws-s3/ยอดเงินฝาก-small.avif"
                        mediumSrc="https://ufshseo-cdn.mybet789.com/aws-s3/ยอดเงินฝาก-medium.avif"
                    />

                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm leading-relaxed text-gray-700">
                            ในการเปิดบัญชีกับ Ufabet ผู้ใช้จะต้องปฏิบัติตามข้อกำหนดที่สำคัญ 6 ข้อ ดังนี้ ประการแรก ผู้ใช้จะต้องมีอายุมากกว่า 18 ปี ซึ่งเป็นข้อกำหนดขั้นต่ำสำหรับการพนันบนแพลตฟอร์ม ประการที่สอง ต้องมั่นใจว่าการพนันออนไลน์ถูกกฎหมายในประเทศที่ผู้ใช้อาศัยอยู่ก่อนลงทะเบียน ประการที่สาม จำเป็นต้องมีการเชื่อมต่ออินเทอร์เน็ตที่เสถียรเพื่อให้การเดิมพันเป็นไปอย่างราบรื่น ประการที่สี่ แพลตฟอร์มของ Ufabet สามารถใช้งานได้กับอุปกรณ์เดสก์ท็อปและมือถือ ทำให้ผู้ใช้สามารถเข้าถึงได้อย่างง่ายดายจากคอมพิวเตอร์ แท็บเล็ต หรือสมาร์ทโฟน ประการที่ห้า ผู้ใช้จำเป็นต้องมีบัญชีธนาคารสำหรับฝากเงินและถอนเงินที่ชนะ สุดท้ายนี้ ต้องมีที่อยู่อีเมลที่ถูกต้องสำหรับการลงทะเบียนบัญชีและการสื่อสารกับแพลตฟอร์ม การปฏิบัติตามข้อกำหนดเหล่านี้จะช่วยให้ผู้ใช้สามารถเปิดและจัดการบัญชี Ufabet ได้อย่างปลอดภัย ทำให้สามารถเข้าถึงสภาพแวดล้อมการเดิมพันที่ใช้งานง่ายและเชื่อถือได้
                        </p>
                    </div>
                </li>
            </ol>

            <div className="mt-8">
                <video
                    controls
                    className="w-full h-auto rounded-lg shadow-sm"
                    poster=""
                >
                    <source
                        src="https://ufshseo-cdn.mybet789.com/ขั้นตอนการสมัครสมาชิก_TH_16x9.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default RegistrationGuide;