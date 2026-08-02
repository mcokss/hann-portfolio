"use server";

export type FormState = {
  success: boolean;
  errors: Record<string, string>;
};

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim() || "";

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required.";
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // Server-side submission ready — no external service dependency yet.
  return { success: true, errors: {} };
}
