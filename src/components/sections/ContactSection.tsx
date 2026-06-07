"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { FiMapPin, FiPhone, FiClock, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call to backend/Supabase
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log("Form submitted to backend:", data);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible."
      });

      reset();
    } catch {
      toast.error("Failed to send message. Please try again or call us.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white w-full">
      <div className="max-w-[1600px] w-[96%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary">Contact Us</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-1">Our Location</h4>
                    <p className="text-gray-600 mb-2">Sri Senthil Spares & Services,<br />Thalayari Street, Pattukkottai, Tamil Nadu 614601</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Sri+Senthil+Spares+and+Services,+Thalayari+St,+near+state+bank+of+India,+opposite+to+Sun+electronics,+Nadimuthu+Nagar,+Pattukkottai,+Tamil+Nadu+614601" target="_blank" rel="noreferrer" className="text-primary font-semibold hover:underline">Open in Google Maps</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-1">Phone Number</h4>
                    <a href="tel:+919443631389" className="text-gray-600 hover:text-primary transition-colors">+91 94436 31389</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#25D366]/10 p-4 rounded-full text-[#25D366]">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-1">WhatsApp</h4>
                    <a href="https://wa.me/918667264983" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">+91 86672 64983</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:30 AM - 9:30 PM<br />Sunday: 9:30 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 relative border border-gray-100">
              <iframe
                src="https://maps.google.com/maps?q=10.42376,79.31642(Sri+Senthil+Spares+%26+Services)&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12">
              <h4 className="text-2xl font-bold text-secondary mb-8">Send Us A Message</h4>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50`}
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Required</label>
                  <select
                    id="service"
                    {...register("service")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50 text-gray-700`}
                  >
                    <option value="">Select a service</option>
                    <option value="Motor Repair">Motor Repair</option>
                    <option value="Fan Service">Fan Service</option>
                    <option value="Mixer Grinder Repair">Mixer Grinder Repair</option>
                    <option value="Submersible & Mixie Service">Submersible & Mixie Service</option>
                    <option value="Other">Other / Spares</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">How can we help?</label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50/50 resize-none`}
                    placeholder="Describe the issue with your appliance..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : (
                    <>Send Message <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
