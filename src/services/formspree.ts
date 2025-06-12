export async function submitForm(formData: Record<string, string>, formId: string) {
  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit form");
  }

  return response.json();
}