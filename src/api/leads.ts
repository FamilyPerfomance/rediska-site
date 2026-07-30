import { landingConfig, referralCode } from "../config";

type LeadPayload = {
  phone: string;
  source: string;
};

const submitLead = async ({ phone, source }: LeadPayload) => {
  const response = await fetch(landingConfig().leadsApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      phone,
      source,
      pageUrl: window.location.href,
      ref: referralCode(),
    }),
  });

  if (!response.ok) {
    throw new Error("Lead submit failed");
  }

  return response.json();
};

export { submitLead };
