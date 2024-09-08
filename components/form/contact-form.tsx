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

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput,
      selectedItem,
      selectedRadio,
      messageInput,
      acceptTerms,
    });
  };

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
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                value={firstNameInput}
                className="rounded-lg"
                onChange={(e) => setFirstNameInput(e.target.value)}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                value={lastNameInput}
                className="rounded-lg"
                onChange={(e) => setLastNameInput(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={emailInput}
                className="rounded-lg"
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>

            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number
              </Label>
              <Input
                type="text"
                id="phone"
                value={phoneInput}
                className="rounded-lg"
                onChange={(e) => setPhoneInput(e.target.value)}
              />
            </div>
          </div>

          <div className="grid w-full items-center">
            <Label className="mb-2">Choose a topic</Label>
            <Select onValueChange={setSelectedItem}>
              <SelectTrigger className="rounded-lg bg-white">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                {subjectItems.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Which best describes you?</Label>
            <Select onValueChange={setSelectedItem}>
              <SelectTrigger className="rounded-lg bg-white">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                {roleItems.map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto rounded-lg"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div className="text-center">
            <Button {...button} className="bg-deepBlue rounded-lg w-full">
              {button.title}
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
