const ComponentLoader = () => (
    <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
)

// Skeleton component for specific sections
const SectionSkeleton = ({ height = "h-32" }: { height?: string }) => (
    <div className={`bg-gray-800 animate-pulse rounded-lg ${height}`}></div>

)

export { ComponentLoader, SectionSkeleton }

