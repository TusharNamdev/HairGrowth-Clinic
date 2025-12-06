"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { registerAppointment, verifyAppointmentOtp, clearApiState } from "@/redux/slices/appointmentSlice";
import AppointmentSelector from "@/components/AppointmentSelector";
import {
    User,
    Mail,
    Phone,
    MapPin,
    HeartPulse,
    ChevronDown,
} from "lucide-react";

export default function AppointmentForm() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { loading, error, registerAppointmentSuccess, verifyAppointmentSuccess, appointmentId } = useSelector(
        (state) => state.appointment
    );

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        region: "",
        disease: "",
    });

    const [openDropdown, setOpenDropdown] = useState(null);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPlanSelector, setShowPlanSelector] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const dropdownRef = useRef(null);
    const recaptchaRef = useRef(null);

    /* RESET STATE ON MOUNT */
    useEffect(() => {
        setSelectedPlan(null);
        setErrors({});
        setShowOtpModal(false);
        setOtp("");
        setOtpSent(false);
        dispatch(clearApiState());
    }, [dispatch]);

    /* HANDLE CLICK OUTSIDE */
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Initialize Recaptcha
    useEffect(() => {
        if (!recaptchaRef.current) {
            recaptchaRef.current = new RecaptchaVerifier(
                "recaptcha-container-appointment",
                { size: "invisible" },
                auth
            );
        }
    }, []);


    // Handle verify appointment success → close modal, show plan selector
    useEffect(() => {
        if (verifyAppointmentSuccess) {
            setShowOtpModal(false);
            setShowPlanSelector(true);
        }
    }, [verifyAppointmentSuccess]);

    // Handle errors
    useEffect(() => {
        if (error) {
            console.log("Appointment error occurred:", error);
            // Only alert if we are in the appointment flow (showPlanSelector or showOtpModal)
            if (showPlanSelector || showOtpModal) {
                alert(error);
            }
            dispatch(clearApiState());
        }
    }, [error, dispatch, showPlanSelector, showOtpModal]);

    // Send OTP via Firebase
    async function sendOtp() {
        console.log("sendOtp called from:", typeof window !== "undefined" ? window.location.pathname : "server");
        try {
            if (!registerAppointmentSuccess) {
                alert("Registration not complete. Please wait.");
                return;
            }

            if (!recaptchaRef.current) {
                alert("Recaptcha not ready! Try again.");
                return;
            }

            // Validate phone number
            const cleanPhone = form.phone.replace(/\D/g, ''); // Remove non-digits
            if (cleanPhone.length !== 10) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            const phone = "+91" + cleanPhone;
            console.log("Sending OTP to phone:", phone);
            const result = await signInWithPhoneNumber(auth, phone, recaptchaRef.current);

            setConfirmationResult(result);
            setOtpSent(true);
            console.log("OTP sent successfully");
        } catch (err) {
            console.log("SEND OTP ERROR:", err);
            console.log("Error code:", err.code);
            console.log("Error message:", err.message);
            alert("OTP sending failed. Try again.");
        }
    }

    // Verify OTP
    async function verifyOtp() {
        console.log("verifyOtp called from:", typeof window !== "undefined" ? window.location.pathname : "server");
        try {
            if (!confirmationResult) {
                alert("OTP expired. Please resend.");
                return;
            }

            console.log("Verifying OTP:", otp);
            // Confirm OTP with Firebase
            await confirmationResult.confirm(otp);

            // Get Firebase ID token
            const idToken = await auth.currentUser.getIdToken();
            console.log("Firebase verification successful, dispatching backend verify");

            // Dispatch verify action
            dispatch(
                verifyAppointmentOtp({
                    phone: form.phone,
                    idToken: idToken,
                    appointmentId: appointmentId,
                })
            );
        } catch (err) {
            console.log("VERIFY ERROR", err);
            console.log("Error code:", err.code);
            console.log("Error message:", err.message);
            alert("Invalid OTP");
        }
    }

    function validateForm() {
        let err = {};

        if (!form.name.trim()) err.name = "Name is required";
        if (!form.email.trim()) err.email = "Email is required";
        if (!form.phone.trim()) err.phone = "Phone is required";
        if (!form.region) err.region = "Region is required";
        if (!form.disease) err.disease = "Condition is required";

        setErrors(err);
        return Object.keys(err).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validateForm()) return;

        dispatch(registerAppointment({
            name: form.name,
            email: form.email,
            phone: form.phone,
            region: form.region,
            condition: form.disease,
        }));
        setShowOtpModal(true);
    }

    const diseaseCategories = [
        "Hair Fall",
        "Respiratory",
        "Skin Disorders",
        "Gastrointestinal",
        "Mental & Emotional Health",
        "Musculoskeletal",
        "ENT Problems",
        "Women’s Health",
        "Children’s Health",
        "Chronic Conditions",
        "Lifestyle-Related Problems",
        "Obesity",
    ];

    const regionList = [
        "India",
        "Asia",
        "Europe, Australia",
        "USA, Canada",
        "South America, Africa",
    ];

    const fade = {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
    };


    return (
        <motion.div
            {...fade}
            id="appointment-form"
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-card/70 backdrop-blur-xl border border-border shadow-lg rounded-3xl p-6 md:p-8 mt-10"
            ref={dropdownRef}
        >
            <div id="recaptcha-container-appointment"></div>
            {/* HEADER */}
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground flex justify-center gap-2">
                    <HeartPulse className="text-primary" /> Book an <span className="text-primary">Online</span>Appointment
                </h2>
                <p className="text-muted-foreground mt-2">
                    Get a consultation with our doctor within 24 hours.
                </p>
            </div>

            {!showPlanSelector && (
                <form onSubmit={handleSubmit}>
                    {/* FORM GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">

                {/* NAME */}
                <div>
                    <InputField
                        icon={<User size={18} className="text-primary" />}
                        label="Name"
                        name="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                        }}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                    <InputField
                        icon={<Mail size={18} className="text-primary" />}
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                        }}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div>
                    <InputField
                        icon={<Phone size={18} className="text-primary" />}
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="9999999999"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, phone: e.target.value }));
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                        }}
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* REGION DROPDOWN */}
                <div className="flex flex-col relative">
                    <label className="text-sm font-medium text-foreground mb-1">
                        Region
                    </label>

                    <button
                        type="button"
                        onClick={() =>
                            setOpenDropdown(openDropdown === "region" ? null : "region")
                        }
                        className="flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground"
                    >
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-primary" />
                            {form.region || "Select Region"}
                        </div>
                        <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN BOX */}
                    {openDropdown === "region" && (
                        <DropdownShell>
                            {regionList.map((r) => (
                              <div
                                key={r}
                                onClick={() => {
                                  setForm({ ...form, region: r });
                                  setOpenDropdown(null);
                                  if (errors.region) setErrors(prev => ({ ...prev, region: undefined }));
                                }}
                                className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm"
                              >
                                {r}
                              </div>
                            ))}
                        </DropdownShell>
                    )}

                    {errors.region && <p className="text-red-600 text-sm mt-1">{errors.region}</p>}
                </div>

                {/* DISEASE DROPDOWN */}
                <div className="md:col-span-2 flex flex-col relative">
                    <label className="text-sm font-medium text-foreground mb-1">
                        Condition
                    </label>

                    <button
                        type="button"
                        onClick={() =>
                            setOpenDropdown(openDropdown === "disease" ? null : "disease")
                        }
                        className="flex items-center justify-between bg-background border border-border px-3 py-3 rounded-xl w-full text-foreground"
                    >
                        {form.disease || "Select Condition"}
                        <ChevronDown size={16} />
                    </button>

                    {/* DROPDOWN BOX */}
                    {openDropdown === "disease" && (
                        <DropdownShell>
                            {diseaseCategories.map((d) => (
                              <div
                                key={d}
                                onClick={() => {
                                  setForm({ ...form, disease: d });
                                  setOpenDropdown(null);
                                  if (errors.disease) setErrors(prev => ({ ...prev, disease: undefined }));
                                }}
                                className="px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm"
                              >
                                {d}
                              </div>
                            ))}
                        </DropdownShell>
                    )}

                    {errors.disease && <p className="text-red-600 text-sm mt-1">{errors.disease}</p>}
                </div>
            </div>

                    {/* CTA BUTTON */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition disabled:opacity-50"
                        >
                            {loading ? "Processing..." : "Next Step"}
                        </button>
                    </div>
                </form>
            )}

            {/* PLAN SELECTOR */}
                {showPlanSelector && (
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-center mb-6">Choose Your Appointment Plan</h3>
                        <AppointmentSelector
                            selectedPlan={selectedPlan}
                            onSelect={(plan) => {
                                setSelectedPlan(plan.id);
                                const data = {
                                    amount: plan.price,
                                    appointmentId: appointmentId,
                                    timestamp: Date.now()
                                };
                                localStorage.setItem("appointmentData", JSON.stringify(data));
                            }}
                        />
                        {selectedPlan && (
                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={() => {
                                        setShowPlanSelector(false);
                                        router.push("/payment-method");
                                    }}
                                    className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        )}
                    </div>
                )}

            {/* OTP MODAL */}
            {showOtpModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-card p-6 rounded-2xl shadow-lg max-w-sm w-full mx-4">
                        <h3 className="text-lg font-semibold text-center mb-4">Verify Your Phone</h3>
                        <p className="text-center text-muted-foreground mb-4">
                            OTP will be sent to +91 {form.phone}
                        </p>
                        {!otpSent ? (
                            <button
                                onClick={sendOtp}
                                disabled={loading || !registerAppointmentSuccess}
                                className="w-full px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/80 transition disabled:opacity-50 mb-4"
                            >
                                {loading ? "Sending OTP..." : "Send OTP"}
                            </button>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    className="w-full border border-border bg-background px-3 py-2 rounded text-foreground text-center text-lg mb-4"
                                    placeholder="Enter 6-digit OTP"
                                    value={otp}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                                        if (value.length <= 6) {
                                            setOtp(value);
                                        }
                                    }}
                                    maxLength={6}
                                />
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setShowOtpModal(false)}
                                        className="flex-1 px-4 py-2 rounded-xl border border-border hover:bg-secondary/15 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={verifyOtp}
                                        disabled={loading}
                                        className="flex-1 px-4 py-2 rounded-xl bg-accent text-accent-foreground hover:bg-accent/80 transition disabled:opacity-50"
                                    >
                                        {loading ? "Verifying..." : "Verify"}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    );
}

/* INPUT FIELD */
function InputField({ icon, label, name, setForm, value, onChange, ...rest }) {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-medium text-foreground mb-1">
                {label}
            </label>
            <div className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-xl">
                {icon}
                <input
                    name={name}
                    value={value}
                    onChange={onChange || ((e) => setForm((prev) => ({ ...prev, [name]: e.target.value })))}
                    className="bg-transparent w-full outline-none text-foreground"
                    {...rest}
                />
            </div>
        </div>
    );
}

/* DROPDOWN SHELL */
function DropdownShell({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="
            absolute top-full left-0 
            mt-2 z-40 w-full 
            bg-card/90 backdrop-blur-xl 
            border border-border 
            rounded-2xl shadow-xl 
            p-2 
            max-h-48 overflow-y-auto
            "
        >
            {children}
        </motion.div>
    );
}

