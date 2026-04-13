"use client";

import GeneralLayout from "@/components/Layouts/GeneralLayout";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { Button, Input, Textarea, Select, SelectItem, Link } from "@nextui-org/react";
import { FiBriefcase, FiMail, FiUser, FiPhone, FiFileText, FiMapPin } from "react-icons/fi";

const POSITIONS = [
  "software_engineer",
  "frontend_developer",
  "backend_developer",
  "ui_ux_designer",
  "product_manager",
  "marketing_specialist",
  "business_development",
  "data_analyst",
  "intern",
  "other",
] as const;

export default function HiringPage() {
  const t = useTranslations("hiring");
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    resumeLink: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to API endpoint
      const res = await fetch("/api/hiring", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // Silently handle - the form shows a generic message
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <GeneralLayout>
        <div className="max-w-2xl mx-auto py-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("successTitle")}</h2>
          <p className="text-lg text-gray-600 mb-8">{t("successMessage")}</p>
          <Button
            as={Link}
            href={`/${locale}`}
            color="primary"
            variant="bordered"
            size="lg"
          >
            {t("backToHome")}
          </Button>
        </div>
      </GeneralLayout>
    );
  }

  return (
    <GeneralLayout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Why Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(["innovation", "growth", "culture"] as const).map((key) => (
            <div
              key={key}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {key === "innovation" && (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
                {key === "growth" && (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
                {key === "culture" && (
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(`benefits.${key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`benefits.${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Signup Form */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("formTitle")}</h2>
          <p className="text-gray-500 mb-8">{t("formSubtitle")}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label={t("fields.name")}
                placeholder={t("placeholders.name")}
                value={formData.name}
                onValueChange={(v) => handleChange("name", v)}
                startContent={<FiUser className="text-gray-400" />}
                isRequired
                variant="bordered"
              />
              <Input
                label={t("fields.email")}
                placeholder={t("placeholders.email")}
                type="email"
                value={formData.email}
                onValueChange={(v) => handleChange("email", v)}
                startContent={<FiMail className="text-gray-400" />}
                isRequired
                variant="bordered"
              />
              <Input
                label={t("fields.phone")}
                placeholder={t("placeholders.phone")}
                type="tel"
                value={formData.phone}
                onValueChange={(v) => handleChange("phone", v)}
                startContent={<FiPhone className="text-gray-400" />}
                variant="bordered"
              />
              <Select
                label={t("fields.position")}
                placeholder={t("placeholders.position")}
                selectedKeys={formData.position ? [formData.position] : []}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;
                  handleChange("position", selected || "");
                }}
                startContent={<FiBriefcase className="text-gray-400" />}
                isRequired
                variant="bordered"
              >
                {POSITIONS.map((pos) => (
                  <SelectItem key={pos}>{t(`positions.${pos}`)}</SelectItem>
                ))}
              </Select>
              <Input
                label={t("fields.location")}
                placeholder={t("placeholders.location")}
                value={formData.location}
                onValueChange={(v) => handleChange("location", v)}
                startContent={<FiMapPin className="text-gray-400" />}
                variant="bordered"
              />
              <Input
                label={t("fields.resumeLink")}
                placeholder={t("placeholders.resumeLink")}
                value={formData.resumeLink}
                onValueChange={(v) => handleChange("resumeLink", v)}
                startContent={<FiFileText className="text-gray-400" />}
                variant="bordered"
              />
            </div>

            <Textarea
              label={t("fields.message")}
              placeholder={t("placeholders.message")}
              value={formData.message}
              onValueChange={(v) => handleChange("message", v)}
              minRows={4}
              variant="bordered"
            />

            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full md:w-auto px-12"
              isLoading={isSubmitting}
            >
              {t("submit")}
            </Button>
          </form>
        </div>
      </div>
    </GeneralLayout>
  );
}
