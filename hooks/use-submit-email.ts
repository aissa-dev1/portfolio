"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { validateEmail } from "@/utils/validate-email";

interface Data {
  name: string;
  email: string;
  text: string;
  notARobot: boolean;
  loading: boolean;
}

export function useSubmitEmail() {
  const { toast } = useToast();
  const [submitEmailData, setSubmitEmailData] = useState<Data>({
    name: "",
    email: "",
    text: "",
    notARobot: false,
    loading: false,
  });

  async function submitEmail() {
    if (submitEmailData.loading) return;
    if (!submitEmailData.name) {
      toast({
        title: "Failed to send email",
        description: "Name is required",
        variant: "destructive",
      });
      return;
    }
    if (!submitEmailData.email) {
      toast({
        title: "Failed to send email",
        description: "Email is required",
        variant: "destructive",
      });
      return;
    }
    if (!submitEmailData.text) {
      toast({
        title: "Failed to send email",
        description: "Text is required",
        variant: "destructive",
      });
      return;
    }
    if (!validateEmail(submitEmailData.email)) {
      toast({
        title: "Failed to send email",
        description: "Please use a valid Email format",
        variant: "destructive",
      });
      return;
    }
    if (!submitEmailData.notARobot) {
      toast({
        title: "Failed to send email",
        description: "Robots are not allowed to send Emails",
        variant: "destructive",
      });
      return;
    }

    try {
      setSubmitEmailData((prev) => ({ ...prev, loading: true }));
      const emailRes = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          user_name: submitEmailData.name,
          user_email: submitEmailData.email,
          message: submitEmailData.text,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string }
      );
      toast({
        title: "Email sent successfully",
        description: emailRes.text,
      });
      setSubmitEmailData((prev) => ({
        ...prev,
        name: "",
        email: "",
        text: "",
        notARobot: false,
        loading: false,
      }));
    } catch (error: any) {
      toast({
        title: "Failed to send email",
        description: error,
        variant: "destructive",
      });
      setSubmitEmailData((prev) => ({ ...prev, loading: false }));
    }
  }

  return { submitEmailData, setSubmitEmailData, submitEmail };
}
