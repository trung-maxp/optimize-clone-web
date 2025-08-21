const BonusSection = () => {
  const bannerImages = [
    {
      alt: "อัตราต่อรองคอมมิชชั่น",
      src: "/image/bg-pic-6.avif"
    },
    {
      alt: "สเต็ปคอมมิชชั่น",
      src: "/image/bg-pic-7.avif"
    },
    {
      alt: "มันนี่ไลน์สองโอกาสค่าคอม",
      src: "/image/bg-pic-8.avif"
    },
    {
      alt: "คาสิโนคอมมิชชั่น",
      src: "/image/bg-pic-9.avif"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Bonus Title Section */}
      <aside className="bg-white rounded-lg shadow-sm border">
        <section>
          <header className="p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">
              โบนัส UFABET
            </h2>
          </header>
        </section>
      </aside>

      {/* Banner Images Section */}
      <aside className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div
          tabIndex={0}
          role="region"
          className="p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        >
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex gap-4 pb-2" style={{ minWidth: 'max-content' }}>
              {bannerImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <img
                    className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105 shadow-md"
                    alt={image.alt}
                    srcSet={`${image.src} 480w, ${image.src} 800w, ${image.src} 1200w`}
                    sizes="500px"
                    src={image.src}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BonusSection;