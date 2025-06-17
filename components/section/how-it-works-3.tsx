import { Card, CardContent } from "@/components/ui/card";
import { Headphones, ArrowRight, TrendingUp } from "lucide-react";
import LinkButton from "../ui/link-button";

export default function HowItWorks3() {
  return (
    <section id="how-it-works" className="bg-neutralDarker py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-robinsEggBlue">Works</span>
          </h2>
          <p className="text-zinc-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures you're matched with the perfect
            virtual assistant to elevate your business operations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="bg-zinc-800 border-zinc-700 text-center p-8 shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-robinsEggBlue rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-zinc-900">1</span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                Discovery Call
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                We analyze your needs, challenges, and goals to understand
                exactly what support will drive your success.
              </p>

              <div className="pt-4">
                <div className="w-16 h-16 border-2 border-robinsEggBlue rounded-full flex items-center justify-center mx-auto">
                  <Headphones className="w-8 h-8 text-robinsEggBlue" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="bg-zinc-800 border-zinc-700 text-center p-8 shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-robinsEggBlue rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-zinc-900">2</span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                Strategic Matching
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                We pair you with a VA whose skills, experience, and personality
                align perfectly with your business needs.
              </p>

              <div className="pt-4">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-8 h-8 border-2 border-robinsEggBlue rounded-full"></div>
                  <ArrowRight className="w-6 h-6 text-robinsEggBlue" />
                  <div className="w-8 h-8 border-2 border-robinsEggBlue rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="bg-zinc-800 border-zinc-700 text-center p-8 shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-robinsEggBlue rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-zinc-900">3</span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                Ongoing Optimization
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                We continuously refine processes, provide training, and ensure
                your VA delivers exceptional results.
              </p>

              <div className="pt-4">
                <div className="w-16 h-16 border-2 border-robinsEggBlue rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-robinsEggBlue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <LinkButton
            navLink={{
              title: "Start Your Journey",
              url: "/book-a-meeting",
              follow: false,
            }}
            size={"xl"}
            variant={"cta1"}
            icon={() => <ArrowRight className="text-deepZinc w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
}
