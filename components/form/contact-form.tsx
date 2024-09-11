"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  RadioGroup,
  RadioGroupItem,
  Input,
  Label,
  Checkbox,
  Textarea,
  Button,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, contactFormSchema } from "@/lib/form-validation";
import submitForm from "@/lib/send";
import { useToast } from "../hooks/use-toast";
import { useRouter } from "next/navigation";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Contact2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactForm = (props: Contact2Props) => {
  const { tagline, heading, description, button } = {
    ...Contact2Defaults,
    ...props,
  } as Props;

  const router = useRouter();

  const { toast } = useToast();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      phone: undefined,
      position: undefined,
      subject: undefined,
      message: undefined,
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const subjectItems = [
    {
      value: "first-choice",
      label: "I am an existing client and I have a concern",
    },
    { value: "second-choice", label: "Payment or Invoicing concern" },
    { value: "third-choice", label: "General support request" },
    { value: "fourth-choice", label: "I have a unique requirements" },
    { value: "fifth-choice", label: "Others" },
  ];

  const roleItems = [
    { value: "first-choice", label: "Director" },
    { value: "second-choice", label: "CEO / Owner / President" },
    { value: "third-choice", label: "Head of Recruitment" },
    { value: "fourth-choice", label: "Recruiter" },
    { value: "fifth-choice", label: "Account Manager" },
    { value: "other", label: "Other" },
  ];

  const onSubmitForm: SubmitHandler<ContactFormSchema> = async (data) => {
    const { success, errors } = await submitForm(data);

    if (errors) {
      toast({
        variant: "destructive",
        title: "Failed to submit",
        description: errors.message,
      });
      return;
    }

    if (success) {
      toast({
        variant: "success",
        title: "Success!",
        description: success,
      });
      reset();
      setValue("position", "");
      setValue("subject", "");
      setTimeout(() => router.push("/contact-us/thank-you"), 3000);
    }
  };

  return (
    <section
      id="contact_form_container"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <form
          id="contact_form"
          className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="grid w-full items-center">
            <Label htmlFor="fullName" className="mb-2">
              Full Name
            </Label>
            <Input {...register("name")} className="rounded-lg" />
            <p className="text-red-500 font-medium text-xs mt-2">
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input {...register("email")} className="rounded-lg" />
              <p className="text-red-500 font-medium text-xs mt-2">
                {errors.email && errors.email.message}
              </p>
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number
              </Label>
              <Input {...register("phone")} className="rounded-lg" />
              <p className="text-red-500 font-medium text-xs mt-2">
                {errors.phone && errors.phone.message}
              </p>
            </div>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2">Choose a topic</Label>
            <Select
              {...register("subject")}
              onValueChange={(value) => setValue("subject", value)}
            >
              <SelectTrigger className="rounded-lg bg-white">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                {subjectItems.map((item, index) => (
                  <SelectItem key={index} value={item.label}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-red-500 font-medium text-xs mt-2">
              {errors.subject && errors.subject.message}
            </p>
          </div>

          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Which best describes you?</Label>
            <Select
              {...register("position")}
              onValueChange={(value) => setValue("position", value)}
            >
              <SelectTrigger className="rounded-lg bg-white">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                {roleItems.map((item, index) => (
                  <SelectItem key={index} value={item.label}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-red-500 font-medium text-xs mt-2">
              {errors.position && errors.position.message}
            </p>
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              {...register("message")}
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto rounded-lg"
            />
            <p className="text-red-500 font-medium text-xs mt-2">
              {errors.message && errors.message.message}
            </p>
          </div>

          <div className="text-center">
            <Button
              {...button}
              className="bg-deepBlue rounded-lg w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading" : button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact2Defaults: Contact2Props = {
  tagline: "",
  heading: "",
  description: "",
  button: { title: "Submit" },
};
