export const currentAffairsTracker = {
  lastUpdated: "2026-06-11",
  updateCycle: "Monthly",
  categories: [
    { name: "Rajasthan Budget", required: true, items: ["Budget highlights", "education/IT announcements", "district projects", "schemes and departments"] },
    { name: "Schemes", required: true, items: ["launch date", "department", "beneficiary", "portal/app", "exam keyword"] },
    { name: "Appointments", required: true, items: ["Governor", "CM", "Chief Secretary", "Commission/Board heads", "important resignations"] },
    { name: "Awards and Sports", required: true, items: ["player-sport", "award-field", "district/state association", "national events"] },
    { name: "Digital Governance", required: true, items: ["Rajasthan portals", "Jan Aadhaar linkage", "e-governance services", "DigiLocker/UMANG/MyGov"] },
    { name: "AI / Cyber / IT", required: true, items: ["IndiaAI", "CERT-In advisories", "cyber hygiene", "data privacy", "AI terminology"] },
  ],
};

export function getCurrentAffairsStatus(today = new Date()) {
  const last = new Date(`${currentAffairsTracker.lastUpdated}T00:00:00+05:30`);
  const diffDays = Math.floor((today.getTime() - last.getTime()) / 86400000);
  return {
    ...currentAffairsTracker,
    diffDays,
    updateNeeded: diffDays > 31,
    nextAction: diffDays > 31 ? "Update the month-wise CA module before using it in mocks." : "Current affairs module is inside the monthly update window.",
  };
}
