import { fetchApprovedTrends } from "./fetch-trends.js";

export function generateCreativeScripts() {
  const trends = fetchApprovedTrends();

  const results = trends.map((item) => {
    const emotion = detectEmotion(item.title);
    const script = `🎯 Hook: "${item.title}"\n\n🧠 Angle: ${emotion} boost\n\n🎥 CTA: Remix with a strong ending or POV reaction.`;

    return {
      title: item.title,
      platform: item.platform,
      emotion,
      script,
      url: item.url
    };
  });

  return results;
}

function detectEmotion(text) {
  const t = text.toLowerCase();
  if (t.includes("lonely") || t.includes("mental")) return "empathy";
  if (t.includes("experiment") || t.includes("study")) return "curiosity";
  if (t.includes("habit") || t.includes("brain")) return "dopamine";
  if (t.includes("motivation") || t.includes("focus")) return "confidence";
  return "general intrigue";
}
