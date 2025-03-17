"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useFieldArray } from "react-hook-form";
import Image from "next/image";

import { EditProfileSchema } from "@/services/user/update-profile";
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
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
import { useToast } from "@/hooks/use-toast";

interface EditProfile {}

export default function EditProfileForm({}: EditProfile) {
  const profileDetailsForm = useProfileDetails();
  const { user } = useUser();
  const { toast } = useToast();

  // const [hasError, setHasError] = useState(false);
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
  const onSubmit = async (data: EditProfileSchema) => {
    console.log(data);
    try {
      const response = await fetch("/api/profile/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive",
        });
      }

      const result = await response.json();
      console.log("Profile updated successfully:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...profileDetailsForm}>
      <form
        onSubmit={profileDetailsForm.handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto p-4"
      >
        <div className="mb-5">
          <Card className="w-full max-w-2xl  border border-zinc-400">
            <CardHeader className="font-semibold text-gray-700">
              <Link
                href="/app/settings/general"
                className="underline hover:text-primaryBlue"
              >
                Update General Details
              </Link>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="flex flex-col gap-4">
                <Label className="font-semibold text-sm text-zinc-700">
                  Account Profile Image
                </Label>
                <Image
                  src={user?.picture || ""}
                  alt="Avatar"
                  className="size-20 rounded-full object-cover"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <Label className="font-semibold text-sm text-zinc-700">
                  Full Name
                </Label>
                <p>{user?.name}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-4 gap-12">
          <FormField
            control={profileDetailsForm.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  Job Title <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your Job Title"
                      className=" border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="whyFit"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  Tell us about your experiences and what makes you best fit for
                  this position. <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Tell us about your experiences and what makes you best fit for this position"
                      className="w-full border p-2 rounded h-[150px] border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="whatStrengths"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  What are your strengths? Where do you excel or, at the very
                  least, perform well? <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="What are your strengths? Where do you excel or, at the very least, perform well?"
                      className="w-full border p-2 rounded h-[150px] border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="whatNeedImprovement"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  What areas do you think you will need improvement?{" "}
                  <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="What areas do you think you will need improvement?"
                      className="w-full border p-2 rounded h-[150px] border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  Address <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Address"
                      className="w-full border p-2 rounded border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
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
                    Contact Numbers <span className="text-red-800">*</span>
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3 space-y-3">
                  {phoneFields.map((phone, index) => (
                    <div
                      key={phone.id}
                      className="flex  items-start gap-2 w-full"
                    >
                      {/* Dropdown for Phone Type */}
                      <FormField
                        control={profileDetailsForm.control}
                        name={`phone.${index}.type`}
                        render={({ field }) => (
                          <FormItem className="flex-none">
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-[180px] border-zinc-400">
                                  <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup className="bg-white">
                                    <SelectLabel>Phone Type</SelectLabel>
                                    <SelectItem value="mobile">
                                      Mobile
                                    </SelectItem>
                                    <SelectItem value="work">Work</SelectItem>
                                    <SelectItem value="home">Home</SelectItem>
                                    <SelectItem value="main">Main</SelectItem>
                                    <SelectItem value="work-fax">
                                      Work Fax
                                    </SelectItem>
                                    <SelectItem value="private-fax">
                                      Private Fax
                                    </SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage className="text-red-800" />
                          </FormItem>
                        )}
                      />

                      {/* Input for Phone Number */}
                      <FormField
                        control={profileDetailsForm.control}
                        name={`phone.${index}.number`}
                        render={({ field }) => (
                          <FormItem className="w-full flex-grow flex flex-col items-start">
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                placeholder="Enter contact number"
                                className="w-full border p-2 rounded border-zinc-400"
                              />
                            </FormControl>
                            <FormMessage className="text-red-800" />
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
                    className="mt-2"
                    onClick={() => addPhone({ type: "", number: "" })}
                  >
                    Add another
                  </Button>
                  {/* <FormMessage className="text-red-800" /> */}
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="emailAddress"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1">
                  <FormLabel className="mt-2 font-semibold">
                    Email Address <span className="text-red-800">*</span>
                  </FormLabel>
                </div>

                <div className="col-span-4 xl:col-span-3">
                  {emailFields.map((email, index) => (
                    <div key={email.id} className="flex items-start gap-2">
                      {/* Dropdown for Email Type */}
                      <FormField
                        control={profileDetailsForm.control}
                        name={`emailAddress.${index}.type`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-[180px] border-zinc-400">
                                  <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup className="bg-white">
                                    <SelectLabel>Email Type</SelectLabel>
                                    <SelectItem value="work">Work</SelectItem>
                                    <SelectItem value="home">Home</SelectItem>

                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage className="text-red-800" />
                          </FormItem>
                        )}
                      />

                      {/* Input for Phone Number */}
                      <FormField
                        control={profileDetailsForm.control}
                        name={`emailAddress.${index}.address`}
                        render={({ field }) => (
                          <FormItem className="w-full flex flex-col items-start">
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                placeholder="Enter email address"
                                className="w-full border p-2 rounded border-zinc-400"
                              />
                            </FormControl>
                            <FormMessage className="text-red-800" />
                          </FormItem>
                        )}
                      />

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
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={() => addEmail({ type: "", address: "" })}
                  >
                    Add another
                  </Button>
                  {/* <FormMessage className="text-red-800" /> */}
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
                  Date of Birth <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <DatePicker
                      date={field.value}
                      onChange={field.onChange}
                      placeholder="Select your date of birth"
                      className="w-full border-gray-700"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="skypeId"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  Skype ID <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl className="col-span-4 xl:col-span-3 space-y-3">
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter Skype ID"
                      className="w-full border p-2 rounded border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="hasPaypal"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  We pay via PayPal. Do you have a PayPal account?
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={""}>
                      <SelectTrigger className="border-zinc-400">
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
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="numberOfChildren"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  How many children do you have?{" "}
                  <span className="text-red-800">*</span>
                </FormLabel>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Number of children"
                      type="number"
                      className="col-span-4 xl:col-span-3 border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
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

                <div className="col-span-4 xl:col-span-3">
                  {assessmentFields.map((test, index) => (
                    <FormField
                      key={test.id}
                      control={profileDetailsForm.control}
                      name={`assessmentTests.${index}.link`} // Updated to match new schema
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center gap-2">
                            {/* Input for Assessment Test Link */}
                            <div className="w-full">
                              <FormControl>
                                <Input
                                  {...field}
                                  type="url"
                                  placeholder="Paste your assessment test link here"
                                  className="w-full border p-2 rounded border-zinc-400"
                                />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                            </div>
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
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={() => addAssessment({ link: "" })}
                  >
                    Add another
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
                    your English proficiency. Paste the link here.{" "}
                    <span className="text-red-800">*</span>
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
                            <div className="w-full">
                              <FormControl>
                                <Input
                                  {...field}
                                  type="url"
                                  placeholder="Paste your video or voice recording link here"
                                  className="w-full border p-2 rounded border-zinc-400"
                                />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                            </div>
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
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Always Visible Add Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={() => addContent({ link: "" })}
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
                  <FormLabel className="mt-2 font-semibold">
                    Internet Provider <span className="text-red-800">*</span>
                  </FormLabel>
                  <span className="text-xs">
                    What is your Internet Service Provider? Please include the
                    plan.
                  </span>
                </div>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Internet provider and plan"
                      className="w-full border p-2 rounded border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="numberOfMonitors"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormLabel className="mt-2 font-semibold">
                    Number of Monitors <span className="text-red-800">*</span>
                  </FormLabel>
                </div>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter number of monitors"
                      className="w-full border p-2 rounded border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={profileDetailsForm.control}
            name="numberOfExperience"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
                  <FormLabel className="mt-2 font-semibold">
                    Years of Work Experience{" "}
                    <span className="text-red-800">*</span>
                  </FormLabel>
                </div>
                <div className="col-span-4 xl:col-span-3">
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      placeholder="Enter years of experience"
                      className="w-full border p-2 rounded border-zinc-400"
                    />
                  </FormControl>
                  <FormMessage className="text-red-800" />
                </div>
              </FormItem>
            )}
          />
          <div className="col-span-4 grid grid-cols-4 gap-2">
            <div className="col-span-4 xl:col-span-1 font-semibold flex flex-col">
              <FormLabel className="mt-2 font-semibold">
                Desired Salary <span className="text-red-800">*</span>
              </FormLabel>
            </div>
            <div className="col-span-4 xl:col-span-3 flex items-center gap-2 w-full">
              <FormField
                control={profileDetailsForm.control}
                name="salaryUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px] border-zinc-400">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectGroup className="bg-white">
                            <SelectItem value="hourly">PHP</SelectItem>
                            <SelectItem value="monthly">COP</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-800" />
                  </FormItem>
                )}
              />
              <FormField
                control={profileDetailsForm.control}
                name="desiredSalary"
                render={({ field }) => (
                  <FormItem className="w-full ">
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                        type="number"
                        placeholder="Enter amount"
                        className="w-full border p-2 rounded border-zinc-400"
                      />
                    </FormControl>
                    <FormMessage className="text-red-800" />
                  </FormItem>
                )}
              />
            </div>
          </div>

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
                            <div className="w-full">
                              <FormControl>
                                <Input
                                  {...field}
                                  type="url"
                                  placeholder="Enter work sample link"
                                  className="w-full border p-2 rounded border-zinc-400"
                                />
                              </FormControl>
                              <FormMessage className="text-red-800" />
                            </div>

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
                        </FormItem>
                      )}
                    />
                  ))}

                  {/* Add More Button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
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
                      <SelectTrigger className="w-full border-zinc-400">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="bg-white">
                          <SelectLabel>Select an option</SelectLabel>
                          <SelectItem value="online_jobs_ph">
                            OnlineJobsPH
                          </SelectItem>
                          <SelectItem value="craigslist">Craigslist</SelectItem>
                          <SelectItem value="indeed">Indeed</SelectItem>
                          <SelectItem value="linkedin">LinkedIn</SelectItem>
                          <SelectItem value="jora">Jora</SelectItem>
                          <SelectItem value="fb_group">FB Group</SelectItem>
                          <SelectItem value="company_referral">
                            Company Referral
                          </SelectItem>
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
            name="referrer"
            render={({ field }) => (
              <FormItem className="col-span-4 grid grid-cols-4 gap-2">
                <FormLabel className="mt-2 col-span-4 xl:col-span-1 font-semibold">
                  Do you know someone working at Access Insurance? Please state
                  the name if you do
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter referrer"
                    className="col-span-4 xl:col-span-3 border-zinc-400"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
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
