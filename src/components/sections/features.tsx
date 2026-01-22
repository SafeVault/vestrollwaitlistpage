import React from "react";
import Image from "next/image";
import Feature1 from "../../assets/feature1.png";
import Feature2 from "../../assets/feature2.png";
import Feature3 from "../../assets/feature3.png";
import Feature4 from "../../assets/feature4.png";
import Feature5 from "../../assets/feature5.png";
import Feature6 from "../../assets/feature6.png";

export const Features = () => {
  const features = [
    { 
      id: 1, 
      image: Feature1, 
      title: "Multiple Payment Types",
      description: "Pay team members the way that works best for your workflow.",
      items: ["Fixed Rate", "Pay-As-You-Go", "Milestone Payments"],
      imagePosition: "center"
    },
    { 
      id: 2, 
      image: Feature2, 
      title: "Timesheet Management",
      description: "Employees log their hours, employers track productivity all synced with payroll for accurate payment.",
      imagePosition: "right"
    },
    { 
      id: 3, 
      image: Feature3, 
      title: "Smart Payroll Management",
      description: "Add employees to your payroll, automate payment cycles, and track all disbursements with complete transparency.",
      imagePosition: "center"
    },
    { 
      id: 4, 
      image: Feature4, 
      title: "Employee Portal",
      description: "Employees can:",
      items: ["Receive payments", "Track earnings", "Access their contracts", "Monitor their timesheets"],
      imagePosition: "right"
    },
    { 
      id: 5, 
      image: Feature5, 
      title: "Create & Manage Contracts",
      description: "Set up clear agreements for work, deliverables, milestones, and rates. Everything stored securely for future reference.",
      imagePosition: "center"
    },
    { 
      id: 6, 
      image: Feature6, 
      title: "Stay Compliant Without the Stress",
      description: "Automatically handle payroll taxes and pension remittances while you focus on what matters.",
      imagePosition: "center"
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50">
      <div className="container mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 leading-tight">
            A Complete Suite for Payroll and<br />Workforce Management
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From crypto/fiat payments to timesheets and contracts, every feature is built to simplify how you manage your team.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[2000px] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" bg-linear-to-br from-purple-100 via-purple-50 to-purple-200 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 min-h-[500px]"
            >
              {/* Title and Description */}
              <div className="mb-6">
                <h3 className="text-xl md:text-4xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                {feature.items && (
                  <ul className="mt-3 space-y-2 font-bold">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm md:text-base text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-purple-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Image */}
              <div className="relative w-full h-[200px] md:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className={`object-contain p-4 ${
                    feature.imagePosition === "right" 
                      ? "object-right" 
                      : "object-center"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};