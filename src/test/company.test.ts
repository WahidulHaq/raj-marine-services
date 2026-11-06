import { describe, expect, it } from "vitest";
import { clientNames, company } from "@/lib/company";

describe("company contact and client details", () => {
  it("includes the two additional click-to-call numbers", () => {
    expect(company.mobileContacts).toContainEqual({
      label: "+91 98690 46209",
      href: "tel:+919869046209",
    });
    expect(company.mobileContacts).toContainEqual({
      label: "+91 98676 57221",
      href: "tel:+919867657221",
    });
  });

  it("lists all seven clients provided by the company", () => {
    expect(clientNames).toEqual([
      "The Great Eastern Shipping Co. Ltd.",
      "Greatship (India) Limited.",
      "A. S. Moloobhoy Pvt. Ltd.",
      "Garware Offshore Services Limited.",
      "Hexxon Group.",
      "Global Offshore Services Ltd.",
      "VirgoTech Offshore LLP.",
    ]);
  });
});