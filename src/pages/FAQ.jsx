import React, { useState } from 'react'

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(null)

    const handleIsOpen = (index) => {
        if (index === isOpen) {
            setIsOpen(null)
        } else {

            setIsOpen(index)
        }
    }
    const FAQArray = [
        {
            "question": "Do I need a visa to travel abroad?",
            "answer": "Visa requirements depend on the destination country and your nationality. We assist you with the complete visa guidance and documentation process."
        },
        {
            "question": "What is included in your travel packages?",
            "answer": "Our packages usually include accommodation, sightseeing tours, transfers, and some meals. Flight tickets and personal expenses are generally excluded unless mentioned."
        },
        {
            "question": "Can I customize my trip?",
            "answer": "Yes! We offer fully customizable packages where you can choose destinations, hotels, activities, and duration as per your preference."
        },
        {
            "question": "Do you provide travel insurance?",
            "answer": "Yes, we provide travel insurance options for medical emergencies, trip cancellations, and lost baggage."
        },
        {
            "question": "How can I book a package?",
            "answer": "You can book online through our website, contact our customer support team, or visit our office for personalized assistance."
        },
        {
            "question": "What payment methods do you accept?",
            "answer": "We accept credit/debit cards, UPI, net banking, and cash payments at our office."
        },
        {
            "question": "Is flight booking included?",
            "answer": "Some packages include flights, while others don’t. Please check the package details or ask our support team for clarification."
        },
        {
            "question": "Do you arrange group tours?",
            "answer": "Yes, we organize group tours for families, corporate teams, and students with special discounts."
        },
        {
            "question": "Can I cancel or reschedule my trip?",
            "answer": "Yes, cancellations and rescheduling are possible. Policies vary depending on airlines and hotels, so charges may apply."
        },
        {
            "question": "Do you provide 24/7 customer support during trips?",
            "answer": "Absolutely! Our dedicated helpline is available 24/7 to assist travelers in case of any issues."
        }
    ]

    return (
        <>
            <div className="flex w-full h-fit max-w-[1800px] mx-auto  bg-hash-color-bg ">
                <div className="flex w-full h-fit flex-col items-center container mx-auto pt-6 gap-8 bg-hash-color-bg px-3 pb-5 md:pb-10">

                <h1 className="text-4xl font-bold text-black capitalize text-center">frequently asked questions<span className="text-primary-color text-4xl font-bold">.</span></h1>
                <div className="flex flex-col w-full max-w-[800px] mx-auto h-full gap-6">
                    {
                         FAQArray.map((details, index) => (
                        <div className={`flex flex-row  h-fit bg-white  rounded-[10px] items-start shadow-lg shadow-slate-600/50 gap-3 py-1 `} onClick={() => handleIsOpen(index)}>
                            <div className="flex flex-col flex-1 items-start justify-center py-3 px-10">
                                <p className="capitalize text-black font-normal text-lg md:text-xl">{details.question}</p>
                                <div className={`overflow-hidden transition-all duration-[0.5s] md:max-w-[75%] max-w-[100%] ${isOpen === index ? "md:max-h-[200px] max-h-fit opacity-100 mt-5" : "max-h-0 opacity-0 mt-0"}`}>
                                    <p className="capitalize text-third-color md:text-lg text-base font-normal  ">{details.answer}</p>
                                </div>
                            </div>
                        </div>
                        ))
                    }

                </div>
                </div>
            </div>
        </>
    )
}

export default FAQ
