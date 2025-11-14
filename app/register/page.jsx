// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { motion } from "framer-motion";
// import ProgressBar from "@/components/shared/ProgressBar";

// export default function Register() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     gender: "",
//     location: "",
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   }

//   function next() {
//     if (step === 3) {
//       const qs = new URLSearchParams(form).toString();
//       router.push(`/stage?${qs}`);
//     } else setStep((s) => s + 1);
//   }

//   function prev() {
//     setStep((s) => Math.max(1, s - 1));
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <main className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">

//         <h2 className="text-2xl font-bold">Hair Health Assessment</h2>
//         <p className="text-gray-600 mt-2">
//           Understand the root cause of your hair fall with this doctor-designed questionnaire.
//         </p>

//         <div className="mt-6">
//           <ProgressBar step={step} />

//           <motion.div
//             key={step}
//             initial={{ opacity: 0, x: 10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.35 }}
//           >
//             {step === 1 && (
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label>Name</Label>
//                   <Input name="name" value={form.name} onChange={handleChange} required />
//                 </div>
//                 <div>
//                   <Label>Email</Label>
//                   <Input name="email" type="email" value={form.email} onChange={handleChange} required />
//                 </div>
//                 <div>
//                   <Label>Phone</Label>
//                   <Input name="phone" value={form.phone} onChange={handleChange} required />
//                 </div>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label>Age</Label>
//                   <Input name="age" type="number" value={form.age} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <Label>Gender</Label>
//                   <select name="gender" className="w-full mt-2 p-2 border rounded" value={form.gender} onChange={handleChange}>
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div>
//                   <Label>Location</Label>
//                   <Input name="location" value={form.location} onChange={handleChange} />
//                 </div>
//               </div>
//             )}

//             {step === 3 && (
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label>Any hair/health concerns (optional)</Label>
//                   <textarea
//                     name="concerns"
//                     value={form.concerns || ""}
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded"
//                     rows={4}
//                   />
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Share symptoms like stress, dandruff, sleep issues, thinning, scalp itching or digestion concerns.
//                 </div>
//               </div>
//             )}

//             <div className="mt-6 flex items-center gap-3">
//               {step > 1 && <Button variant="ghost" onClick={prev}>Back</Button>}
//               <Button onClick={next}>{step === 3 ? "Proceed to Stage" : "Next"}</Button>
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProgressTabs from "@/components/Register/ProgressTabs";
import QuestionCard from "@/components/Register/QuestionCard";
import PhotoUploader from "@/components/Register/PhotoUploader";

