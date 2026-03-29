import Skeleton from "react-loading-skeleton";

const blockClass = "rounded-[6px]";

export const PageContentSkeleton = () => {
  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Skeleton className={blockClass} height={20} width={140} />
          <div className="mt-6 space-y-4">
            <Skeleton className={blockClass} height={52} />
            <Skeleton className={blockClass} height={52} width="82%" />
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[20px] border border-[rgba(6,47,58,0.06)] bg-white p-5 shadow-[0_10px_30px_rgba(6,47,58,0.05)]"
            >
              <Skeleton className={blockClass} height={220} />
              <div className="mt-5 space-y-3">
                <Skeleton className={blockClass} height={26} width="72%" />
                <Skeleton className={blockClass} count={3} />
                <Skeleton className={blockClass} height={18} width={110} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePageSkeleton = () => {
  return (
    <>
      <section className="bg-[#0F3340] px-5 py-16 sm:px-10 md:min-h-[90vh]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <Skeleton className={blockClass} baseColor="#174656" highlightColor="#24596c" height={18} width={220} />
            <Skeleton className={blockClass} baseColor="#174656" highlightColor="#24596c" height={68} />
            <Skeleton className={blockClass} baseColor="#174656" highlightColor="#24596c" height={68} width="82%" />
            <Skeleton className={blockClass} baseColor="#174656" highlightColor="#24596c" count={3} />
            <div className="flex gap-4 pt-4">
              <Skeleton className={blockClass} baseColor="#174656" highlightColor="#24596c" height={46} width={140} />
              <Skeleton className={blockClass} baseColor="#174656" highlightColor="#24596c" height={46} width={110} />
            </div>
          </div>

          <div className="hidden lg:block">
            <Skeleton className="rounded-[30px]" baseColor="#174656" highlightColor="#24596c" height={520} />
          </div>
        </div>
      </section>

      <PageContentSkeleton />
    </>
  );
};

export const TrackingResultsSkeleton = () => {
  return (
    <>
      <div className="mb-[30px] rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white px-5 py-[25px] shadow-[0_10px_40px_rgba(6,47,58,0.08)] min-[768px]:px-[35px] min-[768px]:py-[30px]">
        <Skeleton className={blockClass} height={22} width={130} />
        <div className="mt-4 space-y-3">
          <Skeleton className={blockClass} height={34} width="48%" />
          <Skeleton className={blockClass} height={20} width="32%" />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className={blockClass} height={84} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[30px] min-[1200px]:grid-cols-[1fr_380px]">
        <div className="space-y-[30px]">
          <div className="rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white p-[30px] shadow-[0_10px_40px_rgba(6,47,58,0.08)]">
            <Skeleton className={blockClass} height={28} width={220} />
            <div className="mt-8 space-y-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex gap-4">
                  <Skeleton circle height={36} width={36} />
                  <div className="flex-1 space-y-2">
                    <Skeleton className={blockClass} height={18} width="42%" />
                    <Skeleton className={blockClass} height={14} width="34%" />
                    <Skeleton className={blockClass} height={14} width="68%" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white p-[30px] shadow-[0_10px_40px_rgba(6,47,58,0.08)]">
            <Skeleton className={blockClass} height={28} width={180} />
            <div className="mt-6 space-y-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Skeleton circle height={40} width={40} />
                  <div className="flex-1">
                    <Skeleton className={blockClass} height={18} width="45%" />
                  </div>
                  <Skeleton className={blockClass} height={16} width={120} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-[25px]">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[6px] border border-[rgba(6,47,58,0.05)] bg-white p-[25px] shadow-[0_10px_40px_rgba(6,47,58,0.08)]"
            >
              <Skeleton className={blockClass} height={26} width={180} />
              <div className="mt-5 space-y-3">
                <Skeleton className={blockClass} count={4} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
