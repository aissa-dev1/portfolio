"use client";

import { useState } from "react";

import styles from "./ContactForm.module.css";

import { Input } from "../Input";
import { Button } from "../Button";
import { P, TypographyVariant } from "../Typography";

import { sendMail } from "@/lib/actions/send-mail";

interface Props {}

const DEFAULT_FORM_DATA = {
  name: "",
  email: "",
  message: "",
  pending: false,
  error: "",
  successMessage: "",
};

const ContactForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  function updateFormDataProp(e: React.FocusEvent<HTMLInputElement, Element>) {
    setFormData((prev) => ({
      ...prev,
      error: "",
      successMessage: "",
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setFormData((prev) => ({
        ...prev,
        error: "Email and message are required fields.",
      }));
      return;
    }

    try {
      setFormData((prev) => ({ ...prev, pending: true }));
      await sendMail({
        name: formData.name,
        email: formData.email,
        sendTo: process.env.NEXT_PUBLIC_SEND_MAIL_EMAIL,
        text: formData.message,
      });
      setFormData({
        ...DEFAULT_FORM_DATA,
        successMessage:
          "Thanks for reaching out! We'll get back to you shortly.",
      });
    } catch (error) {
      setFormData((prev) => ({
        ...prev,
        error: "We couldn't send your message. Please try again later.",
      }));
    } finally {
      setFormData((prev) => ({ ...prev, pending: false }));
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={updateFormDataProp}
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={updateFormDataProp}
        required
      />
      <Input
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={updateFormDataProp}
        required
      />
      {formData.error && (
        <P variant={TypographyVariant.Error}>{formData.error}</P>
      )}
      {formData.successMessage && (
        <P variant={TypographyVariant.Primary}>{formData.successMessage}</P>
      )}
      <Button type="submit" disabled={formData.pending}>
        Send message
      </Button>
    </form>
  );
};

export { ContactForm };
