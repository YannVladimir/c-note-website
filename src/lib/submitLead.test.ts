import { describe, expect, it, vi, afterEach } from "vitest";
import { submitLead } from "./submitLead";

describe("submitLead", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("posts the payload as JSON to the formsubmit.co endpoint", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 200 }));
    global.fetch = fetchMock as unknown as typeof fetch;

    await submitLead({ name: "Ada", email: "ada@example.com" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://formsubmit.co/ajax/contact@c-note.rw",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ name: "Ada", email: "ada@example.com" }),
      }),
    );
  });

  it("resolves without throwing when the request succeeds", async () => {
    global.fetch = vi
      .fn()
      .mockResolvedValue(new Response("{}", { status: 200 })) as unknown as typeof fetch;

    await expect(submitLead({ name: "Ada" })).resolves.toBeUndefined();
  });

  it("throws when formsubmit.co returns a non-2xx response", async () => {
    // Regression test: the original contact/free-consultation handlers
    // awaited this fetch but never checked response.ok, so a failed
    // submission still showed the user a "message sent" confirmation.
    global.fetch = vi
      .fn()
      .mockResolvedValue(new Response("{}", { status: 500 })) as unknown as typeof fetch;

    await expect(submitLead({ name: "Ada" })).rejects.toThrow("500");
  });

  it("propagates a network failure instead of swallowing it", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("network down")) as unknown as typeof fetch;

    await expect(submitLead({ name: "Ada" })).rejects.toThrow("network down");
  });
});
