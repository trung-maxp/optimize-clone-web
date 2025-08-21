import { useState } from 'react';

const CasinoGameSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const casinoGames = [
    {
      game: "เกมสล็อต",
      details: "เกมสล็อตหลากหลายธีม",
      options: "เพย์ไลน์, คุณสมบัติโบนัส"
    },
    {
      game: "คาสิโนสด",
      details: "เกมแบบเรียลไทม์กับดีลเลอร์สด",
      options: "แบล็คแจ็ค, รูเล็ต, บาคาร่า, และโป๊กเกอร์"
    },
    {
      game: "เกมโต๊ะ",
      details: "เกมคาสิโนแบบดั้งเดิมในเวอร์ชันเสมือนจริง",
      options: "แบล็คแจ็ค, รูเล็ต, แครบส์, และบาคาร่า"
    },
    {
      game: "วิดีโอโป๊กเกอร์",
      details: "เกมโป๊กเกอร์บนเครื่องวิดีโอ",
      options: "แจ็คส์หรือดีกว่า, ดิวเซสไวลด์, โจ๊กเกอร์โป๊กเกอร์"
    },
    {
      game: "เกมหวย",
      details: "เกมที่ใช้ตัวเลขคล้ายกับหวย",
      options: "การเลือกหมายเลข, ชนะทันที"
    },
    {
      game: "เกมยิงปลา",
      details: "เกมแบบอาเขตที่ผู้เล่นยิงปลาสำหรับรางวัล",
      options: "มูลค่าปลาที่แตกต่างกัน, พาวเวอร์อัพ"
    },
    {
      game: "คีโน",
      details: "เกมคล้ายหวยที่มีการจับหมายเลข",
      options: "การเลือกหมายเลข, ตัวเลือกการจับหลายครั้ง"
    }
  ];

  return (
    <div className="pt-12">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        {/* Accordion Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 pr-4">
              เกมคาสิโนอะไรบ้างที่สามารถเดิมพันได้บน Ufabet?
              <span id="open-game-available"></span>
            </h2>
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>

        {/* Accordion Content */}
        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-6 pb-6">
            <p className="text-gray-700 mb-6">
              เกมคาสิโนที่มีให้เดิมพันบน Ufabet แสดงอยู่ในตารางด้านล่าง
            </p>

            {/* Casino Games Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                      เกมคาสิโน
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                      รายละเอียด
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                      ตัวเลือกในการแทง
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {casinoGames.map((game, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900 border-b border-gray-200">
                        {game.game}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {game.details}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200">
                        {game.options}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoGameSection;