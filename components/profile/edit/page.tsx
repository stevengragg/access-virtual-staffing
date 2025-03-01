"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editProfileSchema,
  EditProfileSchema,
} from "@/services/user/update-profile";
import { useFieldArray, useForm } from "react-hook-form";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/ui/date-picker";
import { useProfileDetails } from "@/context/profile-details-context";
import { useEffect, useState } from "react";

interface EditProfile {}

export default function EditProfile({}: EditProfile) {
  const profileDetailsForm = useProfileDetails();
  const { user } = useUser();

  const [hasError, setHasError] = useState(false)
  const {
    fields: phoneFields,
    append: addPhone,
    remove: removePhone,
  } = useFieldArray({
    control: profileDetailsForm.control,
    name: "phone",
  });

  const {
    fields: emailFields,
    append: addEmail,
    remove: removeEmail,
  } = useFieldArray({
    control: profileDetailsForm.control,
    name: "emailAddress",
  });

  const {
    fields: workSampleFields,
    append: addWorkSample,
    remove: removeWorkSample,
  } = useFieldArray<EditProfileSchema, "workSamples">({
    control: profileDetailsForm.control,
    name: "workSamples",
  });

  const {
    fields: assessmentFields,
    append: addAssessment,
    remove: removeAssessment,
  } = useFieldArray<EditProfileSchema, "assessmentTests">({
    control: profileDetailsForm.control,
    name: "assessmentTests",
  });

  const {
    fields: contentFields,
    append: addContent,
    remove: removeContent,
  } = useFieldArray<EditProfileSchema, "contentLinks">({
    control: profileDetailsForm.control,
    name: "contentLinks",
  });

  const onSubmit = (data: EditProfileSchema) => {
    console.log("Form Data:", data);
  };

  return (
    <Form {...profileDetailsForm}>
      <form
        onSubmit={profileDetailsForm.handleSubmit(onSubmit, (errors) => setHasError(!hasError))}
        className="max-w-3xl mx-auto p-4"
      >
        <div className="grid grid-cols-4 gap-12">
          <FormField
            control={profileDetailsForm.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1">
                  <FormMessage className="text-red-500" />
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Full name"
                    className="col-span-4 xl:col-span-3 border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="col-span-4 grid grid-cols-4 gap-2">
            <Label className="mt-2 col-span-4 xl:col-span-1">
              Profile Picture
            </Label>
            <Image
              src={user?.picture || ""}
              alt="Avatar"
              className="size-20 rounded-full object-cover"
              width={150}
              height={150}
            />
          </div>

          <FormField
            control={profileDetailsForm.control}
            name="whyFit"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  Tell us about your experiences and what makes you best fit for
                  this position. *
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3">
                  <Textarea
                    {...field}
                    placeholder="Tell us about your experiences and what makes you best fit for this position"
                    className="w-full border p-2 rounded h-[150px] border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="whatStrengths"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  What are your strengths? Where do you excel or, at the very
                  least, perform well? *
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3">
                  <Textarea
                    {...field}
                    placeholder="What are your strengths? Where do you excel or, at the very least, perform well?"
                    className="w-full border p-2 rounded h-[150px] border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="whatNeedImprovement"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  What areas do you think you will need improvement? *
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3 space-y-3">
                  <Textarea
                    {...field}
                    placeholder="What areas do you think you will need improvement?"
                    className="w-full border p-2 rounded h-[150px] border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  Address
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3 space-y-3">
                  <Input
                    {...field}
                    type="text"
                    placeholder="Address"
                    className="w-full border p-2 rounded border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="phone"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1">
                  <FormLabel className="mt-2 font-semibold">
                    Contact Numbers
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {phoneFields.map((phone, index) => (
                    <div key={phone.id} className="flex items-start gap-2">
                      {/* Dropdown for Phone Type */}
                      <FormField
                        control={profileDetailsForm.control}
                        name={`phone.${index}.type`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="w-[180px] border-gray-800">
                                <SelectValue placeholder="Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup className="bg-white">
                                  <SelectLabel>Phone Type</SelectLabel>
                                  <SelectItem value="mobile">Mobile</SelectItem>
                                  <SelectItem value="landline">
                                    Landline
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />

                      {/* Input for Phone Number */}
                      <FormField
                        control={profileDetailsForm.control}
                        name={`phone.${index}.number`}
                        render={({ field }) => (
                          <FormItem className="w-full flex flex-col items-start">
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                placeholder="Enter contact number"
                                className="w-full border p-2 rounded border-gray-800"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      {/* Conditional Delete Button */}
                      {phoneFields.length > 1 && (
                        <Button
                          variant="ghost"
                          type="button"
                          onClick={() => removePhone(index)}
                        >
                          X
                        </Button>
                      )}
                    </div>
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addPhone({ type: "", number: "" })}
                  >
                    Add Phone
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="emailAddress"
            render={(f) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  Email Address
                </FormLabel>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {emailFields.map((email, index) => (
                    <FormField
                      key={email.id}
                      control={profileDetailsForm.control}
                      name={`emailAddress.${index}.address`}
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-2">
                            {/* Dropdown for Email Type */}
                            <Select
                              onValueChange={(value) =>
                                profileDetailsForm.setValue(
                                  `emailAddress.${index}.type`,
                                  value
                                )
                              }
                              defaultValue={profileDetailsForm.watch(
                                `emailAddress.${index}.type`
                              )}
                            >
                              <SelectTrigger className="w-[180px] border-gray-800">
                                <SelectValue placeholder="Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup className="bg-white">
                                  <SelectLabel>Email Type</SelectLabel>
                                  <SelectItem value="personal">
                                    Personal
                                  </SelectItem>
                                  <SelectItem value="work">Work</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>

                            {/* Input for Email Address */}
                            <Input
                              {...field}
                              type="email"
                              placeholder="Email Address"
                              className="w-full border p-2 rounded border-gray-800"
                            />

                            {/* Display error message */}

                            {/* Conditional Delete Button */}
                            {emailFields.length > 1 && (
                              <Button
                                variant="ghost"
                                type="button"
                                onClick={() => removeEmail(index)}
                              >
                                X
                              </Button>
                            )}
                          </div>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addEmail({ type: "", address: "" })}
                  >
                    Add Email
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  Date of Birth *
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3">
                  <DatePicker
                    date={field.value}
                    onChange={field.onChange}
                    placeholder="Select your date of birth"
                    className="w-full border-gray-700"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="skypeId"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  Skype ID
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3 space-y-3">
                  <Input
                    {...field}
                    type="text"
                    placeholder="Skype ID"
                    className="w-full border p-2 rounded border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="hasPaypal"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  We pay via PayPal. Do you have a PayPal account?
                </FormLabel>
                <FormControl className="col-span-4 xl:col-span-3">
                  <Select onValueChange={field.onChange} defaultValue={""}>
                    <SelectTrigger className="border-gray-800">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="bg-white">
                        <SelectLabel>Options</SelectLabel>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="numberOfChildren"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  How many children do you have?
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Number of children"
                    type="number"
                    className="col-span-4 xl:col-span-3 border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="assessmentTests"
            render={() => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormLabel className="mt-2 font-semibold">
                    Visit{" "}
                    <a
                      href="https://www.crystalknows.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      https://www.crystalknows.com/
                    </a>{" "}
                    and take the free DISC assessment test. Save the PDF file to
                    your Google Drive and paste the link here.
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {assessmentFields.map((test, index) => (
                    <FormField
                      key={test.id}
                      control={profileDetailsForm.control}
                      name={`assessmentTests.${index}.link`} // Updated to match new schema
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-2">
                            {/* Input for Assessment Test Link */}
                            <FormControl className="w-full">
                              <Input
                                {...field}
                                type="url"
                                placeholder="Paste your assessment test link here"
                                className="w-full border p-2 rounded border-gray-800"
                              />
                            </FormControl>

                            {/* Conditional Delete Button - Hide if only one item */}
                            {assessmentFields.length > 1 && (
                              <Button
                                variant="ghost"
                                type="button"
                                onClick={() => removeAssessment(index)}
                              >
                                X
                              </Button>
                            )}
                          </div>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addAssessment({ link: "" })}
                  >
                    Add link
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="contentLinks"
            render={() => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormLabel className="mt-2 font-semibold">
                    Create a video or voice recording. Our client needs to check
                    your English proficiency. Paste the link here.
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {contentFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={profileDetailsForm.control}
                      name={`contentLinks.${index}.link`} // Updated to match schema
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-2">
                            {/* Input for Content Link */}
                            <FormControl className="w-full">
                              <Input
                                {...field}
                                type="url"
                                placeholder="Paste your video or voice recording link here"
                                className="w-full border p-2 rounded border-gray-800"
                              />
                            </FormControl>

                            {/* Conditional Delete Button - Hide if only one item */}
                            {contentFields.length > 1 && (
                              <Button
                                variant="ghost"
                                type="button"
                                onClick={() => removeContent(index)}
                              >
                                X
                              </Button>
                            )}
                          </div>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addContent({ link: "" })}
                  >
                    Add link
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="workSamples"
            render={() => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormLabel className="mt-2 font-semibold">
                    Link to Work Sample
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {workSampleFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={profileDetailsForm.control}
                      name={`workSamples.${index}.link`} // Updated to match new schema
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-2">
                            <FormControl className="w-full">
                              <Input
                                {...field}
                                type="url"
                                placeholder="Enter work sample link"
                                className="w-full border p-2 rounded border-gray-800"
                              />
                            </FormControl>

                            {workSampleFields.length > 1 && (
                              <Button
                                variant="ghost"
                                type="button"
                                onClick={() => removeWorkSample(index)}
                              >
                                X
                              </Button>
                            )}
                          </div>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Add More Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addWorkSample({ link: "" })}
                  >
                    Add another
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="internetProvider"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormMessage className="text-red-500" />
                  <FormLabel className="mt-2 font-semibold">
                    Internet Provider
                  </FormLabel>
                  <span className="text-xs">
                    What is your Internet Service Provider? Please include the
                    plan.
                  </span>
                </div>
                <FormControl className="col-span-4 xl:col-span-3">
                  <Input
                    {...field}
                    type="text"
                    placeholder="Internet provider and plan"
                    className="w-full border p-2 rounded border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="numberOfMonitors"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormMessage className="text-red-500" />
                  <FormLabel className="mt-2 font-semibold">
                    Number of Monitors
                  </FormLabel>
                </div>
                <FormControl className="col-span-4 xl:col-span-3">
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter number of monitors"
                    className="w-full border p-2 rounded border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="numberOfExperience"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormMessage className="text-red-500" />
                  <FormLabel className="mt-2 font-semibold">
                    Years of Work Experience
                  </FormLabel>
                </div>
                <FormControl className="col-span-4 xl:col-span-3">
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter years of experience"
                    className="w-full border p-2 rounded border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="desiredSalary"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormMessage className="text-red-500" />
                  <FormLabel className="mt-2 font-semibold">
                    Desired Salary
                  </FormLabel>
                </div>
                <div className="col-span-4 xl:col-span-3 flex items-center gap-2">
                  <FormField
                    control={profileDetailsForm.control}
                    name="salaryUnit"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-[180px] border-gray-800">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup className="bg-white">
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="yearly">Yearly</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      type="number"
                      placeholder="Enter amount"
                      className="w-full border p-2 rounded border-gray-800"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="contentLinks"
            render={() => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormLabel className="mt-2 font-semibold">
                    Create a video or voice recording. Our client needs to check
                    your English proficiency. Paste the link here.
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {contentFields.map((content, index) => (
                    <FormField
                      key={content.id}
                      control={profileDetailsForm.control}
                      name={`contentLinks.${index}`} // Connects input to validation
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-2">
                            {/* Input for Content Link */}
                            <FormControl className="w-full">
                              <Input
                                {...field}
                                type="url"
                                placeholder="Enter work sample link"
                                className="w-full border p-2 rounded border-gray-800"
                                value={field.value?.link ?? ""} // Ensure value is always a string
                                onChange={
                                  (e) =>
                                    field.onChange({
                                      ...field.value,
                                      link: e.target.value,
                                    }) // Update only 'link'
                                }
                              />
                            </FormControl>

                            {/* Show error message for this specific field */}

                            {/* Conditional Delete Button - Hide if only one item */}
                            {contentFields.length > 1 && (
                              <Button
                                variant="ghost"
                                type="button"
                                onClick={() => removeContent(index)}
                              >
                                X
                              </Button>
                            )}
                          </div>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => addContent({ link: "" })}
                  >
                    Add link
                  </Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="howHear"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  How did you hear about us?
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full border-gray-800">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="bg-white">
                          <SelectItem value="friend">Friend</SelectItem>
                          <SelectItem value="social_media">
                            Social Media
                          </SelectItem>
                          <SelectItem value="job_board">Job Board</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="someoneName"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  <FormMessage className="text-red-500" />
                  Do you know someone working at Access Insurance? Please state
                  the name if you do.
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Number of children"
                    className="col-span-4 xl:col-span-3 border-gray-800"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="bg-deepBlue rounded-lg px-4 py-2 w-full xl:w-[300px] self-end mt-12 mb-20 text-white"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
