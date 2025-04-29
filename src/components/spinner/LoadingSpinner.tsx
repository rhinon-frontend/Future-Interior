import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen bg-gray-100" aria-busy="true">
      <div className="flex flex-col items-center">
        <div className="animate-spin">
          <Image
            src="/spinlogo.svg"
            alt="Loading logo"
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL="/spinlogo.svg"
          />
        </div>
        <p className="mt-4 text-sm text-gray-500 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
