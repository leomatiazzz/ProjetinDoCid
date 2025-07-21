"use client";
import Image from "next/image";

export function FieldMap() {
  return (
    <section className="ml-16 md:ml-20 px-6 mt-8">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Manage your fields
        </h2>
        <p className="text-sm text-gray-500">Select area for sowing</p>
      </div>
      <div className="w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
        <Image
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
          alt="Aerial Field View"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
