"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaStar,
  FaRocket,
  FaHeart,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  message: string;
};

// Initialize EmailJS with your PUBLIC key
emailjs.init("5m45IzjeBEvmngDG9");

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  // Debug: Check if environment variables are loaded
  useEffect(() => {
    console.log("📧 EmailJS Configuration:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Use CORRECT values
      const serviceId = "service_g2fyp4k";
      const templateId = "template_7ljzhyf"; // CORRECT TEMPLATE ID
      const publicKey = "5m45IzjeBEvmngDG9";

      console.log("📤 Sending email with:", data);

      // Get first letter for avatar
      const firstLetter = data.name.charAt(0).toUpperCase();

      // Simple timestamp
      const time = new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const year = new Date().getFullYear().toString();

      // IMPORTANT: Use the exact variable names from your EmailJS template
      // Based on your template, it should be: {{name}}, {{email}}, {{message}}, {{time}}, {{year}}
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
        time: time,
        year: year,
        reply_to: data.email,
        // Also include common alternative names for compatibility
        from_name: data.name,
        from_email: data.email,
        to_name: "Ali Haider",
      };

      console.log("📝 Template parameters:", templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("✅ Email sent successfully:", response);

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });
      reset();
    } catch (error: any) {
      console.error("❌ Error sending email:", error);

      let errorMessage = "Failed to send message. ";

      if (error.text) {
        errorMessage += `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage += error.message;
      }

      errorMessage +=
        " Please try again or email me directly at alihaidercs17@gmail.com";

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Test with CORRECT template ID
  const testEmailJS = async () => {
    try {
      console.log("🧪 Testing EmailJS...");

      const testParams = {
        name: "Test User",
        email: "test@example.com",
        message: "This is a test message from the contact form",
        time: new Date().toLocaleString(),
        year: new Date().getFullYear().toString(),
        reply_to: "test@example.com",
        from_name: "Test User",
        from_email: "test@example.com",
        to_name: "Ali Haider",
      };

      const result = await emailjs.send(
        "service_g2fyp4k", // Service ID
        "template_7ljzhyf", // CORRECT Template ID
        testParams,
        "5m45IzjeBEvmngDG9" // Public Key
      );

      console.log("✅ Test successful!", result);
      alert("✅ Test email sent successfully! Check your inbox.");
    } catch (error: any) {
      console.error("❌ Test failed:", error);

      let alertMessage = "Test failed: ";
      if (error.text) {
        alertMessage += error.text;
      } else if (error.message) {
        alertMessage += error.message;
      }

      alert(alertMessage);
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "alihaidercs17@gmail.com",
      href: "mailto:alihaidercs17@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "HadiKhan007",
      href: "https://github.com/HadiKhan007",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Ali Haider",
      href: "https://www.linkedin.com/in/alihaider17/",
      color: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 opacity-10">
          <FaRocket className="text-purple-400 text-8xl float-animation" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <FaHeart
            className="text-pink-400 text-7xl float-animation"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <FaStar
            className="text-yellow-400 text-6xl float-animation"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        {/* Debug button - remove in production */}
        <button
          onClick={testEmailJS}
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm z-50"
          style={{
            display: process.env.NODE_ENV === "development" ? "block" : "none",
          }}
        >
          Test EmailJS
        </button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <FaPaperPlane className="text-purple-400" />
            <span className="text-purple-300 font-medium">Get In Touch</span>
            <FaPaperPlane className="text-purple-400" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s collaborate and create
            something extraordinary together. I&apos;m always excited to work on
            innovative projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">Contact Information</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                  <div className="relative glass-dark rounded-2xl p-6 hover-lift">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${method.color} pulse-glow`}
                      >
                        <method.icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {method.title}
                        </h3>
                        <a
                          href={method.href}
                          target={
                            method.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
                        >
                          {method.value}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative glass-dark rounded-2xl p-6 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                    <FaRocket className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Quick Response
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond to messages within 24 hours. Whether you
                  have a project idea, collaboration opportunity, or just want
                  to connect, I&apos;m here to help bring your vision to life.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

            <div className="relative glass-dark rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <FaPaperPlane className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Send a Message
                </h2>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/30 text-green-300"
                      : "bg-red-500/20 border border-red-500/30 text-red-300"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                  ) : (
                    <FaExclamationTriangle className="text-red-400 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-4 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-4 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-4 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 hover-lift pulse-glow ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed opacity-50"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  } text-white`}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>

              {/* Fallback message */}
              {submitStatus.type === "error" && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <p className="text-red-300 text-sm text-center">
                    If the form isn't working, please email me directly at{" "}
                    <a
                      href="mailto:alihaidercs17@gmail.com"
                      className="text-white font-semibold underline hover:text-purple-300"
                    >
                      alihaidercs17@gmail.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
