const Footer = () => {
  const footballLeagues = [
    { name: "พรีเมียร์ลีกอังกฤษ (EPL)", href: "/football/english-premier-league/" },
    { name: "เมเจอร์ลีกซอกเกอร์ (MLS)", href: "/football/major-league-soccer/" },
    { name: "บุนเดสลีกาเยอรมัน", href: "/football/german-bundesliga/" },
    { name: "กัลโช่เซเรียอา", href: "/football/italian-serie-a/" },
    { name: "ซูเปอร์ลีกจีน", href: "/football/chinese-super-league/" },
    { name: "ลาลีกา สเปน", href: "/football/spanish-la-liga/" },
    { name: "ลีกเอิงฝรั่งเศส 1", href: "/football/french-ligue-one/" },
    { name: "ไทยลีก 1 (ประเทศไทย)", href: "/football/thai-league-one/" },
    { name: "เจลีก ญี่ปุ่น", href: "/football/j-one-league/" },
    { name: "เคลีกเกาหลีใต้", href: "/football/k-league-one/" }
  ];

  const internationalLeagues = [
    { name: "ยูฟ่า แชมเปียนส์ลีก", href: "/football/uefa-champions-league/" },
    { name: "ฟีฟ่า เวิลด์คัพ", href: "/football/fifa-world-cup/" },
    { name: "ยูฟ่า ยูโรปาลีก", href: "/football/uefa-europa-league/" },
    { name: "คาราบาวคัพ (อังกฤษ)", href: "/football/carabao-cup/" },
    { name: "เอฟเอคัพ (อังกฤษ)", href: "/football/fa-cup/" },
    { name: "ยูฟ่า ยูโรเปียนแชมเปียนชิพ (ยูโร)", href: "/football/uefa-euro-cup/" }
  ];

  const casinoGames = [
    { name: "Baccarat", href: "/online-casino/table-game/baccarat" },
    { name: "สล็อต", href: "#" },
    { name: "โป๊กเกอร์", href: "#" },
    { name: "Blackjack", href: "/online-casino/table-game/blackjack" },
    { name: "Roulette", href: "/online-casino/table-game/roulette" }
  ];

  const gameCategories = [
    { name: "หนังสือกีฬา", href: "#" },
    { name: "คาสิโนสด", href: "/online-casino/" },
    { name: "สล็อต", href: "#" },
    { name: "เกมโต๊ะ", href: "/online-casino/table-game/" },
    { name: "แบล็คแจ็ค", href: "/online-casino/table-game/blackjack" },
    { name: "รูเล็ต", href: "/online-casino/table-game/roulette" },
    { name: "บาคาร่า", href: "/online-casino/table-game/baccarat" },
    { name: "เกมไพ่", href: "/online-casino/card-game/" },
    { name: "Sic bo", href: "/online-casino/table-game/sic-bo" },
    { name: "เกมลูกเต๋า", href: "/online-casino/dice-game/" }
  ];

  const licenses = [
    { src: "/image/game-license/game-license-1.avif", alt: "game-license-1" },
    { src: "/image/game-license/game-license-2.avif", alt: "game-license-2" },
    { src: "/image/game-license/game-license-3.avif", alt: "game-license-3" },
    { src: "/image/game-license/game-license-4.avif", alt: "game-license-4" }
  ];

  return (
    <footer className="bg-gray-50 border-t" id="footer">
      <div className="container mx-auto px-4 py-16">
        {/* About Football Betting Section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              เกี่ยวกับการแทงบอลออนไลน์กับ UFABET
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ค้นพบประสบการณ์ที่ลึกซึ้งยิ่งขึ้นในการแทงบอลออนไลน์กับ Ufabet. Ufabet ให้คำแนะนำที่มีคุณค่า ข้อมูลเชิงลึก และเคล็ดลับจากผู้เชี่ยวชาญที่ออกแบบมาเพื่อช่วยนักพนันในทุกระดับ ไม่ว่าจะเป็นผู้เริ่มต้นหรือผู้ที่ต้องการปรับปรุงกลยุทธ์. นักพนันติดตามเทรนด์และความเคลื่อนไหวล่าสุดในการแทงบอลออนไลน์ได้โดยการเข้าร่วมชุมชนที่คึกคักของแฟนกีฬา Ufabet. แทงทีมฟุตบอลที่ชื่นชอบและเพิ่มความตื่นเต้นในวันแข่งขันกับแพลตฟอร์มแทงบอลของ Ufabet. Ufabet ให้ความสำคัญกับความสะดวกสบายและการเชื่อมต่อด้วยการสนับสนุนลูกค้าตลอด 24 ชั่วโมง เพื่อช่วยเหลือนักพนันจากทุกที่ในโลก. สมัครวันนี้ ฝากเงินครั้งแรก และสัมผัสประสบการณ์แทงบอลออนไลน์กับ Ufabet.
            </p>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About UFABET */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">เกี่ยวกับ UFABET</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 cursor-pointer hover:text-blue-600">เกี่ยวกับ</span>
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Ufabet เข้าสู่ระบบ
                </a>
              </li>
            </ul>
          </section>

          {/* Football Betting */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">แทงบอล</h3>
            <ul className="space-y-2">
              {footballLeagues.map((league, index) => (
                <li key={index}>
                  <a href={league.href} className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                    {league.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* International Leagues */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">ลีกฟุตบอลนานาชาติ</h3>
            <ul className="space-y-2">
              {internationalLeagues.map((league, index) => (
                <li key={index}>
                  <a href={league.href} className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                    {league.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Live Casino */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">คาสิโนสด</h3>
            <ul className="space-y-2">
              {casinoGames.map((game, index) => (
                <li key={index}>
                  {game.href === "#" ? (
                    <span className="text-gray-600 cursor-pointer hover:text-blue-600 text-sm">
                      {game.name}
                    </span>
                  ) : (
                    <a href={game.href} className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                      {game.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* License Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mb-12">
          {licenses.map((license, index) => (
            <div key={index}>
              <img
                src={license.src}
                alt={license.alt}
                width="148"
                loading="lazy"
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Company Info Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          <div className="flex-shrink-0">
            <img
              className="h-16 w-auto"
              src="/image/UFABET.avif"
              alt="ufabet logo"
              loading='lazy'
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed text-sm">
              ที่ Ufabet เพลิดเพลินกับตัวเลือกการแทงกีฬาที่หลากหลาย รวมถึงบอล บาสเกตบอล เทนนิส และ MMA พร้อมกับเกมแทงออนไลน์ เช่น สล็อต โป๊กเกอร์ แบล็คแจ็ค บาคาร่า และคาสิโนสด
              สำหรับการสนับสนุน ติดต่อเราผ่านสายด่วนที่{' '}
              <a href="tel:+66927363782" className="text-blue-600 hover:text-blue-800 underline">
                +66927363782
              </a>
              {' '}หรืออีเมล support@ufabet.sh แชทสดของเราพร้อมให้บริการตลอด 24 ชั่วโมงทุกวันเพื่อช่วยเหลือทันที เรียนรู้เพิ่มเติมเกี่ยวกับเราในส่วน "เกี่ยวกับเรา" ซึ่งอธิบายถึงความมุ่งมั่นของเราในการมอบประสบการณ์การแทงที่ปลอดภัยและน่าสนใจ โปรดตรวจสอบข้อกำหนดและเงื่อนไข นโยบายความเป็นส่วนตัว และแนวทางการแทงอย่างรับผิดชอบสำหรับข้อมูลทางกฎหมาย สำนักงานใหญ่ของ Ufabet ตั้งอยู่ที่ 11 หมู่บ้านนาสวน อำเภออรัญประเทศ จังหวัดสระแก้ว 27120 เวลาทำการตั้งแต่วันจันทร์ถึงวันศุกร์ 9.00 น. - 18.00 น. © 2025 Ufabet สงวนลิขสิทธิ์
            </p>
          </div>
        </div>

        {/* Game Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {gameCategories.map((category, index) => (
            <div key={index} className="text-center">
              {category.href === "#" ? (
                <span className="text-gray-600 cursor-pointer hover:text-blue-600 text-sm font-medium">
                  {category.name}
                </span>
              ) : (
                <a href={category.href} className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                  {category.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Age Restriction and Copyright */}
        <div className="text-center">
          <div className="mb-4">
            <img
              className="mx-auto h-12 w-auto"
              src="/image/icn-age18.avif"
              alt="age 18"
              loading='lazy'
            />
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Ufabet สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;