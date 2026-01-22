import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.jpg";
import LogoText from "../../assets/VestRoll.jpg";

export const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Create an employer or employee account",
            description: "Get started in seconds with a quick, secure signup."
        },
        {
            number: "2",
            title: "Set up your fiat wallet",
            description: "Connect your preferred wallet and enable instant global payments."
        },
        {
            number: "3",
            title: "Add employees and create contracts",
            description: "Build your team, define roles, and set clear agreements effortlessly."
        },
        {
            number: "4",
            title: "Track time and milestones",
            description: "Monitor work progress with accurate timesheets and milestone tracking."
        },
        {
            number: "5",
            title: "Pay or request payment instantly",
            description: "Send or receive funds with one click in traditional currency."
        }
    ];

    return (
        <section className="py-12 md:py-16 px-4">
            <div className="container mx-auto bg-linear-to-b from-purple-50 to-purple-100/50 p-10 w-full rounded-2xl">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex gap-2 items-center">
                        <Image src={Logo} width={50} height={50} alt="VestRoll logo" />
                        <Image src={LogoText} alt="Vestroll Logo" width={80} height={80} />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 text-gray-900">
                        How it works
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl">
                        A fast, intuitive workflow that helps you set up your team, track work, and manage payments effortlessly.
                    </p>
                </div>

                {/* Steps Container with Purple Background */}
                <div className="rounded-3xl p-8 md:p-10 relative">
                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 mb-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.number}
                                className="flex flex-col items-start"
                            >
                                {/* Number */}
                                <div className="text-lg font-bold text-gray-900 mb-3">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-end">
                        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium">
                            Create Account
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};