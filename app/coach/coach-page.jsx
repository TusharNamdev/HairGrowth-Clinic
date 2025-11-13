"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Coach() {
  const params = useSearchParams();
  const qs = Object.fromEntries(params.entries());

  const doctor = {
    name: "Dr. Devendra Rathore",
    bio: "Hair & Wellness Expert guiding root-cause based natural treatments.",
    img: "/images/doctor.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-6">

        <div className="md:col-span-1 bg-white rounded-2xl p-6 shadow">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto relative">
            <Image src={doctor.img} alt="doctor" fill style={{ objectFit: "cover" }} />
          </div>

          <h3 className="text-center font-semibold mt-4">{doctor.name}</h3>
          <p className="text-sm text-gray-600 mt-2 text-center">{doctor.bio}</p>

          <div className="mt-6 text-center">
            <Button variant="ghost">Start Chat</Button>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
          <h3 className="font-semibold">Your Hair Growth Journey</h3>
          <p className="text-sm text-gray-600 mt-2">Your personalised timeline designed by the doctor.</p>

          <div className="mt-4 space-y-3">
            <div className="p-4 bg-emerald-50 rounded">Week 1–4: Fall reduction & internal healing</div>
            <div className="p-4 bg-emerald-50 rounded">Week 5–10: Visible new growth & scalp strengthening</div>
            <div className="p-4 bg-emerald-50 rounded">Week 10–16: Thickening & long-term root repair</div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Your submitted details</h4>
            <pre className="text-sm bg-gray-100 p-4 rounded mt-2">{JSON.stringify(qs, null, 2)}</pre>
          </div>
        </div>
      </main>
    </div>
  );
}
