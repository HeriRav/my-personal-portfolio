"use client";

import { useScopedI18n } from "@/locales/client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const MAX_WORDS = 500;

export default function ContactForm() {
  const contactT = useScopedI18n("contact");

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const [loading, setLoading] = useState(false);
  const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const nextValue =
      name === "message" &&
      value.trim().split(/\s+/).filter(Boolean).length > MAX_WORDS
        ? value
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, MAX_WORDS)
            .join(" ")
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
  };

  const notifySuccess = () => {
    toast.success(contactT("toast.success"), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const notifyFailure = () => {
    toast.error(contactT("toast.error"), {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      toast.warn(contactT("toast.warn.empty_fields"), {
        position: "top-center",
      });
      return;
    }

    // Vérification du format email
    if (!emailRegex.test(formData.email)) {
      toast.warn(contactT("toast.warn.invalid_email"), {
        position: "top-center",
      });
      return;
    }

    setLoading(true);

    // Configuration EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_tel: formData.phone,
          message: formData.message,
        },
        publicKey,
      );

      notifySuccess();

      // Réinitialisation après succès
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending email:", error);

      notifyFailure();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <div className="w-full min-w-0 max-w-125 bg-transparent rounded-[30px] px-8 py-9 sm:px-9 sm:py-10">
        <form onSubmit={handleSubmit} className="min-w-0 space-y-4">
          {/* Full name */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-[12px] text-foreground">
              {contactT("form.name")}
            </Label>

            <Input
              id="name"
              type="text"
              name="name"
              placeholder={contactT("form.name_placeholder")}
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className="h-11 rounded-none bg-[#f7f8f9] dark:bg-[#28292a] border-0 border-b border-[#0f0f0f] dark:border-[#dedede] px-0 text-sm shadow-none focus-visible:border-primary focus-visible:ring-0"
            />
          </div>

          {/* Phone number */}
          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-[12px] text-foreground">
              {contactT("form.phone")}
            </Label>

            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder={contactT("form.phone_placeholder")}
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
              className="h-11 rounded-none bg-[#f7f8f9] dark:bg-[#28292a] border-0 border-b border-[#0f0f0f] dark:border-[#dedede] px-0 text-sm shadow-none focus-visible:border-primary focus-visible:ring-0"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-[12px] text-foreground">
              {contactT("form.email")}
            </Label>

            <Input
              id="email"
              type="email"
              name="email"
              placeholder={contactT("form.email_placeholder")}
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="h-11 rounded-none bg-[#f7f8f9] dark:bg-[#28292a] border-0 border-b border-[#0f0f0f] dark:border-[#dedede] px-0 text-sm shadow-none focus-visible:border-primary focus-visible:ring-0"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-[12px] text-foreground">
              {contactT("form.message")}
            </Label>

            <Textarea
              id="message"
              name="message"
              placeholder={contactT("form.message_placeholder")}
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              rows={6}
              className="w-full min-w-0 max-w-full min-h-30 max-h-30 overflow-y-auto rounded-none bg-[#f7f8f9] dark:bg-[#28292a] border-0 border-b border-[#0f0f0f] dark:border-[#dedede] px-0 text-sm shadow-none focus-visible:border-primary focus-visible:ring-0 resize-none "
            />
            <p className="text-right text-xs text-muted-foreground">
              {wordCount}/{MAX_WORDS} {contactT("form.word_count")}
            </p>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11.25 mt-1 bg-primary hover:bg-primary/90 active:scale-[0.99] rounded-[14px] text-sm font-medium text-foreground transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? contactT("form.loading") : contactT("form.submit")}
          </Button>
        </form>
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
}
