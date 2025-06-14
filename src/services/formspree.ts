export async function submitForm(formData: Record<string, string>) {
  const formId = import.meta.env.VITE_PUBLIC_FORMSPREE_ID;

  if (!formId) {
    throw new Error("Missing Formspree form ID. Check VITE_FORMSPREE_ID in .env file.");
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (!response.ok || result?.errors?.length) {
    throw new Error(result?.errors?.[0]?.message || "Form submission failed");
  }

  return result;
}
