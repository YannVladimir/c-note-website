const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/contact@c-note.rw";

/**
 * Posts a lead (contact message or consultation request) to formsubmit.co.
 * Throws on a network failure or a non-2xx response, so callers can tell a
 * real failure apart from success instead of always showing "sent".
 */
export async function submitLead(payload: Record<string, unknown>): Promise<void> {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`formsubmit.co responded with ${response.status}`);
  }
}
