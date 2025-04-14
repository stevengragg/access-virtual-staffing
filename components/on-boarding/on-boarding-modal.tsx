"use client";

import { useState } from "react";
import useSWR from "swr";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fetchApi } from "@/services/fetch-api";

interface UserResponse {
  isNewUser: boolean;
  ok: boolean;
}

export const OnboardingModal = () => {
  const { data, mutate } = useSWR<UserResponse>(
    "/user/update-new-user",
    fetchApi
  );
  const [activeStep, setActiveStep] = useState(1);
  const [open, setOpen] = useState(true);

  const isNewUser = data?.isNewUser ?? false;

  const handleNext = () => {
    if (activeStep < 4) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const handleGetStarted = async () => {
    try {
      // Infer the return type of the fetchApi here
      const response = await fetchApi<any>("/user/update-new-user", {
        method: "POST",
      });

      if (response.ok) {
        mutate({ isNewUser: false, ok: true }, false);
        setOpen(false);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  if (!isNewUser || !open) return null;

  return (
    <Dialog defaultOpen={true} modal open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg text-center [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()} // Prevent closing when clicking outside
      >
        <h2 className="text-2xl font-bold text-deepBlue mb-4">
          Welcome to Access Virtual Staffing!
        </h2>

        {/* Step Indicators */}
        <Tabs value={`step${activeStep}`} className="w-full">
          <TabsList className="flex justify-between w-full mb-4">
            {[1, 2, 3, 4].map((step) => (
              <TabsTrigger
                key={step}
                value={`step${step}`}
                className={`w-10 h-10 flex items-center justify-center rounded-full border font-bold transition
                  ${
                    activeStep === step
                      ? "bg-deepBlue text-deepBlue border-deepBlue"
                      : "bg-gray-200 text-zinc border-zinc"
                  }`}
              >
                {step}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Step Content with Animation */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="step1">
              <p className="text-zinc">
                ✅ Update your profile to improve job matches.
              </p>
            </TabsContent>
            <TabsContent value="step2">
              <p className="text-zinc">
                🔍 Search for jobs that match your skills.
              </p>
            </TabsContent>
            <TabsContent value="step3">
              <p className="text-zinc">📩 Apply to jobs with one click.</p>
            </TabsContent>
            <TabsContent value="step4">
              <p className="text-zinc">
                📊 Monitor your applications and get hired!
              </p>
            </TabsContent>
          </motion.div>
        </Tabs>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {activeStep > 1 ? (
            <motion.button
              onClick={handleBack}
              className="bg-zinc text-zinc px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-400 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back
            </motion.button>
          ) : (
            <div /> // Empty div to keep spacing
          )}

          {activeStep < 4 ? (
            <motion.button
              onClick={handleNext}
              className="bg-deepBlue text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              onClick={handleGetStarted}
              className="bg-deepBlue text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