export default function RegisterFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    stage: null,

    // these MUST remain nested
    hair: {},
    internal: {},

    scalpPhoto: null,
  });

  // VALIDATION
  function validateStep() {
    let err = {};

    if (step === 0) {
      if (!form.name.trim()) err.name = "Name is required";
      if (!form.phone.trim()) err.phone = "Phone is required";
      if (!form.age) err.age = "Age is required";
      if (!form.gender) err.gender = "Gender is required";
    }

    if (step === 1) {
      if (form.stage === null) err.stage = "Please choose your stage";
    }

    if (step === 3) {
      if (!form.scalpPhoto) err.scalpPhoto = "Scalp photo is required";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    setStep((p) => p + 1);
  }

  function prev() {
    setStep((p) => Math.max(0, p - 1));
  }

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function updateNested(section, id, value) {
    setForm((prev) => ({
      ...prev,
      [section]: { ...prev[section], [id]: value },
    }));
  }

  //  SUBMIT FUNCTION 
  function submit() {
    if (!validateStep()) return;

    const params = new URLSearchParams();

    // Basic fields (name, phone, age, gender, stage)
    Object.entries(form).forEach(([key, val]) => {
      if (key !== "hair" && key !== "internal" && key !== "scalpPhoto") {
        params.set(key, val);
      }
    });

    // Flatten Hair Health → hair_family, hair_dandruff, etc.
    Object.entries(form.hair || {}).forEach(([key, val]) => {
      params.set("hair_" + key, val);
    });

    // Flatten Internal Health
    Object.entries(form.internal || {}).forEach(([key, val]) => {
      params.set("internal_" + key, val);
    });

    // Photo (only the file name)
    params.set("scalpPhoto", form.scalpPhoto?.name || "");

    router.push("/coach?" + params.toString());
  }

  // STATIC DATA 
  const hairQuestions = [
    {
      id: "family",
      q: "Do you have a family history of hair loss?",
      options: [
        "Mother or anyone from mother's side of the family",
        "Father or anyone from father's side of the family",
        "Both",
        "None",
      ],
    },
    {
      id: "dandruff",
      q: "Do you have Dandruff?",
      options: [
        "No Dandruff",
        "Mild Dandruff (small white flakes)",
        "Heavy Dandruff (sticky dandruff found in nails on scratching or visible on clothes)",
        "Diagnosed with Psoriasis / Seborrheic Dermatitis",
      ],
    },
  ];

  const internalQuestions = [
    {
      id: "sleep",
      q: "How well do you sleep?",
      options: [
        "Very peacefully for 6-8 hours",
        "Disturbed sleep (wake up multiple times at night)",
        "Difficulty falling asleep",
      ],
    },
    {
      id: "stress",
      q: "How Stressed are you?",
      options: ["None", "Low", "Moderate(work, family etc )", "High (Loss of close one, separation, home, illness)"],
    },
    {
      id: "constipation",
      q: "Do you feel Constipated? (कब्ज़)",
      options: [
        "No / Once in a while",
        "Yes (fewer than 3 stools/week)",
        "Unsatisfied after passing stools",
        "Suffering from Irritable Bowel Syndrome (IBS)",
      ],
    },
    {
      id: "gas",
      q: "Do you have Gas, Acidity or Bloating?",
      options: ["No", "Sometimes (1-2 times a week or when I eat out)", "Often (3+ times a week)"],
    },
    {
      id: "energy",
      q: "How are your energy levels during the day?",
      options: [
        "Always high / Normal energy levels throughout the day",
        "Low when I wake up, then gradually increase",
        "Very low in the afternoon",
        "Low by evening/night",
        "Always low",
      ],
    },
    {
      id: "supplements",
      q: "Are you taking any supplements or vitamins for hair?",
      options: ["Yes", "No"],
    },
  ];

  const stageData = {
    male: [
      { id: 0, label: "Stage 1 (Mild)", img: "/images/stages/male-1.svg" },
      { id: 1, label: "Stage 2 (Moderate)", img: "/images/stages/male-2.svg" },
      { id: 2, label: "Stage 3 (Severe)", img: "/images/stages/male-3.svg" },
    ],
    female: [
      { id: 0, label: "Stage 1 (Mild)", img: "/images/stages/female-1.svg" },
      { id: 1, label: "Stage 2 (Moderate)", img: "/images/stages/female-2.svg" },
      { id: 2, label: "Stage 3 (Severe)", img: "/images/stages/female-3.svg" },
    ],
    other: [
      { id: 0, label: "Stage 1", img: "/images/stages/other-1.svg" },
      { id: 1, label: "Stage 2", img: "/images/stages/other-2.svg" },
      { id: 2, label: "Stage 3", img: "/images/stages/other-3.svg" },
    ],
  };

  const gender = form.gender || "male";
  const stageImages = stageData[gender];

  // UI
  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <main className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between mb-4 text-sm text-gray-500">
          {step > 0 ? <button onClick={prev}>← Previous</button> : <span />}
          <Link href="/">Exit</Link>
        </div>

        <ProgressTabs step={step} />

        <div className="bg-white mt-6 rounded-2xl shadow p-6">

          {/* STEP 0 — ABOUT YOU */}
          {step === 0 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8">Tell us about you</h2>

              {/* Name */}
              <div className="mb-4">
                <label className="font-medium">Full Name</label>
                <input
                  className="w-full border px-3 py-2 rounded mt-1"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="font-medium">Phone Number</label>
                <input
                  className="w-full border px-3 py-2 rounded mt-1"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Age */}
              <div className="mb-4">
                <label className="font-medium">Age</label>
                <input
                  type="number"
                  className="w-full border px-3 py-2 rounded mt-1"
                  value={form.age}
                  onChange={(e) => updateField("age", e.target.value)}
                />
                {errors.age && (
                  <p className="text-red-600 text-sm mt-1">{errors.age}</p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="font-medium">Gender</label>
                <div className="flex gap-3 mt-2">
                  {["male", "female", "other"].map((g) => (
                    <button
                      key={g}
                      onClick={() => updateField("gender", g)}
                      className={`px-5 py-2 rounded ${
                        form.gender === g ? "bg-emerald-400" : "bg-gray-100"
                      }`}
                    >
                      {g.toUpperCase()}
                    </button>
                  ))}
                </div>
                {errors.gender && (
                  <p className="text-red-600 text-sm mt-1">{errors.gender}</p>
                )}
              </div>
            </>
          )}

          {/* STEP 1 — HAIR HEALTH */}
          {step === 1 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8">Hair Health</h2>

              {/* Stage Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stageImages.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => updateField("stage", s.id)}
                    className={`rounded-xl border p-4 cursor-pointer ${
                      form.stage === s.id
                        ? "ring-2 ring-emerald-400"
                        : "border-gray-200"
                    }`}
                  >
                    <img src={s.img} className="w-full mb-3" />
                    <p className="font-medium">{s.label}</p>
                  </div>
                ))}
              </div>

              {errors.stage && (
                <p className="text-red-600 text-sm mt-2">{errors.stage}</p>
              )}

              {/* Hair Questions */}
              <div className="mt-6 space-y-6">
                {hairQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q.q}
                    options={q.options}
                    value={form.hair[q.id]}
                    onChange={(v) => updateNested("hair", q.id, v)}
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 2 — INTERNAL HEALTH */}
          {step === 2 && (
            <>
              <h2 className="text-4xl text-center font-bold mb-8">Internal Health</h2>

              <div className="space-y-6">
                {internalQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q.q}
                    options={q.options}
                    value={form.internal[q.id]}
                    onChange={(v) => updateNested("internal", q.id, v)}
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 3 — SCALP PHOTO */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-4">
                Upload your scalp picture
              </h2>

              <PhotoUploader
                file={form.scalpPhoto}
                onChange={(file) => updateField("scalpPhoto", file)}
              />

              {errors.scalpPhoto && (
                <p className="text-red-600 text-sm mt-2">{errors.scalpPhoto}</p>
              )}
            </>
          )}

          {/* BUTTONS */}
          <div className="flex justify-end mt-6">
            {step < 3 ? (
              <button
                onClick={next}
                className="px-6 py-2 bg-emerald-600 text-white rounded"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={submit}
                className="px-6 py-2 bg-indigo-600 text-white rounded"
              >
                Submit Assessment
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

