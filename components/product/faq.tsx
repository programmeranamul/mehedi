import {
  ChevronDown,
  
} from "lucide-react";


const frequentlyAsked = [
  [
    "Is the Samsung Galaxy A15 official?",
    "Yes. This is an official product with a 1-year manufacturer warranty.",
  ],
  [
    "Does it support fast charging?",
    "Yes, it supports 25W fast charging with a compatible charger.",
  ],
  [
    "How long does delivery take?",
    "Delivery usually takes 1–3 days inside Dhaka and 3–5 days elsewhere.",
  ],
  [
    "Can I return the phone?",
    "You can request a return within 7 days according to our return policy.",
  ],
];


export default function FAQ(){
  return(
    <>
    <div id="questions" className="scroll-mt-20 py-5 md:py-8">
        <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Helpful answers about the Samsung Galaxy A15.
        </p>
        <div className="mt-4 divide-y rounded-xl border bg-card">
          {frequentlyAsked.map(([question, answer]) => (
            <details key={question} className="group p-4">
              <summary className="cursor-pointer list-none pr-6 text-sm font-medium marker:hidden">
                {question}
                <ChevronDown className="float-right size-4 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </>
  )
}