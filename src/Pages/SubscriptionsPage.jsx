import React, { useState } from "react";
import ChoosePlan from "../Components/ChoosePlan";
import StartFree from "../Components/StartFree";


function SubscriptionsPage() {

  const [selectedPlan, setSelectedPlan] = useState('Standard');

  const plans = [
    {
      name: 'Basic',
      price: '$9.99/Month',
      popular: false,
      features: {
        content: 'Access to a wide selection of movies and shows, including some new releases.',
        devices: 'Watch on one device simultaneously',
        freeTrial: '7 Days',
        cancelAnytime: 'Yes',
        hdr: 'No',
        dolbyAtmos: 'No',
        adFree: 'No',
        offlineViewing: 'No',
        familySharing: 'No'
      }
    },
    {
      name: 'Standard',
      price: '$12.99/Month',
      popular: true,
      features: {
        content: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
        devices: 'Watch on Two device simultaneously',
        freeTrial: '7 Days',
        cancelAnytime: 'Yes',
        hdr: 'Yes',
        dolbyAtmos: 'Yes',
        adFree: 'Yes',
        offlineViewing: 'Yes, for select titles',
        familySharing: 'Yes, up to 5 family members'
      }
    },
    {
      name: 'Premium',
      price: '$14.99/Month',
      popular: false,
      features: {
        content: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
        devices: 'Watch on Four device simultaneously',
        freeTrial: '7 Days',
        cancelAnytime: 'Yes',
        hdr: 'Yes',
        dolbyAtmos: 'Yes',
        adFree: 'Yes',
        offlineViewing: 'Yes, for all titles',
        familySharing: 'Yes, up to 6 family members'
      }
    }
  ];

  const featureLabels = [
    { key: 'price', label: 'Price' },
    { key: 'content', label: 'Content' },
    { key: 'devices', label: 'Devices' },
    { key: 'freeTrial', label: 'Free Trial' },
    { key: 'cancelAnytime', label: 'Cancel Anytime' },
    { key: 'hdr', label: 'HDR' },
    { key: 'dolbyAtmos', label: 'Dolby Atmos' },
    { key: 'adFree', label: 'Ad - Free' },
    { key: 'offlineViewing', label: 'Offline Viewing' },
    { key: 'familySharing', label: 'Family Sharing' }
  ];

  const currentPlan = plans.find(plan => plan.name === selectedPlan);




  return (
    <>
      <div className="pt-30 bg-primary">
        <ChoosePlan/>

















    <div className="min-h-screen bg-primary text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          Compare our plans and find the right one for you
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. 
          Compare the features of each plan and choose the one that's right for you.
        </p>
      </div>

      {/* Mobile Layout with Tab Buttons */}
      <div className="md:hidden max-w-md mx-auto">
        {/* Tab Buttons */}
        <div className="flex gap-3 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                selectedPlan === plan.name
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Selected Plan Card */}
        {currentPlan && (
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-semibold">{currentPlan.name}</h3>
              {currentPlan.popular && (
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  Popular
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Price</p>
                <p className="text-lg font-medium">{currentPlan.price}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Content</p>
                <p className="text-sm">{currentPlan.features.content}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Devices</p>
                <p className="text-sm">{currentPlan.features.devices}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Free Trial</p>
                <p className="text-sm">{currentPlan.features.freeTrial}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Cancel Anytime</p>
                <p className="text-sm">{currentPlan.features.cancelAnytime}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">HDR</p>
                <p className="text-sm">{currentPlan.features.hdr}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Dolby Atmos</p>
                <p className="text-sm">{currentPlan.features.dolbyAtmos}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Ad - Free</p>
                <p className="text-sm">{currentPlan.features.adFree}</p>
              </div>

              <div className="pb-4 border-b border-zinc-800">
                <p className="text-gray-400 text-sm mb-1">Offline Viewing</p>
                <p className="text-sm">{currentPlan.features.offlineViewing}</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Family Sharing</p>
                <p className="text-sm">{currentPlan.features.familySharing}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout (Comparison Table) */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
          <div className="grid grid-cols-4">
            {/* Header Row */}
            <div className="p-6 border-b border-r border-zinc-800">
              <p className="text-lg font-semibold text-gray-300">Features</p>
            </div>
            {plans.map((plan) => (
              <div key={plan.name} className="p-6 border-b border-zinc-800 border-r last:border-r-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.popular && (
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Feature Rows */}
            {featureLabels.map((feature, idx) => (
              <React.Fragment key={feature.key}>
                <div className={`p-6 border-r border-zinc-800 ${idx < featureLabels.length - 1 ? 'border-b' : ''}`}>
                  <p className="text-gray-300">{feature.label}</p>
                </div>
                {plans.map((plan, planIdx) => (
                  <div 
                    key={`${plan.name}-${feature.key}`} 
                    className={`p-6 border-r last:border-r-0 border-zinc-800 ${idx < featureLabels.length - 1 ? 'border-b' : ''}`}
                  >
                    <p className="text-gray-200 text-sm">
                      {feature.key === 'price' ? plan.price : plan.features[feature.key]}
                    </p>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  {/* ); */}
{/* }; */}
























        <StartFree/>
      </div>
    </>
  );
}

export default SubscriptionsPage;
